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
        'shaman_goblin_healer_rr5': {
            setName: 'Set of Carnage',
            pieces: [
                { slot: 'Head', name: 'Carnage Morkyfeets', stats: 'Armor: 36 | INT: 5, TOU: 3, INI: 2, WP: 6' },
                { slot: 'Chest', name: 'Carnage Robefings', stats: 'Armor: 45 | INT: 4, TOU: 6, WP: 6, WOU: 6' },
                { slot: 'Hands', name: 'Carnage Greenbringas', stats: 'Armor: 36 | INT: 4, TOU: 3, WP: 5, WOU: 4' }
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
                { slot: 'Head', name: 'Protector\'s Morkyfeets', stats: 'Armor: 40 | INI: 4, WP: 7, WOU: 6' },
                { slot: 'Chest', name: 'Protector\'s Robefings', stats: 'Armor: 50 | TOU: 6, INI: 3, WP: 8, WOU: 6' },
                { slot: 'Shoulders', name: 'Protector\'s Waaaghat', stats: 'Armor: 45 | INT: 4, TOU: 4, WP: 7, WOU: 4 | +4 HP Every 4s' }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+4% Dodge' },
                { pieces: 3, bonus: '+2% Reduced chance to be Critically Hit' }
            ],
            totalStats: 'Armor: 135 | INT: 4, TOU: 10, INI: 7, WP: 23, WOU: 16'
        },
        'shaman_goblin_healer_rr8': {
            setName: 'Decimator Set',
            pieces: [
                { slot: 'Head', name: 'Decimator Morkyfeets', stats: 'Armor: 44 | TOU: 4, INI: 2, WP: 8, WOU: 4', cost: 22, currency: 'War Crests', level: 8, renown: 8 },
                { slot: 'Chest', name: 'Decimator Robefings', stats: 'Armor: 55 | TOU: 6, WP: 8, WOU: 5 | +1% Disrupt', cost: 40, currency: 'War Crests', level: 8, renown: 8 },
                { slot: 'Hands', name: 'Decimator Bits Keepa', stats: 'TOU: 2, WP: 4, WOU: 3 | +1% Healing Crit | 33 SRe, 20 ERe, 20 CRe', cost: 13, currency: 'War Crests', level: 8, renown: 8 }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+18 Willpower' },
                { pieces: 3, bonus: '+22 Wounds' }
            ],
            totalStats: 'Armor: 99 | TOU: 12, INI: 2, WP: 20, WOU: 12'
        },
        'shaman_goblin_healer_rr16_keeper': {
            setName: 'Keeper\'s Set',
            pieces: [
                { slot: 'Head', name: 'Keeper\'s Morkyfeets', stats: 'Armor: 80 | TOU: 7, INI: 7, WP: 8, WOU: 10', cost: 1, currency: 'Keeper\'s Karl', level: 16 },
                { slot: 'Chest', name: 'Keeper\'s Robefings', stats: 'Armor: 100 | TOU: 10, WP: 15, WOU: 12 | +2 Morale', cost: 1, currency: 'Keeper\'s Karl', level: 16 },
                { slot: 'Hands', name: 'Keeper\'s Greenbringas', stats: 'Armor: 80 | TOU: 9, INI: 4, WP: 13, WOU: 6', cost: 1, currency: 'Keeper\'s Karl', level: 16 },
                { slot: 'Shoulders', name: 'Keeper\'s Sholdafings', stats: 'Armor: 90 | TOU: 15, WP: 13 | +1% Healing Crit', cost: 1, currency: 'Keeper\'s Karl', level: 16 },
                { slot: 'Belt', name: 'Keeper\'s Waaaghat', stats: 'Armor: 90 | TOU: 8, INI: 5, WP: 16, WOU: 9', cost: 1, currency: 'Keeper\'s Karl', level: 16 }
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
                { slot: 'Head', name: 'Havoc Morkyfeets', stats: 'Armor: 76 | TOU: 7, WP: 10, WOU: 4 | +1% Healing Crit', cost: 39, currency: 'War Tokens' },
                { slot: 'Chest', name: 'Havoc Robefings', stats: 'Armor: 95 | TOU: 8, WP: 12, WOU: 9 | +2% Dodge', cost: 70, currency: 'War Tokens' },
                { slot: 'Hands', name: 'Havoc Greenbringas', stats: 'Armor: 76 | TOU: 5, INI: 7, WP: 10, WOU: 9', cost: 33, currency: 'War Tokens' },
                { slot: 'Shoulders', name: 'Havoc Shouldafings', stats: 'Armor: 86 | TOU: 6, INI: 4, WP: 11, WOU: 15', cost: 55, currency: 'War Tokens' }
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
                { slot: 'Head', name: 'Tracker\'s Morkyfeets', stats: 'Armor: 80 | INT: 12, TOU: 4, WP: 10, WOU: 6' },
                { slot: 'Chest', name: 'Tracker\'s Robefings', stats: 'Armor: 100 | INT: 8, TOU: 8, WP: 16, WOU: 11' },
                { slot: 'Hands', name: 'Tracker\'s Greenbringas', stats: 'Armor: 80 | TOU: 9, INI: 6, WP: 10, WOU: 7' },
                { slot: 'Shoulders', name: 'Tracker\'s Shouldafings', stats: 'Armor: 90 | INT: 12, TOU: 8, WP: 4, WOU: 8 | +1% Disrupt' }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+31 Toughness' },
                { pieces: 3, bonus: '+20 HP Every 4s' },
                { pieces: 4, bonus: '+3% Disrupt' }
            ],
            totalStats: 'Armor: 350 | INT: 32, TOU: 25, INI: 10, WP: 40, WOU: 32'
        },
        'shaman_goblin_healer_rr16': {
            setName: 'Obliterator Set',
            pieces: [
                { slot: 'Head', name: 'Obliterator Morkyfeets', stats: 'Armor: 84 | TOU: 5, INI: 7, WP: 15, WOU: 9', cost: 28, currency: 'War Crests', level: 16, renown: 16 },
                { slot: 'Chest', name: 'Obliterator Robefings', stats: 'Armor: 105 | TOU: 2, INI: 6, WP: 18, WOU: 9 | +2% Disrupt', cost: 50, currency: 'War Crests', level: 16, renown: 16 },
                { slot: 'Hands', name: 'Obliterator Greenbringas', stats: 'Armor: 84 | TOU: 9, INI: 3, WP: 19, WOU: 5', cost: 24, currency: 'War Crests', level: 16, renown: 16 },
                { slot: 'Shoulders', name: 'Obliterator Waaaghat', stats: 'Armor: 95 | TOU: 8, INI: 6, WP: 8, WOU: 10 | +1% Healing Crit', cost: 40, currency: 'War Crests', level: 16, renown: 16 }
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
                { slot: 'Head', name: 'Morkyfeets of Mayhem', stats: 'Armor: 108 | INT: 17, TOU: 6, INI: 7, WOU: 7' },
                { slot: 'Chest', name: 'Robefings of Mayhem', stats: 'Armor: 145 | INT: 13, TOU: 20, WOU: 7 | +32 HP Every 4s' },
                { slot: 'Hands', name: 'Greenbringas of Mayhem', stats: 'Armor: 112 | INT: 6, TOU: 10, WOU: 2 | +2% Reduction in being Crit' },
                { slot: 'Shoulders', name: 'Sholdafings of Mayhem', stats: 'Armor: 130 | INT: 18, TOU: 11, WOU: 7 | +1% Disrupt Strikethrough' },
                { slot: 'Belt', name: 'Waaaghat of Mayhem', stats: 'Armor: 130 | WP: 25, TOU: 10, INI: 2, WOU: 8' }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+37 Willpower' },
                { pieces: 3, bonus: '+192 Corporeal Resistance' },
                { pieces: 4, bonus: '+5% Disrupt' },
                { pieces: 5, bonus: 'Superiority - On Hit: 25% chance to reduce target\'s Willpower by 58 while increasing your Intelligence by 58 for 10s' }
            ],
            totalStats: 'Armor: 625 | INT: 88, TOU: 26, WP: 37, INI: 23, WOU: 15'
        },
        'shaman_goblin_healer_rr26_stalker': {
            setName: 'Stalker Set',
            pieces: [
                { slot: 'Head', name: 'Stalker\'s Morkyfeets', stats: 'Armor: 132 | WP: 12, TOU: 7, WOU: 4 | +2% Dodge' },
                { slot: 'Chest', name: 'Stalker\'s Robefings', stats: 'Armor: 190 | WP: 19, TOU: 12 | +2% Disrupt' },
                { slot: 'Hands', name: 'Stalker\'s Greenbringas', stats: 'Armor: 140 | WP: 18, INI: 5 | +1% Healing Crit' },
                { slot: 'Shoulders', name: 'Stalker\'s Sholdafings', stats: 'Armor: 171 | WP: 18, TOU: 7, INI: 5, WOU: 11' }
            ],
            setBonuses: [
                { pieces: 2, bonus: '+34 Willpower' },
                { pieces: 3, bonus: '+2 Morale Per Second' },
                { pieces: 4, bonus: '+34 Toughness' }
            ],
            totalStats: 'Armor: 633 | WP: 67, TOU: 19, INI: 10, WOU: 15'
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
        'shaman_goblin_healer_rr45_ruin': {
            setName: 'Ruin Set',
            pieces: [
                { slot: 'Head', name: 'Morkyfeets of Ruin', stats: 'Armor: 164 | WP: 11, INT: 20, TOU: 9, WOU: 10' },
                { slot: 'Chest', name: 'Robefings of Ruin', stats: 'Armor: 215 | WP: 29, INT: 15, TOU: 14 | +2 Morale Per Second' },
                { slot: 'Hands', name: 'Greenbringas of Ruin', stats: 'Armor: 164 | WP: 20, TOU: 10, INI: 8 | +2% Disrupt' },
                { slot: 'Shoulders', name: 'Sholdafings of Ruin', stats: 'Armor: 189 | WP: 27, INT: 13, TOU: 11 | +1% Healing Crit' },
                { slot: 'Belt', name: 'Waaaghat of Ruin', stats: 'Armor: 189 | WP: 23, INT: 14, INI: 11, WOU: 11' }
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
            setName: 'Onslaught Set',
            pieces: [
                { slot: 'Head', name: 'Onslaught Morkyfeets', stats: 'Armor: 203 | TOU: 14, INI: 18, WOU: 18 | +2% Dodge' },
                { slot: 'Chest', name: 'Onslaught Robefings', stats: 'Armor: 259 | WP: 22, TOU: 16, INI: 25 | +72 HP Every 4s' },
                { slot: 'Hands', name: 'Onslaught Greenbringas', stats: 'Armor: 203 | WP: 24, TOU: 12, INI: 16, WOU: 12' },
                { slot: 'Shoulders', name: 'Onslaught Sholdafings', stats: 'Armor: 231 | WP: 22, TOU: 20, INI: 16 | +2% Disrupt' },
                { slot: 'Belt', name: 'Onslaught Waaaghat', stats: 'Armor: 231 | WP: 16, TOU: 18, INI: 27 | +1% Reduction in being Crit' }
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
            setName: 'Beastlord Set',
            pieces: [
                { slot: 'Shoulders', name: 'Beastlord Sholdafings', stats: 'Armor: 203 | WP: 14, INT: 24, WOU: 14 | 30 ERe, 25 CRe' },
                { slot: 'Belt', name: 'Beastlord Waaaghat', stats: 'Armor: 203 | WP: 12, INT: 20, WOU: 20 | 25 SRe, 30 CRe' },
                { slot: 'Chest', name: 'Beastlord Robefings', stats: 'Armor: 225 | WP: 14, INT: 15, WOU: 30 | 30 SRe, 30 ERe, 30 CRe' },
                { slot: 'Ring', name: 'Beastlord Waaagh Beads', stats: 'INT: 24, WOU: 13 | +1 AP Per Second | 60 SRe, 60 ERe, 64 CRe' },
                { slot: 'Cloak', name: 'Beastlord Cloak', stats: 'INT: 24, WOU: 32 | 72 SRe, 84 ERe, 72 CRe' },
                { slot: 'Trophy', name: 'Beastlord Hunting Guide', stats: 'On Use: Increases AP Regeneration for 15s on all party members. 30m cooldown' }
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
            setName: 'Rare Fortune Set',
            pieces: [
                { slot: 'Head', name: 'Rare Fortune Morkyfeets', stats: 'Armor: 190 | WP: 25, TOU: 11, INI: 10 | +2% Dodge' },
                { slot: 'Chest', name: 'Rare Fortune Robefings', stats: 'Armor: 240 | WP: 24, TOU: 17, INI: 16 | +3 AP Per Second' },
                { slot: 'Hands', name: 'Rare Fortune Greenbringas', stats: 'Armor: 190 | WP: 24, TOU: 11, INI: 13, WOU: 10' },
                { slot: 'Shoulders', name: 'Rare Fortune Sholdafings', stats: 'Armor: 215 | WP: 24, INI: 16, WOU: 17 | +1% Healing Crit' },
                { slot: 'Belt', name: 'Rare Fortune Waaaghat', stats: 'Armor: 215 | WP: 29, WOU: 14, INI: 16 | +12 Healing Power' }
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
                { slot: 'Head', name: 'Conqueror Morkyfeets', stats: 'Armor: 192 | WP: 14, INI: 16, WOU: 10 | +2% Healing Crit', cost: 70, currency: 'War Crests' },
                { slot: 'Chest', name: 'Conqueror Robefings', stats: 'Armor: 255 | WP: 33, TOU: 19, INI: 13 | +3 AP Per Second', cost: 147, currency: 'War Crests' },
                { slot: 'Hands', name: 'Conqueror Greenbringas', stats: 'Armor: 192 | WP: 25, TOU: 15, INI: 8 | +2% Disrupt', cost: 81, currency: 'War Crests' },
                { slot: 'Shoulders', name: 'Conqueror Sholdafings', stats: 'Armor: 225 | WP: 29, TOU: 16, INI: 12 | +2% Reduce Armor Pen', cost: 111, currency: 'War Crests' },
                { slot: 'Belt', name: 'Conqueror Waaaghat', stats: 'Armor: 225 | WP: 17, TOU: 10, INI: 30 | +2% Dodge', cost: 122, currency: 'War Crests' },
                { slot: 'Accessory', name: 'Conqueror Bitskeepa', stats: 'WP: 18, INI: 6, WOU: 12 | +36 Healing Power | 83 SRe, 77 ERe, 83 CRe', cost: 49, currency: 'War Crests' }
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
        'shaman_goblin_healer_rr60_redeye': {
            setName: 'Redeye Set',
            pieces: [
                { slot: 'Head', name: 'Redeye Morkyfeets', stats: 'Armor: 190 | WP: 15, TOU: 17, WOU: 16 | +1% Reduction in being Crit' },
                { slot: 'Chest', name: 'Redeye Robefings', stats: 'Armor: 240 | WP: 17, TOU: 27, INI: 17 | +3 AP Per Second' },
                { slot: 'Hands', name: 'Redeye Greenbringas', stats: 'Armor: 190 | WP: 21, INT: 12, TOU: 11, INI: 13, WOU: 12' },
                { slot: 'Shoulders', name: 'Redeye Sholdafings', stats: 'Armor: 215 | WP: 13, TOU: 20, INI: 22, WOU: 22 | +2% Reduced Armor Pen' },
                { slot: 'Belt', name: 'Redeye Waaaghat', stats: 'Armor: 215 | WP: 22, INT: 13, TOU: 14, INI: 27, WOU: 12 | +12 Healing Power' },
                { slot: 'Cloak', name: 'Redeye Greencloak', stats: 'WP: 17, TOU: 21, INI: 21 | 91 SRe, 76 ERe, 73 CRe' }
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
            setName: 'Sentinel Set',
            pieces: [
                { slot: 'Head', name: 'Sentinel Morkyfeets', stats: 'Armor: 203 | WP: 27, TOU: 15, WOU: 8 | +2% Dodge' },
                { slot: 'Chest', name: 'Sentinel Robefings', stats: 'Armor: 259 | WP: 35, TOU: 19, INI: 17 | +60 HP Every 4s' },
                { slot: 'Hands', name: 'Sentinel Greenbringas', stats: 'Armor: 203 | WP: 23, TOU: 15, INI: 10 | +21 Healing Power' },
                { slot: 'Shoulders', name: 'Sentinel Sholdafings', stats: 'Armor: 231 | WP: 30, TOU: 17, INI: 12 | +2% Reduction in being Crit' },
                { slot: 'Belt', name: 'Sentinel Waaaghat', stats: 'Armor: 231 | WP: 27, TOU: 10, INI: 14 | +2% Healing Crit' },
                { slot: 'Accessory', name: 'Sentinel Bitskeepa', stats: 'WP: 24, TOU: 18, INI: 12, WOU: 9 | 80 SRe, 90 ERe, 95 CRe' },
                { slot: 'Ring', name: 'Sentinel Waaagh Beads', stats: 'WP: 27, INI: 17 | +3 AP Per Second | Talisman Slot | 70 SRe, 70 ERe, 71 CRe' }
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
            setName: 'Vale Walker Set',
            pieces: [
                { slot: 'Head', name: 'Vale Walker Morkyfeets', stats: 'Armor: 216 | WP: 13, TOU: 20, INI: 13 | +2% Healing Crit' },
                { slot: 'Chest', name: 'Valewalker Robefings', stats: 'Armor: 278 | WP: 24, TOU: 30 | 35 ERe, 35 CRe' },
                { slot: 'Hands', name: 'Vale Walker Greenbringas', stats: 'Armor: 216 | WP: 10, TOU: 26, INI: 18 | +2% Reduced Armor Pen' },
                { slot: 'Shoulders', name: 'Vale Walker Sholdafings', stats: 'Armor: 247 | WP: 18, INI: 24 | +2% Healing Crit | 30 SRe, 35 ERe' },
                { slot: 'Belt', name: 'Vale Walker Waaaghat', stats: 'Armor: 247 | WP: 18, TOU: 22, INI: 18 | 40 SRe, 35 ERe' },
                { slot: 'Accessory', name: 'Vale Walker Bitskeepa', stats: 'WP: 11, INI: 32, WOU: 24 | 90 SRe, 90 ERe, 90 CRe' },
                { slot: 'Cloak', name: 'Vale Walker Waaaghchain', stats: 'WP: 24, INI: 21 | +48 HP Every 4s, +1% Reduced Armor Pen | 66 SRe, 80 ERe, 80 CRe' }
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
                { slot: 'Head', name: 'Triumphant Morkyfeets', stats: 'Armor: 235 | WP: 20, WOU: 14, INI: 17 | +2% Healing Crit' },
                { slot: 'Chest', name: 'Triumphant Robefings', stats: 'Armor: 308 | WP: 35, INI: 21, WOU: 19 | +4 AP Per Second' },
                { slot: 'Hands', name: 'Triumphant Greenbringas', stats: 'Armor: 235 | WP: 15, INI: 25, WOU: 13 | +3% Reduced Armor Pen' },
                { slot: 'Shoulders', name: 'Triumphant Sholdafings', stats: 'Armor: 275 | WP: 26, INI: 22, WOU: 15 | +2% Healing Crit' },
                { slot: 'Belt', name: 'Triumphant Waaaghat', stats: 'Armor: 275 | WP: 21, INI: 30, WOU: 14 | +3% Disrupt' },
                { slot: 'Accessory', name: 'Triumphant Bitskeepa', stats: 'WP: 22, INI: 25, WOU: 12 | +2% Reduction in being Crit | 94 SRe, 94 ERe, 94 CRe' },
                { slot: 'Cloak', name: 'Triumphant Greencloak', stats: 'WP: 20, TOU: 11, INI: 25 | +3 AP Per Second | 94 SRe, 94 ERe, 94 CRe' }
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
        'shaman_goblin_dps_rr8_hunter': {
            setName: 'Hunter\'s Set',
            pieces: [
                { slot: 'Head', name: 'Hunter\'s Morkyfeets', stats: 'Armor: 40 | INT: 4, TOU: 3, WP: 5, WOU: 5' },
                { slot: 'Chest', name: 'Hunter\'s Robefings', stats: 'Armor: 50 | INT: 8, WP: 4, WOU: 5 | +1% Disrupt' },
                { slot: 'Hands', name: 'Hunter\'s Greenbringas', stats: 'Armor: 40 | INT: 4, TOU: 8, WP: 5' }
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
        'shaman_goblin_dps_rr60_bloodlord': {
            setName: 'Bloodlord Set',
            pieces: [
                { slot: 'Head', name: 'Bloodlord Morkyfeets', stats: 'Armor: 221 | INT: 27, INI: 10, WOU: 18 | +2% Dodge' },
                { slot: 'Chest', name: 'Bloodlord Robefings', stats: 'Armor: 292 | INT: 29, TOU: 12, INI: 25, WOU: 19 | +1 Morale Per Second' },
                { slot: 'Hands', name: 'Bloodlord Greenbringas', stats: 'Armor: 221 | INT: 26, TOU: 10, INI: 15, WOU: 16' },
                { slot: 'Shoulders', name: 'Bloodlord Sholdafings', stats: 'Armor: 257 | INT: 27, INI: 21, WOU: 10 | +2% Magic Crit' },
                { slot: 'Belt', name: 'Bloodlord Waaaghat', stats: 'Armor: 257 | INT: 29, TOU: 14, INI: 17 | +3% Disrupt' },
                { slot: 'Accessory', name: 'Bloodlord Bitskeepa', stats: 'INT: 21, INI: 15, WOU: 17 | +3 Morale Per Second | 91 SRe, 91 ERe, 91 CRe' },
                { slot: 'Cloak', name: 'Bloodlord Greencloak', stats: 'INT: 22, INI: 15, WOU: 15 | +24 Magic Power | 91 SRe, 91 ERe, 91 CRe' }
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
                { slot: 'Head', name: 'Victorious Morkyfeets', stats: 'Armor: 235 | INT: 19, INI: 14, WOU: 18 | +2% Magic Crit' },
                { slot: 'Chest', name: 'Victorious Robefings', stats: 'Armor: 308 | INT: 28, INI: 24 | +4 AP Per Second, +23 Magic Power' },
                { slot: 'Hands', name: 'Victorious Greenbringas', stats: 'Armor: 235 | INT: 30, TOU: 11, INI: 11, WOU: 11 | +3% Reduced Chance to be Disrupted' },
                { slot: 'Shoulders', name: 'Victorious Sholdafings', stats: 'Armor: 275 | INT: 32, TOU: 10, INI: 20 | +2% Magic Crit' },
                { slot: 'Belt', name: 'Victorious Waaaghat', stats: 'Armor: 275 | INT: 27, INI: 15, WOU: 23 | +3% Reduced Chance to be Disrupted' },
                { slot: 'Accessory', name: 'Victorious Bitskeepa', stats: 'INT: 25, INI: 23, WOU: 12 | +36 Magic Power | 94 SRe, 94 ERe, 94 CRe' },
                { slot: 'Cloak', name: 'Victorious Greencloak', stats: 'INT: 16, INI: 10, WOU: 25 | +2% Magic Crit | 94 SRe, 94 ERe, 94 CRe' }
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

        // Find ALL matching sets for this tier
        const allSets = [];
        const roleKey = role ? `${classId}_${role.toLowerCase()}_${tier}` : null;
        const classKey = `${classId}_${tier}`;
        
        // Search through all recommendations for matching keys
        for (const key in this.recommendations) {
            // Check if this key matches the current class, role, and tier
            if (roleKey && key.startsWith(roleKey)) {
                allSets.push(this.recommendations[key]);
            } else if (!key.includes('_healer_') && !key.includes('_dps_') && !key.includes('_tank_') && key === classKey) {
                allSets.push(this.recommendations[key]);
            }
        }
        
        // If no sets found, try fallback
        if (allSets.length === 0) {
            const fallback = this.recommendations[`default_${tier}`] || this.recommendations[`default_starter`];
            if (fallback) {
                allSets.push(fallback);
            }
        }
        
        // Sort sets by score (best first) - pass level and renown for context
        allSets.sort((a, b) => this.calculateSetScore(b, role, level, renown, tier) - this.calculateSetScore(a, role, level, renown, tier));
        
        return allSets;
    },

    // Calculate score for a gear set to determine BiS
    calculateSetScore: function(gearSet, role, level, renown, tier) {
        if (!gearSet || !gearSet.pieces || !Array.isArray(gearSet.pieces)) {
            return 0;
        }
        
        let score = 0;
        const isHealer = role && role.toLowerCase() === 'healer';
        const isDPS = role && role.toLowerCase() === 'dps';
        const isTank = role && role.toLowerCase() === 'tank';
        
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
        
        // If player's RR is significantly below tier requirement, heavily favor PvE sets
        if (renown < requiredRR - 2) {
            if (isPvESet) {
                score += 500; // Huge bonus for PvE sets when undergeared in RR
            } else {
                score -= 300; // Penalty for RvR sets when undergeared
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
        
        // Add bonus for set bonuses quality
        if (gearSet.setBonuses && Array.isArray(gearSet.setBonuses)) {
            score += gearSet.setBonuses.length * 40;
            
            // Bonus for set completion
            const maxPieces = Math.max(...gearSet.setBonuses.map(b => b.pieces));
            if (maxPieces >= 5) score += 100;
        }
        
        // Bonus for number of pieces (more complete sets are better)
        score += gearSet.pieces.length * 20;
        
        return score;
    },

    // Get class by ID
    getClassById: function(classId) {
        return this.classes.find(c => c.id === classId);
    }
};
