# flatten_gear_sets_v2.py
# More robust script to flatten nested gearSets structure in gearData.js and output as flat keys for recommendations
import re
import json

input_path = 'gearData.js'
output_path = 'gearData_flat.json'

with open(input_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the gearSets object (greedy match until next top-level key)
match = re.search(r'gearSets:\s*({[\s\S]*?})\s*,\s*// Gear recommendations', content)
if not match:
    print('Could not find gearSets object in gearData.js')
    exit(1)

gear_sets_str = match.group(1)

# Remove JS comments
gear_sets_str = re.sub(r'//.*', '', gear_sets_str)
# Remove newlines for easier parsing
gear_sets_str = gear_sets_str.replace('\n', ' ')
# Remove trailing commas before closing braces/brackets
gear_sets_str = re.sub(r',\s*([}\]])', r'\1', gear_sets_str)
# Quote unquoted keys (only at object level)
gear_sets_str = re.sub(r'([,{\[])(\s*)([a-zA-Z0-9_]+)(\s*):', r'\1\2"\3"\4:', gear_sets_str)
# Convert single quotes to double quotes
gear_sets_str = gear_sets_str.replace("'", '"')
# Replace JS true/false/null with Python equivalents
gear_sets_str = gear_sets_str.replace('true', 'true').replace('false', 'false').replace('null', 'null')

# Try to parse as JSON
try:
    gear_sets = json.loads(gear_sets_str)
except Exception as e:
    print('Failed to parse gearSets as JSON:', e)
    exit(1)

# Flatten the nested structure
flat = {}
for class_id, roles in gear_sets.items():
    for role, sets in roles.items():
        for set_key, set_val in sets.items():
            flat_key = f"{class_id}_{role}_{set_key}"
            flat[flat_key] = set_val

# Output as JSON for easy import
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(flat, f, indent=4, ensure_ascii=False)

print(f'Flattened gearSets written to {output_path}')
