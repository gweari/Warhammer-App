// Chosen Gear Data
// This file contains all gear sets for the Chosen (Chaos) class

// Add Chosen gear to the main gearDatabase in the same structure as Shaman (Decimator & Braggart only for test)
if (typeof gearDatabase !== 'undefined' && gearDatabase.recommendations) {
    Object.assign(gearDatabase.recommendations, {
        'chaos_knight_tank_rr8': {
            setName: 'Decimator Set',
            pieces: [
                { slot: 'Body', name: 'Decimator Carapace', stats: 'Armor: 165 | STR: 4 | TOU: 8 | INI: 4 | WOU: 4 | +1% Block', level: 8, renown: 8 },
                { slot: 'Boots', name: 'Decimator Darkboots', stats: 'Armor: 132 | STR: 2 | TOU: 6 | WS: 4 | WOU: 6', level: 8, renown: 8 },
                { slot: 'Belt', name: 'Decimator Deathgirdle', stats: 'STR: 2 | TOU: 3 | WOU: 4 | +1% Reduced chance to be Critically Hit | SRes: 33 | ERes: 20 | CRes: 20', level: 7, renown: 7 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+18 Toughness' },
                { pieces: 3, bonus: '+22 Wounds' }
            ],
            totalStats: 'Armor: 297 | STR: 8 | TOU: 17 | WS: 4 | INI: 4 | WOU: 10 | +1% Block | +1% Reduced chance to be Critically Hit | SRes: 33 | ERes: 20 | CRes: 20'
        },
        'chaos_knight_dps_rr8': {
            setName: 'Set of the Braggart',
            pieces: [
                { slot: 'Body', name: 'Braggart Carapace', stats: 'Armor: 165 | STR: 6 | WS: 8 | WOU: 5 | +1% Reduced chance to be Parried', level: 8, renown: 8 },
                { slot: 'Boots', name: 'Braggart Darkboots', stats: 'Armor: 132 | STR: 6 | TOU: 2 | WS: 4 | WOU: 6', level: 7, renown: 7 },
                { slot: 'Belt', name: 'Braggart Deathgirdle', stats: 'STR: 4 | TOU: 2 | WOU: 3 | +1% Melee Critical Chance | SRes: 23 | ERes: 25 | CRes: 25', level: 7, renown: 7 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+18 Strength' },
                { pieces: 3, bonus: '+22 Toughness' }
            ],
            totalStats: 'Armor: 297 | STR: 16 | TOU: 4 | WS: 12 | WOU: 14 | +1% Reduced chance to be Parried | +1% Melee Critical Chance | SRes: 23 | ERes: 25 | CRes: 25'
        },
        'chaos_knight_tank_rr5': {
            setName: 'Set of Carnage',
            pieces: [
                { slot: 'Body', name: 'Carnage Carapace', stats: 'Armor: 135 | STR: 4 | TOU: 7 | INI: 5 | WOU: 6', level: 5, renown: 0 },
                { slot: 'Gloves', name: 'Carnage Gauntlets', stats: 'Armor: 108 | STR: 4 | TOU: 4 | INI: 5 | WOU: 3', level: 5, renown: 0 },
                { slot: 'Boots', name: 'Carnage Darkboots', stats: 'Armor: 108 | STR: 5 | TOU: 6 | WS: 2 | WOU: 3', level: 5, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+135 Armor' },
                { pieces: 3, bonus: '+20 Weapon Skill' }
            ],
            totalStats: 'Armor: 351 | STR: 13 | TOU: 17 | WS: 7 | INI: 3 | WOU: 14'
        },
        'chaos_knight_dps_rr8_hunter': {
            setName: "Hunter's Set",
            pieces: [
                { slot: 'Body', name: "Hunter's Carapace", stats: 'Armor: 150 | STR: 8 | TOU: 4 | WOU: 5 | +1% Parry', level: 8, renown: 0 },
                { slot: 'Gloves', name: "Hunter's Gauntlets", stats: 'Armor: 120 | TOU: 8 | WS: 5 | WOU: 4', level: 7, renown: 0 },
                { slot: 'Boots', name: "Hunter's Darkboots", stats: 'Armor: 120 | STR: 5 | TOU: 5 | WS: 3 | WOU: 4', level: 7, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+17 Initiative' },
                { pieces: 3, bonus: '+2% Melee Critical Chance' }
            ],
            totalStats: 'Armor: 390 | STR: 13 | TOU: 17 | WS: 8 | WOU: 13 | +1% Parry'
        },
        'chaos_knight_tank_rr8_protector': {
            setName: "Protector's Set",
            pieces: [
                { slot: 'Body', name: "Protector's Carapace", stats: 'Armor: 150 | STR: 6 | TOU: 8 | WS: 2 | WOU: 7', level: 8, renown: 0 },
                { slot: 'Boots', name: "Protector's Darkboots", stats: 'Armor: 120 | TOU: 7 | INI: 6 | WOU: 4', level: 7, renown: 0 },
                { slot: 'Helm', name: "Protector's Skullcase", stats: 'Armor: 135 | STR: 4 | TOU: 7 | WS: 3 | WOU: 5 | +4 Hit Points every 4s', level: 7, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+2% Parry' },
                { pieces: 3, bonus: '+2% Reduced chance to be Critically Hit' }
            ],
            totalStats: 'Armor: 405 | STR: 10 | TOU: 22 | WS: 5 | INI: 4 | WOU: 18 | +4 Hit Points every 4s'
        },
        'chaos_knight_tank_rr17': {
            setName: 'Obliterator Set',
            pieces: [
                { slot: 'Body', name: 'Obliterator Carapace', stats: 'Armor: 315 | STR: 6 | TOU: 15 | WOU: 8 | +2% Block', level: 17, renown: 17 },
                { slot: 'Gloves', name: 'Obliterator Gauntlets', stats: 'Armor: 252 | STR: 8 | TOU: 12 | INI: 7 | WOU: 9', level: 16, renown: 16 },
                { slot: 'Boots', name: 'Obliterator Darkboots', stats: 'Armor: 252 | STR: 5 | TOU: 9 | WS: 14 | WOU: 8', level: 16, renown: 15 },
                { slot: 'Helm', name: 'Obliterator Skullcase', stats: 'Armor: 285 | STR: 6 | TOU: 10 | INI: 8 | WOU: 8 | +1% Reduced chance to be Critically Hit', level: 17, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+32 Toughness' },
                { pieces: 3, bonus: '+38 Wounds' },
                { pieces: 4, bonus: '+2% Block' }
            ],
            totalStats: 'Armor: 1104 | STR: 25 | TOU: 46 | WS: 14 | INI: 22 | WOU: 33 | +2% Block | +1% Reduced chance to be Critically Hit'
        },
        'chaos_knight_dps_rr17': {
            setName: 'Set of the Challenger',
            pieces: [
                { slot: 'Body', name: 'Challenger Carapace', stats: 'Armor: 315 | STR: 15 | TOU: 6 | INI: 9 | WOU: 5 | +2% Parry', level: 17, renown: 17 },
                { slot: 'Gloves', name: 'Challenger Gauntlets', stats: 'Armor: 252 | STR: 14 | TOU: 7 | INI: 8 | WOU: 7', level: 16, renown: 16 },
                { slot: 'Boots', name: 'Challenger Darkboots', stats: 'Armor: 252 | STR: 12 | TOU: 6 | WS: 8 | WOU: 10', level: 16, renown: 15 },
                { slot: 'Shoulders', name: 'Challenger Shoulderguard', stats: 'Armor: 285 | STR: 6 | TOU: 9 | INI: 8 | WOU: 9 | +1% Melee Critical Chance', level: 17, renown: 15 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+32 Strength' },
                { pieces: 3, bonus: '+38 Wounds' },
                { pieces: 4, bonus: '+2% Melee Critical Chance' }
            ],
            totalStats: 'Armor: 1104 | STR: 47 | TOU: 28 | WS: 8 | INI: 25 | WOU: 31 | +2% Parry | +1% Melee Critical Chance'
        },
        'chaos_knight_tank_rr16': {
            setName: 'Set of Havoc',
            pieces: [
                { slot: 'Body', name: 'Havoc Carapace', stats: 'Armor: 285 | STR: 5 | TOU: 12 | INI: 9 | WOU: 3 | +2% Disrupt', level: 16, renown: 0 },
                { slot: 'Gloves', name: 'Havoc Gauntlets', stats: 'Armor: 228 | STR: 14 | TOU: 7 | INI: 4 | WOU: 6', level: 13, renown: 0 },
                { slot: 'Boots', name: 'Havoc Darkboots', stats: 'Armor: 228 | TOU: 10 | WS: 3 | WOU: 8 | +1% Reduced chance to be Critically Hit', level: 13, renown: 0 },
                { slot: 'Shoulders', name: 'Havoc Shoulderguard', stats: 'Armor: 258 | STR: 8 | TOU: 9 | INI: 8 | WOU: 3', level: 16, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+285 Armor' },
                { pieces: 3, bonus: '+35 Toughness' },
                { pieces: 4, bonus: '+2% Reduced chance to be Critically Hit' }
            ],
            totalStats: 'Armor: 999 | STR: 27 | TOU: 38 | WS: 15 | INI: 6 | WOU: 31 | +2% Disrupt | +1% Reduced chance to be Critically Hit'
        },
        'chaos_knight_dps_rr17_tracker': {
            setName: "Tracker's Set",
            pieces: [
                { slot: 'Body', name: "Tracker's Carapace", stats: 'Armor: 300 | STR: 8 | TOU: 16 | WS: 6 | WOU: 13', level: 17, renown: 0 },
                { slot: 'Gloves', name: "Tracker's Gauntlets", stats: 'Armor: 240 | TOU: 12 | WS: 10 | INI: 5 | WOU: 5', level: 15, renown: 0 },
                { slot: 'Boots', name: "Tracker's Darkboots", stats: 'Armor: 240 | STR: 10 | TOU: 10 | INI: 8 | WOU: 4', level: 13, renown: 0 },
                { slot: 'Shoulders', name: "Tracker's Shoulderguard", stats: 'Armor: 270 | STR: 12 | TOU: 10 | WOU: 10 | +1% Parry', level: 16, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+31 Initiative' },
                { pieces: 3, bonus: '+20 Hit Points every 4s' },
                { pieces: 4, bonus: '+2% Melee Critical Chance' }
            ],
            totalStats: 'Armor: 1050 | STR: 30 | TOU: 48 | WS: 16 | INI: 9 | WOU: 36 | +1% Parry'
        },
        'chaos_knight_dps_rr17_keeper': {
            setName: "Keeper's Set",
            pieces: [
                { slot: 'Body', name: "Keeper's Carapace", stats: 'Armor: 300 | STR: 10 | TOU: 16 | WOU: 11 | +2 Morale', level: 17, renown: 0 },
                { slot: 'Gloves', name: "Keeper's Gauntlets", stats: 'Armor: 240 | STR: 8 | TOU: 13 | WS: 7 | WOU: 4', level: 17, renown: 0 },
                { slot: 'Boots', name: "Keeper's Darkboots", stats: 'Armor: 240 | TOU: 8 | WS: 7 | INI: 13 | WOU: 4', level: 17, renown: 0 },
                { slot: 'Helm', name: "Keeper's Skullcase", stats: 'Armor: 270 | STR: 15 | INI: 15 | WOU: 8', level: 17, renown: 0 },
                { slot: 'Shoulders', name: "Keeper's Shoulderguards", stats: 'Armor: 270 | STR: 13 | TOU: 15 | +1% Melee Critical Chance', level: 17, renown: 0 }
            ],
            setBonuses: [
                { pieces: 3, bonus: '+37 Strength' },
                { pieces: 4, bonus: '+2% Parry' },
                { pieces: 5, bonus: 'Boost I - On Hit: 10% chance to increase your critical hit rate by 3% for 9 seconds' }
            ],
            totalStats: 'Armor: 1320 | STR: 46 | TOU: 36 | WS: 14 | INI: 16 | WOU: 39 | +1% Melee Critical Chance | +2 Morale'
        },
        'chaos_knight_tank_rr29': {
            setName: 'Devastator Set',
            pieces: [
                { slot: 'Boots', name: 'Devastator Darkboots', stats: 'Armor: 396 | STR: 6 | TOU: 11 | INI: 9 | WOU: 20', level: 26, renown: 26 },
                { slot: 'Gloves', name: 'Devastator Gauntlets', stats: 'Armor: 421 | STR: 7 | TOU: 19 | WOU: 12 | +2% Reduction in being Critically Hit', level: 27, renown: 27 },
                { slot: 'Shoulders', name: 'Devastator Shoulderguards', stats: 'Armor: 514 | STR: 15 | TOU: 23 | WOU: 9 | +1% Block', level: 28, renown: 28 },
                { slot: 'Helm', name: 'Devastator Skullcase', stats: 'Armor: 488 | STR: 9 | TOU: 25 | INI: 13 | WOU: 10', level: 29, renown: 29 },
                { slot: 'Body', name: 'Devastator Carapace', stats: 'Armor: 571 | STR: 16 | TOU: 26 | INI: 9 | +40 HP Every 4 Seconds', level: 29, renown: 29 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+47 Toughness' },
                { pieces: 3, bonus: '+240 Corporeal Resistance' },
                { pieces: 4, bonus: 'On Defense: 25% chance to increase Parry, Evade and Disrupt by 10% for 10 seconds' },
                { pieces: 5, bonus: '+47 Wounds' }
            ],
            totalStats: 'Armor: 2390 | STR: 41 | TOU: 104 | INI: 40 | WOU: 54 | +1% Block | +2% Reduction in being Critically Hit | +40 HP Every 4 Seconds'
        },
        'chaos_knight_dps_rr29': {
            setName: 'Duelist Set',
            pieces: [
                { slot: 'Boots', name: 'Darkboots of the Duelist', stats: 'Armor: 396 | STR: 11 | TOU: 8 | INI: 7 | WOU: 20', level: 26, renown: 26 },
                { slot: 'Gloves', name: 'Gauntlets of the Duelist', stats: 'Armor: 421 | STR: 12 | INI: 7 | WOU: 19 | +2% Melee Critical Chance', level: 27, renown: 27 },
                { slot: 'Shoulders', name: 'Shoulderguards of the Duelist', stats: 'Armor: 514 | STR: 17 | INI: 15 | WOU: 15 | +1% Parry', level: 28, renown: 28 },
                { slot: 'Helm', name: 'Skullcase of the Duelist', stats: 'Armor: 488 | STR: 9 | TOU: 25 | INI: 13 | WOU: 10', level: 29, renown: 29 },
                { slot: 'Body', name: 'Carapace of the Duelist', stats: 'Armor: 571 | STR: 16 | TOU: 16 | INI: 19 | +40 HP Every 4 Seconds', level: 29, renown: 29 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+47 Strength' },
                { pieces: 3, bonus: '+240 Corporeal Resistance' },
                { pieces: 4, bonus: 'Aggravation - On Hit: 10% Chance to Taunt Target' },
                { pieces: 5, bonus: '+4% Melee Critical Chance' }
            ],
            totalStats: 'Armor: 2390 | STR: 129 | TOU: 49 | INI: 49 | WOU: 61 | +1% Parry | +2% Melee Critical Chance | +40 HP Every 4 Seconds'
        },
        'chaos_knight_tank_rr25': {
            setName: 'Mayhem Set',
            pieces: [
                { slot: 'Boots', name: 'Darkboots of Mayhem', stats: 'Armor: 324 | TOU: 17 | INI: 7 | WS: 6 | WOU: 7', level: 22, renown: 0 },
                { slot: 'Gloves', name: 'Gauntlets of Mayhem', stats: 'Armor: 336 | TOU: 15 | INI: 10 | WS: 6 | +2% Reduction in being Critically Hit', level: 23, renown: 0 },
                { slot: 'Shoulders', name: 'Shoulderguards of Mayhem', stats: 'Armor: 392 | TOU: 18 | INI: 7 | WS: 11 | +1% Parry', level: 24, renown: 0 },
                { slot: 'Helm', name: 'Skullcase of Mayhem', stats: 'Armor: 390 | STR: 2 | TOU: 25 | INI: 8 | WS: 10 | WOU: 8', level: 25, renown: 0 },
                { slot: 'Body', name: 'Carapace of Mayhem', stats: 'Armor: 436 | TOU: 20 | INI: 7 | WS: 13 | +32 HP Every 4 Seconds', level: 24, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+37 Initiative' },
                { pieces: 3, bonus: '+192 Corporeal Resistance' },
                { pieces: 4, bonus: '+37 Toughness' },
                { pieces: 5, bonus: 'On Being Healed: 10% Chance to recover an additional 95 health' }
            ],
            totalStats: 'Armor: 1878 | STR: 40 | TOU: 95 | INI: 9 | WS: 14 | WOU: 32 | +1% Parry | +2% Reduction in being Critically Hit | +32 HP Every 4 Seconds'
        },
        'chaos_knight_dps_rr30': {
            setName: 'Stalker Set',
            pieces: [
                { slot: 'Boots', name: "Stalker's Darkboots", stats: 'Armor: 396 | TOU: 12 | WS: 4 | WOU: 7 | +2% Dodge', level: 26, renown: 0 },
                { slot: 'Gloves', name: "Stalker's Gauntlets", stats: 'Armor: 421 | TOU: 23 | WS: 5 | WOU: 8 | +1% Melee Critical Chance', level: 26, renown: 0 },
                { slot: 'Shoulders', name: "Stalker's Shoulderguards", stats: 'Armor: 514 | STR: 7 | TOU: 18 | INI: 11 | WS: 5', level: 28, renown: 0 },
                { slot: 'Body', name: "Stalker's Carapace", stats: 'Armor: 571 | STR: 7 | TOU: 19 | INI: 12 | +2% Disrupt', level: 30, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+34 Strength' },
                { pieces: 3, bonus: '+2 Morale Per Second' },
                { pieces: 4, bonus: '+5% Melee Critical Chance' }
            ],
            totalStats: 'Armor: 1902 | STR: 21 | TOU: 72 | INI: 7 | WS: 15 | WOU: 23 | +2% Dodge | +1% Melee Critical Chance | +2% Disrupt'
        },
        'chaos_knight_tank_rr39': {
            setName: 'Annihilator Set',
            pieces: [
                { slot: 'Boots', name: 'Annihilator Darkboots', stats: 'Armor: 549 | STR: 21 | TOU: 10 | INI: 13 | +2% Dodge', level: 35, renown: 35 },
                { slot: 'Gloves', name: 'Annihilator Gauntlets', stats: 'Armor: 549 | STR: 9 | TOU: 11 | INI: 14 | WOU: 23', level: 35, renown: 36 },
                { slot: 'Shoulders', name: 'Annihilator Shoulderguards', stats: 'Armor: 636 | TOU: 12 | INI: 18 | WOU: 25 | +1% Reduction in being Critically Hit', level: 35, renown: 37 },
                { slot: 'Helm', name: 'Annihilator Skullcase', stats: 'Armor: 636 | STR: 15 | TOU: 13 | WOU: 25 | +2% Disrupt', level: 35, renown: 38 },
                { slot: 'Body', name: 'Annihilator Carapace', stats: 'Armor: 708 | STR: 32 | TOU: 23 | INI: 15 | +60 HP Every 4 Seconds', level: 35, renown: 39 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+53 Toughness' },
                { pieces: 3, bonus: '+290 Elemental Resistance' },
                { pieces: 4, bonus: '+1 Path of Discord Abilities' },
                { pieces: 5, bonus: '+5% Parry' }
            ],
            totalStats: 'Armor: 3084 | STR: 105 | TOU: 69 | INI: 45 | WOU: 60 | +2% Dodge | +1% Reduction in being Critically Hit | +2% Disrupt | +60 HP Every 4 Seconds'
        },
        'chaos_knight_dps_rr39': {
            setName: 'Mercenary Set',
            pieces: [
                { slot: 'Boots', name: 'Darkboots of the Mercenary', stats: 'Armor: 549 | STR: 13 | TOU: 10 | INI: 21 | +2% Dodge', level: 35, renown: 35 },
                { slot: 'Gloves', name: 'Gauntlets of the Mercenary', stats: 'Armor: 549 | STR: 9 | TOU: 11 | INI: 14 | WOU: 23', level: 35, renown: 36 },
                { slot: 'Shoulders', name: 'Shoulderguards of the Mercenary', stats: 'Armor: 636 | STR: 18 | TOU: 12 | INI: 23 | +3% Reduced Chance to be Parried', level: 35, renown: 37 },
                { slot: 'Helm', name: 'Skullcase of the Mercenary', stats: 'Armor: 636 | STR: 15 | TOU: 13 | WOU: 25 | +2% Disrupt', level: 35, renown: 38 },
                { slot: 'Body', name: 'Carapace of the Mercenary', stats: 'Armor: 708 | STR: 30 | TOU: 12 | INI: 17 | +3 AP Per Second', level: 35, renown: 39 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+53 Strength' },
                { pieces: 3, bonus: '+290 Elemental Resistance' },
                { pieces: 4, bonus: '+1 to Path of Dread Abilities' },
                { pieces: 5, bonus: '+5% Melee Critical Chance' }
            ],
            totalStats: 'Armor: 3078 | STR: 78 | TOU: 58 | INI: 55 | WOU: 75 | +2% Dodge | +3% Reduced Chance to be Parried | +2% Disrupt | +3 AP Per Second'
        },
        'chaos_knight_tank_rr45': {
            setName: 'Conqueror Set',
            pieces: [
                { slot: 'Boots', name: 'Conqueror Darkboots', stats: 'Armor: 588 | TOU: 16 | INI: 24 | WS: 10 | +2% Block', level: 40, renown: 40 },
                { slot: 'Gloves', name: 'Conqueror Gauntlets', stats: 'Armor: 588 | TOU: 15 | WS: 8 | WOU: 25 | +2% Parry', level: 40, renown: 41 },
                { slot: 'Belt', name: 'Conqueror Deathgirdle', stats: 'STR: 24 | TOU: 18 | INI: 12 | WS: 6 | SRes: 83 | ERes: 77 | CRes: 83', level: 40, renown: 42 },
                { slot: 'Shoulders', name: 'Conqueror Shoulderguards', stats: 'Armor: 676 | TOU: 29 | INI: 12 | WS: 16 | +2% Reduced Armor Penetration', level: 40, renown: 43 },
                { slot: 'Helm', name: 'Conqueror Skullcase', stats: 'Armor: 676 | STR: 17 | TOU: 30 | INI: 10 | +2% Disrupt', level: 40, renown: 44 },
                { slot: 'Body', name: 'Conqueror Carapace', stats: 'Armor: 765 | TOU: 33 | INI: 13 | WS: 19 | +3 AP Per Second', level: 40, renown: 45 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+57 Toughness' },
                { pieces: 3, bonus: '+63 Wounds' },
                { pieces: 4, bonus: '+5% Reduction in being Critically Hit' },
                { pieces: 5, bonus: 'Preservation - On Being Hit: 10% chance to increase Wounds by 100 for 20 seconds' },
                { pieces: 6, bonus: '+5% Block' }
            ],
            totalStats: 'Armor: 3293 | STR: 49 | TOU: 141 | INI: 41 | WS: 48 | WOU: 58 | +2% Block | +2% Parry | +2% Reduced Armor Penetration | +2% Disrupt | +3 AP Per Second | SRes: 83 | ERes: 77 | CRes: 83'
        },
        'chaos_knight_dps_rr45': {
            setName: 'Dominator Set',
            pieces: [
                { slot: 'Boots', name: 'Dominator Darkboots', stats: 'Armor: 588 | TOU: 10 | INI: 14 | WS: 16 | +2% Melee Critical Chance', level: 40, renown: 40 },
                { slot: 'Gloves', name: 'Dominator Gauntlets', stats: 'Armor: 588 | WS: 8 | WOU: 15 | +2% Reduced Chance to be Parried', level: 40, renown: 41 },
                { slot: 'Belt', name: 'Dominator Deathgirdle', stats: 'TOU: 6 | INI: 12 | WS: 18 | +36 Melee Power | SRes: 83 | ERes: 77 | CRes: 83', level: 40, renown: 42 },
                { slot: 'Shoulders', name: 'Dominator Shoulderguards', stats: 'Armor: 675 | INI: 12 | WS: 18 | WOU: 29 | +10% Auto Attack Haste', level: 40, renown: 43 },
                { slot: 'Helm', name: 'Dominator Skullcase', stats: 'Armor: 675 | INI: 10 | WS: 30 | WOU: 17 | +2% Reduced Chance to be Blocked', level: 40, renown: 44 },
                { slot: 'Body', name: 'Dominator Carapace', stats: 'Armor: 765 | TOU: 19 | INI: 13 | WS: 33 | +3 AP Per Second', level: 40, renown: 45 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+57 Strength' },
                { pieces: 3, bonus: '+63 Wounds' },
                { pieces: 4, bonus: '+5% Reduced Chance to be Parried' },
                { pieces: 5, bonus: 'Aggrovation - On Hit: 10% Chance to Taunt Target' },
                { pieces: 6, bonus: '+5% Melee Critical Chance' }
            ],
            totalStats: 'Armor: 3291 | STR: 160 | TOU: 35 | INI: 8 | WS: 102 | WOU: 48 | +2% Melee Critical Chance | +2% Reduced Chance to be Parried | +2% Reduced Chance to be Blocked | +10% Auto Attack Haste | +36 Melee Power | +3 AP Per Second | SRes: 83 | ERes: 77 | CRes: 83'
        },
        'chaos_knight_tank_rr58': {
            setName: 'Vanquisher Set',
            pieces: [
                { slot: 'Boots', name: 'Vanquisher Darkboots', stats: 'Armor: 623 | TOU: 16 | INI: 17 | WS: 18 | +2% Dodge', level: 40, renown: 56 },
                { slot: 'Gloves', name: 'Vanquisher Gauntlets', stats: 'Armor: 623 | STR: 16 | TOU: 18 | INI: 17 | +2% Parry', level: 40, renown: 56 },
                { slot: 'Belt', name: 'Vanquisher Deathgirdle', stats: 'TOU: 8 | INI: 22 | WS: 22 | +2% Reduction in being Critically Hit | SRes: 87 | ERes: 86 | CRes: 86', level: 40, renown: 55 },
                { slot: 'Shoulders', name: 'Vanquisher Shoulderguards', stats: 'Armor: 723 | TOU: 26 | INI: 20 | WS: 16 | +2% Block', level: 40, renown: 57 },
                { slot: 'Helm', name: 'Vanquisher Skullcase', stats: 'Armor: 723 | STR: 13 | TOU: 34 | INI: 15 | +2% Disrupt', level: 40, renown: 57 },
                { slot: 'Body', name: 'Vanquisher Carapace', stats: 'Armor: 822 | STR: 15 | TOU: 15 | INI: 35 | +2% Reduction in being Critically Hit', level: 40, renown: 58 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+62 Toughness' },
                { pieces: 3, bonus: '+68 Wounds' },
                { pieces: 4, bonus: 'Active Defences - On Attacking Target: 10% chance to increase Parry, Block, Disrupt and Dodge by 7% for 10 seconds.' },
                { pieces: 5, bonus: '+5% Block' },
                { pieces: 6, bonus: 'Bulwarking Presence - On Being Hit: 10% chance to reduce the damage being taken by your Group within 30ft by 3% for 10 seconds.' }
            ],
            totalStats: 'Armor: 3514 | STR: 56 | TOU: 117 | INI: 44 | WS: 56 | WOU: 126 | +2% Dodge | +2% Parry | +2% Block | +2% Disrupt | +4% Reduction in being Critically Hit | SRes: 87 | ERes: 86 | CRes: 86'
        },
        'chaos_knight_dps_rr58': {
            setName: 'Oppressor Set',
            pieces: [
                { slot: 'Boots', name: 'Oppressor Darkboots', stats: 'Armor: 623 | INI: 10 | WS: 20 | WOU: 13 | +2% Melee Critical Chance', level: 40, renown: 56 },
                { slot: 'Gloves', name: 'Oppressor Gauntlets', stats: 'Armor: 623 | INI: 17 | WS: 20 | WOU: 14 | +2% Reduced chance to be Parried', level: 40, renown: 56 },
                { slot: 'Belt', name: 'Oppressor Deathgirdle', stats: 'INI: 20 | WS: 24 | WOU: 12 | +2% Melee Critical Chance | SRes: 87 | ERes: 86 | CRes: 86', level: 40, renown: 55 },
                { slot: 'Shoulders', name: 'Oppressor Shoulderguards', stats: 'Armor: 723 | INI: 11 | WS: 20 | WOU: 23 | +20 Melee Power', level: 40, renown: 57 },
                { slot: 'Helm', name: 'Oppressor Skullcase', stats: 'Armor: 723 | INI: 17 | WS: 32 | WOU: 13 | +2% Parry', level: 40, renown: 57 },
                { slot: 'Body', name: 'Oppressor Carapace', stats: 'Armor: 822 | INI: 20 | WS: 36 | WOU: 17 | +2% Reduced Armor Penetration', level: 40, renown: 58 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+62 Strength' },
                { pieces: 3, bonus: '+68 Wounds' },
                { pieces: 4, bonus: 'Aggression - On Attacking Target: 10% chance to increase outgoing damage by 1% for 10 seconds. Stacks up to 5 times' },
                { pieces: 5, bonus: '+5% Melee Critical Chance' },
                { pieces: 6, bonus: '+5% Critical Damage' }
            ],
            totalStats: 'Armor: 3514 | STR: 152 | INI: 30 | WS: 65 | WOU: 92 | +4% Melee Critical Chance | +2% Reduced chance to be Parried | +2% Parry | +2% Reduced Armor Penetration | +20 Melee Power | SRes: 87 | ERes: 86 | CRes: 86'
        },
        'chaos_knight_tank_rr68': {
            setName: 'Triumphant Set',
            pieces: [
                { slot: 'Boots', name: 'Triumphant Darkboots', stats: 'Armor: 705 | TOU: 20 | INI: 21 | WS: 18 | +2% Dodge', level: 40, renown: 66 },
                { slot: 'Gloves', name: 'Triumphant Gauntlets', stats: 'Armor: 705 | STR: 16 | TOU: 20 | INI: 17 | +3% Parry', level: 40, renown: 66 },
                { slot: 'Belt', name: 'Triumphant Deathgirdle', stats: 'TOU: 12 | INI: 22 | WS: 25 | +2% Reduction in being Critically Hit | SRes: 94 | ERes: 94 | CRes: 94', level: 40, renown: 65 },
                { slot: 'Shoulders', name: 'Triumphant Shoulderguards', stats: 'Armor: 825 | TOU: 26 | INI: 20 | WS: 20 | +3% Block', level: 40, renown: 67 },
                { slot: 'Helm', name: 'Triumphant Skullcase', stats: 'Armor: 825 | STR: 16 | TOU: 37 | INI: 18 | +2% Disrupt', level: 40, renown: 67 },
                { slot: 'Body', name: 'Triumphant Carapace', stats: 'Armor: 924 | TOU: 15 | INI: 40 | WS: 20 | +2% Reduction in being Critically Hit', level: 40, renown: 68 },
                { slot: 'Cloak', name: 'Triumphant Changehide', stats: 'STR: 18 | TOU: 21 | INI: 10 | WS: 10 | +2% Block | SRes: 94 | ERes: 94 | CRes: 94', level: 40, renown: 65 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+71 Toughness' },
                { pieces: 3, bonus: '+78 Wounds' },
                { pieces: 4, bonus: 'Active Defences - On Attacking Target: 10% chance to increase Parry, Block, Disrupt and Dodge by 7% for 10 seconds.' },
                { pieces: 5, bonus: '+5% Block' },
                { pieces: 6, bonus: 'Bulwarking Presence - On Being Hit: 10% chance to reduce the damage being taken by your Group within 30ft by 3% for 10 seconds.' },
                { pieces: 7, bonus: 'Endure - On Being Hit: 15% chance to reduce attackers Strength, Ballistic Skill and Intelligence by 130 while increasing your Initiative by 130 for 10 seconds.' }
            ],
            totalStats: 'Armor: 3744 | STR: 73 | TOU: 151 | INI: 70 | WS: 73 | WOU: 148 | +2% Dodge | +3% Parry | +5% Block | +2% Disrupt | +4% Reduction in being Critically Hit | SRes: 188 | ERes: 188 | CRes: 188'
        },
        'chaos_knight_dps_rr68': {
            setName: 'Victorious Set',
            pieces: [
                { slot: 'Boots', name: 'Victorious Darkboots', stats: 'Armor: 705 | STR: 14 | INI: 17 | WS: 20 | +2% Melee Critical Chance', level: 40, renown: 66 },
                { slot: 'Gloves', name: 'Victorious Gauntlets', stats: 'Armor: 705 | INI: 14 | WS: 22 | WOU: 17 | +3% Reduced chance to be Parried', level: 40, renown: 66 },
                { slot: 'Belt', name: 'Victorious Deathgirdle', stats: 'STR: 20 | INI: 17 | WS: 26 | +2% Melee Critical Chance | SRes: 94 | ERes: 94 | CRes: 94', level: 40, renown: 65 },
                { slot: 'Shoulders', name: 'Victorious Shoulderguards', stats: 'Armor: 825 | STR: 21 | INI: 28 | WS: 20 | +20 Melee Power', level: 40, renown: 67 },
                { slot: 'Helm', name: 'Victorious Skullcase', stats: 'Armor: 825 | STR: 20 | INI: 16 | WS: 35 | +2% Parry', level: 40, renown: 67 },
                { slot: 'Body', name: 'Victorious Carapace', stats: 'Armor: 924 | STR: 20 | INI: 17 | WS: 40 | +3% Reduced Armor Penetration', level: 40, renown: 68 },
                { slot: 'Cloak', name: 'Victorious Changehide', stats: 'STR: 21 | INI: 10 | WS: 18 | +2% Parry | SRes: 94 | ERes: 94 | CRes: 94', level: 40, renown: 65 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+71 Strength' },
                { pieces: 3, bonus: '+78 Wounds' },
                { pieces: 4, bonus: 'Aggression - On Attacking Target: 10% chance to increase outgoing damage by 1% for 10 seconds. Stacks up to 5 times' },
                { pieces: 5, bonus: '+5% Melee Critical Chance' },
                { pieces: 6, bonus: '+5% Critical Damage' },
                { pieces: 7, bonus: 'Red Mist - Cooldown of Taunt reduced by 5 seconds.' }
            ],
            totalStats: 'Armor: 3744 | STR: 163 | TOU: 10 | INI: 44 | WS: 99 | WOU: 127 | +4% Melee Critical Chance | +3% Reduced chance to be Parried | +4% Parry | +3% Reduced Armor Penetration | +20 Melee Power | SRes: 188 | ERes: 188 | CRes: 188'
        },
        'chaos_knight_tank_rr36': {
            setName: 'Ruin Set',
            pieces: [
                { slot: 'Boots', name: 'Darkboots of Ruin', stats: 'Armor: 492 | STR: 9 | TOU: 10 | INI: 20 | WS: 11', level: 34, renown: 0 },
                { slot: 'Gloves', name: 'Gauntlets of Ruin', stats: 'Armor: 492 | TOU: 20 | WS: 8 | WOU: 10 | +2% Parry', level: 35, renown: 0 },
                { slot: 'Shoulders', name: 'Shoulderguards of Ruin', stats: 'Armor: 567 | TOU: 23 | WS: 11 | WOU: 13 | +2% Block', level: 36, renown: 0 },
                { slot: 'Helm', name: 'Skullcase of Ruin', stats: 'Armor: 567 | TOU: 23 | INI: 11 | WS: 14 | WOU: 11', level: 35, renown: 0 },
                { slot: 'Body', name: 'Carapace of Ruin', stats: 'Armor: 645 | TOU: 29 | INI: 14 | WS: 15 | +2 Morale Per Second', level: 36, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+581 Armor' },
                { pieces: 3, bonus: '+53 Toughness' },
                { pieces: 4, bonus: '+1 to Path of Corruption Abilities' },
                { pieces: 5, bonus: '+5% Block' }
            ],
            totalStats: 'Armor: 2763 | STR: 47 | TOU: 105 | INI: 31 | WS: 24 | WOU: 45 | +2% Parry | +2% Block | +2 Morale Per Second'
        },
        'chaos_knight_tank_rr32': {
            setName: 'Onslaught Set',
            pieces: [
                { slot: 'Boots', name: 'Onslaught Darkboots', stats: 'Armor: 609 | TOU: 14 | INI: 18 | WS: 18 | +2% Block', level: 40, renown: 32 },
                { slot: 'Gloves', name: 'Onslaught Gauntlets', stats: 'Armor: 609 | TOU: 12 | INI: 16 | WS: 12 | WOU: 24', level: 40, renown: 32 },
                { slot: 'Shoulders', name: 'Onslaught Shoulderguards', stats: 'Armor: 693 | TOU: 20 | INI: 16 | WS: 23 | +2% Disrupt', level: 40, renown: 32 },
                { slot: 'Helm', name: 'Onslaught Skullcase', stats: 'Armor: 693 | TOU: 18 | INI: 27 | WS: 16 | +1% Reduction in being Critically Hit', level: 40, renown: 32 },
                { slot: 'Body', name: 'Onslaught Carapace', stats: 'Armor: 777 | TOU: 16 | INI: 25 | WS: 22 | +72 HP Every 4 Seconds', level: 40, renown: 32 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+58 Wounds' },
                { pieces: 3, bonus: '+64 Strength' },
                { pieces: 4, bonus: 'On Being Hit: 10% chance to steal 112 health from your attacker' },
                { pieces: 5, bonus: '+5% Block' }
            ],
            totalStats: 'Armor: 3381 | STR: 85 | TOU: 80 | INI: 30 | WS: 30 | WOU: 102 | +2% Block | +2% Disrupt | +1% Reduction in being Critically Hit | +72 HP Every 4 Seconds'
        },
        'chaos_knight_tank_rr63': {
            setName: 'Invader Set',
            pieces: [
                { slot: 'Boots', name: 'Invader Darkboots', stats: 'Armor: 663 | STR: 20 | TOU: 18 | WS: 17 | +2% Reduced Armor Penetration', level: 40, renown: 61 },
                { slot: 'Gloves', name: 'Invader Gauntlets', stats: 'Armor: 663 | TOU: 20 | INI: 13 | WS: 16 | +3% Reduced Chance to be Parried', level: 40, renown: 61 },
                { slot: 'Belt', name: 'Invader Deathgirdle', stats: 'TOU: 18 | WS: 12 | +2% Dodge, +2% Disrupt | SRes: 91 | ERes: 91 | CRes: 91', level: 40, renown: 60 },
                { slot: 'Shoulders', name: 'Invader Shoulderguards', stats: 'Armor: 771 | STR: 18 | TOU: 26 | INI: 18 | +3% Block', level: 40, renown: 62 },
                { slot: 'Helm', name: 'Invader Skullcase', stats: 'Armor: 771 | STR: 16 | TOU: 24 | INI: 18 | +4 Morale Per Second', level: 40, renown: 62 },
                { slot: 'Body', name: 'Invader Carapace', stats: 'Armor: 876 | TOU: 24 | INI: 18 | WS: 28 | +1 AP Per Second', level: 40, renown: 63 },
                { slot: 'Jewel', name: 'Invader Change Gem', stats: 'STR: 12 | INI: 27 | +2% Block, +2 AP Per Second | SRes: 79 | ERes: 78 | CRes: 78', level: 40, renown: 63 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+66 Strength' },
                { pieces: 3, bonus: '+73 Wounds' },
                { pieces: 4, bonus: '+80 Toughness' },
                { pieces: 5, bonus: '+5% Block' },
                { pieces: 6, bonus: 'Mending Wounds - On Block: 10% chance to restore 500 Health Points and gain 50 Action Points' },
                { pieces: 7, bonus: 'Shield Spikes - Each time you block an attack, low damage is dealt back to them and reduce their outgoing damage by 5%' }
            ],
            totalStats: 'Armor: 3744 | STR: 56 | TOU: 130 | INI: 66 | WS: 31 | WOU: 94 | +2% Reduced Armor Penetration | +3% Reduced Chance to be Parried | +5% Block | +4% Dodge | +4% Disrupt | +4 Morale Per Second | +3 AP Per Second | SRes: 170 | ERes: 169 | CRes: 169'
        },
        'chaos_knight_tank_rr73': {
            setName: 'Warlord Set',
            pieces: [
                { slot: 'Boots', name: 'Warlord Darkboots', stats: 'Armor: 723 | TOU: 30 | INI: 14 | WS: 18 | +2% Parry, +40 HP Every 4 Seconds', level: 40, renown: 71 },
                { slot: 'Gloves', name: 'Warlord Gauntlets', stats: 'Armor: 723 | TOU: 18 | WS: 14 | WOU: 30 | +1% Reduced Armor Penetration, +1% Reduction in being Critically Hit', level: 40, renown: 71 },
                { slot: 'Belt', name: 'Warlord Deathgirdle', stats: 'STR: 23 | INI: 16 | WS: 15 | +2% Dodge, +2% Disrupt | SRes: 102 | ERes: 101 | CRes: 101', level: 40, renown: 70 },
                { slot: 'Shoulders', name: 'Warlord Shoulderguards', stats: 'Armor: 858 | STR: 21 | TOU: 21 | INI: 31 | +3% Disrupt', level: 40, renown: 72 },
                { slot: 'Helm', name: 'Warlord Skullcase', stats: 'Armor: 858 | STR: 21 | TOU: 34 | INI: 16 | +2% Reduction in being Critically Hit', level: 40, renown: 72 },
                { slot: 'Body', name: 'Warlord Carapace', stats: 'Armor: 969 | STR: 10 | TOU: 24 | INI: 24 | WS: 10 | WOU: 17 | +80 HP Every 4 Seconds', level: 40, renown: 73 },
                { slot: 'Jewel', name: 'Warlord Chaos Seal', stats: 'STR: 14 | INI: 15 | WOU: 25 | +3 AP Per Second | SRes: 87 | ERes: 87 | CRes: 86', level: 40, renown: 73 },
                { slot: 'Cloak', name: 'Warlord Changehide', stats: 'STR: 21 | INI: 10 | WS: 10 | WOU: 25 | +2% Parry | SRes: 101 | ERes: 101 | CRes: 102', level: 40, renown: 70 }
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
            totalStats: 'Armor: 4131 | STR: 70 | TOU: 177 | INI: 89 | WS: 65 | WOU: 126 | +4% Parry | +1% Reduced Armor Penetration | +4% Dodge | +5% Disrupt | +3% Reduction in being Critically Hit | +120 HP Every 4 Seconds | +3 AP Per Second | SRes: 290 | ERes: 289 | CRes: 289'
        },
        'chaos_knight_tank_rr78': {
            setName: 'Sovereign Set of Dreadshield (Primary)',
            pieces: [
                { slot: 'Boots', name: 'Sovereign Darkboots', stats: 'Armor: 741 | STR: 22 | TOU: 24 | WS: 20 | +2% Reduced Armor Penetration', level: 40, renown: 76 },
                { slot: 'Gloves', name: 'Sovereign Gauntlets', stats: 'Armor: 741 | TOU: 26 | INI: 20 | WS: 20 | +2% Reduced Chance to be Parried', level: 40, renown: 76 },
                { slot: 'Belt', name: 'Sovereign Deathgirdle', stats: 'TOU: 24 | INI: 20 | WS: 10 | +2% Dodge, +2% Disrupt | SRes: 102 | ERes: 101 | CRes: 101', level: 40, renown: 75 },
                { slot: 'Shoulders', name: 'Sovereign Shoulderguards', stats: 'Armor: 888 | TOU: 31 | INI: 21 | WS: 21 | +3% Block', level: 40, renown: 77 },
                { slot: 'Helm', name: 'Sovereign Skullcase', stats: 'Armor: 888 | STR: 20 | TOU: 31 | INI: 20 | +4 Morale per Second', level: 40, renown: 77 },
                { slot: 'Body', name: 'Sovereign Carapace', stats: 'Armor: 1002 | TOU: 24 | INI: 24 | WS: 20 | WOU: 17 | +2 AP Per Second, +1% Reduction in being Critically Hit', level: 40, renown: 78 },
                { slot: 'Jewel', name: 'Sovereign Change Gem', stats: 'STR: 15 | INI: 22 | +2 AP Per Second | SRes: 87 | ERes: 87 | CRes: 86', level: 40, renown: 78 },
                { slot: 'Cloak', name: 'Sovereign Changehide', stats: 'STR: 25 | INI: 21 | WS: 20 | +2% Block | SRes: 101 | ERes: 101 | CRes: 102', level: 40, renown: 75 }
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
            totalStats: 'Armor: 4260 | STR: 70 | TOU: 203 | INI: 103 | WS: 37 | WOU: 127 | +2% Reduced Armor Penetration | +2% Reduced Chance to be Parried | +7% Block | +2% Dodge | +2% Disrupt | +4 Morale per Second | +4 AP Per Second | +1% Reduction in being Critically Hit | SRes: 290 | ERes: 289 | CRes: 289'
        },
        'chaos_knight_dps_rr78': {
            setName: 'Sovereign Set of Dreadsword (Secondary)',
            pieces: [
                { slot: 'Boots', name: 'Sovereign Darkboots', stats: 'Armor: 741 | TOU: 27 | INI: 19 | WS: 22 | +2 AP Per Second', level: 40, renown: 76 },
                { slot: 'Gloves', name: 'Sovereign Gauntlets', stats: 'Armor: 741 | TOU: 18 | WS: 22 | WOU: 18 | +2% Reduction in being Critically Hit', level: 40, renown: 76 },
                { slot: 'Belt', name: 'Sovereign Deathgirdle', stats: 'TOU: 27 | WS: 27 | +2% Parry, +2% Disrupt | SRes: 102 | ERes: 101 | CRes: 101', level: 40, renown: 75 },
                { slot: 'Shoulders', name: 'Sovereign Shoulderguards', stats: 'Armor: 888 | TOU: 28 | INI: 31 | WS: 20 | +2 Morale Per Second, +64 HP Every 4 Seconds', level: 40, renown: 77 },
                { slot: 'Helm', name: 'Sovereign Skullcase', stats: 'Armor: 888 | TOU: 27 | INI: 17 | WS: 23 | +4% Reduced Armor Penetration', level: 40, renown: 77 },
                { slot: 'Body', name: 'Sovereign Carapace', stats: 'Armor: 1002 | TOU: 40 | INI: 21 | WS: 24 | +4 AP Per Second', level: 40, renown: 78 },
                { slot: 'Jewel', name: 'Sovereign Change Gem', stats: 'STR: 13 | INI: 30 | WS: 15 | +2 Morale Per Second | SRes: 87 | ERes: 87 | CRes: 86', level: 40, renown: 78 },
                { slot: 'Cloak', name: 'Sovereign Changehide', stats: 'STR: 18 | INI: 30 | WS: 18 | +2% Dodge | SRes: 101 | ERes: 101 | CRes: 102', level: 40, renown: 75 }
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
            totalStats: 'Armor: 4260 | STR: 124 | TOU: 227 | INI: 33 | WS: 45 | WOU: 106 | +2% Parry | +2% Disrupt | +2% Dodge | +4% Reduced Armor Penetration | +2 AP Per Second | +2% Reduction in being Critically Hit | +4 Morale Per Second | +64 HP Every 4 Seconds | SRes: 290 | ERes: 289 | CRes: 289'
        },
        'chaos_knight_tank_rr40_beastlord': {
            setName: 'Beastlord Set',
            pieces: [
                { slot: 'Jewel', name: 'Beastlord Chaos Seal', stats: 'STR: 24 | WS: 13 | +1 AP Per Second | SRes: 60 | ERes: 60 | CRes: 64', level: 40, renown: 0 },
                { slot: 'Cloak', name: 'Beastlord Cloak', stats: 'TOU: 32 | WS: 24 | SRes: 72 | ERes: 84 | CRes: 72', level: 40, renown: 0 },
                { slot: 'Pocket', name: 'Beastlord Hunting Guide', stats: 'On Use: Increases AP Regeneration for 15s on all party members. 30m cooldown', level: 40, renown: 0 },
                { slot: 'Shoulders', name: 'Beastlord Shoulderguards', stats: 'Armor: 609 | STR: 24 | TOU: 14 | WS: 14 | CRes: 30 | ERes: 25', level: 40, renown: 0 },
                { slot: 'Helm', name: 'Beastlord Skullcase', stats: 'Armor: 609 | STR: 20 | WS: 12 | WOU: 20 | CRes: 25 | ERes: 30', level: 40, renown: 0 },
                { slot: 'Body', name: 'Beastlord Carapace', stats: 'Armor: 675 | TOU: 14 | WS: 15 | WOU: 30 | SRes: 30 | CRes: 30', level: 40, renown: 0 }
            ],
            setBonuses: [
                { pieces: 3, bonus: '+55 Weaponskill' },
                { pieces: 4, bonus: '+60 Strength' },
                { pieces: 5, bonus: '+5% Parry' },
                { pieces: 6, bonus: 'On Hit: +10% Chance to Reduce Enemy\'s Armor by 960' }
            ],
            totalStats: 'Armor: 1893 | STR: 68 | TOU: 34 | WS: 78 | WOU: 76 | +1 AP Per Second | SRes: 162 | ERes: 199 | CRes: 221'
        },
        'chaos_knight_tank_rr39_rarefortune': {
            setName: 'Rare Fortune Set',
            pieces: [
                { slot: 'Boots', name: 'Rare Fortune Darkboots', stats: 'Armor: 570 | STR: 13 | TOU: 24 | INI: 14 | +2% Dodge', level: 37, renown: 0 },
                { slot: 'Gloves', name: 'Rare Fortune Gauntlets', stats: 'Armor: 570 | STR: 12 | TOU: 19 | INI: 6 | WS: 21', level: 37, renown: 0 },
                { slot: 'Shoulders', name: 'Rare Fortune Shoulderguards', stats: 'Armor: 645 | STR: 19 | TOU: 18 | INI: 18 | +2% Reduced Armor Penetration', level: 39, renown: 0 },
                { slot: 'Helm', name: 'Rare Fortune Skullcase', stats: 'Armor: 645 | STR: 18 | TOU: 12 | INI: 20 | WS: 17', level: 38, renown: 0 },
                { slot: 'Body', name: 'Rare Fortune Carapace', stats: 'Armor: 720 | TOU: 22 | INI: 27 | WS: 12 | +3 AP Per Second', level: 39, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+54 Initiative' },
                { pieces: 3, bonus: '+59 Strength' },
                { pieces: 4, bonus: 'Barrier - On Being Hit: 10% chance to form a protective barrier that will absorb 163 damage over 5 seconds' },
                { pieces: 5, bonus: '+5% Block' }
            ],
            totalStats: 'Armor: 3150 | STR: 50 | TOU: 95 | INI: 62 | WS: 85 | WOU: 0 | +2% Dodge | +2% Reduced Armor Penetration | +3 AP Per Second'
        },
        'chaos_knight_tank_rr40_redeye': {
            setName: 'Redeye Set',
            pieces: [
                { slot: 'Cloak', name: 'Redeye Changehide', stats: 'TOU: 21 | WS: 17 | WOU: 21 | SRes: 91 | ERes: 76 | CRes: 73', level: 40, renown: 0 },
                { slot: 'Boots', name: 'Redeye Darkboots', stats: 'Armor: 570 | STR: 16 | TOU: 17 | INI: 15 | +1% Reduction in being Critically Hit', level: 40, renown: 0 },
                { slot: 'Gloves', name: 'Redeye Gauntlets', stats: 'Armor: 570 | STR: 12 | TOU: 12 | INI: 13 | WS: 21', level: 40, renown: 0 },
                { slot: 'Shoulders', name: 'Redeye Shoulderguards', stats: 'Armor: 645 | TOU: 20 | INI: 22 | WS: 13 | +2% Reduced Armor Penetration', level: 40, renown: 0 },
                { slot: 'Helm', name: 'Redeye Skullcase', stats: 'Armor: 645 | STR: 22 | TOU: 14 | INI: 27 | WS: 13', level: 40, renown: 0 },
                { slot: 'Body', name: 'Redeye Carapace', stats: 'Armor: 720 | TOU: 28 | WS: 17 | WOU: 18 | +3 AP Per Second', level: 40, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+3% Reduction in being Critically Hit' },
                { pieces: 3, bonus: '+720 Armor' },
                { pieces: 4, bonus: '+64 Strength' },
                { pieces: 5, bonus: '+69 Toughness' },
                { pieces: 6, bonus: 'On Hit: 10% chance to lower target\'s Armor by 1080 for 10 seconds' }
            ],
            totalStats: 'Armor: 3150 | STR: 77 | TOU: 112 | INI: 28 | WS: 44 | WOU: 98 | +1% Reduction in being Critically Hit | +2% Reduced Armor Penetration | +3 AP Per Second | SRes: 91 | ERes: 76 | CRes: 73'
        },
        'chaos_knight_tank_rr40_sentinel': {
            setName: 'Sentinel Set',
            pieces: [
                { slot: 'Boots', name: 'Sentinel Darkboots', stats: 'Armor: 609 | TOU: 27 | WS: 15 | WOU: 8 | +2% Parry', level: 40, renown: 0 },
                { slot: 'Gloves', name: 'Sentinel Gauntlets', stats: 'Armor: 609 | TOU: 15 | WS: 10 | WOU: 23 | +21 Melee Power', level: 40, renown: 0 },
                { slot: 'Belt', name: 'Sentinel Deathgirdle', stats: 'STR: 24 | TOU: 18 | WS: 9 | WOU: 12 | SRes: 80 | ERes: 90 | CRes: 95', level: 40, renown: 0 },
                { slot: 'Shoulders', name: 'Sentinel Shoulderguards', stats: 'Armor: 693 | STR: 12 | TOU: 17 | WOU: 30 | +2% Disrupt', level: 40, renown: 0 },
                { slot: 'Helm', name: 'Sentinel Skullcase', stats: 'Armor: 693 | STR: 14 | TOU: 27 | WOU: 10 | +2% Reduction in being Critically Hit', level: 40, renown: 0 },
                { slot: 'Body', name: 'Sentinel Carapace', stats: 'Armor: 777 | STR: 17 | TOU: 35 | WOU: 19 | +60 HP Every 4 Seconds', level: 40, renown: 0 },
                { slot: 'Jewel', name: 'Sentinel Chaos Seal', stats: 'STR: 27 | WS: 17 | +3 AP Per Second | SRes: 70 | ERes: 70 | CRes: 71', level: 40, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+58 Strength' },
                { pieces: 3, bonus: '+64 Wounds' },
                { pieces: 4, bonus: '+70 Initiative' },
                { pieces: 5, bonus: 'Unconstrained - On Causing Single Target Damage: 10% chance to be immune from roots and snares for the next 5 seconds.' },
                { pieces: 6, bonus: '+5% Parry' },
                { pieces: 7, bonus: 'Red Mist - Cooldown of Taunt reduced by 5 seconds.' }
            ],
            totalStats: 'Armor: 3381 | STR: 94 | TOU: 139 | INI: 12 | WS: 81 | WOU: 60 | +2% Parry | +2% Disrupt | +2% Reduction in being Critically Hit | +21 Melee Power | +60 HP Every 4 Seconds | +3 AP Per Second | SRes: 150 | ERes: 160 | CRes: 166'
        },
        'chaos_knight_dps_rr40_bloodlord': {
            setName: 'Bloodlord Set',
            pieces: [
                { slot: 'Boots', name: 'Bloodlord Darkboots', stats: 'Armor: 663 | STR: 14 | INI: 14 | WS: 27 | +2% Dodge', level: 40, renown: 0 },
                { slot: 'Gloves', name: 'Bloodlord Gauntlets', stats: 'Armor: 663 | STR: 15 | INI: 14 | WS: 25 | WOU: 13', level: 40, renown: 0 },
                { slot: 'Belt', name: 'Bloodlord Deathgirdle', stats: 'STR: 12 | INI: 16 | WS: 22 | +2% Parry, +1% Disrupt | SRes: 91 | ERes: 91 | CRes: 91', level: 40, renown: 0 },
                { slot: 'Shoulders', name: 'Bloodlord Shoulderguards', stats: 'Armor: 771 | STR: 18 | INI: 19 | WS: 29 | +2% Parry', level: 40, renown: 0 },
                { slot: 'Helm', name: 'Bloodlord Skullcase', stats: 'Armor: 771 | STR: 10 | INI: 20 | WS: 28 | +2% Reduction in being Critically Hit', level: 40, renown: 0 },
                { slot: 'Body', name: 'Bloodlord Carapace', stats: 'Armor: 876 | TOU: 21 | WS: 31 | WOU: 16', level: 40, renown: 0 },
                { slot: 'Cloak', name: 'Bloodlord Changehide', stats: 'STR: 12 | INI: 16 | WS: 30 | +1% Melee Critial Chance | SRes: 91 | ERes: 91 | CRes: 91', level: 40, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+66 Wounds' },
                { pieces: 3, bonus: '+73 Strength' },
                { pieces: 4, bonus: 'Boost II - On Hit: 5% chance to increase your critical hit rate by 6% for 9 seconds.' },
                { pieces: 5, bonus: '+5% Parry' },
                { pieces: 6, bonus: '+5% Melee Critial Chance' },
                { pieces: 7, bonus: 'Reactionary - On Defense: 25% chance to increase Parry, Evade, and Disrupt by 10% for 10 seconds.' }
            ],
            totalStats: 'Armor: 3744 | STR: 192 | TOU: 21 | INI: 81 | WS: 35 | WOU: 115 | +2% Dodge | +4% Parry | +1% Disrupt | +3% Melee Critial Chance | +2% Reduction in being Critically Hit | SRes: 182 | ERes: 182 | CRes: 182'
        },
        'chaos_knight_dps_rr40_valewalker': {
            setName: 'Vale Walker Set',
            pieces: [
                { slot: 'Boots', name: 'Vale Walker Darkboots', stats: 'Armor: 648 | STR: 15 | TOU: 16 | INI: 15 | WOU: 20', level: 40, renown: 0 },
                { slot: 'Gloves', name: 'Vale Walker Gauntlets', stats: 'Armor: 648 | TOU: 15 | WS: 11 | WOU: 20 | +2% Melee Critical Chance', level: 40, renown: 0 },
                { slot: 'Belt', name: 'Vale Walker Deathgirdle', stats: 'INI: 28 | WOU: 21 | +1% Dodge, 2% Disrupt | SRes: 90 | ERes: 90 | CRes: 90', level: 40, renown: 0 },
                { slot: 'Shoulders', name: 'Vale Walker Shoulderguards', stats: 'Armor: 741 | WS: 25 | WOU: 20 | +3% Parry | ERes: 30 | CRes: 35', level: 40, renown: 0 },
                { slot: 'Helm', name: 'Vale Walker Skullcase', stats: 'Armor: 741 | INI: 16 | WS: 20 | WOU: 25 | ERes: 40 | CRes: 35', level: 40, renown: 0 },
                { slot: 'Body', name: 'Valewalker Carapace', stats: 'Armor: 834 | TOU: 19 | INI: 18 | WS: 22 | WOU: 35 | CRes: 35', level: 40, renown: 0 },
                { slot: 'Jewel', name: 'Vale Walker Change-Gem', stats: 'WS: 24 | WOU: 24 | +1% Reduction in being Critically Hit | SRes: 66 | ERes: 80 | CRes: 80', level: 40, renown: 0 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+62 Weaponskill' },
                { pieces: 3, bonus: '+69 Toughness' },
                { pieces: 4, bonus: '+76 Strength' },
                { pieces: 5, bonus: '+5% Parry' },
                { pieces: 6, bonus: 'On Hit: 25% chance to reduce target\'s Weapon Skill by 118 while increasing your Strength by 118 for 10 seconds.' },
                { pieces: 7, bonus: 'Corrosion - On Hit: 10% chance to lower target\'s Armor by 1038 for 10 seconds.' }
            ],
            totalStats: 'Armor: 3618 | STR: 74 | TOU: 120 | INI: 49 | WS: 33 | WOU: 139 | +2% Melee Critical Chance | +3% Parry | +1% Dodge | +2% Disrupt | +1% Reduction in being Critically Hit | SRes: 226 | ERes: 275 | CRes: 205'
        }
    });
}

          
    

