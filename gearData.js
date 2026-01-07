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

    // Gear recommendations by class and level tier
    // Format: classId_tierKey: { slot: itemName }
    recommendations: {
        // Empire Classes
        'knight_starter': {
            head: 'Leather Cap',
            chest: 'Leather Tunic',
            hands: 'Leather Gloves',
            legs: 'Leather Pants',
            feet: 'Leather Boots',
            mainHand: 'Iron Sword',
            offHand: 'Wooden Shield'
        },
        'knight_low': {
            head: 'Iron Helm',
            chest: 'Iron Plate Armor',
            hands: 'Iron Gauntlets',
            legs: 'Iron Leg Plates',
            feet: 'Iron Boots',
            mainHand: 'Steel Sword',
            offHand: 'Steel Shield',
            back: 'Soldier\'s Cloak'
        },
        'knight_mid': {
            head: 'Steel Helmet',
            chest: 'Steel Breastplate',
            hands: 'Steel Gauntlets',
            legs: 'Steel Leg Plates',
            feet: 'Steel Boots',
            mainHand: 'Mithril Sword',
            offHand: 'Mithril Shield',
            back: 'Knight\'s Mantle'
        },
        'knight_high': {
            head: 'Ornate Helm',
            chest: 'Ancestral Breastplate',
            hands: 'Ancestral Gauntlets',
            legs: 'Ancestral Leg Plates',
            feet: 'Ancestral Boots',
            mainHand: 'Veteran\'s Blade',
            offHand: 'Veteran\'s Shield',
            back: 'Ceremonial Cloak',
            ring1: 'Defender\'s Ring',
            ring2: 'Valor Ring'
        },

        'witch_hunter_starter': {
            head: 'Leather Cap',
            chest: 'Leather Armor',
            hands: 'Leather Gloves',
            legs: 'Leather Pants',
            feet: 'Leather Boots',
            mainHand: 'Hand Axe',
            offHand: 'Pistol'
        },
        'witch_hunter_low': {
            head: 'Leather Helm',
            chest: 'Reinforced Leather',
            hands: 'Reinforced Gloves',
            legs: 'Reinforced Pants',
            feet: 'Leather Boots',
            mainHand: 'Battle Axe',
            offHand: 'Pistol',
            back: 'Hunter\'s Cloak'
        },
        'witch_hunter_mid': {
            head: 'Studded Cap',
            chest: 'Studded Armor',
            hands: 'Studded Gloves',
            legs: 'Studded Pants',
            feet: 'Studded Boots',
            mainHand: 'Great Axe',
            offHand: 'Dueling Pistol',
            back: 'Bounty Hunter\'s Mantle'
        },
        'witch_hunter_high': {
            head: 'Veteran\'s Cap',
            chest: 'Blessed Armor',
            hands: 'Blessed Gloves',
            legs: 'Blessed Pants',
            feet: 'Blessed Boots',
            mainHand: 'Executioner\'s Axe',
            offHand: 'Veteran\'s Pistol',
            back: 'Inquisitor\'s Cloak',
            ring1: 'Predator\'s Ring',
            ring2: 'Killer\'s Band'
        },

        'bright_wizard_starter': {
            head: 'Cloth Cap',
            chest: 'Cloth Robe',
            hands: 'Cloth Gloves',
            legs: 'Cloth Pants',
            feet: 'Cloth Shoes',
            mainHand: 'Wooden Staff',
            offHand: 'Grimoire'
        },
        'bright_wizard_low': {
            head: 'Mage\'s Cap',
            chest: 'Mage Robes',
            hands: 'Mage Gloves',
            legs: 'Mage Pants',
            feet: 'Mage Shoes',
            mainHand: 'Flame Staff',
            offHand: 'Spellbook'
        },
        'bright_wizard_mid': {
            head: 'Sorcerer\'s Hat',
            chest: 'Enchanted Robes',
            hands: 'Enchanted Gloves',
            legs: 'Enchanted Pants',
            feet: 'Enchanted Shoes',
            mainHand: 'Inferno Staff',
            offHand: 'Tome of Secrets'
        },
        'bright_wizard_high': {
            head: 'Archwizard\'s Crown',
            chest: 'Celestial Robes',
            hands: 'Celestial Gloves',
            legs: 'Celestial Pants',
            feet: 'Celestial Shoes',
            mainHand: 'Legendary Flame Staff',
            offHand: 'Grimoire of Power',
            ring1: 'Mage\'s Ring',
            ring2: 'Spell Amplifier'
        },

        'priest_sigmar_starter': {
            head: 'Holy Cap',
            chest: 'Holy Vestments',
            hands: 'Holy Gloves',
            legs: 'Holy Pants',
            feet: 'Holy Shoes',
            mainHand: 'Healing Staff',
            offHand: 'Holy Symbol'
        },
        'priest_sigmar_low': {
            head: 'Priest\'s Cowl',
            chest: 'Priestly Robes',
            hands: 'Priestly Gloves',
            legs: 'Priestly Pants',
            feet: 'Priestly Shoes',
            mainHand: 'Blessed Staff',
            offHand: 'Blessed Symbol'
        },
        'priest_sigmar_mid': {
            head: 'Blessed Crown',
            chest: 'Divine Robes',
            hands: 'Divine Gloves',
            legs: 'Divine Pants',
            feet: 'Divine Shoes',
            mainHand: 'Divine Staff',
            offHand: 'Sacred Relic'
        },
        'priest_sigmar_high': {
            head: 'Arch Priest\'s Crown',
            chest: 'Sanctified Robes',
            hands: 'Sanctified Gloves',
            legs: 'Sanctified Pants',
            feet: 'Sanctified Shoes',
            mainHand: 'Legendary Healing Staff',
            offHand: 'Holy Relic',
            ring1: 'Healer\'s Ring',
            ring2: 'Restoration Ring'
        },

        // Dwarf Classes
        'ironbreaker_starter': {
            head: 'Iron Helm',
            chest: 'Iron Plate Armor',
            hands: 'Iron Gauntlets',
            legs: 'Iron Leg Plates',
            feet: 'Iron Boots',
            mainHand: 'Dwarven Axe',
            offHand: 'Dwarven Shield'
        },
        'ironbreaker_low': {
            head: 'Steel Helm',
            chest: 'Steel Plate Armor',
            hands: 'Steel Gauntlets',
            legs: 'Steel Leg Plates',
            feet: 'Steel Boots',
            mainHand: 'Battle Axe',
            offHand: 'Steel Shield'
        },
        'ironbreaker_mid': {
            head: 'Mithril Helm',
            chest: 'Mithril Plate Armor',
            hands: 'Mithril Gauntlets',
            legs: 'Mithril Leg Plates',
            feet: 'Mithril Boots',
            mainHand: 'Great Battle Axe',
            offHand: 'Mithril Shield'
        },
        'ironbreaker_high': {
            head: 'Ancestral Helm',
            chest: 'Ancestral Plate Armor',
            hands: 'Ancestral Gauntlets',
            legs: 'Ancestral Leg Plates',
            feet: 'Ancestral Boots',
            mainHand: 'Legendary Axe',
            offHand: 'Legendary Shield',
            ring1: 'Dwarf\'s Ring',
            ring2: 'Stoneheart Ring'
        },

        'slayer_starter': {
            head: 'Leather Cap',
            chest: 'Leather Armor',
            hands: 'Leather Gloves',
            legs: 'Leather Pants',
            feet: 'Leather Boots',
            mainHand: 'Hand Axe',
            offHand: 'Hand Axe'
        },
        'slayer_low': {
            head: 'Reinforced Helm',
            chest: 'Reinforced Leather',
            hands: 'Reinforced Gloves',
            legs: 'Reinforced Pants',
            feet: 'Reinforced Boots',
            mainHand: 'Battle Axe',
            offHand: 'Battle Axe'
        },
        'slayer_mid': {
            head: 'Studded Helm',
            chest: 'Studded Armor',
            hands: 'Studded Gloves',
            legs: 'Studded Pants',
            feet: 'Studded Boots',
            mainHand: 'Great Axe',
            offHand: 'Great Axe'
        },
        'slayer_high': {
            head: 'Veteran Helm',
            chest: 'Veteran Armor',
            hands: 'Veteran Gloves',
            legs: 'Veteran Pants',
            feet: 'Veteran Boots',
            mainHand: 'Executioner\'s Axe',
            offHand: 'Executioner\'s Axe',
            ring1: 'Slayer\'s Ring',
            ring2: 'Berserk Ring'
        },

        'engineer_starter': {
            head: 'Leather Cap',
            chest: 'Leather Armor',
            hands: 'Leather Gloves',
            legs: 'Leather Pants',
            feet: 'Leather Boots',
            mainHand: 'Blunderbuss',
            offHand: 'Pistol'
        },
        'engineer_low': {
            head: 'Leather Helm',
            chest: 'Reinforced Leather',
            hands: 'Reinforced Gloves',
            legs: 'Reinforced Pants',
            feet: 'Reinforced Boots',
            mainHand: 'Engineering Blunderbuss',
            offHand: 'Engineering Pistol'
        },
        'engineer_mid': {
            head: 'Studded Helm',
            chest: 'Studded Armor',
            hands: 'Studded Gloves',
            legs: 'Studded Pants',
            feet: 'Studded Boots',
            mainHand: 'Advanced Blunderbuss',
            offHand: 'Advanced Pistol'
        },
        'engineer_high': {
            head: 'Veteran Helm',
            chest: 'Veteran Armor',
            hands: 'Veteran Gloves',
            legs: 'Veteran Pants',
            feet: 'Veteran Boots',
            mainHand: 'Legendary Blunderbuss',
            offHand: 'Legendary Pistol',
            ring1: 'Engineer\'s Ring',
            ring2: 'Precision Ring'
        },

        'runepriest_starter': {
            head: 'Cloth Cap',
            chest: 'Cloth Robe',
            hands: 'Cloth Gloves',
            legs: 'Cloth Pants',
            feet: 'Cloth Shoes',
            mainHand: 'Stone Staff',
            offHand: 'Grimoire'
        },
        'runepriest_low': {
            head: 'Runed Cap',
            chest: 'Runed Robes',
            hands: 'Runed Gloves',
            legs: 'Runed Pants',
            feet: 'Runed Shoes',
            mainHand: 'Runed Staff',
            offHand: 'Runed Grimoire'
        },
        'runepriest_mid': {
            head: 'Ancient Rune Cap',
            chest: 'Ancient Robes',
            hands: 'Ancient Gloves',
            legs: 'Ancient Pants',
            feet: 'Ancient Shoes',
            mainHand: 'Ancient Staff',
            offHand: 'Ancient Grimoire'
        },
        'runepriest_high': {
            head: 'Legendary Rune Crown',
            chest: 'Legendary Robes',
            hands: 'Legendary Gloves',
            legs: 'Legendary Pants',
            feet: 'Legendary Shoes',
            mainHand: 'Legendary Runed Staff',
            offHand: 'Legendary Rune Grimoire',
            ring1: 'Rune Ring',
            ring2: 'Mana Ring'
        },

        // Default fallback for any class
        'default_starter': {
            head: 'Starting Cap',
            chest: 'Starting Tunic',
            hands: 'Starting Gloves',
            legs: 'Starting Pants',
            feet: 'Starting Shoes'
        },
        'default_low': {
            head: 'Low Tier Head',
            chest: 'Low Tier Chest',
            hands: 'Low Tier Hands',
            legs: 'Low Tier Legs',
            feet: 'Low Tier Feet'
        },
        'default_mid': {
            head: 'Mid Tier Head',
            chest: 'Mid Tier Chest',
            hands: 'Mid Tier Hands',
            legs: 'Mid Tier Legs',
            feet: 'Mid Tier Feet'
        },
        'default_high': {
            head: 'High Tier Head',
            chest: 'High Tier Chest',
            hands: 'High Tier Hands',
            legs: 'High Tier Legs',
            feet: 'High Tier Feet'
        },

        // ========== SHAMAN HEALER SETS ==========
        'shaman_goblin_healer_rr8': {
            setName: 'Decimator Set',
            pieces: [
                { slot: 'Head', name: 'Decimator Morkyfeets', stats: 'Armor: 44 | TOU: 4, INI: 2, WP: 8, WOU: 4' },
                { slot: 'Chest', name: 'Decimator Robefings', stats: 'Armor: 55 | TOU: 6, WP: 8, WOU: 5 | +1% Disrupt' },
                { slot: 'Hands', name: 'Decimator Bits Keepa', stats: 'TOU: 2, WP: 4, WOU: 3 | +1% Healing Crit | 33 SRe, 20 ERe, 20 CRe' }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+18 Willpower' },
                { pieces: 3, bonus: '+22 Wounds' }
            ],
            totalStats: 'Armor: 99 | TOU: 12, INI: 2, WP: 20, WOU: 12'
        },
        'shaman_goblin_healer_rr16': {
            setName: 'Obliterator Set',
            pieces: [
                { slot: 'Head', name: 'Obliterator Morkyfeets', stats: 'Armor: 84 | TOU: 5, INI: 7, WP: 15, WOU: 9' },
                { slot: 'Chest', name: 'Obliterator Robefings', stats: 'Armor: 105 | TOU: 2, INI: 6, WP: 18, WOU: 9 | +2% Disrupt' },
                { slot: 'Hands', name: 'Obliterator Greenbringas', stats: 'Armor: 84 | TOU: 9, INI: 3, WP: 19, WOU: 5' },
                { slot: 'Shoulders', name: 'Obliterator Waaaghat', stats: 'Armor: 95 | TOU: 8, INI: 6, WP: 8, WOU: 10 | +1% Healing Crit' }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+32 Willpower' },
                { pieces: 3, bonus: '+38 Wounds' },
                { pieces: 4, bonus: '+3% Disrupt' }
            ],
            totalStats: 'Armor: 368 | TOU: 24, INI: 22, WP: 60, WOU: 33'
        },
        'shaman_goblin_healer_rr26': {
            setName: 'Devastator Set',
            pieces: [
                { slot: 'Head', name: 'Devastator Morkyfeets', stats: 'Armor: 132 | WP: 24, TOU: 7, INI: 7, WOU: 8' },
                { slot: 'Chest', name: 'Devastator Robefings', stats: 'Armor: 190 | WP: 32, TOU: 9, WOU: 10 | +40 HP Every 4s' },
                { slot: 'Hands', name: 'Devastator Greenbringas', stats: 'Armor: 140 | WP: 25, TOU: 7, INI: 6 | +2% Healing Crit' },
                { slot: 'Shoulders', name: 'Devastator Sholdafings', stats: 'Armor: 171 | WP: 23, TOU: 15, INI: 9 | +1% Disrupt' },
                { slot: 'Belt', name: 'Devastator Waaaghat', stats: 'Armor: 162 | WP: 32, TOU: 10, INI: 3, WOU: 12' }
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
                { slot: 'Head', name: 'Annihilator Morkyfeets', stats: 'Armor: 183 | WP: 21, TOU: 13, INI: 10 | +2% Dodge' },
                { slot: 'Chest', name: 'Annihilator Robefings', stats: 'Armor: 236 | WP: 30, TOU: 12, INI: 17 | +3 AP Per Second' },
                { slot: 'Hands', name: 'Annihilator Greenbringas', stats: 'Armor: 183 | WP: 23, TOU: 11, INI: 9, WOU: 14' },
                { slot: 'Shoulders', name: 'Annihilator Sholdafings', stats: 'Armor: 212 | WP: 25, INI: 12, WOU: 18 | +1% Reduction in being Crit' },
                { slot: 'Belt', name: 'Annihilator Waaaghat', stats: 'Armor: 212 | WP: 25, TOU: 12, INI: 13 | +2% Disrupt' }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+53 Willpower' },
                { pieces: 3, bonus: '+290 Corporeal Resistance' },
                { pieces: 4, bonus: '+1 Path of Mork Abilities' },
                { pieces: 5, bonus: '+5% Healing Critical Chance' }
            ],
            totalStats: 'Armor: 1026 | WP: 124, TOU: 36, INI: 58, WOU: 49'
        },
        'shaman_goblin_healer_rr45': {
            setName: 'Conqueror Set',
            pieces: [
                { slot: 'Head', name: 'Conqueror Morkyfeets', stats: 'Armor: 192 | WP: 14, INI: 16, WOU: 10 | +2% Healing Crit' },
                { slot: 'Chest', name: 'Conqueror Robefings', stats: 'Armor: 255 | WP: 33, TOU: 19, INI: 13 | +3 AP Per Second' },
                { slot: 'Hands', name: 'Conqueror Greenbringas', stats: 'Armor: 192 | WP: 25, TOU: 15, INI: 8 | +2% Disrupt' },
                { slot: 'Shoulders', name: 'Conqueror Sholdafings', stats: 'Armor: 225 | WP: 29, TOU: 16, INI: 12 | +2% Reduce Armor Pen' },
                { slot: 'Belt', name: 'Conqueror Waaaghat', stats: 'Armor: 225 | WP: 17, TOU: 10, INI: 30 | +2% Dodge' },
                { slot: 'Accessory', name: 'Conqueror Bitskeepa', stats: 'WP: 18, INI: 6, WOU: 12 | +36 Healing Power | 83 SRe, 77 ERe, 83 CRe' }
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
                { slot: 'Head', name: 'Vanquisher Morkyfeets', stats: 'Armor: 209 | WP: 20, INI: 10, WOU: 13 | +2% Healing Crit' },
                { slot: 'Chest', name: 'Vanquisher Robefings', stats: 'Armor: 274 | WP: 35, INI: 21, WOU: 14 | +3 AP Per Second' },
                { slot: 'Hands', name: 'Vanquisher Greenbringas', stats: 'Armor: 209 | WP: 15, INI: 23, WOU: 13 | +2% Reduced Armor Pen' },
                { slot: 'Shoulders', name: 'Vanquisher Shouldafings', stats: 'Armor: 241 | WP: 24, INI: 20, WOU: 10 | +2% Healing Crit' },
                { slot: 'Belt', name: 'Vanquisher Waaaghat', stats: 'Armor: 241 | WP: 18, INI: 27, WOU: 11 | +3% Disrupt' },
                { slot: 'Accessory', name: 'Vanquisher Bitskeepa', stats: 'WP: 22, INI: 22, WOU: 8 | +2% Reduction in being Crit | 87 SRe, 86 ERe, 86 CRe' }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+62 Willpower' },
                { pieces: 3, bonus: '+68 Wounds' },
                { pieces: 4, bonus: 'Exuberance - On Casting Heal: 20% chance to recover 35 AP' },
                { pieces: 5, bonus: '+5% Healing Critical Chance' },
                { pieces: 6, bonus: 'Increasing Impetus - On Heal: 5% chance to reduce build times by 25% for 5s' }
            ],
            totalStats: 'Armor: 1174 | WP: 134, INI: 123, WOU: 69'
        },
        'shaman_goblin_healer_rr60': {
            setName: 'Invader Set',
            pieces: [
                { slot: 'Head', name: 'Invader Morkyfeets', stats: 'Armor: 221 | WP: 27, INI: 12, WOU: 18 | +2 Morale Per Second' },
                { slot: 'Chest', name: 'Invader Robefings', stats: 'Armor: 292 | WP: 26, TOU: 16, INI: 21, WOU: 16 | +1 AP Per Second' },
                { slot: 'Hands', name: 'Invader Greenbringas', stats: 'Armor: 221 | WP: 25, INI: 17, WOU: 15 | +15 Healing Power' },
                { slot: 'Shoulders', name: 'Invader Sholdafings', stats: 'Armor: 257 | WP: 21, TOU: 12, INI: 20 | +2% Healing Crit' },
                { slot: 'Belt', name: 'Invader Waaaghat', stats: 'Armor: 257 | WP: 27, TOU: 15, WOU: 18 | +27 Healing Power' },
                { slot: 'Accessory', name: 'Invader Bitskeepa', stats: 'WP: 18, WOU: 12 | +2% Dodge, +2% Disrupt | 91 SRe, 91 ERe, 91 CRe' },
                { slot: 'Cloak', name: 'Invader Waaaghchain', stats: 'WP: 27, INI: 12 | +2 AP Per Second, +2% Reduced Armor Pen | 79 SRe, 78 ERe, 78 CRe' }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+66 Willpower' },
                { pieces: 3, bonus: '+73 Wounds' },
                { pieces: 4, bonus: '+80 Toughness' },
                { pieces: 5, bonus: '+5% Healing Critical Chance' },
                { pieces: 6, bonus: 'Absolve I - On Direct Heal: 5% chance to remove a Hex, Curse, or Ailment from heal target' },
                { pieces: 7, bonus: 'Much Good Green - All healing abilities have 10% chance to increase Crit Heal by 9% and crit value by 12% for 10s' }
            ],
            totalStats: 'Armor: 1248 | WP: 171, TOU: 43, INI: 82, WOU: 79'
        },
        'shaman_goblin_healer_rr70': {
            setName: 'Sovereign Set of da Great Green',
            pieces: [
                { slot: 'Head', name: 'Sovereign Morkyfeets of da Great Green', stats: 'Armor: 247 | WP: 30, INI: 17, WOU: 21 | +2 Morale Per Second' },
                { slot: 'Chest', name: 'Sovereign Robefings of da Great Green', stats: 'Armor: 334 | WP: 30, TOU: 20, INI: 25, WOU: 20 | +2 AP Per Second' },
                { slot: 'Hands', name: 'Sovereign Greenbringas of da Great Green', stats: 'Armor: 247 | WP: 28, INI: 19, WOU: 20 | +17 Healing Power' },
                { slot: 'Shoulders', name: 'Sovereign Sholdafings of da Great Green', stats: 'Armor: 296 | WP: 29, TOU: 20, INI: 22 | +2% Healing Crit' },
                { slot: 'Belt', name: 'Sovereign Waaaghat of da Great Green', stats: 'Armor: 296 | WP: 31, TOU: 20, WOU: 20 | +30 Healing Power' },
                { slot: 'Accessory', name: 'Sovereign Bitskeepa of da Great Green', stats: 'WP: 20, TOU: 14, INI: 20 | +2% Dodge, +2% Disrupt | 101 SRe, 101 ERe, 102 CRe' },
                { slot: 'Cloak', name: 'Sovereign Waaaghchain of da Great Green', stats: 'WP: 29, INI: 18 | +2 AP Per Second, +2% Reduced Armor Pen | 87 SRe, 87 ERe, 86 CRe' },
                { slot: 'Ring', name: 'Sovereign Waaaghfings of da Great Green', stats: 'WP: 18, INI: 22, WOU: 18 | +2% Healing Crit | 102 SRe, 101 ERe, 101 CRe' }
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
            totalStats: 'Armor: 1420 | WP: 215, TOU: 60, INI: 137, WOU: 119'
        },

        // ========== SHAMAN DPS SETS ==========
        'shaman_goblin_dps_rr8': {
            setName: 'Set of the Braggart',
            pieces: [
                { slot: 'Head', name: 'Braggart Morkyfeets', stats: 'Armor: 44 | INT: 6, TOU: 4, INI: 4, WOU: 4' },
                { slot: 'Chest', name: 'Braggart Robefings', stats: 'Armor: 55 | INT: 8, TOU: 5, WOU: 6 | +1% Reduced chance to be Disrupted' },
                { slot: 'Hands', name: 'Braggart Bits Keepa', stats: 'INT: 4, INI: 3, WOU: 2 | +1% Magic Crit | 23 SRe, 25 ERe, 25 CRe' }
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
                { slot: 'Head', name: 'Challenger Morkyfeets', stats: 'Armor: 84 | INT: 14, TOU: 7, INI: 7, WOU: 8' },
                { slot: 'Chest', name: 'Challenger Robefings', stats: 'Armor: 105 | INT: 18, TOU: 5, INI: 3, WOU: 9 | +2% Reduced chance to be Disrupted' },
                { slot: 'Hands', name: 'Challenger Greenbringas', stats: 'Armor: 84 | INT: 18, TOU: 8, INI: 4, WOU: 6' },
                { slot: 'Shoulders', name: 'Challenger Shouldafings', stats: 'Armor: 95 | TOU: 14, INI: 10, WOU: 8 | +1% Magic Crit' }
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
                { slot: 'Head', name: 'Morkyfeets of the Duelist', stats: 'Armor: 132 | INT: 24, TOU: 7, INI: 7, WOU: 8' },
                { slot: 'Chest', name: 'Robefings of the Duelist', stats: 'Armor: 190 | INT: 32, INI: 9, WOU: 10 | +40 HP Every 4s' },
                { slot: 'Hands', name: 'Greenbringas of the Duelist', stats: 'Armor: 140 | INT: 25, TOU: 7, INI: 6 | +2% Magic Crit' },
                { slot: 'Shoulders', name: 'Sholdafings of the Duelist', stats: 'Armor: 171 | INT: 23, TOU: 15, INI: 9 | +1% Disrupt Strikethrough' },
                { slot: 'Belt', name: 'Waaaghat of the Duelist', stats: 'Armor: 162 | INT: 32, TOU: 10, INI: 3, WOU: 12' }
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
                { slot: 'Head', name: 'Morkyfeets of the Mercenary', stats: 'Armor: 183 | INT: 21, TOU: 13, INI: 10 | +2% Dodge' },
                { slot: 'Chest', name: 'Robefings of the Mercenary', stats: 'Armor: 236 | INT: 30, INI: 17, WOU: 12 | +3 AP Per Second' },
                { slot: 'Hands', name: 'Greenbringas of the Mercenary', stats: 'Armor: 183 | INT: 11, TOU: 23, INI: 9, WOU: 14' },
                { slot: 'Shoulders', name: 'Sholdafings of the Mercenary', stats: 'Armor: 212 | INT: 18, TOU: 25, INI: 12 | +1% Reduction in being Crit' },
                { slot: 'Belt', name: 'Waaaghat of the Mercenary', stats: 'Armor: 212 | TOU: 15, INI: 13 | +2% Disrupt' }
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
                { slot: 'Head', name: 'Dominator Morkyfeets', stats: 'Armor: 192 | INT: 16, INI: 10, WOU: 14 | +2% Magic Crit' },
                { slot: 'Chest', name: 'Dominator Robefings', stats: 'Armor: 255 | INT: 33, TOU: 19, INI: 13 | +3 AP Per Second' },
                { slot: 'Hands', name: 'Dominator Greenbringas', stats: 'Armor: 192 | INT: 25, TOU: 15, INI: 8 | +2% Reduced Chance to be Disrupted' },
                { slot: 'Shoulders', name: 'Dominator Sholdafings', stats: 'Armor: 225 | INT: 29, TOU: 18, INI: 12 | +2 Morale Per Second' },
                { slot: 'Belt', name: 'Dominator Waaaghat', stats: 'Armor: 225 | INT: 10, INI: 30, WOU: 17 | +2% Reduced Chance to be Disrupted' },
                { slot: 'Accessory', name: 'Dominator Bitskeepa', stats: 'INT: 18, INI: 6, WOU: 12 | +36 Magic Power | 83 SRe, 77 ERe, 83 CRe' }
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
                { slot: 'Head', name: 'Oppressor Morkyfeets', stats: 'Armor: 209 | INT: 15, INI: 18, WOU: 10 | +2% Magic Crit' },
                { slot: 'Chest', name: 'Oppressor Robefings', stats: 'Armor: 274 | INT: 28, INI: 19 | +23 Magic Power' },
                { slot: 'Hands', name: 'Oppressor Greenbringas', stats: 'Armor: 209 | INT: 26, TOU: 8, INI: 11 | +3% Reduced Chance to be Disrupted' },
                { slot: 'Shoulders', name: 'Oppressor Sholdafings', stats: 'Armor: 241 | INT: 34, TOU: 10, INI: 20 | +1% Magic Crit' },
                { slot: 'Belt', name: 'Oppressor Waaaghat', stats: 'Armor: 241 | INT: 24, INI: 20, WOU: 12 | +3% Reduced Chance to be Disrupted' },
                { slot: 'Accessory', name: 'Oppressor Bitskeepa', stats: 'INT: 21, TOU: 12, INI: 19 | +36 Magic Power | 87 SRe, 86 ERe, 86 CRe' }
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
                { slot: 'Head', name: 'Warlord Morkyfeets', stats: 'Armor: 241 | TOU: 10, INI: 20, INT: 20, WOU: 28' },
                { slot: 'Chest', name: 'Warlord Robefings', stats: 'Armor: 323 | TOU: 19, INI: 28, INT: 18, WOU: 20 | +80 HP Every 4s' },
                { slot: 'Hands', name: 'Warlord Greenbringas', stats: 'Armor: 241 | TOU: 22, INI: 18, INT: 18 | +2% Magic Crit' },
                { slot: 'Shoulders', name: 'Warlord Sholdafings', stats: 'Armor: 286 | TOU: 21, INI: 26, WOU: 20 | +4% Reduced Armor Pen' },
                { slot: 'Belt', name: 'Warlord Waaaghat', stats: 'Armor: 286 | TOU: 20, INI: 30, WOU: 21 | +2% Magic Crit' },
                { slot: 'Accessory', name: 'Warlord Bitskeepa', stats: 'INI: 20, INT: 34 | +2% Dodge, +2% Disrupt' },
                { slot: 'Cloak', name: 'Warlord Greencloak', stats: 'TOU: 14, INI: 25, WOU: 24 | +3 AP Per Second | 102 SRe, 101 ERe, 101 CRe' },
                { slot: 'Ring', name: 'Warlord Waaagh Beads', stats: 'INI: 25, WOU: 14 | +2 Morale Per Second, +2% Magic Crit | 87 SRe, 87 ERe, 86 CRe' }
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
        'shaman_goblin_dps_rr70': {
            setName: 'Sovereign Set of da Windbreaker',
            pieces: [
                { slot: 'Head', name: 'Sovereign Morkyfeets of da Windbreaker', stats: 'Armor: 247 | INT: 17, INI: 18, WOU: 23 | +2% Magic Crit' },
                { slot: 'Chest', name: 'Sovereign Robefings of da Windbreaker', stats: 'Armor: 334 | TOU: 27, INI: 27, WOU: 31 | +4 AP Per Second' },
                { slot: 'Hands', name: 'Sovereign Greenbringas of da Windbreaker', stats: 'Armor: 247 | INT: 19, INI: 20, WOU: 26 | +20 Magic Power' },
                { slot: 'Shoulders', name: 'Sovereign Sholdafings of da Windbreaker', stats: 'Armor: 296 | INT: 21, INI: 20, WOU: 30 | +2% Magic Crit' },
                { slot: 'Belt', name: 'Sovereign Waaaghat of da Windbreaker', stats: 'Armor: 296 | INT: 24, INI: 26, WOU: 25 | +25 Magic Power' },
                { slot: 'Accessory', name: 'Sovereign Bitskeepa of da Windbreaker', stats: 'INT: 14, INI: 20, WOU: 20 | +2% Dodge, +2% Disrupt | 101 SRe, 101 ERe, 102 CRe' },
                { slot: 'Cloak', name: 'Sovereign Waaaghchain of da Windbreaker', stats: 'INI: 22, WOU: 27 | +4 AP Per Second | 87 SRe, 87 ERe, 86 CRe' },
                { slot: 'Ring', name: 'Sovereign Waaaghfings of da Windbreaker', stats: 'INT: 19, INI: 18, WOU: 21 | +2% Magic Crit | 102 SRe, 101 ERe, 101 CRe' }
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
    },

    // Get gear recommendations based on class, level, renown, and role
    getRecommendations: function(classId, level, renown, role) {
        let tier = 'starter';
        
        // More granular tier system based on renown rank
        if (level >= 40 && renown >= 70) {
            tier = 'rr70';
        } else if (level >= 40 && renown >= 60) {
            tier = 'rr60';
        } else if (level >= 40 && renown >= 55) {
            tier = 'rr55';
        } else if (level >= 40 && renown >= 45) {
            tier = 'rr45';
        } else if (level >= 35 && renown >= 35) {
            tier = 'rr35';
        } else if (level >= 26 && renown >= 26) {
            tier = 'rr26';
        } else if (level >= 16 && renown >= 16) {
            tier = 'rr16';
        } else if (level >= 8 && renown >= 8) {
            tier = 'rr8';
        } else if (level >= 5) {
            tier = 'rr5';
        }

        // Try role-specific gear first
        const roleKey = role ? `${classId}_${role.toLowerCase()}_${tier}` : null;
        if (roleKey && this.recommendations[roleKey]) {
            return this.recommendations[roleKey];
        }

        // Fall back to non-role specific
        const key = `${classId}_${tier}`;
        return this.recommendations[key] || this.recommendations[`default_${tier}`] || this.recommendations[`default_starter`];
    },

    // Get class by ID
    getClassById: function(classId) {
        return this.classes.find(c => c.id === classId);
    }
};
