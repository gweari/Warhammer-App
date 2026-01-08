// Warhammer Online RoR Gear Recommendation Database
// Updated class names
const gearDatabase = {
    // Classes available in the game
    classes: [
        // Empire
        { id: 'knight', name: 'Knight of the Blazing Sun', faction: 'Empire', type: 'Melee Tank', roles: ['Tank', 'DPS'] },
        { id: 'witch_hunter', name: 'Witch Hunter', faction: 'Empire', type: 'Melee DPS', roles: ['DPS'] },
        { id: 'bright_wizard', name: 'Bright Wizard', faction: 'Empire', type: 'Ranged DPS', roles: ['DPS'] },
        { id: 'priest_sigmar', name: 'Warrior Priest', faction: 'Empire', type: 'Healer', roles: ['Healer', 'DPS'] },
        
        // Dwarf
        { id: 'ironbreaker', name: 'Ironbreaker', faction: 'Dwarf', type: 'Melee Tank', roles: ['Tank', 'DPS'] },
        { id: 'slayer', name: 'Slayer', faction: 'Dwarf', type: 'Melee DPS', roles: ['DPS'] },
        { id: 'engineer', name: 'Engineer', faction: 'Dwarf', type: 'Ranged DPS', roles: ['DPS'] },
        { id: 'runepriest', name: 'Runepriest', faction: 'Dwarf', type: 'Healer', roles: ['Healer', 'DPS'] },
        
        // High Elf
        { id: 'lion_guard', name: 'White Lion', faction: 'High Elf', type: 'Melee Tank', roles: ['DPS'] },
        { id: 'shadow_warrior', name: 'Shadow Warrior', faction: 'High Elf', type: 'Melee DPS', roles: ['DPS'] },
        { id: 'mage', name: 'Archmage', faction: 'High Elf', type: 'Ranged DPS', roles: ['Healer', 'DPS'] },
        { id: 'warrior_priest', name: 'Swordmaster', faction: 'High Elf', type: 'Melee Tank', roles: ['Tank', 'DPS'] },
        
        
        // Chaos
        { id: 'chaos_knight', name: 'Chosen', faction: 'Chaos', type: 'Melee Tank', roles: ['Tank', 'DPS'] },
        { id: 'marauder', name: 'Marauder', faction: 'Chaos', type: 'Melee DPS', roles: ['DPS'] },
        { id: 'magus', name: 'Magus', faction: 'Chaos', type: 'Ranged DPS', roles: ['DPS'] },
        { id: 'zealot', name: 'Zealot', faction: 'Chaos', type: 'Healer', roles: ['Healer', 'DPS'] },
        
        // Dark Elf
        { id: 'corsair', name: 'Black Guard', faction: 'Dark Elf', type: 'Melee Tank', roles: ['Tank', 'DPS'] },
        { id: 'witch_elf', name: 'Witch Elf', faction: 'Dark Elf', type: 'Melee DPS', roles: ['DPS'] },
        { id: 'dark_elf_ranged', name: 'Sorceress', faction: 'Dark Elf', type: 'Ranged DPS', roles: ['DPS'] },
        { id: 'disciple_khaine', name: 'Disciple of Khaine', faction: 'Dark Elf', type: 'Healer', roles: ['Healer', 'DPS'] },
             
        
        // Greenskin
        { id: 'squig_herder', name: 'Squig Herder', faction: 'Greenskin', type: 'Ranged DPS', roles: ['DPS'] },
        { id: 'black_orc', name: 'Black Orc', faction: 'Greenskin', type: 'Melee Tank', roles: ['Tank', 'DPS'] },
        { id: 'choppa', name: 'Choppa', faction: 'Greenskin', type: 'Melee DPS', roles: ['DPS'] },
        { id: 'shaman_goblin', name: 'Shaman', faction: 'Greenskin', type: 'Healer', roles: ['Healer', 'DPS'] }
    ],

    // Level ranges for gear recommendations
    levelRanges: [
        { id: '1-10', label: 'Level 1-10', min: 1, max: 10 },
        { id: '11-20', label: 'Level 11-20', min: 11, max: 20 },
        { id: '21-30', label: 'Level 21-30', min: 21, max: 30 },
        { id: '31-40', label: 'Level 31-40 (Cap)', min: 31, max: 40 }
    ],

    // Renown ranks
    renownRanks: [
        { id: 'r1', label: 'Renown Rank 1-10', min: 1, max: 10 },
        { id: 'r2', label: 'Renown Rank 11-20', min: 11, max: 20 },
        { id: 'r3', label: 'Renown Rank 21-30', min: 21, max: 30 },
        { id: 'r4', label: 'Renown Rank 31-40', min: 31, max: 40 },
        { id: 'r5', label: 'Renown Rank 41-50', min: 41, max: 50 },
        { id: 'r6', label: 'Renown Rank 51-60', min: 51, max: 60 },
        { id: 'r7', label: 'Renown Rank 61-70', min: 61, max: 70 },
        { id: 'r8', label: 'Renown Rank 71-80', min: 71, max: 80 }
    ],

    // Gear sets by class for direct lookup (fix for Chosen and others)
    gearSets: {
        chaos_knight: {
            tank: {
                decimator: { setName: "Decimator Set", pieces: [ { slot: "body", name: "Decimator Carapace", level: 8, renown: 8, armor: 165, str: 4, tou: 8, ini: 4, wounds: 4, bonus: "+1% Block" }, { slot: "boots", name: "Decimator Darkboots", level: 8, renown: 8, armor: 132, str: 2, tou: 6, ws: 4, wounds: 6 }, { slot: "belt", name: "Decimator Deathgirdle", level: 7, renown: 7, str: 2, tou: 3, wounds: 4, bonus: "+1% Reduced chance to be Critically Hit", sres: 33, eres: 20, cres: 20 } ], setBonuses: [ { pieces: 2, bonus: "+18 Toughness" }, { pieces: 3, bonus: "+22 Wounds" } ], totalStats: "Armor: 297 | STR: 8 | TOU: 17 | WS: 4 | INI: 4 | WOU: 10 | SRes: 33 | ERes: 20 | CRes: 20" },
                braggart: { setName: "Set of the Braggart", pieces: [ { slot: "body", name: "Braggart Carapace", level: 8, renown: 8, armor: 165, str: 6, wounds: 8, ws: 5, bonus: "+1% Reduced chance to be Parried" }, { slot: "boots", name: "Braggart Darkboots", level: 7, renown: 7, armor: 132, str: 6, tou: 2, ws: 4, wounds: 6 }, { slot: "belt", name: "Braggart Deathgirdle", level: 7, renown: 7, str: 4, tou: 2, wounds: 3, bonus: "+1% Melee Critical Chance", sres: 23, eres: 25, cres: 25 } ], setBonuses: [ { pieces: 2, bonus: "+18 Strength" }, { pieces: 3, bonus: "+22 Toughness" } ], totalStats: "Armor: 297 | STR: 16 | TOU: 4 | WS: 12 | WOU: 14 | SRes: 23 | ERes: 25 | CRes: 25" },
                carnage: { setName: "Set of Carnage", pieces: [ { slot: "body", name: "Carnage Carapace", level: 5, armor: 135, str: 4, tou: 7, ini: 5, wounds: 6 }, { slot: "gloves", name: "Carnage Gauntlets", level: 5, armor: 108, str: 4, tou: 4, wounds: 3, ini: 5 }, { slot: "boots", name: "Carnage Darkboots", level: 5, armor: 108, str: 5, tou: 6, ws: 2, wounds: 3 } ], setBonuses: [ { pieces: 2, bonus: "+135 Armor" }, { pieces: 3, bonus: "+20 Weapon Skill" } ], totalStats: "Armor: 351 | STR: 13 | TOU: 17 | WS: 7 | INI: 3 | WOU: 14" },
                // ... (add all other tank sets from chosenGearData.js here, following the same structure)
            },
            dps: {
                // Chosen currently has no unique DPS sets in chosenGearData.js, but this structure is required for logic to work.
                // Add any Chosen DPS sets here in the same format as tank sets if/when they exist.
            }
        }
    },
    // Gear recommendations by class and level tier
    // Format: classId_tierKey: { slot: itemName }
    recommendations: {
       
    },

    // Get gear recommendations based on class, level, renown, and role
    getRecommendations: function(classId, level, renown, role) {
        const allSets = [];
        
        // Search through all recommendations for matching class and role
        for (const key in this.recommendations) {
            const rolePrefix = role ? `${classId}_${role.toLowerCase()}_` : null;
            const classPrefix = `${classId}_`;
            
            if (rolePrefix && key.startsWith(rolePrefix)) {
                allSets.push(this.recommendations[key]);
            } else if (!key.includes('_healer_') && !key.includes('_dps_') && !key.includes('_tank_') && key.startsWith(classPrefix)) {
                allSets.push(this.recommendations[key]);
            }
        }
        
        // Filter: only include sets where ALL pieces meet level AND renown requirements
        const wearableSets = allSets.filter(set => {
            if (!set.pieces || !Array.isArray(set.pieces) || set.pieces.length === 0) return false;
            
            // Check every piece - if ANY piece can't be equipped, reject the whole set
            for (const piece of set.pieces) {
                // If piece has level requirement and player doesn't meet it, reject set
                if (piece.level && piece.level > level) return false;
                // If piece has renown requirement and player doesn't meet it, reject set
                if (piece.renown && piece.renown > renown) return false;
            }
            return true;
        });
        
        // Sort by total stats (sum all numeric stats)
        wearableSets.sort((a, b) => {
            const scoreA = this.calculateTotalStats(a);
            const scoreB = this.calculateTotalStats(b);
            return scoreB - scoreA;
        });
        
        // Return top 3 best sets
        return wearableSets.slice(0, 3);
    },

    // Calculate total numeric stats from all pieces in a set
    calculateTotalStats: function(gearSet) {
        if (!gearSet || !gearSet.pieces || !Array.isArray(gearSet.pieces)) {
            return 0;
        }
        
        let total = 0;
        
        gearSet.pieces.forEach(piece => {
            if (!piece.stats) return;
            
            const stats = piece.stats;
            
            // Extract and sum all numeric values
            const numbers = stats.match(/:\s*(\d+)/g);
            if (numbers) {
                numbers.forEach(num => {
                    const value = parseInt(num.replace(/:\s*/, ''));
                    total += value;
                });
            }
        });
        
        return total;
    },

    // Old calculateSetScore kept for compatibility
    calculateSetScore: function(gearSet, role, level, renown, tier) {
        if (!gearSet || !gearSet.pieces || !Array.isArray(gearSet.pieces)) {
            return 0;
        }
        
        let score = 0;
        const isHealer = role && role.toLowerCase() === 'healer';
        const isDPS = role && role.toLowerCase() === 'dps';
        const isTank = role && role.toLowerCase() === 'tank';
        
        // Calculate average level requirement of the set
        let totalLevel = 0;
        let levelCount = 0;
        gearSet.pieces.forEach(piece => {
            if (piece.level) {
                totalLevel += piece.level;
                levelCount++;
            }
        });
        const avgSetLevel = levelCount > 0 ? totalLevel / levelCount : 0;
        
        // HEAVILY penalize sets far below player's level (underleveled gear)
        const levelDifference = level - avgSetLevel;
        if (levelDifference > 8) {
            score -= levelDifference * 100; // Massive penalty for showing low-level gear
        } else if (levelDifference > 4) {
            score -= levelDifference * 50; // Moderate penalty
        } else if (levelDifference >= 0 && levelDifference <= 4) {
            score += (4 - levelDifference) * 20; // Small bonus for gear at appropriate level
        }
        
        // Determine if this is a PvE set based on set name patterns
        const setName = gearSet.setName || '';
        const isPvESet = setName.includes('Keeper') || 
                         setName.includes('Havoc') || 
                         setName.includes('Tracker') || 
                         setName.includes('Ruin') ||
                         setName.includes('Stalker') ||
                         setName.includes('Genesis') ||
                         setName.includes('Warrant') ||
                         setName.includes('Redeye') ||
                         setName.includes('Sentinel') ||
                         setName.includes('Bloodlord');
        
        // Get the required RR for the current tier
        const tierRRRequirement = {
            'rr8': 8, 'rr16': 16, 'rr26': 26, 'rr35': 35,
            'rr45': 45, 'rr55': 55, 'rr60': 60, 'rr70': 70
        };
        const requiredRR = tierRRRequirement[tier] || 0;
        
        // If player's RR is significantly below tier requirement, favor PvE sets
        if (renown < requiredRR - 2) {
            if (isPvESet) {
                score += 200; // Bonus for PvE sets when undergeared in RR
            } else {
                score -= 200; // Penalty for RvR sets when undergeared
            }
        } else if (renown >= requiredRR) {
            // At or above RR requirement, slightly favor RvR sets (they're usually BiS at cap)
            if (!isPvESet) {
                score += 50;
            }
        }
        
        // Parse stats from pieces
        gearSet.pieces.forEach(piece => {
            if (!piece.stats) return;
            
            const stats = piece.stats;
            
            // Extract numeric values for primary stats
            const wpMatch = stats.match(/WP:\s*(\d+)/i);
            const intMatch = stats.match(/INT:\s*(\d+)/i);
            const strMatch = stats.match(/STR:\s*(\d+)/i);
            const touMatch = stats.match(/TOU:\s*(\d+)/i);
            const wouMatch = stats.match(/WOU:\s*(\d+)/i);
            const iniMatch = stats.match(/INI:\s*(\d+)/i);
            const armorMatch = stats.match(/Armor:\s*(\d+)/i);
            
            // Role-based scoring weights (Main Stat > Wounds > Initiative > Toughness)
            if (isHealer) {
                score += wpMatch ? parseInt(wpMatch[1]) * 4 : 0;      // Willpower (main stat)
                score += wouMatch ? parseInt(wouMatch[1]) * 3 : 0;     // Wounds
                score += iniMatch ? parseInt(iniMatch[1]) * 2.5 : 0;   // Initiative
                score += touMatch ? parseInt(touMatch[1]) * 2 : 0;     // Toughness
                score += armorMatch ? parseInt(armorMatch[1]) * 0.3 : 0;
                
                // Healing-specific bonuses
                if (stats.includes('Healing Crit') || stats.includes('Healing Critical')) score += 50;
                if (stats.includes('Healing Power')) {
                    const healPowerMatch = stats.match(/(\d+)\s*Healing Power/i);
                    score += healPowerMatch ? parseInt(healPowerMatch[1]) * 2 : 0;
                }
                if (stats.includes('AP Per Second')) score += 40;
            } else if (isDPS) {
                score += intMatch ? parseInt(intMatch[1]) * 4 : 0;     // Intelligence (main stat)
                score += strMatch ? parseInt(strMatch[1]) * 4 : 0;     // Strength (main stat)
                score += wpMatch ? parseInt(wpMatch[1]) * 4 : 0;       // Willpower (main stat for casters)
                score += wouMatch ? parseInt(wouMatch[1]) * 3 : 0;     // Wounds
                score += iniMatch ? parseInt(iniMatch[1]) * 2.5 : 0;   // Initiative
                score += touMatch ? parseInt(touMatch[1]) * 2 : 0;     // Toughness
                score += armorMatch ? parseInt(armorMatch[1]) * 0.2 : 0;
                
                // DPS-specific bonuses
                if (stats.includes('Crit') && !stats.includes('Healing Crit')) score += 50;
                if (stats.includes('AP Per Second')) score += 60;
            } else if (isTank) {
                score += wouMatch ? parseInt(wouMatch[1]) * 4 : 0;     // Wounds (most important for tank)
                score += iniMatch ? parseInt(iniMatch[1]) * 3.5 : 0;   // Initiative
                score += touMatch ? parseInt(touMatch[1]) * 3 : 0;     // Toughness
                score += armorMatch ? parseInt(armorMatch[1]) * 0.8 : 0;
                score += strMatch ? parseInt(strMatch[1]) * 1 : 0;     // Strength less important for tanks
                
                // Tank-specific bonuses
                if (stats.includes('Block') || stats.includes('Parry')) score += 60;
                if (stats.includes('Reduce') && stats.includes('Damage')) score += 50;
            }
            
            // Universal valuable stats
            if (stats.includes('Morale')) score += 30;
            if (stats.includes('Disrupt')) score += 25;
            if (stats.includes('Dodge')) score += 20;
        });
        
        // Add bonus for set bonuses quality (heavily weighted)
        if (gearSet.setBonuses && Array.isArray(gearSet.setBonuses)) {
            score += gearSet.setBonuses.length * 150;  // Increased from 40 to 150
            
            // Analyze set bonus quality
            gearSet.setBonuses.forEach(bonus => {
                const bonusText = bonus.bonus.toLowerCase();
                
                // High value bonuses
                if (bonusText.includes('critical') || bonusText.includes('crit')) score += 120;
                if (bonusText.includes('ap per second') || bonusText.includes('action point')) score += 150;
                if (bonusText.includes('healing power')) score += 140;
                if (bonusText.includes('morale')) score += 100;
                
                // Defensive bonuses
                if (bonusText.includes('block') || bonusText.includes('parry') || bonusText.includes('dodge')) score += 100;
                if (bonusText.includes('reduce') && bonusText.includes('damage')) score += 110;
                if (bonusText.includes('wounds') || bonusText.includes('toughness')) score += 90;
                
                // Proc bonuses (Reactionary, Superiority, etc.)
                if (bonusText.includes('on hit') || bonusText.includes('on being hit') || bonusText.includes('on defense')) score += 130;
                if (bonusText.includes('chance to')) score += 110;
            });
            
            // Bonus for set completion
            const maxPieces = Math.max(...gearSet.setBonuses.map(b => b.pieces));
            if (maxPieces >= 6) score += 300;  // Increased from 100
            else if (maxPieces >= 5) score += 200;
            else if (maxPieces >= 4) score += 100;
        }
        
        // Parse and score totalStats if available (heavily weighted)
        if (gearSet.totalStats) {
            const totalStats = gearSet.totalStats;
            
            // Extract totals
            const totalWP = totalStats.match(/WP:\s*(\d+)/i);
            const totalINT = totalStats.match(/INT:\s*(\d+)/i);
            const totalSTR = totalStats.match(/STR:\s*(\d+)/i);
            const totalTOU = totalStats.match(/TOU:\s*(\d+)/i);
            const totalWOU = totalStats.match(/WOU:\s*(\d+)/i);
            const totalINI = totalStats.match(/INI:\s*(\d+)/i);
            const totalArmor = totalStats.match(/Armor:\s*(\d+)/i);
            
            // Apply role-based scoring to totals with high multipliers
            if (isHealer) {
                score += totalWP ? parseInt(totalWP[1]) * 2 : 0;
                score += totalWOU ? parseInt(totalWOU[1]) * 1.5 : 0;
                score += totalINI ? parseInt(totalINI[1]) * 1.2 : 0;
                score += totalTOU ? parseInt(totalTOU[1]) * 1 : 0;
            } else if (isDPS) {
                score += totalINT ? parseInt(totalINT[1]) * 2 : 0;
                score += totalSTR ? parseInt(totalSTR[1]) * 2 : 0;
                score += totalWP ? parseInt(totalWP[1]) * 2 : 0;
                score += totalWOU ? parseInt(totalWOU[1]) * 1.5 : 0;
                score += totalINI ? parseInt(totalINI[1]) * 1.2 : 0;
            } else if (isTank) {
                score += totalWOU ? parseInt(totalWOU[1]) * 2 : 0;
                score += totalINI ? parseInt(totalINI[1]) * 1.8 : 0;
                score += totalTOU ? parseInt(totalTOU[1]) * 1.5 : 0;
                score += totalArmor ? parseInt(totalArmor[1]) * 0.4 : 0;
            }
        }
        
        // Bonus for number of pieces (more complete sets are better)
        score += gearSet.pieces.length * 30;  // Increased from 20
        
        return score;
    },

    // Get class by ID
    getClassById: function(classId) {
        return this.classes.find(c => c.id === classId);
    }
};
