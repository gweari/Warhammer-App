import re

def extract_bonuses_from_stats(stats_str):
    """Extract percentage bonuses and special stats from a stats string"""
    bonuses = []
    
    # Look for percentage bonuses like +1% Block, +2% Magic Crit, etc.
    percent_pattern = r'\+(\d+%\s+[^|]+?)(?=\s*\||$)'
    matches = re.findall(percent_pattern, stats_str)
    for match in matches:
        bonus = f'+{match.strip()}'
        if bonus not in bonuses:
            bonuses.append(bonus)
    
    # Look for HP regen
    hp_pattern = r'\+(\d+\s+HP\s+Every\s+\d+s?)'
    matches = re.findall(hp_pattern, stats_str, re.IGNORECASE)
    for match in matches:
        bonus = f'+{match}'
        if bonus not in bonuses:
            bonuses.append(bonus)
    
    # Look for AP regen
    ap_pattern = r'\+(\d+\s+AP\s+Per\s+Second)'
    matches = re.findall(ap_pattern, stats_str, re.IGNORECASE)
    for match in matches:
        bonus = f'+{match}'
        if bonus not in bonuses:
            bonuses.append(bonus)
    
    # Look for Morale
    morale_pattern = r'\+(\d+\s+Morale(?:\s+Per\s+Second)?)'
    matches = re.findall(morale_pattern, stats_str, re.IGNORECASE)
    for match in matches:
        bonus = f'+{match}'
        if bonus not in bonuses:
            bonuses.append(bonus)
    
    # Look for Power bonuses
    power_pattern = r'\+(\d+\s+(?:Melee|Magic|Healing)\s+Power)'
    matches = re.findall(power_pattern, stats_str, re.IGNORECASE)
    for match in matches:
        bonus = f'+{match}'
        if bonus not in bonuses:
            bonuses.append(bonus)
    
    return bonuses

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    i = 0
    changes = 0
    
    while i < len(lines):
        line = lines[i]
        new_lines.append(line)
        
        # Check if this is a totalStats line
        if 'totalStats:' in line and not line.strip().startswith('//'):
            # Get the current totalStats value
            match = re.search(r"totalStats:\s*'([^']*)'", line)
            if match:
                current_stats = match.group(1)
                
                # Look back to find the pieces array for this set
                pieces_start = -1
                pieces_end = -1
                
                # Search backwards for pieces: [
                for j in range(i-1, max(0, i-50), -1):
                    if 'pieces: [' in lines[j]:
                        pieces_start = j
                        break
                
                if pieces_start >= 0:
                    # Find the end of pieces array
                    bracket_count = 0
                    for j in range(pieces_start, i):
                        bracket_count += lines[j].count('[') - lines[j].count(']')
                        if bracket_count == 0 and j > pieces_start:
                            pieces_end = j
                            break
                    
                    if pieces_end > pieces_start:
                        # Extract all bonuses from pieces
                        pieces_text = ''.join(lines[pieces_start:pieces_end+1])
                        all_bonuses = []
                        
                        # Find all stats strings in pieces
                        stats_matches = re.findall(r"stats:\s*'([^']*)'", pieces_text)
                        for stats_str in stats_matches:
                            bonuses = extract_bonuses_from_stats(stats_str)
                            for bonus in bonuses:
                                if bonus not in all_bonuses:
                                    all_bonuses.append(bonus)
                        
                        # Check if bonuses are already in totalStats
                        if all_bonuses:
                            needs_update = False
                            for bonus in all_bonuses:
                                # Check without the + sign
                                bonus_check = bonus.replace('+', '')
                                if bonus_check not in current_stats:
                                    needs_update = True
                                    break
                            
                            if needs_update:
                                # Build new totalStats
                                # Find where to insert (before resistances or at end)
                                if '| SRe:' in current_stats or '| ERe:' in current_stats or '| CRe:' in current_stats:
                                    # Find the resistances part
                                    res_match = re.search(r'(\s*\|\s*(?:\d+\s+)?[SEC]Re:.*?)$', current_stats)
                                    if res_match:
                                        base_stats = current_stats[:res_match.start()]
                                        resistance_stats = res_match.group(1)
                                        new_stats = base_stats + ' | ' + ' | '.join(all_bonuses) + resistance_stats
                                    else:
                                        new_stats = current_stats + ' | ' + ' | '.join(all_bonuses)
                                else:
                                    new_stats = current_stats + ' | ' + ' | '.join(all_bonuses)
                                
                                # Replace the line
                                new_lines[-1] = line.replace(f"'{current_stats}'", f"'{new_stats}'")
                                changes += 1
        
        i += 1
    
    if changes > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"✓ Updated {changes} totalStats entries in shamanGearData.js")
    else:
        print("No changes needed")
    
    return changes

# Run the update
filepath = r'c:\Users\nemec\Desktop\Warhammer App\shamanGearData.js'
changes = process_file(filepath)
print(f"\nComplete! Made {changes} updates.")
