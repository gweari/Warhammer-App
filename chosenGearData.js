// Chosen Gear Data
// This file contains all gear sets for the Chosen (Chaos) class

// Add Chosen gear to the main gearDatabase
if (typeof gearDatabase !== 'undefined' && gearDatabase.recommendations) {
    Object.assign(gearDatabase.recommendations, {
        chosen_decimator_rr8: {
            name: "Decimator Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 8,
            requiredRenown: 8,
            pieces: [
                { slot: "body", name: "Decimator Carapace", level: 8, renown: 8, armor: 165, str: 4, tou: 8, ini: 4, wounds: 4, bonus: "+1% Block" },
                { slot: "boots", name: "Decimator Darkboots", level: 8, renown: 8, armor: 132, str: 2, tou: 6, ws: 4, wounds: 6 },
                { slot: "belt", name: "Decimator Deathgirdle", level: 7, renown: 7, str: 2, tou: 3, wounds: 4, bonus: "+1% Reduced chance to be Critically Hit", sres: 33, eres: 20, cres: 20 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+18 Toughness" },
                { pieces: 3, bonus: "+22 Wounds" }
            ],
            totalStats: "Armor: 297 | STR: 8 | TOU: 17 | WS: 4 | INI: 4 | WOU: 10 | SRes: 33 | ERes: 20 | CRes: 20"
        },
        chosen_braggart_rr8: {
            name: "Set of the Braggart",
            class: "chosen",
            role: "tank",
            requiredLevel: 8,
            requiredRenown: 8,
            pieces: [
                { slot: "body", name: "Braggart Carapace", level: 8, renown: 8, armor: 165, str: 6, wounds: 8, ws: 5, bonus: "+1% Reduced chance to be Parried" },
                { slot: "boots", name: "Braggart Darkboots", level: 7, renown: 7, armor: 132, str: 6, tou: 2, ws: 4, wounds: 6 },
                { slot: "belt", name: "Braggart Deathgirdle", level: 7, renown: 7, str: 4, tou: 2, wounds: 3, bonus: "+1% Melee Critical Chance", sres: 23, eres: 25, cres: 25 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+18 Strength" },
                { pieces: 3, bonus: "+22 Toughness" }
            ],
            totalStats: "Armor: 297 | STR: 16 | TOU: 4 | WS: 12 | WOU: 14 | SRes: 23 | ERes: 25 | CRes: 25"
        },
        chosen_carnage_rr5: {
            name: "Set of Carnage",
            class: "chosen",
            role: "tank",
            requiredLevel: 5,
            pieces: [
                { slot: "body", name: "Carnage Carapace", level: 5, armor: 135, str: 4, tou: 7, ini: 5, wounds: 6 },
                { slot: "gloves", name: "Carnage Gauntlets", level: 5, armor: 108, str: 4, tou: 4, wounds: 3, ini: 5 },
                { slot: "boots", name: "Carnage Darkboots", level: 5, armor: 108, str: 5, tou: 6, ws: 2, wounds: 3 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+135 Armor" },
                { pieces: 3, bonus: "+20 Weapon Skill" }
            ],
            totalStats: "Armor: 351 | STR: 13 | TOU: 17 | WS: 7 | INI: 3 | WOU: 14"
        },
        chosen_hunter_rr8: {
            name: "Hunter's Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 8,
            pieces: [
                { slot: "body", name: "Hunter's Carapace", level: 8, armor: 150, str: 8, tou: 4, wounds: 5, bonus: "+1% Parry" },
                { slot: "gloves", name: "Hunter's Gauntlets", level: 7, armor: 120, tou: 8, ws: 5, wounds: 4 },
                { slot: "boots", name: "Hunter's Darkboots", level: 7, armor: 120, str: 5, tou: 5, ws: 3, wounds: 4 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+17 Initiative" },
                { pieces: 3, bonus: "+2% Melee Critical Chance" }
            ],
            totalStats: "Armor: 390 | STR: 13 | TOU: 17 | WS: 8 | WOU: 13"
        },
        chosen_protector_rr8: {
            name: "Protector's Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 8,
            pieces: [
                { slot: "body", name: "Protector's Carapace", level: 8, armor: 150, str: 6, tou: 8, ws: 2, wounds: 7 },
                { slot: "boots", name: "Protector's Darkboots", level: 7, armor: 120, tou: 7, wounds: 4, ini: 6 },
                { slot: "helm", name: "Protector's Skullcase", level: 7, armor: 135, str: 4, tou: 7, ws: 3, wounds: 5, bonus: "+4 Hit Points every 4s" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+2% Parry" },
                { pieces: 3, bonus: "+2% Reduced chance to be Critically Hit" }
            ],
            totalStats: "Armor: 405 | STR: 10 | TOU: 22 | WS: 5 | INI: 4 | WOU: 18"
        },
        chosen_obliterator_rr17: {
            name: "Obliterator Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 17,
            requiredRenown: 17,
            pieces: [
                { slot: "body", name: "Obliterator Carapace", level: 17, renown: 17, armor: 315, str: 6, tou: 15, wounds: 8, bonus: "+2% Block" },
                { slot: "gloves", name: "Obliterator Gauntlets", level: 16, renown: 16, armor: 252, str: 8, tou: 12, wounds: 9, ini: 7 },
                { slot: "boots", name: "Obliterator Darkboots", level: 16, renown: 15, armor: 252, str: 5, tou: 9, ws: 14, wounds: 8 },
                { slot: "helm", name: "Obliterator Skullcase", level: 17, armor: 285, str: 6, tou: 10, ini: 8, wounds: 8, bonus: "+1% Reduced chance to be Critically Hit" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+32 Toughness" },
                { pieces: 3, bonus: "+38 Wounds" },
                { pieces: 4, bonus: "+2% Block" }
            ],
            totalStats: "Armor: 1104 | STR: 25 | TOU: 46 | WS: 14 | INI: 22 | WOU: 33"
        },
        chosen_challenger_rr17: {
            name: "Set of the Challenger",
            class: "chosen",
            role: "tank",
            requiredLevel: 17,
            requiredRenown: 17,
            pieces: [
                { slot: "body", name: "Challenger Carapace", level: 17, renown: 17, armor: 315, str: 15, tou: 6, wounds: 5, ini: 9, bonus: "+2% Parry" },
                { slot: "gloves", name: "Challenger Gauntlets", level: 16, renown: 16, armor: 252, str: 14, tou: 7, wounds: 7, ini: 8 },
                { slot: "boots", name: "Challenger Darkboots", level: 16, renown: 15, armor: 252, str: 12, tou: 6, ws: 8, wounds: 10 },
                { slot: "shoulders", name: "Challenger Shoulderguard", level: 17, renown: 15, armor: 285, str: 6, tou: 9, ini: 8, wounds: 9, bonus: "+1% Melee Critical Chance" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+32 Strength" },
                { pieces: 3, bonus: "+38 Wounds" },
                { pieces: 4, bonus: "+2% Melee Critical Chance" }
            ],
            totalStats: "Armor: 1104 | STR: 47 | TOU: 28 | WS: 16 | INI: 12 | WOU: 36"
        },
        chosen_havoc_rr16: {
            name: "Set of Havoc",
            class: "chosen",
            role: "tank",
            requiredLevel: 16,
            pieces: [
                { slot: "body", name: "Havoc Carapace", level: 16, armor: 285, str: 5, tou: 12, wounds: 3, ini: 9, bonus: "+2% Disrupt" },
                { slot: "gloves", name: "Havoc Gauntlets", level: 13, armor: 228, str: 14, tou: 7, ini: 4, wounds: 6 },
                { slot: "boots", name: "Havoc Darkboots", level: 13, armor: 228, tou: 10, ws: 3, wounds: 8, bonus: "+1% Reduced chance to be Critically Hit" },
                { slot: "shoulders", name: "Havoc Shoulderguard", level: 16, armor: 258, str: 8, tou: 9, ini: 8, wounds: 3 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+285 Armor" },
                { pieces: 3, bonus: "+35 Toughness" },
                { pieces: 4, bonus: "+2% Reduced chance to be Critically Hit" }
            ],
            totalStats: "Armor: 999 | STR: 27 | TOU: 38 | WS: 15 | INI: 6 | WOU: 31"
        },
        chosen_tracker_rr17: {
            name: "Tracker's Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 17,
            pieces: [
                { slot: "body", name: "Tracker's Carapace", level: 17, armor: 300, str: 8, tou: 16, ws: 6, wounds: 13 },
                { slot: "gloves", name: "Tracker's Gauntlets", level: 15, armor: 240, tou: 12, ws: 10, wounds: 5, ini: 5 },
                { slot: "boots", name: "Tracker's Darkboots", level: 13, armor: 240, str: 10, tou: 10, wounds: 4, ini: 8 },
                { slot: "shoulders", name: "Tracker's Shoulderguard", level: 16, armor: 270, str: 12, tou: 10, wounds: 10, bonus: "+1% Parry" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+31 Initiative" },
                { pieces: 3, bonus: "+20 Hit Points every 4s" },
                { pieces: 4, bonus: "+2% Melee Critical Chance" }
            ],
            totalStats: "Armor: 1050 | STR: 30 | TOU: 48 | WS: 16 | INI: 9 | WOU: 36"
        },
        chosen_keeper_rr17: {
            name: "Keeper's Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 17,
            pieces: [
                { slot: "body", name: "Keeper's Carapace", level: 17, armor: 300, str: 10, tou: 16, wounds: 11, bonus: "+2 Morale" },
                { slot: "gloves", name: "Keeper's Gauntlets", level: 17, armor: 240, str: 8, tou: 13, ws: 7, wounds: 4 },
                { slot: "boots", name: "Keeper's Darkboots", level: 17, armor: 240, tou: 8, ws: 7, wounds: 4, ini: 13 },
                { slot: "helm", name: "Keeper's Skullcase", level: 17, armor: 270, str: 15, wounds: 8, ini: 15 },
                { slot: "shoulders", name: "Keeper's Shoulderguards", level: 17, armor: 270, str: 13, tou: 15, bonus: "+1% Melee Critical Chance" }
            ],
            setBonuses: [
                { pieces: 3, bonus: "+37 Strength" },
                { pieces: 4, bonus: "+2% Parry" },
                { pieces: 5, bonus: "Boost I - On Hit: 10% chance to increase your critical hit rate by 3% for 9 seconds" }
            ],
            totalStats: "Armor: 1320 | STR: 46 | TOU: 36 | WS: 14 | INI: 16 | WOU: 39"
        }
        ,
        chosen_devastator_rr29: {
            name: "Devastator Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 29,
            requiredRenown: 29,
            pieces: [
                { slot: "boots", name: "Devastator Darkboots", level: 26, renown: 26, armor: 396, tou: 11, wounds: 20, ini: 9, str: 6 },
                { slot: "gloves", name: "Devastator Gauntlets", level: 27, renown: 27, armor: 421, tou: 19, wounds: 12, str: 7, bonus: "+2% Reduction in being Critically Hit" },
                { slot: "shoulders", name: "Devastator Shoulderguards", level: 28, renown: 28, armor: 514, tou: 23, str: 15, wounds: 9, bonus: "+1% Block" },
                { slot: "helm", name: "Devastator Skullcase", level: 29, renown: 29, armor: 488, tou: 25, ini: 13, str: 9, wounds: 10 },
                { slot: "body", name: "Devastator Carapace", level: 29, renown: 29, armor: 571, tou: 26, ini: 9, str: 16, bonus: "+40 HP Every 4 Seconds" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+47 Toughness" },
                { pieces: 3, bonus: "+240 Corporeal Resistance" },
                { pieces: 4, bonus: "On Defense: 25% chance to increase Parry, Evade and Disrupt by 10% for 10 seconds" },
                { pieces: 5, bonus: "+47 Wounds" }
            ],
            totalStats: "Armor: 2390 | TOU: 104 | WOU: 54 | INI: 40 | STR: 41"
        },
        chosen_duelist_rr29: {
            name: "Duelist Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 29,
            requiredRenown: 29,
            pieces: [
                { slot: "boots", name: "Darkboots of the Duelist", level: 26, renown: 26, armor: 396, tou: 8, ini: 7, str: 11, wounds: 20 },
                { slot: "gloves", name: "Gauntlets of the Duelist", level: 27, renown: 27, armor: 421, ini: 7, str: 12, wounds: 19, bonus: "+2% Melee Critical Chance" },
                { slot: "shoulders", name: "Shoulderguards of the Duelist", level: 28, renown: 28, armor: 514, ini: 15, str: 17, wounds: 15, bonus: "+1% Parry" },
                { slot: "helm", name: "Skullcase of the Duelist", level: 29, renown: 29, armor: 488, tou: 25, ini: 13, str: 9, wounds: 10 },
                { slot: "body", name: "Carapace of the Duelist", level: 29, renown: 29, armor: 571, tou: 16, ini: 19, str: 16, bonus: "+40 HP Every 4 Seconds" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+47 Strength" },
                { pieces: 3, bonus: "+240 Corporeal Resistance" },
                { pieces: 4, bonus: "Aggravation - On Hit: 10% Chance to Taunt Target" },
                { pieces: 5, bonus: "+4% Melee Critical Chance" }
            ],
            totalStats: "Armor: 2390 | TOU: 49 | WOU: 61 | INI: 49 | STR: 129"
        },
        chosen_mayhem_r25: {
            name: "Mayhem Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 25,
            pieces: [
                { slot: "boots", name: "Darkboots of Mayhem", level: 22, armor: 324, tou: 17, ini: 7, ws: 6, wounds: 7 },
                { slot: "gloves", name: "Gauntlets of Mayhem", level: 23, armor: 336, tou: 15, ini: 10, ws: 6, bonus: "+2% Reduction in being Critically Hit" },
                { slot: "shoulders", name: "Shoulderguards of Mayhem", level: 24, armor: 392, tou: 18, ini: 7, ws: 11, bonus: "+1% Parry" },
                { slot: "helm", name: "Skullcase of Mayhem", level: 25, armor: 390, tou: 25, ini: 8, str: 2, ws: 10, wounds: 8 },
                { slot: "body", name: "Carapace of Mayhem", level: 24, armor: 436, tou: 20, ini: 7, ws: 13, bonus: "+32 HP Every 4 Seconds" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+37 Initiative" },
                { pieces: 3, bonus: "+192 Corporeal Resistance" },
                { pieces: 4, bonus: "+37 Toughness" },
                { pieces: 5, bonus: "On Being Healed: 10% Chance to recover an additional 95 health" }
            ],
            totalStats: "Armor: 1878 | TOU: 95 | WOU: 32 | INI: 9 | STR: 40 | WS: 14"
        },
        chosen_stalker_r30: {
            name: "Stalker Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 30,
            pieces: [
                { slot: "boots", name: "Stalker's Darkboots", level: 26, armor: 396, tou: 12, ws: 4, wounds: 7, bonus: "+2% Dodge" },
                { slot: "gloves", name: "Stalker's Gauntlets", level: 26, armor: 421, tou: 23, ws: 5, wounds: 8, bonus: "+1% Melee Critical Chance" },
                { slot: "shoulders", name: "Stalker's Shoulderguards", level: 28, armor: 514, tou: 18, ini: 11, str: 7, ws: 5 },
                { slot: "body", name: "Stalker's Carapace", level: 30, armor: 571, tou: 19, ini: 12, str: 7, bonus: "+2% Disrupt" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+34 Strength" },
                { pieces: 3, bonus: "+2 Morale Per Second" },
                { pieces: 4, bonus: "+5% Melee Critical Chance" }
            ],
            totalStats: "Armor: 1902 | TOU: 72 | WOU: 23 | INI: 7 | STR: 21 | WS: 15"
        }
        ,
        chosen_annihilator_rr39: {
            name: "Annihilator Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 35,
            requiredRenown: 39,
            pieces: [
                { slot: "boots", name: "Annihilator Darkboots", level: 35, renown: 35, armor: 549, tou: 10, ini: 13, str: 21, bonus: "+2% Dodge" },
                { slot: "gloves", name: "Annihilator Gauntlets", level: 35, renown: 36, armor: 549, tou: 11, ini: 14, str: 9, wounds: 23 },
                { slot: "shoulders", name: "Annihilator Shoulderguards", level: 35, renown: 37, armor: 636, tou: 12, ini: 18, wounds: 25, bonus: "+1% Reduction in being Critically Hit" },
                { slot: "helm", name: "Annihilator Skullcase", level: 35, renown: 38, armor: 636, tou: 13, str: 15, wounds: 25, bonus: "+2% Disrupt" },
                { slot: "body", name: "Annihilator Carapace", level: 35, renown: 39, armor: 708, tou: 23, ini: 15, str: 32, bonus: "+60 HP Every 4 Seconds" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+53 Toughness" },
                { pieces: 3, bonus: "+290 Elemental Resistance" },
                { pieces: 4, bonus: "+1 Path of Discord Abilities" },
                { pieces: 5, bonus: "+5% Parry" }
            ],
            totalStats: "Armor: 3084 | TOU: 69 | WOU: 60 | INI: 45 | STR: 105"
        },
        chosen_conqueror_rr45: {
            name: "Conqueror Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 40,
            requiredRenown: 45,
            pieces: [
                { slot: "boots", name: "Conqueror Darkboots", level: 40, renown: 40, armor: 588, tou: 16, ini: 24, ws: 10, bonus: "+2% Block" },
                { slot: "gloves", name: "Conqueror Gauntlets", level: 40, renown: 41, armor: 588, tou: 15, ws: 8, wounds: 25, bonus: "+2% Parry" },
                { slot: "belt", name: "Conqueror Deathgirdle", level: 40, renown: 42, tou: 18, ini: 12, str: 24, ws: 6, sres: 83, eres: 77, cres: 83 },
                { slot: "shoulders", name: "Conqueror Shoulderguards", level: 40, renown: 43, armor: 676, tou: 29, ini: 12, ws: 16, bonus: "+2% Reduced Armor Penetration" },
                { slot: "helm", name: "Conqueror Skullcase", level: 40, renown: 44, armor: 676, tou: 30, ini: 10, str: 17, bonus: "+2% Disrupt" },
                { slot: "body", name: "Conqueror Carapace", level: 40, renown: 45, armor: 765, tou: 33, ws: 19, ini: 13, bonus: "+3 AP Per Second" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+57 Toughness" },
                { pieces: 3, bonus: "+63 Wounds" },
                { pieces: 4, bonus: "+5% Reduction in being Critically Hit" },
                { pieces: 5, bonus: "Preservation - On Being Hit: 10% chance to increase Wounds by 100 for 20 seconds" },
                { pieces: 6, bonus: "+5% Block" }
            ],
            totalStats: "Armor: 3293 | TOU: 141 | WOU: 58 | INI: 41 | STR: 49 | WS: 48 | SRes: 83 | ERes: 77 | CRes: 83"
        },
        chosen_vanquisher_rr58: {
            name: "Vanquisher Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 40,
            requiredRenown: 58,
            pieces: [
                { slot: "boots", name: "Vanquisher Darkboots", level: 40, renown: 56, armor: 623, tou: 16, ini: 17, ws: 18, bonus: "+2% Dodge" },
                { slot: "gloves", name: "Vanquisher Gauntlets", level: 40, renown: 56, armor: 623, tou: 18, ini: 17, str: 16, bonus: "+2% Parry" },
                { slot: "belt", name: "Vanquisher Deathgirdle", level: 40, renown: 55, tou: 8, ini: 22, ws: 22, bonus: "+2% Reduction in being Critically Hit", sres: 87, eres: 86, cres: 86 },
                { slot: "shoulders", name: "Vanquisher Shoulderguards", level: 40, renown: 57, armor: 723, tou: 26, ini: 20, ws: 16, bonus: "+2% Block" },
                { slot: "helm", name: "Vanquisher Skullcase", level: 40, renown: 57, armor: 723, tou: 34, ini: 15, str: 13, bonus: "+2% Disrupt" },
                { slot: "body", name: "Vanquisher Carapace", level: 40, renown: 58, armor: 822, tou: 15, ini: 35, str: 15, bonus: "+2% Reduction in being Critically Hit" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+62 Toughness" },
                { pieces: 3, bonus: "+68 Wounds" },
                { pieces: 4, bonus: "Active Defences - On Attacking Target: 10% chance to increase Parry, Block, Disrupt and Dodge by 7% for 10 seconds." },
                { pieces: 5, bonus: "+5% Block" },
                { pieces: 6, bonus: "Bulwarking Presence - On Being Hit: 10% chance to reduce the damage being taken by your Group within 30ft by 3% for 10 seconds." }
            ],
            totalStats: "Armor: 3514 | TOU: 117 | WOU: 126 | INI: 44 | STR: 56 | WS: 56 | SRes: 87 | ERes: 86 | CRes: 86"
        },
        chosen_invader_rr63: {
            name: "Invader Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 40,
            requiredRenown: 63,
            pieces: [
                { slot: "boots", name: "Invader Darkboots", level: 40, renown: 61, armor: 663, tou: 18, str: 20, ws: 17, bonus: "+2% Reduced Armor Penetration" },
                { slot: "gloves", name: "Invader Gauntlets", level: 40, renown: 61, armor: 663, tou: 20, ini: 13, ws: 16, bonus: "+3% Reduced Chance to be Parried" },
                { slot: "belt", name: "Invader Deathgirdle", level: 40, renown: 60, tou: 18, ws: 12, bonus: "+2% Dodge, +2% Disrupt", sres: 91, eres: 91, cres: 91 },
                { slot: "shoulders", name: "Invader Shoulderguards", level: 40, renown: 62, armor: 771, tou: 26, ini: 18, str: 18, bonus: "+3% Block" },
                { slot: "helm", name: "Invader Skullcase", level: 40, renown: 62, armor: 771, tou: 24, ini: 18, str: 16, bonus: "+4 Morale Per Second" },
                { slot: "body", name: "Invader Carapace", level: 40, renown: 63, armor: 876, tou: 24, ini: 18, ws: 28, bonus: "+1 AP Per Second" },
                { slot: "jewel", name: "Invader Change Gem", level: 40, renown: 63, ini: 27, str: 12, bonus: "+2% Block, +2 AP Per Second", sres: 79, eres: 78, cres: 78 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+66 Strength" },
                { pieces: 3, bonus: "+73 Wounds" },
                { pieces: 4, bonus: "+80 Toughness" },
                { pieces: 5, bonus: "+5% Block" },
                { pieces: 6, bonus: "Mending Wounds - On Block: 10% chance to restore 500 Health Points and gain 50 Action Points" },
                { pieces: 7, bonus: "Shield Spikes - Each time you block an attack, low damage is dealt back to them and reduce their outgoing damage by 5%" }
            ],
            totalStats: "Armor: 3744 | TOU: 130 | WOU: 94 | INI: 66 | STR: 56 | WS: 31 | SRes: 170 | ERes: 169 | CRes: 169"
        },
        chosen_warlord_rr73: {
            name: "Warlord Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 40,
            requiredRenown: 73,
            pieces: [
                { slot: "boots", name: "Warlord Darkboots", level: 40, renown: 71, armor: 723, tou: 30, ini: 14, ws: 18, bonus: "+2% Parry, +40 HP Every 4 Seconds" },
                { slot: "gloves", name: "Warlord Gauntlets", level: 40, renown: 71, armor: 723, tou: 18, ws: 14, wounds: 30, bonus: "+1% Reduced Armor Penetration, +1% Reduction in being Critically Hit" },
                { slot: "belt", name: "Warlord Deathgirdle", level: 40, renown: 70, ini: 16, str: 23, ws: 15, bonus: "+2% Dodge, +2% Disrupt", sres: 102, eres: 101, cres: 101 },
                { slot: "shoulders", name: "Warlord Shoulderguards", level: 40, renown: 72, armor: 858, tou: 21, ini: 31, str: 21, bonus: "+3% Disrupt" },
                { slot: "helm", name: "Warlord Skullcase", level: 40, renown: 72, armor: 858, tou: 34, ini: 16, str: 21, bonus: "+2% Reduction in being Critically Hit" },
                { slot: "body", name: "Warlord Carapace", level: 40, renown: 73, armor: 969, tou: 24, ini: 24, str: 10, ws: 10, wounds: 17, bonus: "+80 HP Every 4 Seconds" },
                { slot: "jewel", name: "Warlord Chaos Seal", level: 40, renown: 73, wounds: 25, ini: 15, str: 14, bonus: "+3 AP Per Second", sres: 87, eres: 87, cres: 86 },
                { slot: "cloak", name: "Warlord Changehide", level: 40, renown: 70, wounds: 25, ini: 10, str: 21, ws: 10, bonus: "+2% Parry", sres: 101, eres: 101, cres: 102 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+75 Strength" },
                { pieces: 3, bonus: "+83 Weapon Skill" },
                { pieces: 4, bonus: "+6% Armor Penetration" },
                { pieces: 5, bonus: "+99 Melee Power" },
                { pieces: 6, bonus: "+2 Path of Discord Abilities" },
                { pieces: 7, bonus: "Evasive - On Being Hit: 10% chance to detaunt target." },
                { pieces: 8, bonus: "Gain Ability: Desolation" }
            ],
            totalStats: "Armor: 4131 | TOU: 177 | WOU: 126 | INI: 89 | STR: 70 | WS: 65 | SRes: 290 | ERes: 289 | CRes: 289"
        },
        chosen_sovereign_dreadshield_rr78: {
            name: "Sovereign Set of Dreadshield (Primary)",
            class: "chosen",
            role: "tank",
            requiredLevel: 40,
            requiredRenown: 78,
            pieces: [
                { slot: "boots", name: "Sovereign Darkboots", level: 40, renown: 76, armor: 741, tou: 24, str: 22, ws: 20, bonus: "+2% Reduced Armor Penetration" },
                { slot: "gloves", name: "Sovereign Gauntlets", level: 40, renown: 76, armor: 741, tou: 26, ini: 20, ws: 20, bonus: "+2% Reduced Chance to be Parried" },
                { slot: "belt", name: "Sovereign Deathgirdle", level: 40, renown: 75, tou: 24, ini: 20, ws: 10, bonus: "+2% Dodge, +2% Disrupt", sres: 102, eres: 101, cres: 101 },
                { slot: "shoulders", name: "Sovereign Shoulderguards", level: 40, renown: 77, armor: 888, tou: 31, ini: 21, ws: 21, bonus: "+3% Block" },
                { slot: "helm", name: "Sovereign Skullcase", level: 40, renown: 77, armor: 888, tou: 31, ini: 20, str: 20, bonus: "+4 Morale per Second" },
                { slot: "body", name: "Sovereign Carapace", level: 40, renown: 78, armor: 1002, tou: 24, ini: 24, ws: 20, wounds: 17, bonus: "+2 AP Per Second, +1% Reduction in being Critically Hit" },
                { slot: "jewel", name: "Sovereign Change Gem", level: 40, renown: 78, ini: 22, str: 15, bonus: "+2 AP Per Second", sres: 87, eres: 87, cres: 86 },
                { slot: "cloak", name: "Sovereign Changehide", level: 40, renown: 75, ini: 21, str: 25, ws: 20, bonus: "+2% Block", sres: 101, eres: 101, cres: 102 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+80 Wounds" },
                { pieces: 3, bonus: "+88 Toughness" },
                { pieces: 4, bonus: "+6% Block" },
                { pieces: 5, bonus: "+6% Reduction in being Critically Hit" },
                { pieces: 6, bonus: "+2 Path of Corruption Abilities" },
                { pieces: 7, bonus: "On Being Attacked: 10% chance to increase Parry, Block, Disrupt and Dodge by 10% for 10 seconds" },
                { pieces: 8, bonus: "Gain Ability: Leading The Charge" }
            ],
            totalStats: "Armor: 4260 | TOU: 203 | WOU: 127 | INI: 103 | STR: 70 | WS: 37 | SRes: 290 | ERes: 289 | CRes: 289"
        },
        chosen_sovereign_dreadsword_rr78: {
            name: "Sovereign Set of Dreadsword (Secondary)",
            class: "chosen",
            role: "tank",
            requiredLevel: 40,
            requiredRenown: 78,
            pieces: [
                { slot: "boots", name: "Sovereign Darkboots", level: 40, renown: 76, armor: 741, tou: 27, ini: 19, ws: 22, bonus: "+2 AP Per Second" },
                { slot: "gloves", name: "Sovereign Gauntlets", level: 40, renown: 76, armor: 741, tou: 18, ws: 22, wounds: 18, bonus: "+2% Reduction in being Critically Hit" },
                { slot: "belt", name: "Sovereign Deathgirdle", level: 40, renown: 75, tou: 27, ws: 27, bonus: "+2% Parry, +2% Disrupt", sres: 102, eres: 101, cres: 101 },
                { slot: "shoulders", name: "Sovereign Shoulderguards", level: 40, renown: 77, armor: 888, tou: 28, ini: 31, ws: 20, bonus: "+2 Morale Per Second, +64 HP Every 4 Seconds" },
                { slot: "helm", name: "Sovereign Skullcase", level: 40, renown: 77, armor: 888, tou: 27, ini: 17, ws: 23, bonus: "+4% Reduced Armor Penetration" },
                { slot: "body", name: "Sovereign Carapace", level: 40, renown: 78, armor: 1002, tou: 40, ini: 21, ws: 24, bonus: "+4 AP Per Second" },
                { slot: "jewel", name: "Sovereign Change Gem", level: 40, renown: 78, ini: 30, str: 13, ws: 15, bonus: "+2 Morale Per Second", sres: 87, eres: 87, cres: 86 },
                { slot: "cloak", name: "Sovereign Changehide", level: 40, renown: 75, ini: 30, str: 18, ws: 18, bonus: "+2% Dodge", sres: 101, eres: 101, cres: 102 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+80 Strength" },
                { pieces: 3, bonus: "+88 Wounds" },
                { pieces: 4, bonus: "+15% Critical Damage" },
                { pieces: 5, bonus: "+6% Melee Critical Chance" },
                { pieces: 6, bonus: "+2 Path of Dread Abilities" },
                { pieces: 7, bonus: "On Hit: 10% chance to increase Block Strikethrough and Parry Strikethrough by 10% for 10 seconds." },
                { pieces: 8, bonus: "Gain Ability: Mindless Fear" }
            ],
            totalStats: "Armor: 4260 | TOU: 227 | WOU: 106 | INI: 33 | STR: 124 | WS: 45 | SRes: 290 | ERes: 289 | CRes: 289"
        }
        ,
        chosen_mercenary_rr39: {
            name: "Mercenary Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 35,
            requiredRenown: 39,
            pieces: [
                { slot: "boots", name: "Darkboots of the Mercenary", level: 35, renown: 35, armor: 549, tou: 10, ini: 21, str: 13, bonus: "+2% Dodge" },
                { slot: "gloves", name: "Gauntlets of the Mercenary", level: 35, renown: 36, armor: 549, tou: 11, ini: 14, str: 9, wounds: 23 },
                { slot: "shoulders", name: "Shoulderguards of the Mercenary", level: 35, renown: 37, armor: 636, tou: 12, ini: 23, str: 18, bonus: "+3% Reduced Chance to be Parried" },
                { slot: "helm", name: "Skullcase of the Mercenary", level: 35, renown: 38, armor: 636, tou: 13, str: 15, wounds: 25, bonus: "+2% Disrupt" },
                { slot: "body", name: "Carapace of the Mercenary", level: 35, renown: 39, armor: 708, tou: 12, ini: 17, str: 30, bonus: "+3 AP Per Second" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+53 Strength" },
                { pieces: 3, bonus: "+290 Elemental Resistance" },
                { pieces: 4, bonus: "+1 to Path of Dread Abilities" },
                { pieces: 5, bonus: "+5% Melee Critical Chance" }
            ],
            totalStats: "Armor: 3078 | TOU: 58 | WOU: 75 | INI: 55 | STR: 78"
        },
        chosen_dominator_rr45: {
            name: "Dominator Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 40,
            requiredRenown: 45,
            pieces: [
                { slot: "boots", name: "Dominator Darkboots", level: 40, renown: 40, armor: 588, tou: 10, ini: 14, ws: 16, bonus: "+2% Melee Critical Chance" },
                { slot: "gloves", name: "Dominator Gauntlets", level: 40, renown: 41, armor: 588, ws: 8, wounds: 15, bonus: "+2% Reduced Chance to be Parried" },
                { slot: "belt", name: "Dominator Deathgirdle", level: 40, renown: 42, tou: 6, ini: 12, ws: 18, bonus: "+36 Melee Power", sres: 83, eres: 77, cres: 83 },
                { slot: "shoulders", name: "Dominator Shoulderguards", level: 40, renown: 43, armor: 675, ini: 12, ws: 18, wounds: 29, bonus: "+10% Auto Attack Haste" },
                { slot: "helm", name: "Dominator Skullcase", level: 40, renown: 44, armor: 675, ini: 10, ws: 30, wounds: 17, bonus: "+2% Reduced Chance to be Blocked" },
                { slot: "body", name: "Dominator Carapace", level: 40, renown: 45, armor: 765, tou: 19, ws: 33, ini: 13, bonus: "+3 AP Per Second" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+57 Strength" },
                { pieces: 3, bonus: "+63 Wounds" },
                { pieces: 4, bonus: "+5% Reduced Chance to be Parried" },
                { pieces: 5, bonus: "Aggrovation - On Hit: 10% Chance to Taunt Target" },
                { pieces: 6, bonus: "+5% Melee Critical Chance" }
            ],
            totalStats: "Armor: 3291 | TOU: 35 | WOU: 48 | INI: 8 | STR: 160 | WS: 102 | SRes: 83 | ERes: 77 | CRes: 83"
        },
        chosen_oppressor_rr58: {
            name: "Oppressor Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 40,
            requiredRenown: 58,
            pieces: [
                { slot: "boots", name: "Oppressor Darkboots", level: 40, renown: 56, armor: 623, wounds: 13, ini: 10, ws: 20, bonus: "+2% Melee Critical Chance" },
                { slot: "gloves", name: "Oppressor Gauntlets", level: 40, renown: 56, armor: 623, wounds: 14, ws: 20, ini: 17, bonus: "+2% Reduced chance to be Parried" },
                { slot: "belt", name: "Oppressor Deathgirdle", level: 40, renown: 55, wounds: 12, ini: 20, ws: 24, bonus: "+2% Melee Critical Chance", sres: 87, eres: 86, cres: 86 },
                { slot: "shoulders", name: "Oppressor Shoulderguards", level: 40, renown: 57, armor: 723, wounds: 23, ws: 20, ini: 11, bonus: "+20 Melee Power" },
                { slot: "helm", name: "Oppressor Skullcase", level: 40, renown: 57, armor: 723, wounds: 13, ws: 32, ini: 17, bonus: "+2% Parry" },
                { slot: "body", name: "Oppressor Carapace", level: 40, renown: 58, armor: 822, wounds: 17, ws: 36, ini: 20, bonus: "+2% Reduced Armor Penetration" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+62 Strength" },
                { pieces: 3, bonus: "+68 Wounds" },
                { pieces: 4, bonus: "Aggression - On Attacking Target: 10% chance to increase outgoing damage by 1% for 10 seconds. Stacks up to 5 times" },
                { pieces: 5, bonus: "+5% Melee Critical Chance" },
                { pieces: 6, bonus: "+5% Critical Damage" }
            ],
            totalStats: "Armor: 3514 | WOU: 92 | INI: 30 | STR: 152 | WS: 65 | SRes: 87 | ERes: 86 | CRes: 86"
        },
        chosen_triumphant_rr68: {
            name: "Triumphant Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 40,
            requiredRenown: 68,
            pieces: [
                { slot: "boots", name: "Triumphant Darkboots", level: 40, renown: 66, armor: 705, tou: 20, ini: 21, ws: 18, bonus: "+2% Dodge" },
                { slot: "gloves", name: "Triumphant Gauntlets", level: 40, renown: 66, armor: 705, tou: 20, ini: 17, str: 16, bonus: "+3% Parry" },
                { slot: "belt", name: "Triumphant Deathgirdle", level: 40, renown: 65, tou: 12, ini: 22, ws: 25, bonus: "+2% Reduction in being Critically Hit", sres: 94, eres: 94, cres: 94 },
                { slot: "shoulders", name: "Triumphant Shoulderguards", level: 40, renown: 67, armor: 825, tou: 26, ini: 20, ws: 20, bonus: "+3% Block" },
                { slot: "helm", name: "Triumphant Skullcase", level: 40, renown: 67, armor: 825, tou: 37, ini: 18, str: 16, bonus: "+2% Disrupt" },
                { slot: "body", name: "Triumphant Carapace", level: 40, renown: 68, armor: 924, tou: 15, ini: 40, ws: 20, bonus: "+2% Reduction in being Critically Hit" },
                { slot: "cloak", name: "Triumphant Changehide", level: 40, renown: 65, tou: 21, ini: 10, str: 18, ws: 10, bonus: "+2% Block", sres: 94, eres: 94, cres: 94 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+71 Toughness" },
                { pieces: 3, bonus: "+78 Wounds" },
                { pieces: 4, bonus: "Active Defences - On Attacking Target: 10% chance to increase Parry, Block, Disrupt and Dodge by 7% for 10 seconds." },
                { pieces: 5, bonus: "+5% Block" },
                { pieces: 6, bonus: "Bulwarking Presence - On Being Hit: 10% chance to reduce the damage being taken by your Group within 30ft by 3% for 10 seconds." },
                { pieces: 7, bonus: "Endure - On Being Hit: 15% chance to reduce attackers Strength, Ballistic Skill and Intelligence by 130 while increasing your Initiative by 130 for 10 seconds." }
            ],
            totalStats: "Armor: 3744 | TOU: 151 | WOU: 148 | INI: 70 | STR: 73 | WS: 73 | SRes: 188 | ERes: 188 | CRes: 188"
        },
        chosen_victorious_rr68: {
            name: "Victorious Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 40,
            requiredRenown: 68,
            pieces: [
                { slot: "boots", name: "Victorious Darkboots", level: 40, renown: 66, armor: 705, ini: 17, str: 14, ws: 20, bonus: "+2% Melee Critical Chance" },
                { slot: "gloves", name: "Victorious Gauntlets", level: 40, renown: 66, armor: 705, ini: 14, ws: 22, wounds: 17, bonus: "+3% Reduced chance to be Parried" },
                { slot: "belt", name: "Victorious Deathgirdle", level: 40, renown: 65, ini: 17, str: 20, ws: 26, bonus: "+2% Melee Critical Chance", sres: 94, eres: 94, cres: 94 },
                { slot: "shoulders", name: "Victorious Shoulderguards", level: 40, renown: 67, armor: 825, ini: 28, ws: 20, str: 21, bonus: "+20 Melee Power" },
                { slot: "helm", name: "Victorious Skullcase", level: 40, renown: 67, armor: 825, ini: 16, ws: 35, str: 20, bonus: "+2% Parry" },
                { slot: "body", name: "Victorious Carapace", level: 40, renown: 68, armor: 924, ini: 17, ws: 40, str: 20, bonus: "+3% Reduced Armor Penetration" },
                { slot: "cloak", name: "Victorious Changehide", level: 40, renown: 65, ini: 10, ws: 18, str: 21, bonus: "+2% Parry", sres: 94, eres: 94, cres: 94 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+71 Strength" },
                { pieces: 3, bonus: "+78 Wounds" },
                { pieces: 4, bonus: "Aggression - On Attacking Target: 10% chance to increase outgoing damage by 1% for 10 seconds. Stacks up to 5 times" },
                { pieces: 5, bonus: "+5% Melee Critical Chance" },
                { pieces: 6, bonus: "+5% Critical Damage" },
                { pieces: 7, bonus: "Red Mist - Cooldown of Taunt reduced by 5 seconds." }
            ],
            totalStats: "Armor: 3744 | TOU: 10 | WOU: 127 | INI: 44 | STR: 163 | WS: 99 | SRes: 188 | ERes: 188 | CRes: 188"
        },
        chosen_ruin_r36: {
            name: "Ruin Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 36,
            pieces: [
                { slot: "boots", name: "Darkboots of Ruin", level: 34, armor: 492, tou: 10, ini: 20, str: 9, ws: 11 },
                { slot: "gloves", name: "Gauntlets of Ruin", level: 35, armor: 492, tou: 20, ws: 8, wounds: 10, bonus: "+2% Parry" },
                { slot: "shoulders", name: "Shoulderguards of Ruin", level: 36, armor: 567, tou: 23, ws: 11, wounds: 13, bonus: "+2% Block" },
                { slot: "helm", name: "Skullcase of Ruin", level: 35, armor: 567, tou: 23, ini: 11, ws: 14, wounds: 11 },
                { slot: "body", name: "Carapace of Ruin", level: 36, armor: 645, tou: 29, ini: 14, ws: 15, bonus: "+2 Morale Per Second" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+581 Armor" },
                { pieces: 3, bonus: "+53 Toughness" },
                { pieces: 4, bonus: "+1 to Path of Corruption Abilities" },
                { pieces: 5, bonus: "+5% Block" }
            ],
            totalStats: "Armor: 2763 | TOU: 105 | WOU: 45 | INI: 31 | STR: 47 | WS: 24"
        },
        chosen_onslaught_rr32: {
            name: "Onslaught Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 40,
            requiredRenown: 32,
            pieces: [
                { slot: "boots", name: "Onslaught Darkboots", level: 40, renown: 32, armor: 609, tou: 14, ini: 18, ws: 18, bonus: "+2% Block" },
                { slot: "gloves", name: "Onslaught Gauntlets", level: 40, renown: 32, armor: 609, tou: 12, ini: 16, ws: 12, wounds: 24 },
                { slot: "shoulders", name: "Onslaught Shoulderguards", level: 40, renown: 32, armor: 693, tou: 20, ini: 16, ws: 23, bonus: "+2% Disrupt" },
                { slot: "helm", name: "Onslaught Skullcase", level: 40, renown: 32, armor: 693, tou: 18, ini: 27, ws: 16, bonus: "+1% Reduction in being Critically Hit" },
                { slot: "body", name: "Onslaught Carapace", level: 40, renown: 32, armor: 777, tou: 16, ini: 25, ws: 22, bonus: "+72 HP Every 4 Seconds" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+58 Wounds" },
                { pieces: 3, bonus: "+64 Strength" },
                { pieces: 4, bonus: "On Being Hit: 10% chance to steal 112 health from your attacker" },
                { pieces: 5, bonus: "+5% Block" }
            ],
            totalStats: "Armor: 3381 | TOU: 80 | WOU: 102 | INI: 30 | STR: 85"
        }
        ,
        chosen_beastlord_r40: {
            name: "Beastlord Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 40,
            pieces: [
                { slot: "jewel", name: "Beastlord Chaos Seal", level: 40, str: 24, ws: 13, bonus: "+1 AP Per Second", sres: 60, eres: 60, cres: 64 },
                { slot: "cloak", name: "Beastlord Cloak", level: 40, tou: 32, ws: 24, sres: 72, eres: 84, cres: 72 },
                { slot: "pocket", name: "Beastlord Hunting Guide", level: 40, bonus: "On Use: Increases AP Regeneration for 15s on all party members. 30m cooldown" },
                { slot: "shoulders", name: "Beastlord Shoulderguards", level: 40, armor: 609, tou: 14, str: 24, ws: 14, cres: 30, eres: 25 },
                { slot: "helm", name: "Beastlord Skullcase", level: 40, armor: 609, wounds: 20, str: 20, ws: 12, cres: 25, eres: 30 },
                { slot: "body", name: "Beastlord Carapace", level: 40, armor: 675, tou: 14, wounds: 30, ws: 15, sres: 30, cres: 30 }
            ],
            setBonuses: [
                { pieces: 3, bonus: "+55 Weaponskill" },
                { pieces: 4, bonus: "+60 Strength" },
                { pieces: 5, bonus: "+5% Parry" },
                { pieces: 6, bonus: "On Hit: +10% Chance to Reduce Enemy's Armor by 960" }
            ],
            totalStats: "Armor: 1893 | TOU: 34 | WOU: 76 | STR: 68 | WS: 78 | SRes: 162 | ERes: 199 | CRes: 221"
        },
        chosen_rarefortune_r39: {
            name: "Rare Fortune Set",
            class: "chosen",
            role: "tank",
            requiredLevel: 39,
            pieces: [
                { slot: "boots", name: "Rare Fortune Darkboots", level: 37, armor: 570, tou: 24, ini: 14, str: 13, bonus: "+2% Dodge" },
                { slot: "gloves", name: "Rare Fortune Gauntlets", level: 37, armor: 570, tou: 19, ini: 6, str: 12, ws: 21 },
                { slot: "shoulders", name: "Rare Fortune Shoulderguards", level: 39, armor: 645, tou: 18, ini: 18, str: 19, bonus: "+2% Reduced Armor Penetration" },
                { slot: "helm", name: "Rare Fortune Skullcase", level: 38, armor: 645, tou: 12, ini: 20, str: 18, ws: 17 },
                { slot: "body", name: "Rare Fortune Carapace", level: 39, armor: 720, tou: 22, ini: 27, ws: 12, bonus: "+3 AP Per Second" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+54 Initiative" },
                { pieces: 3, bonus: "+59 Strength" },
                { pieces: 4, bonus: "Barrier - On Being Hit: 10% chance to form a protective barrier that will absorb 163 damage over 5 seconds" },
                { pieces: 5, bonus: "+5% Block" }
            ],
            totalStats: "Armor: 3150 | TOU: 95 | WOU: 85 | INI: 62 | STR: 50"
        }
    });
}
