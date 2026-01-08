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
    });
}
