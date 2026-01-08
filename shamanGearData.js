// Shaman Gear Data
// This file contains all gear sets for the Shaman (Goblin) class

// Add Shaman gear to the main gearDatabase
if (typeof gearDatabase !== 'undefined' && gearDatabase.recommendations) {
    Object.assign(gearDatabase.recommendations, {
        // ========== SHAMAN HEALER SETS ==========
        'shaman_goblin_healer_rr5': {
            setName: 'Set of Carnage',
            pieces: [
                { slot: 'Head', name: 'Carnage Morkyfeets', stats: 'Armor: 36 | INT: 5, TOU: 3, INI: 2, WP: 6', cost: 17, currency: 'War Tokens', level: 5 },
                { slot: 'Chest', name: 'Carnage Robefings', stats: 'Armor: 45 | INT: 4, TOU: 6, WP: 6, WOU: 6', cost: 30, currency: 'War Tokens', level: 5 },
                { slot: 'Hands', name: 'Carnage Greenbringas', stats: 'Armor: 36 | INT: 4, TOU: 3, WP: 5, WOU: 4', cost: 14, currency: 'War Tokens', level: 5 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+45 Armor' },
                { pieces: 3, bonus: '+20 Willpower' }
            ],
            totalStats: 'Armor: 117 | INT: 13, TOU: 12, INI: 2, WP: 17, WOU: 10'
        },
        'shaman_goblin_healer_rr8_protector': {
            setName: 'Protector\'s Set',
            pieces: [
                { slot: 'Head', name: 'Protector\'s Morkyfeets', stats: 'Armor: 40 | INI: 4, WP: 7, WOU: 6', level: 7 },
                { slot: 'Chest', name: 'Protector\'s Robefings', stats: 'Armor: 50 | TOU: 6, INI: 3, WP: 8, WOU: 6', level: 8 },
                { slot: 'Shoulders', name: 'Protector\'s Waaaghat', stats: 'Armor: 45 | INT: 4, TOU: 4, WP: 7, WOU: 4 | +4 HP Every 4s', level: 7 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+4% Dodge' },
                { pieces: 3, bonus: '+2% Reduced chance to be Critically Hit' }
            ],
            totalStats: 'Armor: 135 | INT: 4, TOU: 10, INI: 7, WP: 23, WOU: 16'
        },
        'shaman_goblin_healer_rr8_hunter': {
            setName: 'Hunter\'s Set',
            pieces: [
                { slot: 'Head', name: 'Hunter\'s Morkyfeets', stats: 'Armor: 40 | INT: 4, TOU: 3, WP: 5, WOU: 5', level: 7 },
                { slot: 'Chest', name: 'Hunter\'s Robefings', stats: 'Armor: 50 | INT: 8, WP: 4, WOU: 5 | +1% Disrupt', level: 8 },
                { slot: 'Hands', name: 'Hunter\'s Greenbringas', stats: 'Armor: 40 | INT: 4, TOU: 8, WP: 5', level: 7 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+17 Toughness' },
                { pieces: 3, bonus: '+2% Magic Critical Chance' }
            ],
            totalStats: 'Armor: 130 | INT: 16, TOU: 11, WP: 14, WOU: 10'
        },
        'shaman_goblin_healer_rr8_braggart': {
            setName: 'Set of the Braggart',
            pieces: [
                { slot: 'Head', name: 'Braggart Morkyfeets', stats: 'Armor: 44 | INT: 6, TOU: 4, INI: 4, WOU: 4', cost: 22, currency: 'War Crests', level: 7, renown: 7 },
                { slot: 'Chest', name: 'Braggart Robefings', stats: 'Armor: 55 | INT: 8, TOU: 5, WOU: 6 | +1% Reduced chance to be Disrupted', cost: 40, currency: 'War Crests', level: 8, renown: 8 },
                { slot: 'Hands', name: 'Braggart Bits Keepa', stats: 'INT: 4, INI: 3, WOU: 2 | +1% Magic Crit | 23 SRe, 25 ERe, 25 CRe', cost: 13, currency: 'War Crests', level: 7, renown: 7 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+18 Intelligence' },
                { pieces: 3, bonus: '+22 Toughness' }
            ],
            totalStats: 'Armor: 99 | INT: 18, TOU: 9, INI: 7, WOU: 12 | 23 SRe, 25 ERe, 25 CRe'
        },
        'shaman_goblin_healer_rr8': {
            setName: 'Decimator Set',
            pieces: [
                { slot: 'Head', name: 'Decimator Morkyfeets', stats: 'Armor: 44 | TOU: 4, INI: 2, WP: 8, WOU: 4', cost: 22, currency: 'War Crests', level: 8, renown: 8 },
                { slot: 'Chest', name: 'Decimator Robefings', stats: 'Armor: 55 | TOU: 6, WP: 8, WOU: 5 | +1% Disrupt', cost: 40, currency: 'War Crests', level: 8, renown: 8 },
                { slot: 'Hands', name: 'Decimator Bits Keepa', stats: 'TOU: 2, WP: 4, WOU: 3 | +1% Healing Crit | 33 SRe, 20 ERe, 20 CRe', cost: 13, currency: 'War Crests', level: 7, renown: 7 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+18 Willpower' },
                { pieces: 3, bonus: '+22 Wounds' }
            ],
            totalStats: 'Armor: 99 | TOU: 12, INI: 2, WP: 20, WOU: 12 | 33 SRe, 20 ERe, 20 CRe'
        },
        'shaman_goblin_healer_rr16_keeper': {
            setName: 'Keeper\'s Set',
            pieces: [
                { slot: 'Head', name: 'Keeper\'s Morkyfeets', stats: 'Armor: 80 | TOU: 7, INI: 7, WP: 8, WOU: 10', cost: 1, currency: 'Keeper\'s Karl', level: 17 },
                { slot: 'Chest', name: 'Keeper\'s Robefings', stats: 'Armor: 100 | TOU: 10, WP: 15, WOU: 12 | +2 Morale', cost: 1, currency: 'Keeper\'s Karl', level: 17 },
                { slot: 'Hands', name: 'Keeper\'s Greenbringas', stats: 'Armor: 80 | TOU: 9, INI: 4, WP: 13, WOU: 6', cost: 1, currency: 'Keeper\'s Karl', level: 17 },
                { slot: 'Shoulders', name: 'Keeper\'s Sholdafings', stats: 'Armor: 90 | TOU: 15, WP: 13 | +1% Healing Crit', cost: 1, currency: 'Keeper\'s Karl', level: 17 },
                { slot: 'Belt', name: 'Keeper\'s Waaaghat', stats: 'Armor: 90 | TOU: 8, INI: 5, WP: 16, WOU: 9', cost: 1, currency: 'Keeper\'s Karl', level: 17 }
            ],
            setBonuses: [
                { pieces: 3, bonus: '+37 Willpower' },
                { pieces: 4, bonus: '+2% Healing Critical Chance' },
                { pieces: 5, bonus: 'Quickening - On Being Hit: 10% chance to reduce build times by half a second for 10 seconds' }
            ],
            totalStats: 'Armor: 440 | TOU: 49, INI: 16, WP: 65, WOU: 37'
        },
        'shaman_goblin_healer_rr16_havoc': {
            setName: 'Set of Havoc',
            pieces: [
                { slot: 'Head', name: 'Havoc Morkyfeets', stats: 'Armor: 76 | TOU: 7, WP: 10, WOU: 4 | +1% Healing Crit', cost: 39, currency: 'War Tokens', level: 13 },
                { slot: 'Chest', name: 'Havoc Robefings', stats: 'Armor: 95 | TOU: 8, WP: 12, WOU: 9 | +2% Dodge', cost: 70, currency: 'War Tokens', level: 16 },
                { slot: 'Hands', name: 'Havoc Greenbringas', stats: 'Armor: 76 | TOU: 5, INI: 7, WP: 10, WOU: 9', cost: 33, currency: 'War Tokens', level: 13 },
                { slot: 'Shoulders', name: 'Havoc Shouldafings', stats: 'Armor: 86 | TOU: 6, INI: 4, WP: 11, WOU: 15', cost: 55, currency: 'War Tokens', level: 16 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+29 Wounds' },
                { pieces: 3, bonus: '+35 Willpower' },
                { pieces: 4, bonus: '+2% Healing Critical Chance' }
            ],
            totalStats: 'Armor: 333 | TOU: 26, INI: 11, WP: 43, WOU: 37'
        },
        'shaman_goblin_healer_rr16_tracker': {
            setName: 'Tracker\'s Set',
            pieces: [
                { slot: 'Head', name: 'Tracker\'s Morkyfeets', stats: 'Armor: 80 | INT: 12, INI: 4, WP: 10, WOU: 6', level: 13 },
                { slot: 'Chest', name: 'Tracker\'s Robefings', stats: 'Armor: 100 | INT: 8, TOU: 8, WP: 16, WOU: 11', level: 17 },
                { slot: 'Hands', name: 'Tracker\'s Greenbringas', stats: 'Armor: 80 | TOU: 9, INI: 6, WP: 10, WOU: 7', level: 15 },
                { slot: 'Shoulders', name: 'Tracker\'s Shouldafings', stats: 'Armor: 90 | INT: 12, TOU: 8, WP: 4, WOU: 8 | +1% Disrupt', level: 16 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+31 Toughness' },
                { pieces: 3, bonus: '+20 HP Every 4s' },
                { pieces: 4, bonus: '+3% Disrupt' }
            ],
            totalStats: 'Armor: 350 | INT: 32, TOU: 25, INI: 10, WP: 40, WOU: 32'
        },
        'shaman_goblin_healer_rr16_challenger': {
            setName: 'Set of the Challenger',
            pieces: [
                { slot: 'Head', name: 'Challenger Morkyfeets', stats: 'Armor: 84 | INT: 14, TOU: 7, INI: 7, WOU: 8', cost: 28, currency: 'War Crests', level: 16, renown: 15 },
                { slot: 'Chest', name: 'Challenger Robefings', stats: 'Armor: 105 | INT: 18, TOU: 5, INI: 3, WOU: 9 | +2% Reduced chance to be Disrupted', cost: 50, currency: 'War Crests', level: 17, renown: 17 },
                { slot: 'Hands', name: 'Challenger Greenbringas', stats: 'Armor: 84 | INT: 18, TOU: 8, INI: 4, WOU: 6', cost: 24, currency: 'War Crests', level: 16, renown: 16 },
                { slot: 'Shoulders', name: 'Challenger Shouldafings', stats: 'Armor: 95 | TOU: 14, INI: 10, WOU: 8 | +1% Magic Crit', cost: 40, currency: 'War Crests', level: 17, renown: 15 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+32 Intelligence' },
                { pieces: 3, bonus: '+38 Wounds' },
                { pieces: 4, bonus: '+2% Magic Critical Chance' }
            ],
            totalStats: 'Armor: 368 | INT: 50, TOU: 34, INI: 24, WOU: 31'
        },

        'shaman_goblin_healer_rr16': {
            setName: 'Obliterator Set',
            pieces: [
                { slot: 'Head', name: 'Obliterator Morkyfeets', stats: 'Armor: 84 | TOU: 5, INI: 7, WP: 15, WOU: 9', cost: 28, currency: 'War Crests', level: 16, renown: 15 },
                { slot: 'Chest', name: 'Obliterator Robefings', stats: 'Armor: 105 | TOU: 2, INI: 6, WP: 18, WOU: 9 | +2% Disrupt', cost: 50, currency: 'War Crests', level: 17, renown: 17 },
                { slot: 'Hands', name: 'Obliterator Greenbringas', stats: 'Armor: 84 | TOU: 9, INI: 3, WP: 19, WOU: 5', cost: 24, currency: 'War Crests', level: 16, renown: 16 },
                { slot: 'Belt', name: 'Obliterator Waaaghat', stats: 'Armor: 95 | TOU: 8, INI: 6, WP: 8, WOU: 10 | +1% Healing Crit', cost: 40, currency: 'War Crests', level: 17 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+32 Willpower' },
                { pieces: 3, bonus: '+38 Wounds' },
                { pieces: 4, bonus: '+3% Disrupt' }
            ],
            totalStats: 'Armor: 368 | TOU: 24, INI: 22, WP: 60, WOU: 33'
        },
        'shaman_goblin_healer_rr26_mayhem': {
            setName: 'Mayhem Set',
            pieces: [
                { slot: 'Head', name: 'Morkyfeets of Mayhem', stats: 'Armor: 108 | WP: 17, TOU: 6, INI: 7, WOU: 7', cost: 13, level: 22 },
                { slot: 'Chest', name: 'Robefings of Mayhem', stats: 'Armor: 145 | WP: 13, INT: 20, WOU: 7 | +32 HP Every 4s', cost: 40, level: 24 },
                { slot: 'Hands', name: 'Greenbringas of Mayhem', stats: 'Armor: 112 | WP: 15, INT: 6, TOU: 10 | +2% Reduction in being Crit', cost: 15, level: 23 },
                { slot: 'Shoulders', name: 'Sholdafings of Mayhem', stats: 'Armor: 130 | WP: 18, TOU: 11, WOU: 7 | +1% Disrupt Strikethrough', cost: 18, level: 24 },
                { slot: 'Belt', name: 'Waaaghat of Mayhem', stats: 'Armor: 130 | WP: 25, TOU: 10, INI: 2, WOU: 8', cost: 20, level: 25 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+37 Willpower' },
                { pieces: 3, bonus: '+192 Corporeal Resistance' },
                { pieces: 4, bonus: '+5% Disrupt' },
                { pieces: 5, bonus: 'Superiority - On Hit: 25% chance to reduce target\'s Willpower by 58 while increasing your Intelligence by 58 for 10s' }
            ],
            totalStats: 'Armor: 625 | WP: 88, INT: 26, TOU: 37, INI: 23, WOU: 15'
        },
        'shaman_goblin_healer_rr26_stalker': {
            setName: 'Stalker Set',
            pieces: [
                { slot: 'Head', name: 'Stalker\'s Morkyfeets', stats: 'Armor: 132 | WP: 12, INT: 7, WOU: 4 | +2% Dodge', level: 26 },
                { slot: 'Chest', name: 'Stalker\'s Robefings', stats: 'Armor: 190 | WP: 19, INT: 7, TOU: 12 | +2% Disrupt', level: 30 },
                { slot: 'Hands', name: 'Stalker\'s Greenbringas', stats: 'Armor: 140 | WP: 18, INT: 13, INI: 5 | +1% Healing Crit', level: 26 },
                { slot: 'Shoulders', name: 'Stalker\'s Sholdafings', stats: 'Armor: 171 | WP: 18, TOU: 7, INI: 5, WOU: 11', level: 28 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+34 Willpower' },
                { pieces: 3, bonus: '+2 Morale Per Second' },
                { pieces: 4, bonus: '+34 Toughness' }
            ],
            totalStats: 'Armor: 633 | WP: 67, INT: 27, TOU: 19, INI: 10, WOU: 15'
        },
        'shaman_goblin_healer_rr26_duelist': {
            setName: 'Duelist Set (Scenario)',
            pieces: [
                { slot: 'Head', name: 'Morkyfeets of the Duelist', stats: 'Armor: 132 | INT: 24, TOU: 7, INI: 7, WOU: 8', cost: 20, level: 26, renown: 26 },
                { slot: 'Chest', name: 'Robefings of the Duelist', stats: 'Armor: 190 | INT: 32, TOU: 9, WOU: 10 | +40 HP Every 4s', cost: 61, level: 29, renown: 29 },
                { slot: 'Hands', name: 'Greenbringas of the Duelist', stats: 'Armor: 140 | INT: 25, TOU: 7, INI: 6 | +2% Magic Crit', cost: 24, level: 27, renown: 27 },
                { slot: 'Shoulders', name: 'Sholdafings of the Duelist', stats: 'Armor: 171 | INT: 23, TOU: 15, INI: 9 | +1% Disrupt Strikethrough', cost: 28, level: 28, renown: 28 },
                { slot: 'Belt', name: 'Waaaghat of the Duelist', stats: 'Armor: 162 | INT: 32, TOU: 10, INI: 3, WOU: 12', cost: 32, level: 29, renown: 29 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+47 Intelligence' },
                { pieces: 3, bonus: '+240 Corporeal Resistance' },
                { pieces: 4, bonus: 'On Being Hit: 10% chance to reduce build times by half a second for 10 seconds' },
                { pieces: 5, bonus: '+4% Magic Critical Chance' }
            ],
            totalStats: 'Armor: 795 | INT: 136, TOU: 32, INI: 35, WOU: 36'
        },
        'shaman_goblin_healer_rr26': {
            setName: 'Devastator Set',
            pieces: [
                { slot: 'Head', name: 'Devastator Morkyfeets', stats: 'Armor: 132 | WP: 24, TOU: 7, INI: 7, WOU: 8', cost: 34, currency: 'War Crests', level: 26, renown: 26 },
                { slot: 'Chest', name: 'Devastator Robefings', stats: 'Armor: 190 | WP: 32, TOU: 9, WOU: 10 | +40 HP Every 4s', cost: 61, currency: 'War Crests', level: 29, renown: 29 },
                { slot: 'Hands', name: 'Devastator Greenbringas', stats: 'Armor: 140 | WP: 25, TOU: 7, INI: 6 | +2% Healing Crit', cost: 29, currency: 'War Crests', level: 27, renown: 27 },
                { slot: 'Shoulders', name: 'Devastator Sholdafings', stats: 'Armor: 171 | WP: 23, TOU: 15, INI: 9 | +1% Disrupt', cost: 46, currency: 'War Crests', level: 28, renown: 28 },
                { slot: 'Belt', name: 'Devastator Waaaghat', stats: 'Armor: 162 | WP: 32, TOU: 10, INI: 3, WOU: 12', cost: 50, currency: 'War Crests', level: 29, renown: 29 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+47 Willpower' },
                { pieces: 3, bonus: '+240 Corporeal Resistance' },
                { pieces: 4, bonus: 'On Being Hit: 10% Chance to increase Wounds for 20s' },
                { pieces: 5, bonus: '+4% Healing Critical Chance' }
            ],
            totalStats: 'Armor: 795 | WP: 136, TOU: 32, INI: 35, WOU: 36'
        },
        'shaman_goblin_healer_rr35': {
            setName: 'Annihilator Set',
            pieces: [
                { slot: 'Head', name: 'Annihilator Morkyfeets', stats: 'Armor: 183 | WP: 21, TOU: 13, INI: 10 | +2% Dodge', cost: 32, currency: 'War Crests', level: 35, renown: 35 },
                { slot: 'Chest', name: 'Annihilator Robefings', stats: 'Armor: 236 | WP: 30, TOU: 12, INI: 17 | +3 AP Per Second', cost: 67, currency: 'War Crests', level: 35, renown: 39 },
                { slot: 'Hands', name: 'Annihilator Greenbringas', stats: 'Armor: 183 | WP: 23, TOU: 11, INI: 9, WOU: 14', cost: 37, currency: 'War Crests', level: 35, renown: 36 },
                { slot: 'Shoulders', name: 'Annihilator Sholdafings', stats: 'Armor: 212 | WP: 25, INI: 12, WOU: 18 | +1% Reduction in being Crit', cost: 55, currency: 'War Crests', level: 35, renown: 37 },
                { slot: 'Belt', name: 'Annihilator Waaaghat', stats: 'Armor: 212 | WP: 25, TOU: 12, INI: 13 | +2% Disrupt', cost: 50, currency: 'War Crests', level: 35, renown: 38 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+53 Willpower' },
                { pieces: 3, bonus: '+290 Corporeal Resistance' },
                { pieces: 4, bonus: '+1 Path of Mork Abilities' },
                { pieces: 5, bonus: '+5% Healing Critical Chance' }
            ],
            totalStats: 'Armor: 1026 | WP: 124, TOU: 36, INI: 58, WOU: 49'
        },
        'shaman_goblin_healer_rr35_mercenary': {
            setName: 'Mercenary Set (Scenario)',
            pieces: [
                { slot: 'Head', name: 'Morkyfeets of the Mercenary', stats: 'Armor: 183 | INT: 21, TOU: 13, INI: 10 | +2% Dodge', cost: 46, level: 35, renown: 35 },
                { slot: 'Chest', name: 'Robefings of the Mercenary', stats: 'Armor: 236 | INT: 30, INI: 17, WOU: 12 | +3 AP Per Second', cost: 98, level: 35, renown: 39 },
                { slot: 'Hands', name: 'Greenbringas of the Mercenary', stats: 'Armor: 183 | INT: 11, TOU: 23, INI: 9, WOU: 14', cost: 54, level: 35, renown: 36 },
                { slot: 'Shoulders', name: 'Sholdafings of the Mercenary', stats: 'Armor: 212 | INT: 18, TOU: 25, INI: 12 | +1% Reduction in being Crit', cost: 80, level: 35, renown: 37 },
                { slot: 'Belt', name: 'Waaaghat of the Mercenary', stats: 'Armor: 212 | INT: 25, TOU: 15, INI: 13 | +2% Disrupt', cost: 73, level: 35, renown: 37 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+53 Intelligence' },
                { pieces: 3, bonus: '+290 Corporeal Resistance' },
                { pieces: 4, bonus: '+1 Path of Gork Abilities' },
                { pieces: 5, bonus: '+5% Magic Critical Chance' }
            ],
            totalStats: 'Armor: 1026 | INT: 29, TOU: 124, INI: 28, WOU: 61, WOU: 26'
        },
        'shaman_goblin_healer_rr45': {
            setName: 'Conqueror Set',
            pieces: [
                { slot: 'Head', name: 'Conqueror Morkyfeets', stats: 'Armor: 192 | WP: 14, INI: 16, WOU: 10 | +2% Healing Crit', cost: 70, currency: 'War Crests', level: 40, renown: 40 },
                { slot: 'Chest', name: 'Conqueror Robefings', stats: 'Armor: 255 | WP: 33, TOU: 19, INI: 13 | +3 AP Per Second', cost: 147, currency: 'War Crests', level: 40, renown: 45 },
                { slot: 'Hands', name: 'Conqueror Greenbringas', stats: 'Armor: 192 | WP: 25, TOU: 15, INI: 8 | +2% Disrupt', cost: 81, currency: 'War Crests', level: 40, renown: 41 },
                { slot: 'Shoulders', name: 'Conqueror Sholdafings', stats: 'Armor: 225 | WP: 29, TOU: 16, INI: 12 | +2% Reduce Armor Pen', cost: 111, currency: 'War Crests', level: 40, renown: 43 },
                { slot: 'Belt', name: 'Conqueror Waaaghat', stats: 'Armor: 225 | WP: 17, TOU: 10, INI: 30 | +2% Dodge', cost: 122, currency: 'War Crests', level: 40, renown: 44 },
                { slot: 'Ring', name: 'Conqueror Bitskeepa', stats: 'WP: 18, INI: 6, WOU: 12 | +36 Healing Power | 83 SRe, 77 ERe, 83 CRe', cost: 49, currency: 'War Crests', level: 40, renown: 42 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+57 Willpower' },
                { pieces: 3, bonus: '+63 Toughness' },
                { pieces: 4, bonus: '+69 Wounds' },
                { pieces: 5, bonus: 'Reactionary - On Defense: 25% chance to increase Parry, Evade and Disrupt by 10% for 10s' },
                { pieces: 6, bonus: '+5% Healing Critical Chance' }
            ],
            totalStats: 'Armor: 1089 | WP: 136, TOU: 60, INI: 85, WOU: 22 | 83 SRe, 77 ERe, 83 CRe'
        },
        'shaman_goblin_healer_rr45_dominator': {
            setName: 'Dominator Set (Scenario)',
            pieces: [
                { slot: 'Head', name: 'Dominator Morkyfeets', stats: 'Armor: 192 | INT: 16, INI: 10, WOU: 14 | +2% Magic Crit', cost: 119, level: 40, renown: 40 },
                { slot: 'Chest', name: 'Dominator Robefings', stats: 'Armor: 255 | INT: 33, TOU: 19, INI: 13 | +3 AP Per Second', cost: 216, level: 40, renown: 45 },
                { slot: 'Hands', name: 'Dominator Greenbringas', stats: 'Armor: 192 | INT: 25, TOU: 15, INI: 8 | +2% Reduced Chance to be Disrupted', cost: 103, level: 40, renown: 41 },
                { slot: 'Shoulders', name: 'Dominator Sholdafings', stats: 'Armor: 225 | INT: 29, TOU: 18, INI: 12 | +2 Morale Per Second', cost: 162, level: 40, renown: 43 },
                { slot: 'Belt', name: 'Dominator Waaaghat', stats: 'Armor: 225 | INT: 10, INI: 30, WOU: 17 | +2% Reduced Chance to be Disrupted', cost: 178, level: 40, renown: 44 },
                { slot: 'Ring', name: 'Dominator Bitskeepa', stats: 'INT: 18, INI: 6, WOU: 12 | +36 Magic Power | 83 SRe, 77 ERe, 83 CRe', cost: 72, level: 40, renown: 42 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+57 Intelligence' },
                { pieces: 3, bonus: '+63 Initiative' },
                { pieces: 4, bonus: '+69 Wounds' },
                { pieces: 5, bonus: 'Domination - On Hit: 25% chance to steal 100 Toughness from your target for 10 seconds' },
                { pieces: 6, bonus: '+5% Magic Critical Chance' }
            ],
            totalStats: 'Armor: 1086 | INT: 133, TOU: 52, INI: 79, WOU: 43 | 83 SRe, 77 ERe, 83 CRe'
        },
        'shaman_goblin_healer_rr45_ruin': {
            setName: 'Ruin Set (PQ)',
            pieces: [
                { slot: 'Head', name: 'Morkyfeets of Ruin', stats: 'Armor: 164 | WP: 11, INT: 20, TOU: 9, WOU: 10', cost: 94, level: 34 },
                { slot: 'Chest', name: 'Robefings of Ruin', stats: 'Armor: 215 | WP: 29, INT: 15, TOU: 14 | +2 Morale Per Second', cost: 170, level: 36 },
                { slot: 'Hands', name: 'Greenbringas of Ruin', stats: 'Armor: 164 | WP: 20, TOU: 10, INI: 8 | +2% Disrupt', cost: 81, level: 35 },
                { slot: 'Shoulders', name: 'Sholdafings of Ruin', stats: 'Armor: 189 | WP: 27, INT: 13, TOU: 11 | +1% Healing Crit', cost: 127, level: 36 },
                { slot: 'Belt', name: 'Waaaghat of Ruin', stats: 'Armor: 189 | WP: 23, INT: 14, INI: 11, WOU: 11', cost: 140, level: 35 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+48 Willpower' },
                { pieces: 3, bonus: '+265 Spiritual Resistance' },
                { pieces: 4, bonus: '+1 Path of Da Green Abilities' },
                { pieces: 5, bonus: '+4% Healing Critical Chance' }
            ],
            totalStats: 'Armor: 925 | WP: 117, INT: 65, TOU: 34, INI: 35, WOU: 20'
        },
        'shaman_goblin_healer_rr45_onslaught': {
            setName: 'Onslaught Set (PQ)',
            pieces: [
                { slot: 'Head', name: 'Onslaught Morkyfeets', stats: 'Armor: 203 | WP: 18, TOU: 14, INI: 18 | +2% Dodge', level: 40, renown: 32 },
                { slot: 'Chest', name: 'Onslaught Robefings', stats: 'Armor: 259 | WP: 22, TOU: 16, INI: 25 | +72 HP Every 4s', level: 40, renown: 32 },
                { slot: 'Hands', name: 'Onslaught Greenbringas', stats: 'Armor: 203 | WP: 24, TOU: 12, INI: 16, WOU: 12', level: 40, renown: 32 },
                { slot: 'Shoulders', name: 'Onslaught Sholdafings', stats: 'Armor: 231 | WP: 22, TOU: 20, INI: 16 | +2% Disrupt', level: 40, renown: 32 },
                { slot: 'Belt', name: 'Onslaught Waaaghat', stats: 'Armor: 231 | WP: 16, TOU: 18, INI: 27 | +1% Reduction in being Crit', level: 40, renown: 32 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+58 Willpower' },
                { pieces: 3, bonus: '+64 Wounds' },
                { pieces: 4, bonus: 'Vivacious - On Heal: 10% chance to recover 50 AP' },
                { pieces: 5, bonus: '+5% Healing Critical Chance' }
            ],
            totalStats: 'Armor: 1127 | WP: 84, TOU: 80, INI: 102, WOU: 30'
        },
        'shaman_goblin_healer_rr45_beastlord': {
            setName: 'Beastlord Set (PvE)',
            pieces: [
                { slot: 'Shoulders', name: 'Beastlord Sholdafings', stats: 'Armor: 203 | WP: 14, INT: 24, WOU: 14 | 30 ERe, 25 CRe', level: 40 },
                { slot: 'Belt', name: 'Beastlord Waaaghat', stats: 'Armor: 203 | WP: 12, INT: 20, WOU: 20 | 25 SRe, 30 CRe', level: 40 },
                { slot: 'Chest', name: 'Beastlord Robefings', stats: 'Armor: 225 | WP: 14, INT: 15, WOU: 30 | 30 SRe, 30 ERe, 30 CRe', level: 40 },
                { slot: 'Ring', name: 'Beastlord Waaagh Beads', stats: 'INT: 24, WOU: 13 | +1 AP Per Second | 60 SRe, 60 ERe, 64 CRe', level: 40 },
                { slot: 'Cloak', name: 'Beastlord Cloak', stats: 'INT: 24, WOU: 32 | 72 SRe, 84 ERe, 72 CRe', level: 40 },
                { slot: 'Trophy', name: 'Beastlord Hunting Guide', stats: 'On Use: Increases AP Regeneration for 15s on all party members. 30m cooldown', level: 40 }
            ],
            setBonuses: [
                { pieces: 3, bonus: '+225 Armor Bonus' },
                { pieces: 4, bonus: '+60 Willpower' },
                { pieces: 5, bonus: '+5% Reduced Chance to be Disrupted' },
                { pieces: 6, bonus: 'Caretaker - On Hit: 10% chance to heal defensive target for 235 health' }
            ],
            totalStats: 'Armor: 631 | WP: 40, INT: 107, WOU: 109 | 187 SRe, 174 ERe, 221 CRe'
        },
        'shaman_goblin_healer_rr45_rarefortune': {
            setName: 'Rare Fortune Set (PvE)',
            pieces: [
                { slot: 'Head', name: 'Rare Fortune Morkyfeets', stats: 'Armor: 190 | WP: 25, TOU: 11, INI: 10 | +2% Dodge', level: 37 },
                { slot: 'Chest', name: 'Rare Fortune Robefings', stats: 'Armor: 240 | WP: 24, TOU: 17, INI: 16 | +3 AP Per Second', level: 39 },
                { slot: 'Hands', name: 'Rare Fortune Greenbringas', stats: 'Armor: 190 | WP: 24, TOU: 11, INI: 13, WOU: 10', level: 37 },
                { slot: 'Shoulders', name: 'Rare Fortune Sholdafings', stats: 'Armor: 215 | WP: 24, INI: 16, WOU: 17 | +1% Healing Crit', level: 39 },
                { slot: 'Belt', name: 'Rare Fortune Waaaghat', stats: 'Armor: 215 | WP: 29, WOU: 14, INI: 16 | +12 Healing Power', level: 38 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+54 Initiative' },
                { pieces: 3, bonus: '+59 Willpower' },
                { pieces: 4, bonus: 'Aid X - On Direct Heal: 5% chance for your heal target to regain additional 354 health over 9s' },
                { pieces: 5, bonus: '+5% Healing Critical Chance' }
            ],
            totalStats: 'Armor: 1050 | WP: 126, TOU: 22, INI: 60, WOU: 69'
        },
        'shaman_goblin_healer_rr45': {
            setName: 'Conqueror Set',
            pieces: [
                { slot: 'Head', name: 'Conqueror Morkyfeets', stats: 'Armor: 192 | WP: 14, INI: 16, WOU: 10 | +2% Healing Crit', cost: 70, currency: 'War Crests', level: 40, renown: 45 },
                { slot: 'Chest', name: 'Conqueror Robefings', stats: 'Armor: 255 | WP: 33, TOU: 19, INI: 13 | +3 AP Per Second', cost: 147, currency: 'War Crests', level: 40, renown: 45 },
                { slot: 'Hands', name: 'Conqueror Greenbringas', stats: 'Armor: 192 | WP: 25, TOU: 15, INI: 8 | +2% Disrupt', cost: 81, currency: 'War Crests', level: 40, renown: 45 },
                { slot: 'Shoulders', name: 'Conqueror Sholdafings', stats: 'Armor: 225 | WP: 29, TOU: 16, INI: 12 | +2% Reduce Armor Pen', cost: 111, currency: 'War Crests', level: 40, renown: 45 },
                { slot: 'Belt', name: 'Conqueror Waaaghat', stats: 'Armor: 225 | WP: 17, TOU: 10, INI: 30 | +2% Dodge', cost: 122, currency: 'War Crests', level: 40, renown: 45 },
                { slot: 'Accessory', name: 'Conqueror Bitskeepa', stats: 'WP: 18, INI: 6, WOU: 12 | +36 Healing Power | 83 SRe, 77 ERe, 83 CRe', cost: 49, currency: 'War Crests', level: 40, renown: 45 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+57 Willpower' },
                { pieces: 3, bonus: '+63 Toughness' },
                { pieces: 4, bonus: '+69 Wounds' },
                { pieces: 5, bonus: 'Reactionary - On Defense: 25% chance to increase Parry, Evade and Disrupt by 10% for 10s' },
                { pieces: 6, bonus: '+5% Healing Critical Chance' }
            ],
            totalStats: 'Armor: 1089 | WP: 136, TOU: 60, INI: 85, WOU: 22'
        },
        'shaman_goblin_healer_rr55': {
            setName: 'Vanquisher Set',
            pieces: [
                { slot: 'Head', name: 'Vanquisher Morkyfeets', stats: 'Armor: 209 | WP: 20, INI: 10, WOU: 13 | +2% Healing Crit', cost: 109, currency: 'War Crests', level: 40, renown: 56 },
                { slot: 'Chest', name: 'Vanquisher Robefings', stats: 'Armor: 274 | WP: 35, INI: 21, WOU: 14 | +3 AP Per Second', cost: 229, currency: 'War Crests', level: 40, renown: 58 },
                { slot: 'Hands', name: 'Vanquisher Greenbringas', stats: 'Armor: 209 | WP: 15, INI: 23, WOU: 13 | +2% Reduced Armor Pen', cost: 126, currency: 'War Crests', level: 40, renown: 56 },
                { slot: 'Shoulders', name: 'Vanquisher Shouldafings', stats: 'Armor: 241 | WP: 24, INI: 20, WOU: 10 | +2% Healing Crit', cost: 172, currency: 'War Crests', level: 40, renown: 57 },
                { slot: 'Belt', name: 'Vanquisher Waaaghat', stats: 'Armor: 241 | WP: 18, INI: 27, WOU: 11 | +3% Disrupt', cost: 189, currency: 'War Crests', level: 40, renown: 57 },
                { slot: 'Ring', name: 'Vanquisher Bitskeepa', stats: 'WP: 22, INI: 22, WOU: 8 | +2% Reduction in being Crit | 87 SRe, 86 ERe, 86 CRe', cost: 76, currency: 'War Crests', level: 40, renown: 55 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+62 Willpower' },
                { pieces: 3, bonus: '+68 Wounds' },
                { pieces: 4, bonus: 'Exuberance - On Casting Heal: 20% chance to recover 35 AP' },
                { pieces: 5, bonus: '+5% Healing Critical Chance' },
                { pieces: 6, bonus: 'Increasing Impetus - On Heal: 5% chance to reduce build times by 25% for 5s' }
            ],
            totalStats: 'Armor: 1174 | WP: 134, INI: 123, WOU: 69 | 87 SRe, 86 ERe, 86 CRe'
        },
        'shaman_goblin_healer_rr55_oppressor': {
            setName: 'Oppressor Set (Scenario)',
            pieces: [
                { slot: 'Head', name: 'Oppressor Morkyfeets', stats: 'Armor: 209 | INT: 15, INI: 18, WOU: 10 | +2% Magic Crit', cost: 182, level: 40, renown: 56 },
                { slot: 'Chest', name: 'Oppressor Robefings', stats: 'Armor: 274 | INT: 28, INI: 19 | +23 Magic Power', cost: 331, level: 40, renown: 58 },
                { slot: 'Hands', name: 'Oppressor Greenbringas', stats: 'Armor: 209 | INT: 26, TOU: 8, INI: 11 | +3% Reduced Chance to be Disrupted', cost: 157, level: 40, renown: 56 },
                { slot: 'Shoulders', name: 'Oppressor Sholdafings', stats: 'Armor: 241 | INT: 34, TOU: 10, INI: 20 | +1% Magic Crit', cost: 248, level: 40, renown: 57 },
                { slot: 'Belt', name: 'Oppressor Waaaghat', stats: 'Armor: 241 | INT: 24, INI: 20, WOU: 12 | +3% Reduced Chance to be Disrupted', cost: 273, level: 40, renown: 57 },
                { slot: 'Ring', name: 'Oppressor Bitskeepa', stats: 'INT: 21, TOU: 12, INI: 19 | +36 Magic Power | 87 SRe, 86 ERe, 86 CRe', cost: 110, level: 40, renown: 55 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+62 Intelligence' },
                { pieces: 3, bonus: '+68 Wounds' },
                { pieces: 4, bonus: 'Endure - On Being Hit: 15% chance to reduce attackers Str, BS and Int by 110 while increasing your Initiative by 110 for 10s' },
                { pieces: 5, bonus: '+5% Magic Critical Chance' },
                { pieces: 6, bonus: 'Increasing Impetus - On Attacking Target or Direct Heal Dealt: 5% chance to reduce build times by 25% for 5s' }
            ],
            totalStats: 'Armor: 1174 | INT: 148, TOU: 30, INI: 107, WOU: 22 | 87 SRe, 86 ERe, 86 CRe'
        },
        'shaman_goblin_healer_rr60': {
            setName: 'Invader Set',
            pieces: [
                { slot: 'Head', name: 'Invader Morkyfeets', stats: 'Armor: 221 | WP: 27, INI: 12, WOU: 18 | +2 Morale Per Second', cost: 25, currency: 'War Crests', level: 40, renown: 61 },
                { slot: 'Chest', name: 'Invader Robefings', stats: 'Armor: 292 | WP: 26, TOU: 16, INI: 21, WOU: 16 | +1 AP Per Second', cost: 45, currency: 'War Crests', level: 40, renown: 63 },
                { slot: 'Hands', name: 'Invader Greenbringas', stats: 'Armor: 221 | WP: 25, INI: 17, WOU: 15 | +15 Healing Power', cost: 21, currency: 'War Crests', level: 40, renown: 61 },
                { slot: 'Shoulders', name: 'Invader Sholdafings', stats: 'Armor: 257 | WP: 21, TOU: 12, INI: 20 | +2% Healing Crit', cost: 34, currency: 'War Crests', level: 40, renown: 62 },
                { slot: 'Belt', name: 'Invader Waaaghat', stats: 'Armor: 257 | WP: 27, TOU: 15, WOU: 18 | +27 Healing Power', cost: 37, currency: 'War Crests', level: 40, renown: 62 },
                { slot: 'Ring', name: 'Invader Bitskeepa', stats: 'WP: 18, WOU: 12 | +2% Dodge, +2% Disrupt | 91 SRe, 91 ERe, 91 CRe', cost: 15, currency: 'War Crests', level: 40, renown: 60 },
                { slot: 'Cloak', name: 'Invader Waaaghchain', stats: 'WP: 27, INI: 12 | +2 AP Per Second, +2% Reduced Armor Pen | 79 SRe, 78 ERe, 78 CRe', cost: 43, currency: 'War Crests', level: 40, renown: 63 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+66 Willpower' },
                { pieces: 3, bonus: '+73 Wounds' },
                { pieces: 4, bonus: '+80 Toughness' },
                { pieces: 5, bonus: '+5% Healing Critical Chance' },
                { pieces: 6, bonus: 'Absolve I - On Direct Heal: 5% chance to remove a Hex, Curse, or Ailment from heal target' },
                { pieces: 7, bonus: 'Much Good Green - All healing abilities have 10% chance to increase Crit Heal by 9% and crit value by 12% for 10s' }
            ],
            totalStats: 'Armor: 1248 | WP: 171, TOU: 43, INI: 82, WOU: 79 | 170 SRe, 169 ERe, 169 CRe'
        },
        'shaman_goblin_healer_rr60_redeye': {
            setName: 'Redeye Set (Instance)',
            pieces: [
                { slot: 'Head', name: 'Redeye Morkyfeets', stats: 'Armor: 190 | WP: 15, TOU: 17, WOU: 16 | +1% Reduction in being Crit', level: 40 },
                { slot: 'Chest', name: 'Redeye Robefings', stats: 'Armor: 240 | WP: 17, TOU: 27, INI: 17 | +3 AP Per Second', level: 40 },
                { slot: 'Hands', name: 'Redeye Greenbringas', stats: 'Armor: 190 | WP: 21, INT: 12, TOU: 13, INI: 12, WOU: 13', level: 40 },
                { slot: 'Shoulders', name: 'Redeye Sholdafings', stats: 'Armor: 215 | WP: 13, TOU: 20, INI: 22, WOU: 22 | +2% Reduced Armor Pen', level: 40 },
                { slot: 'Belt', name: 'Redeye Waaaghat', stats: 'Armor: 215 | WP: 22, INT: 13, TOU: 14, INI: 27, WOU: 12', level: 40 },
                { slot: 'Cloak', name: 'Redeye Greencloak', stats: 'WP: 17, INT: 21, WOU: 21 | 91 SRe, 76 ERe, 73 CRe', level: 40 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+3% Reduction in being Critically Hit' },
                { pieces: 3, bonus: '+59 Willpower' },
                { pieces: 4, bonus: '+64 Intelligence' },
                { pieces: 5, bonus: 'Quickening - On Being Hit: 10% chance to reduce build times by half a second for 10s' },
                { pieces: 6, bonus: '+5% Healing Critical Chance' }
            ],
            totalStats: 'Armor: 1050 | WP: 105, INT: 25, TOU: 99, INI: 116, WOU: 12 | 91 SRe, 76 ERe, 73 CRe'
        },
        'shaman_goblin_healer_rr60_sentinel': {
            setName: 'Sentinel Set (Instance)',
            pieces: [
                { slot: 'Head', name: 'Sentinel Morkyfeets', stats: 'Armor: 203 | WP: 27, TOU: 15, WOU: 8 | +2% Dodge', level: 40 },
                { slot: 'Chest', name: 'Sentinel Robefings', stats: 'Armor: 259 | WP: 35, TOU: 19, INI: 17 | +60 HP Every 4s', level: 40 },
                { slot: 'Hands', name: 'Sentinel Greenbringas', stats: 'Armor: 203 | WP: 23, TOU: 15, INI: 10 | +21 Healing Power', level: 40 },
                { slot: 'Shoulders', name: 'Sentinel Sholdafings', stats: 'Armor: 231 | WP: 30, TOU: 17, INI: 12 | +2% Reduction in being Crit', level: 40 },
                { slot: 'Belt', name: 'Sentinel Waaaghat', stats: 'Armor: 231 | WP: 27, TOU: 10, INI: 14 | +2% Healing Crit', level: 40 },
                { slot: 'Ring', name: 'Sentinel Bitskeepa', stats: 'WP: 24, TOU: 18, INI: 12, WOU: 9 | 80 SRe, 90 ERe, 95 CRe', level: 50 },
                { slot: 'Ring', name: 'Sentinel Waaagh Beads', stats: 'WP: 27, INI: 17 | +3 AP Per Second | Talisman Slot | 70 SRe, 70 ERe, 71 CRe', level: 40 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+58 Willpower' },
                { pieces: 3, bonus: '+64 Wounds' },
                { pieces: 4, bonus: '+70 Initiative' },
                { pieces: 5, bonus: 'Compulsion - On Being Attacked: 10% chance to reduce your cooldowns by 1 second for 10s' },
                { pieces: 6, bonus: '+5% Healing Critical Chance' },
                { pieces: 7, bonus: 'Woz\'nt Me! - Cooldown on Look Over There! reduced by 5 seconds' }
            ],
            totalStats: 'Armor: 1127 | WP: 193, TOU: 94, INI: 90, WOU: 9 | 150 SRe, 160 ERe, 166 CRe'
        },
        'shaman_goblin_healer_rr60_valewalker': {
            setName: 'Vale Walker Set (Instance)',
            pieces: [
                { slot: 'Head', name: 'Vale Walker Morkyfeets', stats: 'Armor: 216 | WP: 13, TOU: 20, INI: 13 | +2% Healing Crit', level: 40 },
                { slot: 'Chest', name: 'Valewalker Robefings', stats: 'Armor: 278 | WP: 18, TOU: 24, INI: 30 | 35 ERe, 35 CRe', level: 40 },
                { slot: 'Hands', name: 'Vale Walker Greenbringas', stats: 'Armor: 216 | WP: 18, TOU: 10, INI: 26 | +2% Reduced Armor Pen', level: 40 },
                { slot: 'Shoulders', name: 'Vale Walker Sholdafings', stats: 'Armor: 247 | WP: 18, INI: 24, WOU: 24 | +2% Healing Crit | 30 SRe, 35 ERe', level: 40 },
                { slot: 'Belt', name: 'Vale Walker Waaaghat', stats: 'Armor: 247 | WP: 22, TOU: 18, INI: 22 | 40 SRe, 35 ERe', level: 40 },
                { slot: 'Ring', name: 'Vale Walker Bitskeepa', stats: 'WP: 11, TOU: 32, INI: 24 | 90 SRe, 90 ERe, 90 CRe', level: 40 },
                { slot: 'Cloak', name: 'Vale Walker Waaaghchain', stats: 'WP: 24, INI: 21, WOU: 21 | +48 HP Every 4s, +1% Reduced Armor Pen | 66 SRe, 80 ERe, 80 CRe', level: 40 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+249 Armor Bonus' },
                { pieces: 3, bonus: '+69 Wounds' },
                { pieces: 4, bonus: '+76 Willpower' },
                { pieces: 5, bonus: '+5% Healing Critical Chance' },
                { pieces: 6, bonus: 'Guidance II - On Direct Heal: 5% chance to increase the power of your heals by 6% for 10s' },
                { pieces: 7, bonus: 'Absolve I - On Direct Heal: 5% chance to remove a Hex, Curse or Ailment from your heal target' }
            ],
            totalStats: 'Armor: 1204 | WP: 125, TOU: 95, INI: 168, WOU: 24 | 226 SRe, 275 ERe, 205 CRe'
        },
        'shaman_goblin_healer_rr60_triumphant': {
            setName: 'Triumphant Set (Ranked)',
            pieces: [
                { slot: 'Head', name: 'Triumphant Morkyfeets', stats: 'Armor: 235 | WP: 20, WOU: 14, INI: 17 | +2% Healing Crit', cost: 648, level: 40, renown: 66 },
                { slot: 'Chest', name: 'Triumphant Robefings', stats: 'Armor: 308 | WP: 35, INI: 21, WOU: 19 | +4 AP Per Second', cost: 1360, level: 40, renown: 68 },
                { slot: 'Hands', name: 'Triumphant Greenbringas', stats: 'Armor: 235 | WP: 15, INI: 25, WOU: 13 | +3% Reduced Armor Pen', cost: 752, level: 40, renown: 66 },
                { slot: 'Shoulders', name: 'Triumphant Sholdafings', stats: 'Armor: 275 | WP: 26, INI: 22, WOU: 15 | +2% Healing Crit', cost: 1024, level: 40, renown: 67 },
                { slot: 'Belt', name: 'Triumphant Waaaghat', stats: 'Armor: 275 | WP: 21, INI: 30, WOU: 14 | +3% Disrupt', cost: 1128, level: 40, renown: 67 },
                { slot: 'Ring', name: 'Triumphant Bitskeepa', stats: 'WP: 22, INI: 25, WOU: 12 | +2% Reduction in being Crit | 94 SRe, 94 ERe, 94 CRe', cost: 456, level: 40, renown: 65 },
                { slot: 'Cloak', name: 'Triumphant Greencloak', stats: 'WP: 20, TOU: 11, INI: 25, WOU: 25 | +3 AP Per Second | 94 SRe, 94 ERe, 94 CRe', cost: 760, level: 40, renown: 65 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+71 Willpower' },
                { pieces: 3, bonus: '+78 Wounds' },
                { pieces: 4, bonus: 'Exuberance - On Casting Heal: 20% chance to recover 35 AP' },
                { pieces: 5, bonus: '+5% Healing Critical Chance' },
                { pieces: 6, bonus: 'Increasing Impetus - On Attacking Target or Direct Heal Dealt: 5% chance to reduce build times by 25% for 5s' },
                { pieces: 7, bonus: 'On Being Attacked: 10% chance to reduce incoming damage by 4% for 10s' }
            ],
            totalStats: 'Armor: 1328 | WP: 159, TOU: 11, INI: 162, WOU: 90 | 188 SRe, 188 ERe, 188 CRe'
        },
        'shaman_goblin_healer_rr60_victorious': {
            setName: 'Victorious Set (Ranked)',
            pieces: [
                { slot: 'Head', name: 'Victorious Morkyfeets', stats: 'Armor: 235 | INT: 19, TOU: 18, INI: 14 | +2% Magic Crit', cost: 648, level: 40, renown: 66 },
                { slot: 'Chest', name: 'Victorious Robefings', stats: 'Armor: 308 | INT: 28, INI: 24 | +4 AP Per Second, +23 Magic Power', cost: 1360, level: 40, renown: 68 },
                { slot: 'Hands', name: 'Victorious Greenbringas', stats: 'Armor: 235 | INT: 30, TOU: 11, INI: 11 | +3% Reduced Chance to be Disrupted', cost: 752, level: 40, renown: 66 },
                { slot: 'Shoulders', name: 'Victorious Sholdafings', stats: 'Armor: 275 | INT: 32, TOU: 10, INI: 20 | +2% Magic Crit', cost: 1024, level: 40, renown: 67 },
                { slot: 'Belt', name: 'Victorious Waaaghat', stats: 'Armor: 275 | INT: 27, INI: 23, WOU: 15 | +3% Reduced Chance to be Disrupted', cost: 1128, level: 40, renown: 67 },
                { slot: 'Ring', name: 'Victorious Bitskeepa', stats: 'INT: 25, TOU: 12, INI: 23 | +36 Magic Power | 94 SRe, 94 ERe, 94 CRe', cost: 456, level: 40, renown: 65 },
                { slot: 'Cloak', name: 'Victorious Greencloak', stats: 'INT: 25, INI: 10, WOU: 16 | +2% Magic Crit | 94 SRe, 94 ERe, 94 CRe', cost: 760, level: 40, renown: 65 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+71 Intelligence' },
                { pieces: 3, bonus: '+78 Wounds' },
                { pieces: 4, bonus: 'Endure - On Being Hit: 15% chance to reduce attackers Str, BS and Int by 130 while increasing your Initiative by 130 for 10s' },
                { pieces: 5, bonus: '+5% Magic Critical Chance' },
                { pieces: 6, bonus: 'Increasing Impetus - On Attacking Target or Direct Heal Dealt: 5% chance to reduce build times by 25% for 5s' },
                { pieces: 7, bonus: 'Boost III - On Hit: 5% chance to increase your critical hit rate by 9% for 9s' }
            ],
            totalStats: 'Armor: 1328 | INT: 186, TOU: 33, INI: 129, WOU: 45 | 188 SRe, 188 ERe, 188 CRe'
        },
        'shaman_goblin_healer_rr70': {
            setName: 'Sovereign Set of da Great Green',
            pieces: [
                { slot: 'Head', name: 'Sovereign Morkyfeets of da Great Green', stats: 'Armor: 247 | WP: 30, INI: 17, WOU: 21 | +2 Morale Per Second', cost: 44, currency: 'War Crests', level: 40, renown: 76 },
                { slot: 'Chest', name: 'Sovereign Robefings of da Great Green', stats: 'Armor: 334 | WP: 30, TOU: 20, INI: 25, WOU: 20 | +2 AP Per Second', cost: 79, currency: 'War Crests', level: 40, renown: 78 },
                { slot: 'Hands', name: 'Sovereign Greenbringas of da Great Green', stats: 'Armor: 247 | WP: 28, INI: 19, WOU: 20 | +17 Healing Power', cost: 38, currency: 'War Crests', level: 40, renown: 76 },
                { slot: 'Shoulders', name: 'Sovereign Sholdafings of da Great Green', stats: 'Armor: 296 | WP: 29, TOU: 20, INI: 22 | +2% Healing Crit', cost: 59, currency: 'War Crests', level: 40, renown: 77 },
                { slot: 'Belt', name: 'Sovereign Waaaghat of da Great Green', stats: 'Armor: 296 | WP: 31, TOU: 20, WOU: 20 | +30 Healing Power', cost: 65, currency: 'War Crests', level: 40, renown: 77 },
                { slot: 'Ring', name: 'Sovereign Bitskeepa of da Great Green', stats: 'WP: 20, TOU: 14, INI: 20, WOU: 20 | +2% Dodge, +2% Disrupt | 101 SRe, 101 ERe, 102 CRe', cost: 26, currency: 'War Crests', level: 40, renown: 75 },
                { slot: 'Cloak', name: 'Sovereign Waaaghchain of da Great Green', stats: 'WP: 29, INI: 18 | +2 AP Per Second, +2% Reduced Armor Pen | 87 SRe, 87 ERe, 86 CRe', cost: 75, currency: 'War Crests', level: 40, renown: 78 },
                { slot: 'Ring', name: 'Sovereign Waaaghfings of da Great Green', stats: 'WP: 18, INI: 22, WOU: 18 | +2% Healing Crit | 102 SRe, 101 ERe, 101 CRe', cost: 33, currency: 'War Crests', level: 40, renown: 75 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+80 Willpower' },
                { pieces: 3, bonus: '+88 Wounds' },
                { pieces: 4, bonus: '+6% Reduced Armor Penetration' },
                { pieces: 5, bonus: '+6% Healing Critical Chance' },
                { pieces: 6, bonus: '+2 Path of Mork Abilities' },
                { pieces: 7, bonus: 'On Heal: 10% chance to recover 60 Action Points over 3 seconds' },
                { pieces: 8, bonus: 'Gain ability: Absolute Preservation' }
            ],
            totalStats: 'Armor: 1420 | WP: 215, TOU: 60, INI: 137, WOU: 119 | 290 SRe, 289 ERe, 289 CRe'
        },
        'shaman_goblin_healer_rr70_windbreaker': {
            setName: 'Sovereign Set of da Windbreaker',
            pieces: [
                { slot: 'Head', name: 'Sovereign Morkyfeets of da Windbreaker', stats: 'Armor: 247 | INT: 23, INI: 18, WOU: 17 | +2% Magic Crit', cost: 44, currency: 'War Crests', level: 40, renown: 76 },
                { slot: 'Chest', name: 'Sovereign Robefings of da Windbreaker', stats: 'Armor: 334 | INT: 31, INI: 27, WOU: 27 | +4 AP Per Second', cost: 79, currency: 'War Crests', level: 40, renown: 78 },
                { slot: 'Hands', name: 'Sovereign Greenbringas of da Windbreaker', stats: 'Armor: 247 | INT: 26, INI: 20, WOU: 19 | +20 Magic Power', cost: 38, currency: 'War Crests', level: 40, renown: 76 },
                { slot: 'Shoulders', name: 'Sovereign Sholdafings of da Windbreaker', stats: 'Armor: 296 | INT: 30, INI: 20, WOU: 21 | +2% Magic Crit', cost: 59, currency: 'War Crests', level: 40, renown: 77 },
                { slot: 'Belt', name: 'Sovereign Waaaghat of da Windbreaker', stats: 'Armor: 296 | INT: 25, INI: 26, WOU: 24 | +25 Magic Power', cost: 65, currency: 'War Crests', level: 40, renown: 77 },
                { slot: 'Ring', name: 'Sovereign Bitskeepa of da Windbreaker', stats: 'INT: 20, TOU: 14, INI: 20 | +2% Dodge, +2% Disrupt | 101 SRe, 101 ERe, 102 CRe', cost: 26, currency: 'War Crests', level: 40, renown: 75 },
                { slot: 'Cloak', name: 'Sovereign Waaaghchain of da Windbreaker', stats: 'INT: 27, INI: 22 | +4 AP Per Second | 87 SRe, 87 ERe, 86 CRe', cost: 75, currency: 'War Crests', level: 40, renown: 78 },
                { slot: 'Ring', name: 'Sovereign Waaaghfings of da Windbreaker', stats: 'INT: 21, INI: 18, WOU: 19 | +2% Magic Crit | 102 SRe, 101 ERe, 101 CRe', cost: 33, currency: 'War Crests', level: 40, renown: 75 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+80 Intelligence' },
                { pieces: 3, bonus: '+88 Wounds' },
                { pieces: 4, bonus: '+6% Reduced Chance to be Disrupted' },
                { pieces: 5, bonus: '+6% Magic Critical Chance' },
                { pieces: 6, bonus: '+2 Path of Gork Abilities' },
                { pieces: 7, bonus: 'On Hit: 10% chance to increase target\'s chance to be critically hit by 7% for 10 seconds' },
                { pieces: 8, bonus: 'Gain ability: Unshackled Freedom' }
            ],
            totalStats: 'Armor: 1420 | INT: 203, TOU: 27, INI: 171, WOU: 114 | 290 SRe, 289 ERe, 289 CRe'
        },
        'shaman_goblin_healer_rr70_overlord': {
            setName: 'Overlord Set (Auxiliary)',
            pieces: [
                { slot: 'Shoulders', name: 'Sholdafings of the Overlord', stats: 'Armor: 240 | WP: 23, TOU: 18, INI: 12, WOU: 14 | +2% Reduction in being Crit', cost: 80, currency: 'War Crests', level: 40 },
                { slot: 'Belt', name: 'Waaaghat of the Overlord', stats: 'Armor: 240 | WP: 28, INI: 10, WOU: 14 | +2% Reduction in being Crit, +12 Healing Power', cost: 80, currency: 'War Crests', level: 40 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+61 Wounds' }
            ],
            totalStats: 'Armor: 480 | WP: 51, TOU: 18, INI: 22, WOU: 28'
        },
        'shaman_goblin_healer_rr70_imperator': {
            setName: 'Imperator Set (Auxiliary)',
            pieces: [
                { slot: 'Shoulders', name: 'Sholdafings of the Imperator', stats: 'Armor: 240 | INT: 23, TOU: 12, INI: 15, WOU: 14 | +2% Reduced Chance to be Disrupted', cost: 80, currency: 'War Crests', level: 40 },
                { slot: 'Belt', name: 'Waaaghat of the Imperator', stats: 'Armor: 240 | INT: 28, INI: 10, WOU: 14 | +2% Reduced Chance to be Disrupted, +12 Magic Power', cost: 80, currency: 'War Crests', level: 40 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+61 Initiative' }
            ],
            totalStats: 'Armor: 480 | INT: 51, TOU: 12, INI: 25, WOU: 28'
        },
        'shaman_goblin_healer_rr70_genesis_curative': {
            setName: 'Genesis Curative Set (Accessories)',
            pieces: [
                { slot: 'Ring', name: 'Genesis Aspect of the Curative', stats: 'INI: 24 | +36 Healing Power | 64 SRe, 64 ERe, 64 CRe', cost: 1, currency: 'Genesis Aspect', level: 36 },
                { slot: 'Ring', name: 'Genesis Fragment of the Curative', stats: 'WP: 24 | +1% Dodge, +1% Disrupt | 57 SRe, 57 ERe, 57 CRe', cost: 1, currency: 'Genesis Fragment', level: 36 },
                { slot: 'Ring', name: 'Genesis Remnant of the Curative', stats: 'WP: 24, WOU: 24 | 64 SRe, 64 ERe, 64 CRe', cost: 1, currency: 'Genesis Remnant', level: 36 },
                { slot: 'Ring', name: 'Genesis Shard of the Curative', stats: '+2% Dodge, +2% Disrupt | 55 SRe, 55 ERe, 55 CRe', cost: 1, currency: 'Genesis Shard', level: 36 },
                { slot: 'Cloak', name: 'Genesis Cloak of the Curative', stats: '+4 AP Per Second | 53 SRe, 53 ERe, 53 CRe', cost: 1, currency: 'Genesis Cloak', level: 36 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+37 Willpower' },
                { pieces: 3, bonus: '+3% Reduction to be Critically Hit' },
                { pieces: 4, bonus: '+3% Armor Penetration Reduced' },
                { pieces: 5, bonus: '+3% Healing Critical Chance' }
            ],
            totalStats: 'WP: 48, INI: 24, WOU: 24 | 293 SRe, 293 ERe, 293 CRe'
        },
        'shaman_goblin_healer_rr70_genesis_scholar': {
            setName: 'Genesis Scholar Set (Accessories)',
            pieces: [
                { slot: 'Ring', name: 'Genesis Aspect of the Scholar', stats: 'INI: 24 | +36 Magic Power | 64 SRe, 64 ERe, 64 CRe', cost: 1, currency: 'Genesis Aspect', level: 36 },
                { slot: 'Ring', name: 'Genesis Fragment of the Scholar', stats: 'INT: 24 | +1% Dodge, +1% Disrupt | 57 SRe, 57 ERe, 57 CRe', cost: 1, currency: 'Genesis Fragment', level: 36 },
                { slot: 'Ring', name: 'Genesis Remnant of the Scholar', stats: 'INT: 24, WOU: 24 | 64 SRe, 64 ERe, 64 CRe', cost: 1, currency: 'Genesis Remnant', level: 36 },
                { slot: 'Ring', name: 'Genesis Shard of the Scholar', stats: '+2% Dodge, +2% Disrupt | 55 SRe, 55 ERe, 55 CRe', cost: 1, currency: 'Genesis Shard', level: 36 },
                { slot: 'Cloak', name: 'Genesis Cloak of the Scholar', stats: 'INT: 28 | +4 AP Per Second | 53 SRe, 53 ERe, 53 CRe', cost: 1, currency: 'Genesis Cloak', level: 36 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+37 Intelligence' },
                { pieces: 3, bonus: '+3% Reduce Chance to be Disrupt' },
                { pieces: 4, bonus: '+3% Reduce Chance to be Critically Hit' },
                { pieces: 5, bonus: '+3% Magic Critical Chance' }
            ],
            totalStats: 'INT: 76, INI: 24, WOU: 4 | 293 SRe, 293 ERe, 293 CRe'
        },
        'shaman_goblin_healer_rr70_warrant_medic': {
            setName: 'Warrant Medic Set (Accessories)',
            pieces: [
                { slot: 'Ring', name: 'Icon of the Medic', stats: 'WP: 17, INI: 12, WOU: 13 | 62 SRe, 62 ERe, 62 CRe', cost: 1, currency: 'Warrant', level: 36 },
                { slot: 'Ring', name: 'Mark of the Medic', stats: 'WP: 24 | +1% Disrupt | 68 SRe, 68 ERe, 68 CRe', cost: 1, currency: 'Warrant', level: 36 },
                { slot: 'Belt', name: 'Cincture of the Medic', stats: 'WP: 16 | +2 AP Per Second, +18 Healing Power | 65 SRe, 65 ERe, 65 CRe', cost: 1, currency: 'Warrant', level: 36 }
            ],
            setBonuses: [
                { pieces: 3, bonus: '+4 Morale Per Second' }
            ],
            totalStats: 'WP: 57, INI: 12, WOU: 13 | 195 SRe, 195 ERe, 195 CRe'
        },
        'shaman_goblin_healer_rr70_warrant_mender': {
            setName: 'Warrant Mender Set (Accessories)',
            pieces: [
                { slot: 'Ring', name: 'Icon of the Mender', stats: 'WP: 20, INI: 16, WOU: 16 | 69 SRe, 69 ERe, 69 CRe', cost: 1, currency: 'Warrant', level: 36 },
                { slot: 'Ring', name: 'Mark of the Mender', stats: 'WP: 19 | +2% Disrupt | 72 SRe, 72 ERe, 72 CRe', cost: 1, currency: 'Warrant', level: 36 },
                { slot: 'Cloak', name: 'Cloak of the Mender', stats: 'WP: 16 | +2 AP Per Second, +18 Healing Power | 65 SRe, 65 ERe, 65 CRe', cost: 1, currency: 'Warrant', level: 36 }
            ],
            setBonuses: [
                { pieces: 3, bonus: '+3% Reduction to be Critically Hit' }
            ],
            totalStats: 'WP: 55, INI: 16, WOU: 16 | 206 SRe, 206 ERe, 206 CRe'
        },
        'shaman_goblin_healer_rr70_warrant_arcanist': {
            setName: 'Warrant Arcanist Set (Accessories)',
            pieces: [
                { slot: 'Ring', name: 'Icon of the Arcanist', stats: 'INT: 17, INI: 12, WOU: 13 | 62 SRe, 62 ERe, 62 CRe', cost: 1, currency: 'Warrant', level: 36 },
                { slot: 'Ring', name: 'Mark of the Arcanist', stats: 'INT: 24 | +1% Disrupt | 68 SRe, 68 ERe, 68 CRe', cost: 1, currency: 'Warrant', level: 36 },
                { slot: 'Belt', name: 'Cincture of the Arcanist', stats: 'INT: 16, INI: 15 | +18 Magic Power | 60 SRe, 60 ERe, 60 CRe', cost: 1, currency: 'Warrant', level: 36 }
            ],
            setBonuses: [
                { pieces: 3, bonus: '+4 Morale Per Second' }
            ],
            totalStats: 'INT: 57, INI: 12, WOU: 28 | 190 SRe, 190 ERe, 190 CRe'
        },
        'shaman_goblin_healer_rr70_warrant_seer': {
            setName: 'Warrant Seer Set (Accessories)',
            pieces: [
                { slot: 'Ring', name: 'Icon of the Seer', stats: 'INT: 20, INI: 16, WOU: 16 | 69 SRe, 69 ERe, 69 CRe', cost: 1, currency: 'Warrant', level: 36 },
                { slot: 'Ring', name: 'Mark of the Seer', stats: 'INT: 19 | +2% Disrupt | 72 SRe, 72 ERe, 72 CRe', cost: 1, currency: 'Warrant', level: 36 },
                { slot: 'Cloak', name: 'Cloak of the Seer', stats: 'INT: 16 | +2 AP Per Second, +18 Magic Power | 65 SRe, 65 ERe, 65 CRe', cost: 1, currency: 'Warrant', level: 36 }
            ],
            setBonuses: [
                { pieces: 3, bonus: '+3% Reduced Chance to be Disrupted' }
            ],
            totalStats: 'INT: 55, INI: 16, WOU: 16 | 206 SRe, 206 ERe, 206 CRe'
        },

        // ========== SHAMAN DPS SETS ==========
        'shaman_goblin_dps_rr8_hunter': {
            setName: 'Hunter\'s Set',
            pieces: [
                { slot: 'Head', name: 'Hunter\'s Morkyfeets', stats: 'Armor: 40 | INT: 4, TOU: 3, WP: 5, WOU: 5', level: 8, renown: 8 },
                { slot: 'Chest', name: 'Hunter\'s Robefings', stats: 'Armor: 50 | INT: 8, WP: 4, WOU: 5 | +1% Disrupt', level: 8, renown: 8 },
                { slot: 'Hands', name: 'Hunter\'s Greenbringas', stats: 'Armor: 40 | INT: 4, TOU: 8, WP: 5', level: 8, renown: 8 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+17 Toughness' },
                { pieces: 3, bonus: '+2% Magic Critical Chance' }
            ],
            totalStats: 'Armor: 130 | INT: 16, TOU: 11, WP: 14, WOU: 10'
        },
        'shaman_goblin_dps_rr8': {
            setName: 'Set of the Braggart',
            pieces: [
                { slot: 'Head', name: 'Braggart Morkyfeets', stats: 'Armor: 44 | INT: 6, TOU: 4, INI: 4, WOU: 4', level: 8, renown: 8 },
                { slot: 'Chest', name: 'Braggart Robefings', stats: 'Armor: 55 | INT: 8, TOU: 5, WOU: 6 | +1% Reduced chance to be Disrupted', level: 8, renown: 8 },
                { slot: 'Hands', name: 'Braggart Bits Keepa', stats: 'INT: 4, INI: 3, WOU: 2 | +1% Magic Crit | 23 SRe, 25 ERe, 25 CRe', level: 8, renown: 8 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+18 Intelligence' },
                { pieces: 3, bonus: '+22 Toughness' }
            ],
            totalStats: 'Armor: 99 | INT: 18, TOU: 9, INI: 7, WOU: 12'
        },
        'shaman_goblin_dps_rr16': {
            setName: 'Set of the Challenger',
            pieces: [
                { slot: 'Head', name: 'Challenger Morkyfeets', stats: 'Armor: 84 | INT: 14, TOU: 7, INI: 7, WOU: 8', level: 16, renown: 16 },
                { slot: 'Chest', name: 'Challenger Robefings', stats: 'Armor: 105 | INT: 18, TOU: 5, INI: 3, WOU: 9 | +2% Reduced chance to be Disrupted', level: 16, renown: 16 },
                { slot: 'Hands', name: 'Challenger Greenbringas', stats: 'Armor: 84 | INT: 18, TOU: 8, INI: 4, WOU: 6', level: 16, renown: 16 },
                { slot: 'Shoulders', name: 'Challenger Shouldafings', stats: 'Armor: 95 | TOU: 14, INI: 10, WOU: 8 | +1% Magic Crit', level: 16, renown: 16 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+32 Intelligence' },
                { pieces: 3, bonus: '+38 Wounds' },
                { pieces: 4, bonus: '+2% Magic Critical Chance' }
            ],
            totalStats: 'Armor: 368 | INT: 50, TOU: 34, INI: 24, WOU: 31'
        },
        'shaman_goblin_dps_rr26': {
            setName: 'Duelist Set',
            pieces: [
                { slot: 'Head', name: 'Morkyfeets of the Duelist', stats: 'Armor: 132 | INT: 24, TOU: 7, INI: 7, WOU: 8', level: 26, renown: 26 },
                { slot: 'Chest', name: 'Robefings of the Duelist', stats: 'Armor: 190 | INT: 32, INI: 9, WOU: 10 | +40 HP Every 4s', level: 26, renown: 26 },
                { slot: 'Hands', name: 'Greenbringas of the Duelist', stats: 'Armor: 140 | INT: 25, TOU: 7, INI: 6 | +2% Magic Crit', level: 26, renown: 26 },
                { slot: 'Shoulders', name: 'Sholdafings of the Duelist', stats: 'Armor: 171 | INT: 23, TOU: 15, INI: 9 | +1% Disrupt Strikethrough', level: 26, renown: 26 },
                { slot: 'Belt', name: 'Waaaghat of the Duelist', stats: 'Armor: 162 | INT: 32, TOU: 10, INI: 3, WOU: 12', level: 26, renown: 26 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+47 Intelligence' },
                { pieces: 3, bonus: '+240 Corporeal Resistance' },
                { pieces: 4, bonus: 'On Being Hit: 10% chance to reduce build times by half a second for 10s' },
                { pieces: 5, bonus: '+4% Magic Critical Chance' }
            ],
            totalStats: 'Armor: 795 | INT: 136, TOU: 32, INI: 35, WOU: 36'
        },
        'shaman_goblin_dps_rr35': {
            setName: 'Mercenary Set',
            pieces: [
                { slot: 'Head', name: 'Morkyfeets of the Mercenary', stats: 'Armor: 183 | INT: 21, TOU: 13, INI: 10 | +2% Dodge', level: 35, renown: 35 },
                { slot: 'Chest', name: 'Robefings of the Mercenary', stats: 'Armor: 236 | INT: 30, INI: 17, WOU: 12 | +3 AP Per Second', level: 35, renown: 35 },
                { slot: 'Hands', name: 'Greenbringas of the Mercenary', stats: 'Armor: 183 | INT: 11, TOU: 23, INI: 9, WOU: 14', level: 35, renown: 35 },
                { slot: 'Shoulders', name: 'Sholdafings of the Mercenary', stats: 'Armor: 212 | INT: 18, TOU: 25, INI: 12 | +1% Reduction in being Crit', level: 35, renown: 35 },
                { slot: 'Belt', name: 'Waaaghat of the Mercenary', stats: 'Armor: 212 | TOU: 15, INI: 13 | +2% Disrupt', level: 35, renown: 35 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+53 Intelligence' },
                { pieces: 3, bonus: '+290 Corporeal Resistance' },
                { pieces: 4, bonus: '+1 Path of Gork Abilities' },
                { pieces: 5, bonus: '+5% Magic Critical Chance' }
            ],
            totalStats: 'Armor: 1026 | INT: 29, TOU: 28, INI: 61, WOU: 26'
        },
        'shaman_goblin_dps_rr45': {
            setName: 'Dominator Set',
            pieces: [
                { slot: 'Head', name: 'Dominator Morkyfeets', stats: 'Armor: 192 | INT: 16, INI: 10, WOU: 14 | +2% Magic Crit', level: 40, renown: 45 },
                { slot: 'Chest', name: 'Dominator Robefings', stats: 'Armor: 255 | INT: 33, TOU: 19, INI: 13 | +3 AP Per Second', level: 40, renown: 45 },
                { slot: 'Hands', name: 'Dominator Greenbringas', stats: 'Armor: 192 | INT: 25, TOU: 15, INI: 8 | +2% Reduced Chance to be Disrupted', level: 40, renown: 45 },
                { slot: 'Shoulders', name: 'Dominator Sholdafings', stats: 'Armor: 225 | INT: 29, TOU: 18, INI: 12 | +2 Morale Per Second', level: 40, renown: 45 },
                { slot: 'Belt', name: 'Dominator Waaaghat', stats: 'Armor: 225 | INT: 10, INI: 30, WOU: 17 | +2% Reduced Chance to be Disrupted', level: 40, renown: 45 },
                { slot: 'Accessory', name: 'Dominator Bitskeepa', stats: 'INT: 18, INI: 6, WOU: 12 | +36 Magic Power | 83 SRe, 77 ERe, 83 CRe', level: 40, renown: 45 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+57 Intelligence' },
                { pieces: 3, bonus: '+63 Initiative' },
                { pieces: 4, bonus: '+69 Wounds' },
                { pieces: 5, bonus: 'Domination - On Hit: 25% chance to steal 100 Toughness from target for 10s' },
                { pieces: 6, bonus: '+5% Magic Critical Chance' }
            ],
            totalStats: 'Armor: 1089 | INT: 133, TOU: 52, INI: 79, WOU: 43'
        },
        'shaman_goblin_dps_rr55': {
            setName: 'Oppressor Set',
            pieces: [
                { slot: 'Head', name: 'Oppressor Morkyfeets', stats: 'Armor: 209 | INT: 15, INI: 18, WOU: 10 | +2% Magic Crit', level: 40, renown: 55 },
                { slot: 'Chest', name: 'Oppressor Robefings', stats: 'Armor: 274 | INT: 28, INI: 19 | +23 Magic Power', level: 40, renown: 55 },
                { slot: 'Hands', name: 'Oppressor Greenbringas', stats: 'Armor: 209 | INT: 26, TOU: 8, INI: 11 | +3% Reduced Chance to be Disrupted', level: 40, renown: 55 },
                { slot: 'Shoulders', name: 'Oppressor Sholdafings', stats: 'Armor: 241 | INT: 34, TOU: 10, INI: 20 | +1% Magic Crit', level: 40, renown: 55 },
                { slot: 'Belt', name: 'Oppressor Waaaghat', stats: 'Armor: 241 | INT: 24, INI: 20, WOU: 12 | +3% Reduced Chance to be Disrupted', level: 40, renown: 55 },
                { slot: 'Accessory', name: 'Oppressor Bitskeepa', stats: 'INT: 21, TOU: 12, INI: 19 | +36 Magic Power | 87 SRe, 86 ERe, 86 CRe', level: 40, renown: 55 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+62 Intelligence' },
                { pieces: 3, bonus: '+68 Wounds' },
                { pieces: 4, bonus: 'Endure - On Being Hit: 15% chance to reduce attackers STR, BS and INT by 110, increase your INI by 110 for 10s' },
                { pieces: 5, bonus: '+5% Magic Critical Chance' },
                { pieces: 6, bonus: 'Increasing Impetus - On Attack or Direct Heal: 5% chance to reduce build times by 25% for 5s' }
            ],
            totalStats: 'Armor: 1174 | INT: 148, TOU: 30, INI: 107, WOU: 22'
        },
        'shaman_goblin_dps_rr60': {
            setName: 'Warlord Set',
            pieces: [
                { slot: 'Head', name: 'Warlord Morkyfeets', stats: 'Armor: 241 | TOU: 10, INI: 20, INT: 20, WOU: 28', level: 40, renown: 71 },
                { slot: 'Chest', name: 'Warlord Robefings', stats: 'Armor: 323 | TOU: 19, INI: 28, INT: 18, WOU: 20 | +80 HP Every 4s', level: 40, renown: 73 },
                { slot: 'Hands', name: 'Warlord Greenbringas', stats: 'Armor: 241 | TOU: 22, INI: 18, INT: 18 | +2% Magic Crit', level: 40, renown: 71 },
                { slot: 'Shoulders', name: 'Warlord Sholdafings', stats: 'Armor: 286 | TOU: 21, INI: 26, WOU: 20 | +4% Reduced Armor Pen', level: 40, renown: 72 },
                { slot: 'Belt', name: 'Warlord Waaaghat', stats: 'Armor: 286 | TOU: 20, INI: 30, WOU: 21 | +2% Magic Crit', level: 40, renown: 72 },
                { slot: 'Accessory', name: 'Warlord Bitskeepa', stats: 'INI: 20, INT: 34 | +2% Dodge, +2% Disrupt', level: 40, renown: 70 },
                { slot: 'Cloak', name: 'Warlord Greencloak', stats: 'TOU: 14, INI: 25, WOU: 24 | +3 AP Per Second | 102 SRe, 101 ERe, 101 CRe', level: 40, renown: 70 },
                { slot: 'Ring', name: 'Warlord Waaagh Beads', stats: 'INI: 25, WOU: 14 | +2 Morale Per Second, +2% Magic Crit | 87 SRe, 87 ERe, 86 CRe', level: 40, renown: 73 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+75 Intelligence' },
                { pieces: 3, bonus: '+83 Wounds' },
                { pieces: 4, bonus: '+6% Reduced Chance to be Disrupted' },
                { pieces: 5, bonus: '+99 Magic Power' },
                { pieces: 6, bonus: '+2 Path of Da Green Abilities' },
                { pieces: 7, bonus: 'Boost V - On Hit: 10% chance to increase crit rate by 9% and crit damage by 12% for 9s' },
                { pieces: 8, bonus: 'Gain ability: Just a bit mor\'' }
            ],
            totalStats: 'Armor: 1377 | TOU: 84, INI: 196, INT: 56, WOU: 179'
        },
        'shaman_goblin_dps_rr60_bloodlord': {
            setName: 'Bloodlord Set',
            pieces: [
                { slot: 'Head', name: 'Bloodlord Morkyfeets', stats: 'Armor: 221 | INT: 27, INI: 10, WOU: 18 | +2% Dodge', level: 40 },
                { slot: 'Chest', name: 'Bloodlord Robefings', stats: 'Armor: 292 | INT: 29, TOU: 12, INI: 25, WOU: 19 | +1 Morale Per Second', level: 40 },
                { slot: 'Hands', name: 'Bloodlord Greenbringas', stats: 'Armor: 221 | INT: 26, TOU: 10, INI: 15, WOU: 16', level: 40 },
                { slot: 'Shoulders', name: 'Bloodlord Sholdafings', stats: 'Armor: 257 | INT: 27, INI: 21, WOU: 10 | +2% Magic Crit', level: 40 },
                { slot: 'Belt', name: 'Bloodlord Waaaghat', stats: 'Armor: 257 | INT: 29, TOU: 14, INI: 17 | +3% Disrupt', level: 40 },
                { slot: 'Accessory', name: 'Bloodlord Bitskeepa', stats: 'INT: 21, INI: 15, WOU: 17 | +3 Morale Per Second | 91 SRe, 91 ERe, 91 CRe', level: 40 },
                { slot: 'Cloak', name: 'Bloodlord Greencloak', stats: 'INT: 22, INI: 15, WOU: 15 | +24 Magic Power | 91 SRe, 91 ERe, 91 CRe', level: 40 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+66 Wounds' },
                { pieces: 3, bonus: '+73 Initiative' },
                { pieces: 4, bonus: 'Boost II - On Hit: 5% chance to increase your critical hit for 10s' },
                { pieces: 5, bonus: '+87 Intelligence' },
                { pieces: 6, bonus: 'On Hit: 10% chance to increase all damage taken by your target for 10s' },
                { pieces: 7, bonus: 'Surging - On Hit: 10% chance to deal damage to an additional target within range' }
            ],
            totalStats: 'Armor: 1248 | INT: 181, TOU: 36, INI: 118, WOU: 95 | 182 SRe, 182 ERe, 182 CRe'
        },
        'shaman_goblin_dps_rr60_victorious': {
            setName: 'Victorious Set (Ranked)',
            pieces: [
                { slot: 'Head', name: 'Victorious Morkyfeets', stats: 'Armor: 235 | INT: 19, INI: 14, WOU: 18 | +2% Magic Crit', level: 40, renown: 60 },
                { slot: 'Chest', name: 'Victorious Robefings', stats: 'Armor: 308 | INT: 28, INI: 24 | +4 AP Per Second, +23 Magic Power', level: 40, renown: 62 },
                { slot: 'Hands', name: 'Victorious Greenbringas', stats: 'Armor: 235 | INT: 30, TOU: 11, INI: 11, WOU: 11 | +3% Reduced Chance to be Disrupted', level: 40, renown: 60 },
                { slot: 'Shoulders', name: 'Victorious Sholdafings', stats: 'Armor: 275 | INT: 32, TOU: 10, INI: 20 | +2% Magic Crit', level: 40, renown: 61 },
                { slot: 'Belt', name: 'Victorious Waaaghat', stats: 'Armor: 275 | INT: 27, INI: 15, WOU: 23 | +3% Reduced Chance to be Disrupted', level: 40, renown: 61 },
                { slot: 'Accessory', name: 'Victorious Bitskeepa', stats: 'INT: 25, INI: 23, WOU: 12 | +36 Magic Power | 94 SRe, 94 ERe, 94 CRe', level: 40, renown: 60 },
                { slot: 'Cloak', name: 'Victorious Greencloak', stats: 'INT: 16, INI: 10, WOU: 25 | +2% Magic Crit | 94 SRe, 94 ERe, 94 CRe', level: 40, renown: 60 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+71 Intelligence' },
                { pieces: 3, bonus: '+78 Wounds' },
                { pieces: 4, bonus: 'Endure - On Being Hit: 15% chance to reduce attackers STR, BS and INT by 130 while increasing your INI by 130 for 10s' },
                { pieces: 5, bonus: '+5% Magic Critical Chance' },
                { pieces: 6, bonus: 'Increasing Impetus - On Attacking Target or Direct Heal Dealt: 5% chance to reduce build times by 25% for 5s' },
                { pieces: 7, bonus: 'Boost III - On Hit: 5% chance to increase your critical hit rate by 9% for 9s' }
            ],
            totalStats: 'Armor: 1328 | INT: 186, TOU: 33, INI: 129, WOU: 45 | 188 SRe, 188 ERe, 188 CRe'
        },
        'shaman_goblin_dps_rr70': {
            setName: 'Sovereign Set of da Windbreaker',
            pieces: [
                { slot: 'Head', name: 'Sovereign Morkyfeets of da Windbreaker', stats: 'Armor: 247 | INT: 17, INI: 18, WOU: 23 | +2% Magic Crit', level: 40, renown: 74 },
                { slot: 'Chest', name: 'Sovereign Robefings of da Windbreaker', stats: 'Armor: 334 | TOU: 27, INI: 27, WOU: 31 | +4 AP Per Second', level: 40, renown: 78 },
                { slot: 'Hands', name: 'Sovereign Greenbringas of da Windbreaker', stats: 'Armor: 247 | INT: 19, INI: 20, WOU: 26 | +20 Magic Power', level: 40, renown: 74 },
                { slot: 'Shoulders', name: 'Sovereign Sholdafings of da Windbreaker', stats: 'Armor: 296 | INT: 21, INI: 20, WOU: 30 | +2% Magic Crit', level: 40, renown: 76 },
                { slot: 'Belt', name: 'Sovereign Waaaghat of da Windbreaker', stats: 'Armor: 296 | INT: 24, INI: 26, WOU: 25 | +25 Magic Power', level: 40, renown: 76 },
                { slot: 'Accessory', name: 'Sovereign Bitskeepa of da Windbreaker', stats: 'INT: 14, INI: 20, WOU: 20 | +2% Dodge, +2% Disrupt | 101 SRe, 101 ERe, 102 CRe', level: 40, renown: 70 },
                { slot: 'Cloak', name: 'Sovereign Waaaghchain of da Windbreaker', stats: 'INI: 22, WOU: 27 | +4 AP Per Second | 87 SRe, 87 ERe, 86 CRe', level: 40, renown: 70 },
                { slot: 'Ring', name: 'Sovereign Waaaghfings of da Windbreaker', stats: 'INT: 19, INI: 18, WOU: 21 | +2% Magic Crit | 102 SRe, 101 ERe, 101 CRe', level: 40, renown: 78 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+80 Intelligence' },
                { pieces: 3, bonus: '+88 Wounds' },
                { pieces: 4, bonus: '+6% Reduced Chance to be Disrupted' },
                { pieces: 5, bonus: '+6% Magic Critical Chance' },
                { pieces: 6, bonus: '+2 Path of Gork Abilities' },
                { pieces: 7, bonus: 'On Hit: 10% chance to increase target\'s chance to be critically hit by 7% for 10s' },
                { pieces: 8, bonus: 'Gain ability: Unshackled Freedom' }
            ],
            totalStats: 'Armor: 1420 | TOU: 27, INI: 171, INT: 114, WOU: 203'
        }
    });
}