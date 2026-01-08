# flatten_gear_sets.py
# Script to flatten nested gearSets structure in gearData.js and output as flat keys for recommendations
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

# Replace JS-style comments and trailing commas for eval safety
gear_sets_str = re.sub(r'//.*', '', gear_sets_str)
gear_sets_str = re.sub(r',\s*}', '}', gear_sets_str)
gear_sets_str = re.sub(r',\s*]', ']', gear_sets_str)

# Convert JS object keys to quoted keys for Python eval
gear_sets_str = re.sub(r'(\w+):', r'"\1":', gear_sets_str)

# Replace JS true/false/null with Python equivalents
gear_sets_str = gear_sets_str.replace('true', 'True').replace('false', 'False').replace('null', 'None')

# Evaluate to Python dict
try:
    gear_sets = eval(gear_sets_str, {"__builtins__": None}, {})
except Exception as e:
    print('Failed to parse gearSets:', e)
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
