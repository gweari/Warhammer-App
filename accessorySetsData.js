// Accessory Sets Data
// This file will contain all accessory sets for all classes

// Add accessory sets to the main gearDatabase
if (typeof gearDatabase !== 'undefined' && gearDatabase.recommendations) {
    Object.assign(gearDatabase.recommendations, {
        accessory_overlord_r40: {
            name: "Overlord Set",
            type: "accessory",
            requiredLevel: 40,
            pieces: [
                { slot: "shoulders", name: "Shoulderguards of the Overlord", level: 40, armor: 710, tou: 28, ini: 10, str: 12, ws: 14, bonus: "+2% Reduced Armor Penetration" },
                { slot: "helm", name: "Skullcase of the Overlord", level: 40, armor: 710, tou: 28, ini: 10, str: 14, ws: 12, bonus: "+2% Reduction in being Critically Hit" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+61 Wounds" }
            ],
            totalStats: "Armor: 1420 | TOU: 56 | INI: 20 | STR: 24 | WS: 14"
        },
        accessory_imperator_r40: {
            name: "Imperator Set",
            type: "accessory",
            requiredLevel: 40,
            pieces: [
                { slot: "shoulders", name: "Shoulderguards of the Imperator", level: 40, armor: 710, tou: 12, str: 23, ws: 29, bonus: "+5% Auto Attack Haste, +1% Reduced Chance to be Parried" },
                { slot: "helm", name: "Skullcase of the Imperator", level: 40, armor: 710, wounds: 12, str: 28, ws: 24, bonus: "+5% Auto Attack Haste, +1% Reduced Chance to be Parried" }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+61 Initiative" }
            ],
            totalStats: "Armor: 1420 | TOU: 12 | WOU: 12 | STR: 51 | WS: 53"
        },
        accessory_genesis_everlasting_r36: {
            name: "Genesis Everlasting Set",
            type: "accessory",
            requiredLevel: 36,
            pieces: [
                { slot: "aspect", name: "Genesis Aspect of the Everlasting", level: 36, tou: 24, ini: 24, sres: 64, eres: 64, cres: 64 },
                { slot: "fragment", name: "Genesis Fragment of the Everlasting", level: 36, wounds: 14, bonus: "+3% Block", sres: 53, eres: 53, cres: 53 },
                { slot: "remnant", name: "Genesis Remnant of the Everlasting", level: 36, tou: 24, wounds: 24, sres: 64, eres: 64, cres: 64 },
                { slot: "shard", name: "Genesis Shard of the Everlasting", level: 36, bonus: "+2% Dodge, +2% Disrupt", sres: 55, eres: 55, cres: 55 },
                { slot: "cloak", name: "Genesis Cloak of the Everlasting", level: 36, tou: 28, bonus: "+4 AP Per Second", sres: 53, eres: 53, cres: 53 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+37 Toughness" },
                { pieces: 3, bonus: "+3% Reduced Chance to be Critically Hit" },
                { pieces: 4, bonus: "+3% Armor Penetration Reduced" },
                { pieces: 5, bonus: "+60 HP Every 4 Seconds" }
            ],
            totalStats: "TOU: 76 | WOU: 48 | INI: 24 | SRes: 289 | ERes: 289 | CRes: 289"
        },
        accessory_genesis_undying_r36: {
            name: "Genesis Undying Set",
            type: "accessory",
            requiredLevel: 36,
            pieces: [
                { slot: "aspect", name: "Genesis Aspect of the Undying", level: 36, tou: 24, ini: 24, sres: 64, eres: 64, cres: 64 },
                { slot: "fragment", name: "Genesis Fragment of the Undying", level: 36, wounds: 14, bonus: "+3% Parry", sres: 53, eres: 53, cres: 53 },
                { slot: "remnant", name: "Genesis Remnant of the Undying", level: 36, tou: 24, wounds: 24, sres: 64, eres: 64, cres: 64 },
                { slot: "shard", name: "Genesis Shard of the Undying", level: 36, bonus: "+2% Dodge, +2% Disrupt", sres: 55, eres: 55, cres: 55 },
                { slot: "cloak", name: "Genesis Cloak of the Undying", level: 36, tou: 28, bonus: "+4 AP Per Second", sres: 53, eres: 53, cres: 53 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+37 Wounds" },
                { pieces: 3, bonus: "+3% Reduced Armor Penetration" },
                { pieces: 4, bonus: "+37 Toughness" },
                { pieces: 5, bonus: "+3% Reduced Chance to be Critically Hit" }
            ],
            totalStats: "TOU: 76 | WOU: 48 | INI: 24 | SRes: 289 | ERes: 289 | CRes: 289"
        },
        accessory_genesis_warrior_r36: {
            name: "Genesis Warrior Set",
            type: "accessory",
            requiredLevel: 36,
            pieces: [
                { slot: "aspect", name: "Genesis Aspect of the Warrior", level: 36, wounds: 24, ini: 24, bonus: "+36 Melee Power", sres: 64, eres: 64, cres: 64 },
                { slot: "fragment", name: "Genesis Fragment of the Warrior", level: 36, ini: 14, bonus: "+3% Parry", sres: 53, eres: 53, cres: 53 },
                { slot: "remnant", name: "Genesis Remnant of the Warrior", level: 36, tou: 24, wounds: 24, sres: 64, eres: 64, cres: 64 },
                { slot: "shard", name: "Genesis Shard of the Warrior", level: 36, bonus: "+2% Dodge, +2% Disrupt", sres: 55, eres: 55, cres: 55 },
                { slot: "cloak", name: "Genesis Cloak of the Warrior", level: 36, wounds: 28, bonus: "+4 AP Per Second", sres: 53, eres: 53, cres: 53 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+37 Strength" },
                { pieces: 3, bonus: "+3% Reduced Chance to be Parried" },
                { pieces: 4, bonus: "+37 Weapon Skill" },
                { pieces: 5, bonus: "+3% Melee Critical Chance" }
            ],
            totalStats: "WOU: 24 | INI: 24 | STR: 66 | SRes: 289 | ERes: 289 | CRes: 289"
        },
        accessory_brawler_r36: {
            name: "Brawler Set",
            type: "accessory",
            requiredLevel: 36,
            pieces: [
                { slot: "icon", name: "Icon of the Brawler", level: 36, wounds: 12, ini: 13, str: 17, sres: 62, eres: 62, cres: 62 },
                { slot: "mark", name: "Mark of the Brawler", level: 36, str: 24, bonus: "+1% Parry", sres: 68, eres: 68, cres: 68 },
                { slot: "belt", name: "Cinture of the Brawler", level: 36, ini: 15, str: 15, bonus: "+18 Melee Power", sres: 60, eres: 60, cres: 60 }
            ],
            setBonuses: [
                { pieces: 3, bonus: "+4 Morale Per Second" }
            ],
            totalStats: "WOU: 12 | INI: 28 | STR: 56 | SRes: 190 | ERes: 190 | CRes: 190"
        },
        accessory_guardian_r36: {
            name: "Guardian Set",
            type: "accessory",
            requiredLevel: 36,
            pieces: [
                { slot: "icon", name: "Icon of the Guardian", level: 36, wounds: 12, tou: 17, ini: 13, sres: 62, eres: 62, cres: 62 },
                { slot: "mark", name: "Mark of the Guardian", level: 36, tou: 24, bonus: "+1% Block", sres: 68, eres: 68, cres: 68 },
                { slot: "belt", name: "Cinture of the Guardian", level: 36, tou: 18, ini: 18, bonus: "+1% Dodge", sres: 60, cres: 120 }
            ],
            setBonuses: [
                { pieces: 3, bonus: "+4 Morale Per Second" }
            ],
            totalStats: "WOU: 12 | TOU: 59 | INI: 31 | SRes: 190 | ERes: 130 | CRes: 250"
        },
        accessory_assailant_r36: {
            name: "Assailant Set",
            type: "accessory",
            requiredLevel: 36,
            pieces: [
                { slot: "icon", name: "Icon of the Assailant", level: 36, wounds: 16, ini: 16, str: 20, sres: 69, eres: 69, cres: 69 },
                { slot: "mark", name: "Mark of the Assailant", level: 36, str: 19, bonus: "+2% Parry", eres: 72, cres: 72 },
                { slot: "cloak", name: "Cloak of the Assailant", level: 36, str: 16, bonus: "+2 AP Per Second, +18 Melee Power", sres: 65, eres: 65, cres: 65 }
            ],
            setBonuses: [
                { pieces: 3, bonus: "+3% Reduced Chance to be Parried" }
            ],
            totalStats: "WOU: 16 | INI: 16 | STR: 55 | SRes: 206 | ERes: 206 | CRes: 206"
        },
        accessory_bulwark_r36: {
            name: "Bulwark Set",
            type: "accessory",
            requiredLevel: 36,
            pieces: [
                { slot: "icon", name: "Icon of the Bulwark", level: 36, wounds: 16, tou: 20, ini: 16, sres: 69, eres: 69, cres: 69 },
                { slot: "mark", name: "Mark of the Bulwark", level: 36, tou: 19, bonus: "+2% Block", eres: 72, cres: 72 },
                { slot: "cloak", name: "Cloak of the Bulwark", level: 36, tou: 16, bonus: "+2 AP Per Second, +18 Melee Power", sres: 65, cres: 130 }
            ],
            setBonuses: [
                { pieces: 3, bonus: "+3% Reduction in Being Critically Hit" }
            ],
            totalStats: "WOU: 16 | TOU: 55 | INI: 16 | SRes: 206 | ERes: 141 | CRes: 271"
        }
        ,
        accessory_sunderedrings_r35: {
            name: "The Sundered Rings Set",
            type: "accessory",
            requiredLevel: 35,
            pieces: [
                { slot: "ring", name: "Cytheril", level: 35, ini: 17, tou: 17, sres: 61, eres: 74, cres: 51 },
                { slot: "ring", name: "Foserain", level: 35, wounds: 14, ws: 17, sres: 51, eres: 65, cres: 74 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+25 Wounds" }
            ],
            totalStats: "WOU: 14 | INI: 17 | TOU: 17 | WS: 17 | SRes: 112 | ERes: 139 | CRes: 125"
        },
        accessory_divided_r35: {
            name: "The Divided Set",
            type: "accessory",
            requiredLevel: 35,
            pieces: [
                { slot: "ring", name: "The Seeping Larva", level: 35, tou: 15, ws: 15, sres: 67, eres: 77, cres: 79 },
                { slot: "ring", name: "Writhing Shackles", level: 35, wounds: 15, ws: 15, sres: 77, eres: 79, cres: 67 },
                { slot: "ring", name: "Fated Veil", level: 35, tou: 15, ws: 15, sres: 79, eres: 67, cres: 77 },
                { slot: "ring", name: "Bloodied Fracture", level: 35, wounds: 15, ws: 15, sres: 76, eres: 72, cres: 72 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+3% Dodge" },
                { pieces: 3, bonus: "+3% Disrupt" },
                { pieces: 4, bonus: "Clarity - Any Ability: 10% chance to reduce the cost of the next ability used within 10 seconds to 0 Action Points" }
            ],
            totalStats: "WOU: 30 | TOU: 30 | INI: 30 | WS: 30 | SRes: 299 | ERes: 295 | CRes: 302"
        },
        accessory_fortunesbaubles_r35: {
            name: "The Fortune’s Baubles Set",
            type: "accessory",
            requiredLevel: 35,
            pieces: [
                { slot: "ring", name: "Hapless Ha'penny", level: 35, ini: 8, ws: 17, bonus: "+2% Parry", sres: 46, eres: 57, cres: 46 },
                { slot: "ring", name: "Gorkamork", level: 35, wounds: 17, ws: 8, bonus: "+2% Dodge", sres: 46, eres: 46, cres: 57 },
                { slot: "ring", name: "Wind of Change", level: 35, ini: 17, tou: 8, bonus: "+2% Disrupt", sres: 57, eres: 46, cres: 46 },
                { slot: "ring", name: "Fullbelly's Lucky Foot", level: 35, wounds: 8, ws: 17, bonus: "+2% Reduced Armor Penetration", sres: 50, eres: 50, cres: 50 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+2 Morale per Second" },
                { pieces: 3, bonus: "+2 AP per Second" },
                { pieces: 4, bonus: "+52 HP every 4 seconds" }
            ],
            totalStats: "WOU: 25 | INI: 25 | TOU: 25 | WS: 25 | SRes: 199 | ERes: 199 | CRes: 199"
        },
        accessory_windsimpervious_r35: {
            name: "The Winds Impervious Set",
            type: "accessory",
            requiredLevel: 35,
            pieces: [
                { slot: "neck", name: "Crow Caller Chain", level: 35, ws: 4, tou: 12, sres: 104, eres: 89, cres: 178 },
                { slot: "ring", name: "The Obdurate Seal", level: 35, wounds: 12, ws: 4, sres: 89, eres: 178, cres: 104 },
                { slot: "ring", name: "Wordbreaker Band", level: 35, ini: 12, ws: 4, sres: 178, eres: 104, cres: 89 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+25 Initiative" },
                { pieces: 3, bonus: "+210 Armor Bonus" }
            ],
            totalStats: "WOU: 12 | INI: 12 | TOU: 12 | WS: 12 | SRes: 371 | ERes: 371 | CRes: 371"
        },
        accessory_greatoathstones_r35: {
            name: "The Great Oathstones Set",
            type: "accessory",
            requiredLevel: 35,
            pieces: [
                { slot: "oathstone", name: "Oathstone of Karaz-a-Karak", level: 35, ws: 4, ini: 17, bonus: "+2% Dodge", sres: 47, eres: 41, cres: 61 },
                { slot: "oathstone", name: "Oathstone of Karak Eight Peaks", level: 35, wounds: 4, ini: 17, bonus: "+2% Dodge", sres: 41, eres: 61, cres: 47 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+15% Auto Attack Haste" }
            ],
            totalStats: "WOU: 4 | INI: 17 | TOU: 4 | WS: 17 | SRes: 88 | ERes: 102 | CRes: 108"
        },
        accessory_brokencovenant_r35: {
            name: "The Broken Covenant Set",
            type: "accessory",
            requiredLevel: 35,
            pieces: [
                { slot: "ring", name: "The Ascendant Verses", level: 35, ws: 17, ini: 4, bonus: "+2% Disrupt", sres: 61, eres: 48, cres: 40 },
                { slot: "ring", name: "The Deep Oaths", level: 35, wounds: 17, ini: 4, bonus: "+2% Disrupt", sres: 61, eres: 40, cres: 48 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+3 AP per Second" }
            ],
            totalStats: "WOU: 17 | INI: 4 | TOU: 17 | WS: 4 | SRes: 122 | ERes: 88 | CRes: 88"
        },
        accessory_dawaaaghteef_r35: {
            name: "Da Waaagh! Teef Set",
            type: "accessory",
            requiredLevel: 35,
            pieces: [
                { slot: "toof", name: "Black Toof", level: 35, wounds: 17, ini: 17, sres: 44, eres: 64, cres: 78 },
                { slot: "toof", name: "One Tusk", level: 35, ws: 17, ini: 17, sres: 93, eres: 33, cres: 60 },
                { slot: "toof", name: "Broke Toof", level: 35, ini: 17, tou: 17, sres: 33, eres: 89, cres: 64 },
                { slot: "toof", name: "Moon Fang", level: 35, wounds: 17, ws: 17, sres: 65, eres: 57, cres: 65 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+2% Reduction in being Critically Hit" },
                { pieces: 3, bonus: "+2% Reduced Armor Penetration" },
                { pieces: 4, bonus: "+20 Additional AP Pool" }
            ],
            totalStats: "WOU: 34 | INI: 34 | TOU: 34 | WS: 34 | SRes: 235 | ERes: 243 | CRes: 267"
        },
        accessory_bloodsoakedsigils_r35: {
            name: "The Blood-soaked Sigils Set",
            type: "accessory",
            requiredLevel: 35,
            pieces: [
                { slot: "sigil", name: "Strife", level: 35, wounds: 10, tou: 12, ws: 12, bonus: "+2% Parry", sres: 23, eres: 98, cres: 28 },
                { slot: "sigil", name: "Torment", level: 35, ini: 12, ws: 10, bonus: "+2% Parry", sres: 98, eres: 28, cres: 23 }
            ],
            setBonuses: [
                { pieces: 2, bonus: "+2% Reduced Chance to be Parried" }
            ],
            totalStats: "WOU: 10 | TOU: 12 | INI: 12 | WS: 10 | SRes: 121 | ERes: 121 | CRes: 51"
        }
    });
}
