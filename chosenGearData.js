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
            totalStats: 'Armor: 297 | STR: 8 | TOU: 17 | WS: 4 | INI: 4 | WOU: 10 | SRes: 33 | ERes: 20 | CRes: 20'
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
            totalStats: 'Armor: 297 | STR: 16 | TOU: 4 | WS: 12 | WOU: 14 | SRes: 23 | ERes: 25 | CRes: 25'
        }
    });
}

          
    

