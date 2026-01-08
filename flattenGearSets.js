// flattenGearSets.js
// Script to flatten nested gearSets structure in gearData.js and output as flat keys for recommendations

const fs = require('fs');
const path = require('path');

const gearDataPath = path.join(__dirname, 'gearData.js');
const outputPath = path.join(__dirname, 'gearData_flat.js');

// Read the original gearData.js
let fileContent = fs.readFileSync(gearDataPath, 'utf8');

// Extract the gearSets object
const gearSetsMatch = fileContent.match(/gearSets:\s*({[\s\S]*?})\s*,\s*\/\/ Gear recommendations/);
if (!gearSetsMatch) {
    console.error('Could not find gearSets object in gearData.js');
    process.exit(1);
}

const gearSetsObjStr = gearSetsMatch[1];

// Evaluate the gearSets object safely
let gearSets;
try {
    // eslint-disable-next-line no-eval
    gearSets = eval('(' + gearSetsObjStr + ')');
} catch (e) {
    console.error('Failed to parse gearSets:', e);
    process.exit(1);
}

// Flatten the nested structure
const flat = {};
for (const classId in gearSets) {
    for (const role in gearSets[classId]) {
        for (const setKey in gearSets[classId][role]) {
            // Compose flat key: classId_role_setKey
            const flatKey = `${classId}_${role}_${setKey}`;
            flat[flatKey] = gearSets[classId][role][setKey];
        }
    }
}

// Output as a recommendations object
const output = 'const recommendations = ' + JSON.stringify(flat, null, 4) + ';
\nmodule.exports = recommendations;\n';

fs.writeFileSync(outputPath, output, 'utf8');
console.log('Flattened gearSets written to gearData_flat.js');
