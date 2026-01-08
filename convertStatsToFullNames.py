import re
import glob

# Mapping of abbreviations to full stat names
STAT_MAP = {
    'STR': 'Strength',
    'TOU': 'Toughness',
    'INI': 'Initiative',
    'WOU': 'Wounds',
    'WP': 'Willpower',
    'INT': 'Intelligence',
    'WS': 'Weapon Skill',
    'BS': 'Ballistic Skill',
    'Armor': 'Armor',
    'Block': 'Block',
    'Parry': 'Parry',
    'Dodge': 'Dodge',
    'Disrupt': 'Disrupt',
    'Melee Crit': 'Melee Critical Chance',
    'Magic Crit': 'Magic Critical Chance',
    'Healing Crit': 'Healing Critical Chance',
    'Crit Reduction': 'Reduced chance to be Critically Hit',
    'Parry Reduction': 'Reduced chance to be Parried',
    'Dodge Reduction': 'Reduced chance to be Dodged',
    'Disrupt Reduction': 'Reduced chance to be Disrupted',
    'Auto Attack Haste': 'Auto Attack Haste',
    'HP Every 4s': 'HP Every 4s',
    'AP Per Second': 'AP Per Second',
    'Morale': 'Morale',
    'Melee Power': 'Melee Power',
    'Magic Power': 'Magic Power',
    'Healing Power': 'Healing Power',
    'SRes': 'Spirit Resist',
    'ERes': 'Elemental Resist',
    'CRes': 'Corporeal Resist',
}

# Regex to match stat patterns like 'STR: 10', '+1% Block', etc.
STAT_PATTERN = re.compile(r'(\b(' + '|'.join(re.escape(k) for k in STAT_MAP.keys()) + r')\b)(:|\s|,|\|)', re.IGNORECASE)

# Files to process (all *GearData.js files)
files = glob.glob('*GearData.js')

for filename in files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    def replacer(match):
        abbr = match.group(2)
        full = STAT_MAP.get(abbr, abbr)
        return full + match.group(3)

    new_content = STAT_PATTERN.sub(replacer, content)

    # Only overwrite if changed
    if new_content != content:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {filename}")
    else:
        print(f"No changes: {filename}")

print("Done. All stat abbreviations replaced with full names.")
