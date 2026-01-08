import re
import os

def extract_bonuses_from_pieces(pieces_text):
    """Extract all percentage bonuses and special stats from pieces"""
    bonuses = []
    
    # Patterns to match
    patterns = [
        r'\+(\d+%\s+[^|]+)',  # Percentage bonuses like +1% Block
        r'\+(\d+\s+HP\s+Every\s+\d+\s*[Ss]econds?)',  # HP regen
        r'\+(\d+\s+AP\s+Per\s+Second)',  # AP regen
        r'\+(\d+\s+Morale\s+Per\s+Second)',  # Morale regen
        r'\+(\d+\s+Morale)',  # Morale bonus
        r'\+(\d+\s+Melee\s+Power)',  # Melee power
        r'\+(\d+\s+Magic\s+Power)',  # Magic power
        r'\+(\d+\s+Healing\s+Power)',  # Healing power
    ]
    
    for pattern in patterns:
        matches = re.findall(pattern, pieces_text, re.IGNORECASE)
        for match in matches:
            bonus = f'+{match}'
            if bonus not in bonuses:
                bonuses.append(bonus)
    
    return bonuses

def update_total_stats(file_path):
    """Update totalStats in a gear data file to include percentage bonuses"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all set definitions
    set_pattern = r"(\s+)'([^']+)':\s*\{[^}]*?setName:[^}]*?pieces:\s*\[(.*?)\],.*?totalStats:\s*'([^']*?)'"
    
    modified_content = content
    changes_made = 0
    
    for match in re.finditer(set_pattern, content, re.DOTALL):
        indent = match.group(1)
        set_key = match.group(2)
        pieces_text = match.group(3)
        current_total_stats = match.group(4)
        
        # Extract bonuses from pieces
        bonuses = extract_bonuses_from_pieces(pieces_text)
        
        if bonuses:
            # Check if totalStats already has these bonuses
            has_bonuses = any(bonus.replace('+', '') in current_total_stats for bonus in bonuses)
            
            if not has_bonuses:
                # Build new totalStats
                # Find where to insert (before resistances or at end)
                if ' | SRes:' in current_total_stats or ' | ERes:' in current_total_stats or ' | CRes:' in current_total_stats:
                    # Insert before resistances
                    resistance_match = re.search(r'(\s*\|\s*[SEC]Res?:.*?)$', current_total_stats)
                    if resistance_match:
                        base_stats = current_total_stats[:resistance_match.start()]
                        resistance_stats = resistance_match.group(1)
                        new_total_stats = base_stats + ' | ' + ' | '.join(bonuses) + resistance_stats
                    else:
                        new_total_stats = current_total_stats + ' | ' + ' | '.join(bonuses)
                else:
                    # Append at end
                    new_total_stats = current_total_stats + ' | ' + ' | '.join(bonuses)
                
                # Replace in content
                old_line = f"totalStats: '{current_total_stats}'"
                new_line = f"totalStats: '{new_total_stats}'"
                modified_content = modified_content.replace(old_line, new_line, 1)
                changes_made += 1
                print(f"  Updated {set_key}")
    
    if changes_made > 0:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(modified_content)
        print(f"✓ {os.path.basename(file_path)}: {changes_made} sets updated")
        return True
    else:
        print(f"  {os.path.basename(file_path)}: No changes needed")
        return False

# Get all gear data files
gear_files = [
    'shamanGearData.js',
    'zealotGearData.js',
    'witchHunterGearData.js',
    'witchElfGearData.js',
    'whiteLionGearData.js',
    'warriorPriestGearData.js',
    'swordmasterGearData.js',
    'squigHerderGearData.js',
    'sorceressGearData.js',
    'slayerGearData.js',
    'shadowWarriorGearData.js',
    'runepriestGearData.js',
    'marauderGearData.js',
    'magusGearData.js',
    'knightGearData.js',
    'ironbreakerGearData.js',
    'engineerGearData.js',
    'discipleOfKhaineGearData.js',
    'choppaGearData.js',
    'brightWizardGearData.js',
    'blackOrcGearData.js',
    'blackGuardGearData.js',
    'archmageGearData.js'
]

base_path = r'c:\Users\nemec\Desktop\Warhammer App'

print("Updating totalStats for all gear files...")
print("=" * 60)

updated_files = 0
for gear_file in gear_files:
    file_path = os.path.join(base_path, gear_file)
    if os.path.exists(file_path):
        if update_total_stats(file_path):
            updated_files += 1
    else:
        print(f"  {gear_file}: File not found")

print("=" * 60)
print(f"Complete! Updated {updated_files} files.")
