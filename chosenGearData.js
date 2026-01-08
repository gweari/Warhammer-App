// Chosen Gear Data
// This file contains all gear sets for the Chosen (Chaos) class

// Add Chosen gear to the main gearDatabase in the same structure as Shaman (Decimator & Braggart only for test)
if (typeof gearDatabase !== 'undefined' && gearDatabase.recommendations) {
    Object.assign(gearDatabase.recommendations, {
        'chaos_knight_tank_rr8': {
            setName: 'Decimator Set',
            pieces: [
                { slot: 'Body', name: 'Decimator Carapace', stats: 'Armor: 165 | Strength: 4 | Toughness: 8 | Initiative: 4 | Wounds: 4 | +1% Block', level: 8, renown: 8 },
                { slot: 'Boots', name: 'Decimator Darkboots', stats: 'Armor: 132 | Strength: 2 | Toughness: 6 | Weapon Skill: 4 | Wounds: 6', level: 8, renown: 8 },
                { slot: 'Belt', name: 'Decimator Deathgirdle', stats: 'Strength: 2 | Toughness: 3 | Wounds: 4 | +1% Reduced chance to be Critically Hit | Spirit Resist: 33 | Elemental Resist: 20 | Corporeal Resist: 20', level: 7, renown: 7 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+18 Toughness' },
                { pieces: 3, bonus: '+22 Wounds' }
            ],
            totalStats: 'Armor: 297 | Strength: 8 | Toughness: 17 | Weapon Skill: 4 | Initiative: 4 | Wounds: 10 | +1% Block | +1% Reduced chance to be Critically Hit | Spirit Resist: 33 | Elemental Resist: 20 | Corporeal Resist: 20'
        },
        'chaos_knight_dps_rr8': {
            setName: 'Set of the Braggart',
            pieces: [
                { slot: 'Body', name: 'Braggart Carapace', stats: 'Armor: 165 | Strength: 6 | Weapon Skill: 8 | Wounds: 5 | +1% Reduced chance to be Parried', level: 8, renown: 8 },
                { slot: 'Boots', name: 'Braggart Darkboots', stats: 'Armor: 132 | Strength: 6 | Toughness: 2 | Weapon Skill: 4 | Wounds: 6', level: 7, renown: 7 },
                { slot: 'Belt', name: 'Braggart Deathgirdle', stats: 'Strength: 4 | Toughness: 2 | Wounds: 3 | +1% Melee Critical Chance | Spirit Resist: 23 | Elemental Resist: 25 | Corporeal Resist: 25', level: 7, renown: 7 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+18 Strength' },
                { pieces: 3, bonus: '+22 Toughness' }
            ],
            totalStats: 'Armor: 297 | Strength: 16 | Toughness: 4 | Weapon Skill: 12 | Wounds: 14 | +1% Reduced chance to be Parried | +1% Melee Critical Chance | Spirit Resist: 23 | Elemental Resist: 25 | Corporeal Resist: 25'
        },
        'chaos_knight_tank_rr5': {
            setName: 'Set of Carnage',
            pieces: [
                { slot: 'Body', name: 'Carnage Carapace', stats: 'Armor: 135 | Strength: 4 | Toughness: 7 | Initiative: 5 | Wounds: 6', level: 5, renown: 0 },
                { slot: 'Gloves', name: 'Carnage Gauntlets', stats: 'Armor: 108 | Strength: 4 | Toughness: 4 | Initiative: 5 | Wounds: 3', level: 5, renown: 0 },
                { slot: 'Boots', name: 'Carnage Darkboots', stats: 'Armor: 108 | Strength: 5 | Toughness: 6 | Weapon Skill: 2 | Wounds: 3', level: 5, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+135 Armor' },
                { pieces: 3, bonus: '+20 Weapon Skill' }
            ],
            totalStats: 'Armor: 351 | Strength: 13 | Toughness: 17 | Weapon Skill: 7 | Initiative: 3 | Wounds: 14'
        },
        'chaos_knight_dps_rr8_hunter': {
            setName: "Hunter's Set",
            pieces: [
                { slot: 'Body', name: "Hunter's Carapace", stats: 'Armor: 150 | Strength: 8 | Toughness: 4 | Wounds: 5 | +1% Parry', level: 8, renown: 0 },
                { slot: 'Gloves', name: "Hunter's Gauntlets", stats: 'Armor: 120 | Toughness: 8 | Weapon Skill: 5 | Wounds: 4', level: 7, renown: 0 },
                { slot: 'Boots', name: "Hunter's Darkboots", stats: 'Armor: 120 | Strength: 5 | Toughness: 5 | Weapon Skill: 3 | Wounds: 4', level: 7, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+17 Initiative' },
                { pieces: 3, bonus: '+2% Melee Critical Chance' }
            ],
            totalStats: 'Armor: 390 | Strength: 13 | Toughness: 17 | Weapon Skill: 8 | Wounds: 13 | +1% Parry'
        },
        'chaos_knight_tank_rr8_protector': {
            setName: "Protector's Set",
            pieces: [
                { slot: 'Body', name: "Protector's Carapace", stats: 'Armor: 150 | Strength: 6 | Toughness: 8 | Weapon Skill: 2 | Wounds: 7', level: 8, renown: 0 },
                { slot: 'Boots', name: "Protector's Darkboots", stats: 'Armor: 120 | Toughness: 7 | Initiative: 6 | Wounds: 4', level: 7, renown: 0 },
                { slot: 'Helm', name: "Protector's Skullcase", stats: 'Armor: 135 | Strength: 4 | Toughness: 7 | Weapon Skill: 3 | Wounds: 5 | +4 Hit Points every 4s', level: 7, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+2% Parry' },
                { pieces: 3, bonus: '+2% Reduced chance to be Critically Hit' }
            ],
            totalStats: 'Armor: 405 | Strength: 10 | Toughness: 22 | Weapon Skill: 5 | Initiative: 4 | Wounds: 18 | +4 Hit Points every 4s'
        },
        'chaos_knight_tank_rr17': {
            setName: 'Obliterator Set',
            pieces: [
                { slot: 'Body', name: 'Obliterator Carapace', stats: 'Armor: 315 | Strength: 6 | Toughness: 15 | Wounds: 8 | +2% Block', level: 17, renown: 17 },
                { slot: 'Gloves', name: 'Obliterator Gauntlets', stats: 'Armor: 252 | Strength: 8 | Toughness: 12 | Initiative: 7 | Wounds: 9', level: 16, renown: 16 },
                { slot: 'Boots', name: 'Obliterator Darkboots', stats: 'Armor: 252 | Strength: 5 | Toughness: 9 | Weapon Skill: 14 | Wounds: 8', level: 16, renown: 15 },
                { slot: 'Helm', name: 'Obliterator Skullcase', stats: 'Armor: 285 | Strength: 6 | Toughness: 10 | Initiative: 8 | Wounds: 8 | +1% Reduced chance to be Critically Hit', level: 17, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+32 Toughness' },
                { pieces: 3, bonus: '+38 Wounds' },
                { pieces: 4, bonus: '+2% Block' }
            ],
            totalStats: 'Armor: 1104 | Strength: 25 | Toughness: 46 | Weapon Skill: 14 | Initiative: 22 | Wounds: 33 | +2% Block | +1% Reduced chance to be Critically Hit'
        },
        'chaos_knight_dps_rr17': {
            setName: 'Set of the Challenger',
            pieces: [
                { slot: 'Body', name: 'Challenger Carapace', stats: 'Armor: 315 | Strength: 15 | Toughness: 6 | Initiative: 9 | Wounds: 5 | +2% Parry', level: 17, renown: 17 },
                { slot: 'Gloves', name: 'Challenger Gauntlets', stats: 'Armor: 252 | Strength: 14 | Toughness: 7 | Initiative: 8 | Wounds: 7', level: 16, renown: 16 },
                { slot: 'Boots', name: 'Challenger Darkboots', stats: 'Armor: 252 | Strength: 12 | Toughness: 6 | Weapon Skill: 8 | Wounds: 10', level: 16, renown: 15 },
                { slot: 'Shoulders', name: 'Challenger Shoulderguard', stats: 'Armor: 285 | Strength: 6 | Toughness: 9 | Initiative: 8 | Wounds: 9 | +1% Melee Critical Chance', level: 17, renown: 15 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+32 Strength' },
                { pieces: 3, bonus: '+38 Wounds' },
                { pieces: 4, bonus: '+2% Melee Critical Chance' }
            ],
            totalStats: 'Armor: 1104 | Strength: 47 | Toughness: 28 | Weapon Skill: 8 | Initiative: 25 | Wounds: 31 | +2% Parry | +1% Melee Critical Chance'
        },
        'chaos_knight_tank_rr16': {
            setName: 'Set of Havoc',
            pieces: [
                { slot: 'Body', name: 'Havoc Carapace', stats: 'Armor: 285 | Strength: 5 | Toughness: 12 | Initiative: 9 | Wounds: 3 | +2% Disrupt', level: 16, renown: 0 },
                { slot: 'Gloves', name: 'Havoc Gauntlets', stats: 'Armor: 228 | Strength: 14 | Toughness: 7 | Initiative: 4 | Wounds: 6', level: 13, renown: 0 },
                { slot: 'Boots', name: 'Havoc Darkboots', stats: 'Armor: 228 | Toughness: 10 | Weapon Skill: 3 | Wounds: 8 | +1% Reduced chance to be Critically Hit', level: 13, renown: 0 },
                { slot: 'Shoulders', name: 'Havoc Shoulderguard', stats: 'Armor: 258 | Strength: 8 | Toughness: 9 | Initiative: 8 | Wounds: 3', level: 16, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+285 Armor' },
                { pieces: 3, bonus: '+35 Toughness' },
                { pieces: 4, bonus: '+2% Reduced chance to be Critically Hit' }
            ],
            totalStats: 'Armor: 999 | Strength: 27 | Toughness: 38 | Weapon Skill: 15 | Initiative: 6 | Wounds: 31 | +2% Disrupt | +1% Reduced chance to be Critically Hit'
        },
        'chaos_knight_dps_rr17_tracker': {
            setName: "Tracker's Set",
            pieces: [
                { slot: 'Body', name: "Tracker's Carapace", stats: 'Armor: 300 | Strength: 8 | Toughness: 16 | Weapon Skill: 6 | Wounds: 13', level: 17, renown: 0 },
                { slot: 'Gloves', name: "Tracker's Gauntlets", stats: 'Armor: 240 | Toughness: 12 | Weapon Skill: 10 | Initiative: 5 | Wounds: 5', level: 15, renown: 0 },
                { slot: 'Boots', name: "Tracker's Darkboots", stats: 'Armor: 240 | Strength: 10 | Toughness: 10 | Initiative: 8 | Wounds: 4', level: 13, renown: 0 },
                { slot: 'Shoulders', name: "Tracker's Shoulderguard", stats: 'Armor: 270 | Strength: 12 | Toughness: 10 | Wounds: 10 | +1% Parry', level: 16, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+31 Initiative' },
                { pieces: 3, bonus: '+20 Hit Points every 4s' },
                { pieces: 4, bonus: '+2% Melee Critical Chance' }
            ],
            totalStats: 'Armor: 1050 | Strength: 30 | Toughness: 48 | Weapon Skill: 16 | Initiative: 9 | Wounds: 36 | +1% Parry'
        },
        'chaos_knight_dps_rr17_keeper': {
            setName: "Keeper's Set",
            pieces: [
                { slot: 'Body', name: "Keeper's Carapace", stats: 'Armor: 300 | Strength: 10 | Toughness: 16 | Wounds: 11 | +2 Morale', level: 17, renown: 0 },
                { slot: 'Gloves', name: "Keeper's Gauntlets", stats: 'Armor: 240 | Strength: 8 | Toughness: 13 | Weapon Skill: 7 | Wounds: 4', level: 17, renown: 0 },
                { slot: 'Boots', name: "Keeper's Darkboots", stats: 'Armor: 240 | Toughness: 8 | Weapon Skill: 7 | Initiative: 13 | Wounds: 4', level: 17, renown: 0 },
                { slot: 'Helm', name: "Keeper's Skullcase", stats: 'Armor: 270 | Strength: 15 | Initiative: 15 | Wounds: 8', level: 17, renown: 0 },
                { slot: 'Shoulders', name: "Keeper's Shoulderguards", stats: 'Armor: 270 | Strength: 13 | Toughness: 15 | +1% Melee Critical Chance', level: 17, renown: 0 }
            ],
            setBonuses: [
                { pieces: 3, bonus: '+37 Strength' },
                { pieces: 4, bonus: '+2% Parry' },
                { pieces: 5, bonus: 'Boost I - On Hit: 10% chance to increase your critical hit rate by 3% for 9 seconds' }
            ],
            totalStats: 'Armor: 1320 | Strength: 46 | Toughness: 36 | Weapon Skill: 14 | Initiative: 16 | Wounds: 39 | +1% Melee Critical Chance | +2 Morale'
        },
        'chaos_knight_tank_rr29': {
            setName: 'Devastator Set',
            pieces: [
                { slot: 'Boots', name: 'Devastator Darkboots', stats: 'Armor: 396 | Strength: 6 | Toughness: 11 | Initiative: 9 | Wounds: 20', level: 26, renown: 26 },
                { slot: 'Gloves', name: 'Devastator Gauntlets', stats: 'Armor: 421 | Strength: 7 | Toughness: 19 | Wounds: 12 | +2% Reduction in being Critically Hit', level: 27, renown: 27 },
                { slot: 'Shoulders', name: 'Devastator Shoulderguards', stats: 'Armor: 514 | Strength: 15 | Toughness: 23 | Wounds: 9 | +1% Block', level: 28, renown: 28 },
                { slot: 'Helm', name: 'Devastator Skullcase', stats: 'Armor: 488 | Strength: 9 | Toughness: 25 | Initiative: 13 | Wounds: 10', level: 29, renown: 29 },
                { slot: 'Body', name: 'Devastator Carapace', stats: 'Armor: 571 | Strength: 16 | Toughness: 26 | Initiative: 9 | +40 HP Every 4 Seconds', level: 29, renown: 29 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+47 Toughness' },
                { pieces: 3, bonus: '+240 Corporeal Resistance' },
                { pieces: 4, bonus: 'On Defense: 25% chance to increase Parry, Evade and Disrupt by 10% for 10 seconds' },
                { pieces: 5, bonus: '+47 Wounds' }
            ],
            totalStats: 'Armor: 2390 | Strength: 41 | Toughness: 104 | Initiative: 40 | Wounds: 54 | +1% Block | +2% Reduction in being Critically Hit | +40 HP Every 4 Seconds'
        },
        'chaos_knight_dps_rr29': {
            setName: 'Duelist Set',
            pieces: [
                { slot: 'Boots', name: 'Darkboots of the Duelist', stats: 'Armor: 396 | Strength: 11 | Toughness: 8 | Initiative: 7 | Wounds: 20', level: 26, renown: 26 },
                { slot: 'Gloves', name: 'Gauntlets of the Duelist', stats: 'Armor: 421 | Strength: 12 | Initiative: 7 | Wounds: 19 | +2% Melee Critical Chance', level: 27, renown: 27 },
                { slot: 'Shoulders', name: 'Shoulderguards of the Duelist', stats: 'Armor: 514 | Strength: 17 | Initiative: 15 | Wounds: 15 | +1% Parry', level: 28, renown: 28 },
                { slot: 'Helm', name: 'Skullcase of the Duelist', stats: 'Armor: 488 | Strength: 9 | Toughness: 25 | Initiative: 13 | Wounds: 10', level: 29, renown: 29 },
                { slot: 'Body', name: 'Carapace of the Duelist', stats: 'Armor: 571 | Strength: 16 | Toughness: 16 | Initiative: 19 | +40 HP Every 4 Seconds', level: 29, renown: 29 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+47 Strength' },
                { pieces: 3, bonus: '+240 Corporeal Resistance' },
                { pieces: 4, bonus: 'Aggravation - On Hit: 10% Chance to Taunt Target' },
                { pieces: 5, bonus: '+4% Melee Critical Chance' }
            ],
            totalStats: 'Armor: 2390 | Strength: 129 | Toughness: 49 | Initiative: 49 | Wounds: 61 | +1% Parry | +2% Melee Critical Chance | +40 HP Every 4 Seconds'
        },
        'chaos_knight_tank_rr25': {
            setName: 'Mayhem Set',
            pieces: [
                { slot: 'Boots', name: 'Darkboots of Mayhem', stats: 'Armor: 324 | Toughness: 17 | Initiative: 7 | Weapon Skill: 6 | Wounds: 7', level: 22, renown: 0 },
                { slot: 'Gloves', name: 'Gauntlets of Mayhem', stats: 'Armor: 336 | Toughness: 15 | Initiative: 10 | Weapon Skill: 6 | +2% Reduction in being Critically Hit', level: 23, renown: 0 },
                { slot: 'Shoulders', name: 'Shoulderguards of Mayhem', stats: 'Armor: 392 | Toughness: 18 | Initiative: 7 | Weapon Skill: 11 | +1% Parry', level: 24, renown: 0 },
                { slot: 'Helm', name: 'Skullcase of Mayhem', stats: 'Armor: 390 | Strength: 2 | Toughness: 25 | Initiative: 8 | Weapon Skill: 10 | Wounds: 8', level: 25, renown: 0 },
                { slot: 'Body', name: 'Carapace of Mayhem', stats: 'Armor: 436 | Toughness: 20 | Initiative: 7 | Weapon Skill: 13 | +32 HP Every 4 Seconds', level: 24, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+37 Initiative' },
                { pieces: 3, bonus: '+192 Corporeal Resistance' },
                { pieces: 4, bonus: '+37 Toughness' },
                { pieces: 5, bonus: 'On Being Healed: 10% Chance to recover an additional 95 health' }
            ],
            totalStats: 'Armor: 1878 | Strength: 40 | Toughness: 95 | Initiative: 9 | Weapon Skill: 14 | Wounds: 32 | +1% Parry | +2% Reduction in being Critically Hit | +32 HP Every 4 Seconds'
        },
        'chaos_knight_dps_rr30': {
            setName: 'Stalker Set',
            pieces: [
                { slot: 'Boots', name: "Stalker's Darkboots", stats: 'Armor: 396 | Toughness: 12 | Weapon Skill: 4 | Wounds: 7 | +2% Dodge', level: 26, renown: 0 },
                { slot: 'Gloves', name: "Stalker's Gauntlets", stats: 'Armor: 421 | Toughness: 23 | Weapon Skill: 5 | Wounds: 8 | +1% Melee Critical Chance', level: 26, renown: 0 },
                { slot: 'Shoulders', name: "Stalker's Shoulderguards", stats: 'Armor: 514 | Strength: 7 | Toughness: 18 | Initiative: 11 | Weapon Skill: 5', level: 28, renown: 0 },
                { slot: 'Body', name: "Stalker's Carapace", stats: 'Armor: 571 | Strength: 7 | Toughness: 19 | Initiative: 12 | +2% Disrupt', level: 30, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+34 Strength' },
                { pieces: 3, bonus: '+2 Morale Per Second' },
                { pieces: 4, bonus: '+5% Melee Critical Chance' }
            ],
            totalStats: 'Armor: 1902 | Strength: 21 | Toughness: 72 | Initiative: 7 | Weapon Skill: 15 | Wounds: 23 | +2% Dodge | +1% Melee Critical Chance | +2% Disrupt'
        },
        'chaos_knight_tank_rr39': {
            setName: 'Annihilator Set',
            pieces: [
                { slot: 'Boots', name: 'Annihilator Darkboots', stats: 'Armor: 549 | Strength: 21 | Toughness: 10 | Initiative: 13 | +2% Dodge', level: 35, renown: 35 },
                { slot: 'Gloves', name: 'Annihilator Gauntlets', stats: 'Armor: 549 | Strength: 9 | Toughness: 11 | Initiative: 14 | Wounds: 23', level: 35, renown: 36 },
                { slot: 'Shoulders', name: 'Annihilator Shoulderguards', stats: 'Armor: 636 | Toughness: 12 | Initiative: 18 | Wounds: 25 | +1% Reduction in being Critically Hit', level: 35, renown: 37 },
                { slot: 'Helm', name: 'Annihilator Skullcase', stats: 'Armor: 636 | Strength: 15 | Toughness: 13 | Wounds: 25 | +2% Disrupt', level: 35, renown: 38 },
                { slot: 'Body', name: 'Annihilator Carapace', stats: 'Armor: 708 | Strength: 32 | Toughness: 23 | Initiative: 15 | +60 HP Every 4 Seconds', level: 35, renown: 39 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+53 Toughness' },
                { pieces: 3, bonus: '+290 Elemental Resistance' },
                { pieces: 4, bonus: '+1 Path of Discord Abilities' },
                { pieces: 5, bonus: '+5% Parry' }
            ],
            totalStats: 'Armor: 3084 | Strength: 105 | Toughness: 69 | Initiative: 45 | Wounds: 60 | +2% Dodge | +1% Reduction in being Critically Hit | +2% Disrupt | +60 HP Every 4 Seconds'
        },
        'chaos_knight_dps_rr39': {
            setName: 'Mercenary Set',
            pieces: [
                { slot: 'Boots', name: 'Darkboots of the Mercenary', stats: 'Armor: 549 | Strength: 13 | Toughness: 10 | Initiative: 21 | +2% Dodge', level: 35, renown: 35 },
                { slot: 'Gloves', name: 'Gauntlets of the Mercenary', stats: 'Armor: 549 | Strength: 9 | Toughness: 11 | Initiative: 14 | Wounds: 23', level: 35, renown: 36 },
                { slot: 'Shoulders', name: 'Shoulderguards of the Mercenary', stats: 'Armor: 636 | Strength: 18 | Toughness: 12 | Initiative: 23 | +3% Reduced Chance to be Parried', level: 35, renown: 37 },
                { slot: 'Helm', name: 'Skullcase of the Mercenary', stats: 'Armor: 636 | Strength: 15 | Toughness: 13 | Wounds: 25 | +2% Disrupt', level: 35, renown: 38 },
                { slot: 'Body', name: 'Carapace of the Mercenary', stats: 'Armor: 708 | Strength: 30 | Toughness: 12 | Initiative: 17 | +3 AP Per Second', level: 35, renown: 39 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+53 Strength' },
                { pieces: 3, bonus: '+290 Elemental Resistance' },
                { pieces: 4, bonus: '+1 to Path of Dread Abilities' },
                { pieces: 5, bonus: '+5% Melee Critical Chance' }
            ],
            totalStats: 'Armor: 3078 | Strength: 78 | Toughness: 58 | Initiative: 55 | Wounds: 75 | +2% Dodge | +3% Reduced Chance to be Parried | +2% Disrupt | +3 AP Per Second'
        },
        'chaos_knight_tank_rr45': {
            setName: 'Conqueror Set',
            pieces: [
                { slot: 'Boots', name: 'Conqueror Darkboots', stats: 'Armor: 588 | Toughness: 16 | Initiative: 24 | Weapon Skill: 10 | +2% Block', level: 40, renown: 40 },
                { slot: 'Gloves', name: 'Conqueror Gauntlets', stats: 'Armor: 588 | Toughness: 15 | Weapon Skill: 8 | Wounds: 25 | +2% Parry', level: 40, renown: 41 },
                { slot: 'Belt', name: 'Conqueror Deathgirdle', stats: 'Strength: 24 | Toughness: 18 | Initiative: 12 | Weapon Skill: 6 | Spirit Resist: 83 | Elemental Resist: 77 | Corporeal Resist: 83', level: 40, renown: 42 },
                { slot: 'Shoulders', name: 'Conqueror Shoulderguards', stats: 'Armor: 676 | Toughness: 29 | Initiative: 12 | Weapon Skill: 16 | +2% Reduced Armor Penetration', level: 40, renown: 43 },
                { slot: 'Helm', name: 'Conqueror Skullcase', stats: 'Armor: 676 | Strength: 17 | Toughness: 30 | Initiative: 10 | +2% Disrupt', level: 40, renown: 44 },
                { slot: 'Body', name: 'Conqueror Carapace', stats: 'Armor: 765 | Toughness: 33 | Initiative: 13 | Weapon Skill: 19 | +3 AP Per Second', level: 40, renown: 45 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+57 Toughness' },
                { pieces: 3, bonus: '+63 Wounds' },
                { pieces: 4, bonus: '+5% Reduction in being Critically Hit' },
                { pieces: 5, bonus: 'Preservation - On Being Hit: 10% chance to increase Wounds by 100 for 20 seconds' },
                { pieces: 6, bonus: '+5% Block' }
            ],
            totalStats: 'Armor: 3293 | Strength: 49 | Toughness: 141 | Initiative: 41 | Weapon Skill: 48 | Wounds: 58 | +2% Block | +2% Parry | +2% Reduced Armor Penetration | +2% Disrupt | +3 AP Per Second | Spirit Resist: 83 | Elemental Resist: 77 | Corporeal Resist: 83'
        },
        'chaos_knight_dps_rr45': {
            setName: 'Dominator Set',
            pieces: [
                { slot: 'Boots', name: 'Dominator Darkboots', stats: 'Armor: 588 | Toughness: 10 | Initiative: 14 | Weapon Skill: 16 | +2% Melee Critical Chance', level: 40, renown: 40 },
                { slot: 'Gloves', name: 'Dominator Gauntlets', stats: 'Armor: 588 | Weapon Skill: 8 | Wounds: 15 | +2% Reduced Chance to be Parried', level: 40, renown: 41 },
                { slot: 'Belt', name: 'Dominator Deathgirdle', stats: 'Toughness: 6 | Initiative: 12 | Weapon Skill: 18 | +36 Melee Power | Spirit Resist: 83 | Elemental Resist: 77 | Corporeal Resist: 83', level: 40, renown: 42 },
                { slot: 'Shoulders', name: 'Dominator Shoulderguards', stats: 'Armor: 675 | Initiative: 12 | Weapon Skill: 18 | Wounds: 29 | +10% Auto Attack Haste', level: 40, renown: 43 },
                { slot: 'Helm', name: 'Dominator Skullcase', stats: 'Armor: 675 | Initiative: 10 | Weapon Skill: 30 | Wounds: 17 | +2% Reduced Chance to be Blocked', level: 40, renown: 44 },
                { slot: 'Body', name: 'Dominator Carapace', stats: 'Armor: 765 | Toughness: 19 | Initiative: 13 | Weapon Skill: 33 | +3 AP Per Second', level: 40, renown: 45 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+57 Strength' },
                { pieces: 3, bonus: '+63 Wounds' },
                { pieces: 4, bonus: '+5% Reduced Chance to be Parried' },
                { pieces: 5, bonus: 'Aggrovation - On Hit: 10% Chance to Taunt Target' },
                { pieces: 6, bonus: '+5% Melee Critical Chance' }
            ],
            totalStats: 'Armor: 3291 | Strength: 160 | Toughness: 35 | Initiative: 8 | Weapon Skill: 102 | Wounds: 48 | +2% Melee Critical Chance | +2% Reduced Chance to be Parried | +2% Reduced Chance to be Blocked | +10% Auto Attack Haste | +36 Melee Power | +3 AP Per Second | Spirit Resist: 83 | Elemental Resist: 77 | Corporeal Resist: 83'
        },
        'chaos_knight_tank_rr58': {
            setName: 'Vanquisher Set',
            pieces: [
                { slot: 'Boots', name: 'Vanquisher Darkboots', stats: 'Armor: 623 | Toughness: 16 | Initiative: 17 | Weapon Skill: 18 | +2% Dodge', level: 40, renown: 56 },
                { slot: 'Gloves', name: 'Vanquisher Gauntlets', stats: 'Armor: 623 | Strength: 16 | Toughness: 18 | Initiative: 17 | +2% Parry', level: 40, renown: 56 },
                { slot: 'Belt', name: 'Vanquisher Deathgirdle', stats: 'Toughness: 8 | Initiative: 22 | Weapon Skill: 22 | +2% Reduction in being Critically Hit | Spirit Resist: 87 | Elemental Resist: 86 | Corporeal Resist: 86', level: 40, renown: 55 },
                { slot: 'Shoulders', name: 'Vanquisher Shoulderguards', stats: 'Armor: 723 | Toughness: 26 | Initiative: 20 | Weapon Skill: 16 | +2% Block', level: 40, renown: 57 },
                { slot: 'Helm', name: 'Vanquisher Skullcase', stats: 'Armor: 723 | Strength: 13 | Toughness: 34 | Initiative: 15 | +2% Disrupt', level: 40, renown: 57 },
                { slot: 'Body', name: 'Vanquisher Carapace', stats: 'Armor: 822 | Strength: 15 | Toughness: 15 | Initiative: 35 | +2% Reduction in being Critically Hit', level: 40, renown: 58 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+62 Toughness' },
                { pieces: 3, bonus: '+68 Wounds' },
                { pieces: 4, bonus: 'Active Defences - On Attacking Target: 10% chance to increase Parry, Block, Disrupt and Dodge by 7% for 10 seconds.' },
                { pieces: 5, bonus: '+5% Block' },
                { pieces: 6, bonus: 'Bulwarking Presence - On Being Hit: 10% chance to reduce the damage being taken by your Group within 30ft by 3% for 10 seconds.' }
            ],
            totalStats: 'Armor: 3514 | Strength: 56 | Toughness: 117 | Initiative: 44 | Weapon Skill: 56 | Wounds: 126 | +2% Dodge | +2% Parry | +2% Block | +2% Disrupt | +4% Reduction in being Critically Hit | Spirit Resist: 87 | Elemental Resist: 86 | Corporeal Resist: 86'
        },
        'chaos_knight_dps_rr58': {
            setName: 'Oppressor Set',
            pieces: [
                { slot: 'Boots', name: 'Oppressor Darkboots', stats: 'Armor: 623 | Initiative: 10 | Weapon Skill: 20 | Wounds: 13 | +2% Melee Critical Chance', level: 40, renown: 56 },
                { slot: 'Gloves', name: 'Oppressor Gauntlets', stats: 'Armor: 623 | Initiative: 17 | Weapon Skill: 20 | Wounds: 14 | +2% Reduced chance to be Parried', level: 40, renown: 56 },
                { slot: 'Belt', name: 'Oppressor Deathgirdle', stats: 'Initiative: 20 | Weapon Skill: 24 | Wounds: 12 | +2% Melee Critical Chance | Spirit Resist: 87 | Elemental Resist: 86 | Corporeal Resist: 86', level: 40, renown: 55 },
                { slot: 'Shoulders', name: 'Oppressor Shoulderguards', stats: 'Armor: 723 | Initiative: 11 | Weapon Skill: 20 | Wounds: 23 | +20 Melee Power', level: 40, renown: 57 },
                { slot: 'Helm', name: 'Oppressor Skullcase', stats: 'Armor: 723 | Initiative: 17 | Weapon Skill: 32 | Wounds: 13 | +2% Parry', level: 40, renown: 57 },
                { slot: 'Body', name: 'Oppressor Carapace', stats: 'Armor: 822 | Initiative: 20 | Weapon Skill: 36 | Wounds: 17 | +2% Reduced Armor Penetration', level: 40, renown: 58 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+62 Strength' },
                { pieces: 3, bonus: '+68 Wounds' },
                { pieces: 4, bonus: 'Aggression - On Attacking Target: 10% chance to increase outgoing damage by 1% for 10 seconds. Stacks up to 5 times' },
                { pieces: 5, bonus: '+5% Melee Critical Chance' },
                { pieces: 6, bonus: '+5% Critical Damage' }
            ],
            totalStats: 'Armor: 3514 | Strength: 152 | Initiative: 30 | Weapon Skill: 65 | Wounds: 92 | +4% Melee Critical Chance | +2% Reduced chance to be Parried | +2% Parry | +2% Reduced Armor Penetration | +20 Melee Power | Spirit Resist: 87 | Elemental Resist: 86 | Corporeal Resist: 86'
        },
        'chaos_knight_tank_rr68': {
            setName: 'Triumphant Set',
            pieces: [
                { slot: 'Boots', name: 'Triumphant Darkboots', stats: 'Armor: 705 | Toughness: 20 | Initiative: 21 | Weapon Skill: 18 | +2% Dodge', level: 40, renown: 66 },
                { slot: 'Gloves', name: 'Triumphant Gauntlets', stats: 'Armor: 705 | Strength: 16 | Toughness: 20 | Initiative: 17 | +3% Parry', level: 40, renown: 66 },
                { slot: 'Belt', name: 'Triumphant Deathgirdle', stats: 'Toughness: 12 | Initiative: 22 | Weapon Skill: 25 | +2% Reduction in being Critically Hit | Spirit Resist: 94 | Elemental Resist: 94 | Corporeal Resist: 94', level: 40, renown: 65 },
                { slot: 'Shoulders', name: 'Triumphant Shoulderguards', stats: 'Armor: 825 | Toughness: 26 | Initiative: 20 | Weapon Skill: 20 | +3% Block', level: 40, renown: 67 },
                { slot: 'Helm', name: 'Triumphant Skullcase', stats: 'Armor: 825 | Strength: 16 | Toughness: 37 | Initiative: 18 | +2% Disrupt', level: 40, renown: 67 },
                { slot: 'Body', name: 'Triumphant Carapace', stats: 'Armor: 924 | Toughness: 15 | Initiative: 40 | Weapon Skill: 20 | +2% Reduction in being Critically Hit', level: 40, renown: 68 },
                { slot: 'Cloak', name: 'Triumphant Changehide', stats: 'Strength: 18 | Toughness: 21 | Initiative: 10 | Weapon Skill: 10 | +2% Block | Spirit Resist: 94 | Elemental Resist: 94 | Corporeal Resist: 94', level: 40, renown: 65 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+71 Toughness' },
                { pieces: 3, bonus: '+78 Wounds' },
                { pieces: 4, bonus: 'Active Defences - On Attacking Target: 10% chance to increase Parry, Block, Disrupt and Dodge by 7% for 10 seconds.' },
                { pieces: 5, bonus: '+5% Block' },
                { pieces: 6, bonus: 'Bulwarking Presence - On Being Hit: 10% chance to reduce the damage being taken by your Group within 30ft by 3% for 10 seconds.' },
                { pieces: 7, bonus: 'Endure - On Being Hit: 15% chance to reduce attackers Strength, Ballistic Skill and Intelligence by 130 while increasing your Initiative by 130 for 10 seconds.' }
            ],
            totalStats: 'Armor: 3744 | Strength: 73 | Toughness: 151 | Initiative: 70 | Weapon Skill: 73 | Wounds: 148 | +2% Dodge | +3% Parry | +5% Block | +2% Disrupt | +4% Reduction in being Critically Hit | Spirit Resist: 188 | Elemental Resist: 188 | Corporeal Resist: 188'
        },
        'chaos_knight_dps_rr68': {
            setName: 'Victorious Set',
            pieces: [
                { slot: 'Boots', name: 'Victorious Darkboots', stats: 'Armor: 705 | Strength: 14 | Initiative: 17 | Weapon Skill: 20 | +2% Melee Critical Chance', level: 40, renown: 66 },
                { slot: 'Gloves', name: 'Victorious Gauntlets', stats: 'Armor: 705 | Initiative: 14 | Weapon Skill: 22 | Wounds: 17 | +3% Reduced chance to be Parried', level: 40, renown: 66 },
                { slot: 'Belt', name: 'Victorious Deathgirdle', stats: 'Strength: 20 | Initiative: 17 | Weapon Skill: 26 | +2% Melee Critical Chance | Spirit Resist: 94 | Elemental Resist: 94 | Corporeal Resist: 94', level: 40, renown: 65 },
                { slot: 'Shoulders', name: 'Victorious Shoulderguards', stats: 'Armor: 825 | Strength: 21 | Initiative: 28 | Weapon Skill: 20 | +20 Melee Power', level: 40, renown: 67 },
                { slot: 'Helm', name: 'Victorious Skullcase', stats: 'Armor: 825 | Strength: 20 | Initiative: 16 | Weapon Skill: 35 | +2% Parry', level: 40, renown: 67 },
                { slot: 'Body', name: 'Victorious Carapace', stats: 'Armor: 924 | Strength: 20 | Initiative: 17 | Weapon Skill: 40 | +3% Reduced Armor Penetration', level: 40, renown: 68 },
                { slot: 'Cloak', name: 'Victorious Changehide', stats: 'Strength: 21 | Initiative: 10 | Weapon Skill: 18 | +2% Parry | Spirit Resist: 94 | Elemental Resist: 94 | Corporeal Resist: 94', level: 40, renown: 65 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+71 Strength' },
                { pieces: 3, bonus: '+78 Wounds' },
                { pieces: 4, bonus: 'Aggression - On Attacking Target: 10% chance to increase outgoing damage by 1% for 10 seconds. Stacks up to 5 times' },
                { pieces: 5, bonus: '+5% Melee Critical Chance' },
                { pieces: 6, bonus: '+5% Critical Damage' },
                { pieces: 7, bonus: 'Red Mist - Cooldown of Taunt reduced by 5 seconds.' }
            ],
            totalStats: 'Armor: 3744 | Strength: 163 | Toughness: 10 | Initiative: 44 | Weapon Skill: 99 | Wounds: 127 | +4% Melee Critical Chance | +3% Reduced chance to be Parried | +4% Parry | +3% Reduced Armor Penetration | +20 Melee Power | Spirit Resist: 188 | Elemental Resist: 188 | Corporeal Resist: 188'
        },
        'chaos_knight_tank_rr36': {
            setName: 'Ruin Set',
            pieces: [
                { slot: 'Boots', name: 'Darkboots of Ruin', stats: 'Armor: 492 | Strength: 9 | Toughness: 10 | Initiative: 20 | Weapon Skill: 11', level: 34, renown: 0 },
                { slot: 'Gloves', name: 'Gauntlets of Ruin', stats: 'Armor: 492 | Toughness: 20 | Weapon Skill: 8 | Wounds: 10 | +2% Parry', level: 35, renown: 0 },
                { slot: 'Shoulders', name: 'Shoulderguards of Ruin', stats: 'Armor: 567 | Toughness: 23 | Weapon Skill: 11 | Wounds: 13 | +2% Block', level: 36, renown: 0 },
                { slot: 'Helm', name: 'Skullcase of Ruin', stats: 'Armor: 567 | Toughness: 23 | Initiative: 11 | Weapon Skill: 14 | Wounds: 11', level: 35, renown: 0 },
                { slot: 'Body', name: 'Carapace of Ruin', stats: 'Armor: 645 | Toughness: 29 | Initiative: 14 | Weapon Skill: 15 | +2 Morale Per Second', level: 36, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+581 Armor' },
                { pieces: 3, bonus: '+53 Toughness' },
                { pieces: 4, bonus: '+1 to Path of Corruption Abilities' },
                { pieces: 5, bonus: '+5% Block' }
            ],
            totalStats: 'Armor: 2763 | Strength: 47 | Toughness: 105 | Initiative: 31 | Weapon Skill: 24 | Wounds: 45 | +2% Parry | +2% Block | +2 Morale Per Second'
        },
        'chaos_knight_tank_rr32': {
            setName: 'Onslaught Set',
            pieces: [
                { slot: 'Boots', name: 'Onslaught Darkboots', stats: 'Armor: 609 | Toughness: 14 | Initiative: 18 | Weapon Skill: 18 | +2% Block', level: 40, renown: 32 },
                { slot: 'Gloves', name: 'Onslaught Gauntlets', stats: 'Armor: 609 | Toughness: 12 | Initiative: 16 | Weapon Skill: 12 | Wounds: 24', level: 40, renown: 32 },
                { slot: 'Shoulders', name: 'Onslaught Shoulderguards', stats: 'Armor: 693 | Toughness: 20 | Initiative: 16 | Weapon Skill: 23 | +2% Disrupt', level: 40, renown: 32 },
                { slot: 'Helm', name: 'Onslaught Skullcase', stats: 'Armor: 693 | Toughness: 18 | Initiative: 27 | Weapon Skill: 16 | +1% Reduction in being Critically Hit', level: 40, renown: 32 },
                { slot: 'Body', name: 'Onslaught Carapace', stats: 'Armor: 777 | Toughness: 16 | Initiative: 25 | Weapon Skill: 22 | +72 HP Every 4 Seconds', level: 40, renown: 32 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+58 Wounds' },
                { pieces: 3, bonus: '+64 Strength' },
                { pieces: 4, bonus: 'On Being Hit: 10% chance to steal 112 health from your attacker' },
                { pieces: 5, bonus: '+5% Block' }
            ],
            totalStats: 'Armor: 3381 | Strength: 85 | Toughness: 80 | Initiative: 30 | Weapon Skill: 30 | Wounds: 102 | +2% Block | +2% Disrupt | +1% Reduction in being Critically Hit | +72 HP Every 4 Seconds'
        },
        'chaos_knight_tank_rr63': {
            setName: 'Invader Set',
            pieces: [
                { slot: 'Boots', name: 'Invader Darkboots', stats: 'Armor: 663 | Strength: 20 | Toughness: 18 | Weapon Skill: 17 | +2% Reduced Armor Penetration', level: 40, renown: 61 },
                { slot: 'Gloves', name: 'Invader Gauntlets', stats: 'Armor: 663 | Toughness: 20 | Initiative: 13 | Weapon Skill: 16 | +3% Reduced Chance to be Parried', level: 40, renown: 61 },
                { slot: 'Belt', name: 'Invader Deathgirdle', stats: 'Toughness: 18 | Weapon Skill: 12 | +2% Dodge, +2% Disrupt | Spirit Resist: 91 | Elemental Resist: 91 | Corporeal Resist: 91', level: 40, renown: 60 },
                { slot: 'Shoulders', name: 'Invader Shoulderguards', stats: 'Armor: 771 | Strength: 18 | Toughness: 26 | Initiative: 18 | +3% Block', level: 40, renown: 62 },
                { slot: 'Helm', name: 'Invader Skullcase', stats: 'Armor: 771 | Strength: 16 | Toughness: 24 | Initiative: 18 | +4 Morale Per Second', level: 40, renown: 62 },
                { slot: 'Body', name: 'Invader Carapace', stats: 'Armor: 876 | Toughness: 24 | Initiative: 18 | Weapon Skill: 28 | +1 AP Per Second', level: 40, renown: 63 },
                { slot: 'Jewel', name: 'Invader Change Gem', stats: 'Strength: 12 | Initiative: 27 | +2% Block, +2 AP Per Second | Spirit Resist: 79 | Elemental Resist: 78 | Corporeal Resist: 78', level: 40, renown: 63 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+66 Strength' },
                { pieces: 3, bonus: '+73 Wounds' },
                { pieces: 4, bonus: '+80 Toughness' },
                { pieces: 5, bonus: '+5% Block' },
                { pieces: 6, bonus: 'Mending Wounds - On Block: 10% chance to restore 500 Health Points and gain 50 Action Points' },
                { pieces: 7, bonus: 'Shield Spikes - Each time you block an attack, low damage is dealt back to them and reduce their outgoing damage by 5%' }
            ],
            totalStats: 'Armor: 3744 | Strength: 56 | Toughness: 130 | Initiative: 66 | Weapon Skill: 31 | Wounds: 94 | +2% Reduced Armor Penetration | +3% Reduced Chance to be Parried | +5% Block | +4% Dodge | +4% Disrupt | +4 Morale Per Second | +3 AP Per Second | Spirit Resist: 170 | Elemental Resist: 169 | Corporeal Resist: 169'
        },
        'chaos_knight_tank_rr73': {
            setName: 'Warlord Set',
            pieces: [
                { slot: 'Boots', name: 'Warlord Darkboots', stats: 'Armor: 723 | Toughness: 30 | Initiative: 14 | Weapon Skill: 18 | +2% Parry, +40 HP Every 4 Seconds', level: 40, renown: 71 },
                { slot: 'Gloves', name: 'Warlord Gauntlets', stats: 'Armor: 723 | Toughness: 18 | Weapon Skill: 14 | Wounds: 30 | +1% Reduced Armor Penetration, +1% Reduction in being Critically Hit', level: 40, renown: 71 },
                { slot: 'Belt', name: 'Warlord Deathgirdle', stats: 'Strength: 23 | Initiative: 16 | Weapon Skill: 15 | +2% Dodge, +2% Disrupt | Spirit Resist: 102 | Elemental Resist: 101 | Corporeal Resist: 101', level: 40, renown: 70 },
                { slot: 'Shoulders', name: 'Warlord Shoulderguards', stats: 'Armor: 858 | Strength: 21 | Toughness: 21 | Initiative: 31 | +3% Disrupt', level: 40, renown: 72 },
                { slot: 'Helm', name: 'Warlord Skullcase', stats: 'Armor: 858 | Strength: 21 | Toughness: 34 | Initiative: 16 | +2% Reduction in being Critically Hit', level: 40, renown: 72 },
                { slot: 'Body', name: 'Warlord Carapace', stats: 'Armor: 969 | Strength: 10 | Toughness: 24 | Initiative: 24 | Weapon Skill: 10 | Wounds: 17 | +80 HP Every 4 Seconds', level: 40, renown: 73 },
                { slot: 'Jewel', name: 'Warlord Chaos Seal', stats: 'Strength: 14 | Initiative: 15 | Wounds: 25 | +3 AP Per Second | Spirit Resist: 87 | Elemental Resist: 87 | Corporeal Resist: 86', level: 40, renown: 73 },
                { slot: 'Cloak', name: 'Warlord Changehide', stats: 'Strength: 21 | Initiative: 10 | Weapon Skill: 10 | Wounds: 25 | +2% Parry | Spirit Resist: 101 | Elemental Resist: 101 | Corporeal Resist: 102', level: 40, renown: 70 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+75 Strength' },
                { pieces: 3, bonus: '+83 Weapon Skill' },
                { pieces: 4, bonus: '+6% Armor Penetration' },
                { pieces: 5, bonus: '+99 Melee Power' },
                { pieces: 6, bonus: '+2 Path of Discord Abilities' },
                { pieces: 7, bonus: 'Evasive - On Being Hit: 10% chance to detaunt target.' },
                { pieces: 8, bonus: 'Gain Ability: Desolation' }
            ],
            totalStats: 'Armor: 4131 | Strength: 70 | Toughness: 177 | Initiative: 89 | Weapon Skill: 65 | Wounds: 126 | +4% Parry | +1% Reduced Armor Penetration | +4% Dodge | +5% Disrupt | +3% Reduction in being Critically Hit | +120 HP Every 4 Seconds | +3 AP Per Second | Spirit Resist: 290 | Elemental Resist: 289 | Corporeal Resist: 289'
        },
        'chaos_knight_tank_rr78': {
            setName: 'Sovereign Set of Dreadshield (Primary)',
            pieces: [
                { slot: 'Boots', name: 'Sovereign Darkboots', stats: 'Armor: 741 | Strength: 22 | Toughness: 24 | Weapon Skill: 20 | +2% Reduced Armor Penetration', level: 40, renown: 76 },
                { slot: 'Gloves', name: 'Sovereign Gauntlets', stats: 'Armor: 741 | Toughness: 26 | Initiative: 20 | Weapon Skill: 20 | +2% Reduced Chance to be Parried', level: 40, renown: 76 },
                { slot: 'Belt', name: 'Sovereign Deathgirdle', stats: 'Toughness: 24 | Initiative: 20 | Weapon Skill: 10 | +2% Dodge, +2% Disrupt | Spirit Resist: 102 | Elemental Resist: 101 | Corporeal Resist: 101', level: 40, renown: 75 },
                { slot: 'Shoulders', name: 'Sovereign Shoulderguards', stats: 'Armor: 888 | Toughness: 31 | Initiative: 21 | Weapon Skill: 21 | +3% Block', level: 40, renown: 77 },
                { slot: 'Helm', name: 'Sovereign Skullcase', stats: 'Armor: 888 | Strength: 20 | Toughness: 31 | Initiative: 20 | +4 Morale per Second', level: 40, renown: 77 },
                { slot: 'Body', name: 'Sovereign Carapace', stats: 'Armor: 1002 | Toughness: 24 | Initiative: 24 | Weapon Skill: 20 | Wounds: 17 | +2 AP Per Second, +1% Reduction in being Critically Hit', level: 40, renown: 78 },
                { slot: 'Jewel', name: 'Sovereign Change Gem', stats: 'Strength: 15 | Initiative: 22 | +2 AP Per Second | Spirit Resist: 87 | Elemental Resist: 87 | Corporeal Resist: 86', level: 40, renown: 78 },
                { slot: 'Cloak', name: 'Sovereign Changehide', stats: 'Strength: 25 | Initiative: 21 | Weapon Skill: 20 | +2% Block | Spirit Resist: 101 | Elemental Resist: 101 | Corporeal Resist: 102', level: 40, renown: 75 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+80 Wounds' },
                { pieces: 3, bonus: '+88 Toughness' },
                { pieces: 4, bonus: '+6% Block' },
                { pieces: 5, bonus: '+6% Reduction in being Critically Hit' },
                { pieces: 6, bonus: '+2 Path of Corruption Abilities' },
                { pieces: 7, bonus: 'On Being Attacked: 10% chance to increase Parry, Block, Disrupt and Dodge by 10% for 10 seconds' },
                { pieces: 8, bonus: 'Gain Ability: Leading The Charge' }
            ],
            totalStats: 'Armor: 4260 | Strength: 70 | Toughness: 203 | Initiative: 103 | Weapon Skill: 37 | Wounds: 127 | +2% Reduced Armor Penetration | +2% Reduced Chance to be Parried | +7% Block | +2% Dodge | +2% Disrupt | +4 Morale per Second | +4 AP Per Second | +1% Reduction in being Critically Hit | Spirit Resist: 290 | Elemental Resist: 289 | Corporeal Resist: 289'
        },
        'chaos_knight_dps_rr78': {
            setName: 'Sovereign Set of Dreadsword (Secondary)',
            pieces: [
                { slot: 'Boots', name: 'Sovereign Darkboots', stats: 'Armor: 741 | Toughness: 27 | Initiative: 19 | Weapon Skill: 22 | +2 AP Per Second', level: 40, renown: 76 },
                { slot: 'Gloves', name: 'Sovereign Gauntlets', stats: 'Armor: 741 | Toughness: 18 | Weapon Skill: 22 | Wounds: 18 | +2% Reduction in being Critically Hit', level: 40, renown: 76 },
                { slot: 'Belt', name: 'Sovereign Deathgirdle', stats: 'Toughness: 27 | Weapon Skill: 27 | +2% Parry, +2% Disrupt | Spirit Resist: 102 | Elemental Resist: 101 | Corporeal Resist: 101', level: 40, renown: 75 },
                { slot: 'Shoulders', name: 'Sovereign Shoulderguards', stats: 'Armor: 888 | Toughness: 28 | Initiative: 31 | Weapon Skill: 20 | +2 Morale Per Second, +64 HP Every 4 Seconds', level: 40, renown: 77 },
                { slot: 'Helm', name: 'Sovereign Skullcase', stats: 'Armor: 888 | Toughness: 27 | Initiative: 17 | Weapon Skill: 23 | +4% Reduced Armor Penetration', level: 40, renown: 77 },
                { slot: 'Body', name: 'Sovereign Carapace', stats: 'Armor: 1002 | Toughness: 40 | Initiative: 21 | Weapon Skill: 24 | +4 AP Per Second', level: 40, renown: 78 },
                { slot: 'Jewel', name: 'Sovereign Change Gem', stats: 'Strength: 13 | Initiative: 30 | Weapon Skill: 15 | +2 Morale Per Second | Spirit Resist: 87 | Elemental Resist: 87 | Corporeal Resist: 86', level: 40, renown: 78 },
                { slot: 'Cloak', name: 'Sovereign Changehide', stats: 'Strength: 18 | Initiative: 30 | Weapon Skill: 18 | +2% Dodge | Spirit Resist: 101 | Elemental Resist: 101 | Corporeal Resist: 102', level: 40, renown: 75 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+80 Strength' },
                { pieces: 3, bonus: '+88 Wounds' },
                { pieces: 4, bonus: '+15% Critical Damage' },
                { pieces: 5, bonus: '+6% Melee Critical Chance' },
                { pieces: 6, bonus: '+2 Path of Dread Abilities' },
                { pieces: 7, bonus: 'On Hit: 10% chance to increase Block Strikethrough and Parry Strikethrough by 10% for 10 seconds.' },
                { pieces: 8, bonus: 'Gain Ability: Mindless Fear' }
            ],
            totalStats: 'Armor: 4260 | Strength: 124 | Toughness: 227 | Initiative: 33 | Weapon Skill: 45 | Wounds: 106 | +2% Parry | +2% Disrupt | +2% Dodge | +4% Reduced Armor Penetration | +2 AP Per Second | +2% Reduction in being Critically Hit | +4 Morale Per Second | +64 HP Every 4 Seconds | Spirit Resist: 290 | Elemental Resist: 289 | Corporeal Resist: 289'
        },
        'chaos_knight_tank_rr40_beastlord': {
            setName: 'Beastlord Set',
            pieces: [
                { slot: 'Jewel', name: 'Beastlord Chaos Seal', stats: 'Strength: 24 | Weapon Skill: 13 | +1 AP Per Second | Spirit Resist: 60 | Elemental Resist: 60 | Corporeal Resist: 64', level: 40, renown: 0 },
                { slot: 'Cloak', name: 'Beastlord Cloak', stats: 'Toughness: 32 | Weapon Skill: 24 | Spirit Resist: 72 | Elemental Resist: 84 | Corporeal Resist: 72', level: 40, renown: 0 },
                { slot: 'Pocket', name: 'Beastlord Hunting Guide', stats: 'On Use: Increases AP Regeneration for 15s on all party members. 30m cooldown', level: 40, renown: 0 },
                { slot: 'Shoulders', name: 'Beastlord Shoulderguards', stats: 'Armor: 609 | Strength: 24 | Toughness: 14 | Weapon Skill: 14 | Corporeal Resist: 30 | Elemental Resist: 25', level: 40, renown: 0 },
                { slot: 'Helm', name: 'Beastlord Skullcase', stats: 'Armor: 609 | Strength: 20 | Weapon Skill: 12 | Wounds: 20 | Corporeal Resist: 25 | Elemental Resist: 30', level: 40, renown: 0 },
                { slot: 'Body', name: 'Beastlord Carapace', stats: 'Armor: 675 | Toughness: 14 | Weapon Skill: 15 | Wounds: 30 | Spirit Resist: 30 | Corporeal Resist: 30', level: 40, renown: 0 }
            ],
            setBonuses: [
                { pieces: 3, bonus: '+55 Weaponskill' },
                { pieces: 4, bonus: '+60 Strength' },
                { pieces: 5, bonus: '+5% Parry' },
                { pieces: 6, bonus: 'On Hit: +10% Chance to Reduce Enemy\'s Armor by 960' }
            ],
            totalStats: 'Armor: 1893 | Strength: 68 | Toughness: 34 | Weapon Skill: 78 | Wounds: 76 | +1 AP Per Second | Spirit Resist: 162 | Elemental Resist: 199 | Corporeal Resist: 221'
        },
        'chaos_knight_tank_rr39_rarefortune': {
            setName: 'Rare Fortune Set',
            pieces: [
                { slot: 'Boots', name: 'Rare Fortune Darkboots', stats: 'Armor: 570 | Strength: 13 | Toughness: 24 | Initiative: 14 | +2% Dodge', level: 37, renown: 0 },
                { slot: 'Gloves', name: 'Rare Fortune Gauntlets', stats: 'Armor: 570 | Strength: 12 | Toughness: 19 | Initiative: 6 | Weapon Skill: 21', level: 37, renown: 0 },
                { slot: 'Shoulders', name: 'Rare Fortune Shoulderguards', stats: 'Armor: 645 | Strength: 19 | Toughness: 18 | Initiative: 18 | +2% Reduced Armor Penetration', level: 39, renown: 0 },
                { slot: 'Helm', name: 'Rare Fortune Skullcase', stats: 'Armor: 645 | Strength: 18 | Toughness: 12 | Initiative: 20 | Weapon Skill: 17', level: 38, renown: 0 },
                { slot: 'Body', name: 'Rare Fortune Carapace', stats: 'Armor: 720 | Toughness: 22 | Initiative: 27 | Weapon Skill: 12 | +3 AP Per Second', level: 39, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+54 Initiative' },
                { pieces: 3, bonus: '+59 Strength' },
                { pieces: 4, bonus: 'Barrier - On Being Hit: 10% chance to form a protective barrier that will absorb 163 damage over 5 seconds' },
                { pieces: 5, bonus: '+5% Block' }
            ],
            totalStats: 'Armor: 3150 | Strength: 50 | Toughness: 95 | Initiative: 62 | Weapon Skill: 85 | Wounds: 0 | +2% Dodge | +2% Reduced Armor Penetration | +3 AP Per Second'
        },
        'chaos_knight_tank_rr40_redeye': {
            setName: 'Redeye Set',
            pieces: [
                { slot: 'Cloak', name: 'Redeye Changehide', stats: 'Toughness: 21 | Weapon Skill: 17 | Wounds: 21 | Spirit Resist: 91 | Elemental Resist: 76 | Corporeal Resist: 73', level: 40, renown: 0 },
                { slot: 'Boots', name: 'Redeye Darkboots', stats: 'Armor: 570 | Strength: 16 | Toughness: 17 | Initiative: 15 | +1% Reduction in being Critically Hit', level: 40, renown: 0 },
                { slot: 'Gloves', name: 'Redeye Gauntlets', stats: 'Armor: 570 | Strength: 12 | Toughness: 12 | Initiative: 13 | Weapon Skill: 21', level: 40, renown: 0 },
                { slot: 'Shoulders', name: 'Redeye Shoulderguards', stats: 'Armor: 645 | Toughness: 20 | Initiative: 22 | Weapon Skill: 13 | +2% Reduced Armor Penetration', level: 40, renown: 0 },
                { slot: 'Helm', name: 'Redeye Skullcase', stats: 'Armor: 645 | Strength: 22 | Toughness: 14 | Initiative: 27 | Weapon Skill: 13', level: 40, renown: 0 },
                { slot: 'Body', name: 'Redeye Carapace', stats: 'Armor: 720 | Toughness: 28 | Weapon Skill: 17 | Wounds: 18 | +3 AP Per Second', level: 40, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+3% Reduction in being Critically Hit' },
                { pieces: 3, bonus: '+720 Armor' },
                { pieces: 4, bonus: '+64 Strength' },
                { pieces: 5, bonus: '+69 Toughness' },
                { pieces: 6, bonus: 'On Hit: 10% chance to lower target\'s Armor by 1080 for 10 seconds' }
            ],
            totalStats: 'Armor: 3150 | Strength: 77 | Toughness: 112 | Initiative: 28 | Weapon Skill: 44 | Wounds: 98 | +1% Reduction in being Critically Hit | +2% Reduced Armor Penetration | +3 AP Per Second | Spirit Resist: 91 | Elemental Resist: 76 | Corporeal Resist: 73'
        },
        'chaos_knight_tank_rr40_sentinel': {
            setName: 'Sentinel Set',
            pieces: [
                { slot: 'Boots', name: 'Sentinel Darkboots', stats: 'Armor: 609 | Toughness: 27 | Weapon Skill: 15 | Wounds: 8 | +2% Parry', level: 40, renown: 0 },
                { slot: 'Gloves', name: 'Sentinel Gauntlets', stats: 'Armor: 609 | Toughness: 15 | Weapon Skill: 10 | Wounds: 23 | +21 Melee Power', level: 40, renown: 0 },
                { slot: 'Belt', name: 'Sentinel Deathgirdle', stats: 'Strength: 24 | Toughness: 18 | Weapon Skill: 9 | Wounds: 12 | Spirit Resist: 80 | Elemental Resist: 90 | Corporeal Resist: 95', level: 40, renown: 0 },
                { slot: 'Shoulders', name: 'Sentinel Shoulderguards', stats: 'Armor: 693 | Strength: 12 | Toughness: 17 | Wounds: 30 | +2% Disrupt', level: 40, renown: 0 },
                { slot: 'Helm', name: 'Sentinel Skullcase', stats: 'Armor: 693 | Strength: 14 | Toughness: 27 | Wounds: 10 | +2% Reduction in being Critically Hit', level: 40, renown: 0 },
                { slot: 'Body', name: 'Sentinel Carapace', stats: 'Armor: 777 | Strength: 17 | Toughness: 35 | Wounds: 19 | +60 HP Every 4 Seconds', level: 40, renown: 0 },
                { slot: 'Jewel', name: 'Sentinel Chaos Seal', stats: 'Strength: 27 | Weapon Skill: 17 | +3 AP Per Second | Spirit Resist: 70 | Elemental Resist: 70 | Corporeal Resist: 71', level: 40, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+58 Strength' },
                { pieces: 3, bonus: '+64 Wounds' },
                { pieces: 4, bonus: '+70 Initiative' },
                { pieces: 5, bonus: 'Unconstrained - On Causing Single Target Damage: 10% chance to be immune from roots and snares for the next 5 seconds.' },
                { pieces: 6, bonus: '+5% Parry' },
                { pieces: 7, bonus: 'Red Mist - Cooldown of Taunt reduced by 5 seconds.' }
            ],
            totalStats: 'Armor: 3381 | Strength: 94 | Toughness: 139 | Initiative: 12 | Weapon Skill: 81 | Wounds: 60 | +2% Parry | +2% Disrupt | +2% Reduction in being Critically Hit | +21 Melee Power | +60 HP Every 4 Seconds | +3 AP Per Second | Spirit Resist: 150 | Elemental Resist: 160 | Corporeal Resist: 166'
        },
        'chaos_knight_dps_rr40_bloodlord': {
            setName: 'Bloodlord Set',
            pieces: [
                { slot: 'Boots', name: 'Bloodlord Darkboots', stats: 'Armor: 663 | Strength: 14 | Initiative: 14 | Weapon Skill: 27 | +2% Dodge', level: 40, renown: 0 },
                { slot: 'Gloves', name: 'Bloodlord Gauntlets', stats: 'Armor: 663 | Strength: 15 | Initiative: 14 | Weapon Skill: 25 | Wounds: 13', level: 40, renown: 0 },
                { slot: 'Belt', name: 'Bloodlord Deathgirdle', stats: 'Strength: 12 | Initiative: 16 | Weapon Skill: 22 | +2% Parry, +1% Disrupt | Spirit Resist: 91 | Elemental Resist: 91 | Corporeal Resist: 91', level: 40, renown: 0 },
                { slot: 'Shoulders', name: 'Bloodlord Shoulderguards', stats: 'Armor: 771 | Strength: 18 | Initiative: 19 | Weapon Skill: 29 | +2% Parry', level: 40, renown: 0 },
                { slot: 'Helm', name: 'Bloodlord Skullcase', stats: 'Armor: 771 | Strength: 10 | Initiative: 20 | Weapon Skill: 28 | +2% Reduction in being Critically Hit', level: 40, renown: 0 },
                { slot: 'Body', name: 'Bloodlord Carapace', stats: 'Armor: 876 | Toughness: 21 | Weapon Skill: 31 | Wounds: 16', level: 40, renown: 0 },
                { slot: 'Cloak', name: 'Bloodlord Changehide', stats: 'Strength: 12 | Initiative: 16 | Weapon Skill: 30 | +1% Melee Critial Chance | Spirit Resist: 91 | Elemental Resist: 91 | Corporeal Resist: 91', level: 40, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+66 Wounds' },
                { pieces: 3, bonus: '+73 Strength' },
                { pieces: 4, bonus: 'Boost II - On Hit: 5% chance to increase your critical hit rate by 6% for 9 seconds.' },
                { pieces: 5, bonus: '+5% Parry' },
                { pieces: 6, bonus: '+5% Melee Critial Chance' },
                { pieces: 7, bonus: 'Reactionary - On Defense: 25% chance to increase Parry, Evade, and Disrupt by 10% for 10 seconds.' }
            ],
            totalStats: 'Armor: 3744 | Strength: 192 | Toughness: 21 | Initiative: 81 | Weapon Skill: 35 | Wounds: 115 | +2% Dodge | +4% Parry | +1% Disrupt | +3% Melee Critial Chance | +2% Reduction in being Critically Hit | Spirit Resist: 182 | Elemental Resist: 182 | Corporeal Resist: 182'
        },
        'chaos_knight_dps_rr40_valewalker': {
            setName: 'Vale Walker Set',
            pieces: [
                { slot: 'Boots', name: 'Vale Walker Darkboots', stats: 'Armor: 648 | Strength: 15 | Toughness: 16 | Initiative: 15 | Wounds: 20', level: 40, renown: 0 },
                { slot: 'Gloves', name: 'Vale Walker Gauntlets', stats: 'Armor: 648 | Toughness: 15 | Weapon Skill: 11 | Wounds: 20 | +2% Melee Critical Chance', level: 40, renown: 0 },
                { slot: 'Belt', name: 'Vale Walker Deathgirdle', stats: 'Initiative: 28 | Wounds: 21 | +1% Dodge, 2% Disrupt | Spirit Resist: 90 | Elemental Resist: 90 | Corporeal Resist: 90', level: 40, renown: 0 },
                { slot: 'Shoulders', name: 'Vale Walker Shoulderguards', stats: 'Armor: 741 | Weapon Skill: 25 | Wounds: 20 | +3% Parry | Elemental Resist: 30 | Corporeal Resist: 35', level: 40, renown: 0 },
                { slot: 'Helm', name: 'Vale Walker Skullcase', stats: 'Armor: 741 | Initiative: 16 | Weapon Skill: 20 | Wounds: 25 | Elemental Resist: 40 | Corporeal Resist: 35', level: 40, renown: 0 },
                { slot: 'Body', name: 'Valewalker Carapace', stats: 'Armor: 834 | Toughness: 19 | Initiative: 18 | Weapon Skill: 22 | Wounds: 35 | Corporeal Resist: 35', level: 40, renown: 0 },
                { slot: 'Jewel', name: 'Vale Walker Change-Gem', stats: 'Weapon Skill: 24 | Wounds: 24 | +1% Reduction in being Critically Hit | Spirit Resist: 66 | Elemental Resist: 80 | Corporeal Resist: 80', level: 40, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+62 Weaponskill' },
                { pieces: 3, bonus: '+69 Toughness' },
                { pieces: 4, bonus: '+76 Strength' },
                { pieces: 5, bonus: '+5% Parry' },
                { pieces: 6, bonus: 'On Hit: 25% chance to reduce target\'s Weapon Skill by 118 while increasing your Strength by 118 for 10 seconds.' },
                { pieces: 7, bonus: 'Corrosion - On Hit: 10% chance to lower target\'s Armor by 1038 for 10 seconds.' }
            ],
            totalStats: 'Armor: 3618 | Strength: 74 | Toughness: 120 | Initiative: 49 | Weapon Skill: 33 | Wounds: 139 | +2% Melee Critical Chance | +3% Parry | +1% Dodge | +2% Disrupt | +1% Reduction in being Critically Hit | Spirit Resist: 226 | Elemental Resist: 275 | Corporeal Resist: 205'
        }
    });
}

          
    

