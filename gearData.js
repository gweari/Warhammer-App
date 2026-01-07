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
            setName: 'Carnage Set',
            head: 'Carnage Morkyfeets',
            chest: 'Carnage Robefings',
            hands: 'Carnage Greenbringas',
            stats: 'CR 5 | 45 Armor | INT 13, TOU 12, WP 17, WOU 10 | 3pc: +20 Willpower'
        },
        'shaman_goblin_healer_rr8': {
            setName: 'Decimator Set',
            head: 'Decimator Morkyfeets',
            chest: 'Decimator Robefings',
            hands: 'Decimator Bits Keepa',
            stats: 'CR 8/RR 8 | 55 Armor | TOU 12, WP 20, WOU 12 | 2pc: +18 WP | 3pc: +22 Wounds'
        },
        'shaman_goblin_healer_rr16': {
            setName: 'Obliterator Set',
            head: 'Obliterator Morkyfeets',
            chest: 'Obliterator Robefings',
            hands: 'Obliterator Greenbringas',
            shoulders: 'Obliterator Waaaghat',
            stats: 'CR 17/RR 17 | 105 Armor | TOU 24, WP 60, WOU 33 | 2pc: +32 WP | 4pc: +3% Disrupt'
        },
        'shaman_goblin_healer_rr26': {
            setName: 'Devastator Set',
            head: 'Devastator Morkyfeets',
            chest: 'Devastator Robefings',
            hands: 'Devastator Greenbringas',
            shoulders: 'Devastator Sholdafings',
            belt: 'Devastator Waaaghat',
            stats: 'CR 29/RR 29 | 190 Armor | WP 136, TOU 32, WOU 36 | 2pc: +47 WP | 5pc: +4% Heal Crit'
        },
        'shaman_goblin_healer_rr35': {
            setName: 'Annihilator Set',
            head: 'Annihilator Morkyfeets',
            chest: 'Annihilator Robefings',
            hands: 'Annihilator Greenbringas',
            shoulders: 'Annihilator Sholdafings',
            belt: 'Annihilator Waaaghat',
            stats: 'CR 35/RR 39 | 236 Armor | WP 124, TOU 36, WOU 49 | 2pc: +53 WP | 5pc: +5% Heal Crit'
        },
        'shaman_goblin_healer_rr45': {
            setName: 'Conqueror Set',
            head: 'Conqueror Morkyfeets',
            chest: 'Conqueror Robefings',
            hands: 'Conqueror Greenbringas',
            shoulders: 'Conqueror Sholdafings',
            belt: 'Conqueror Waaaghat',
            accessory: 'Conqueror Bitskeepa',
            stats: 'CR 40/RR 45 | 255 Armor | WP 136, TOU 60, WOU 85 | 2pc: +57 WP | 6pc: +5% Heal Crit'
        },
        'shaman_goblin_healer_rr55': {
            setName: 'Vanquisher Set',
            head: 'Vanquisher Morkyfeets',
            chest: 'Vanquisher Robefings',
            hands: 'Vanquisher Greenbringas',
            shoulders: 'Vanquisher Shouldafings',
            belt: 'Vanquisher Waaaghat',
            accessory: 'Vanquisher Bitskeepa',
            stats: 'CR 40/RR 58 | 274 Armor | WP 134 | 5pc: +5% Heal Crit | 6pc: Increasing Impetus'
        },
        'shaman_goblin_healer_rr60': {
            setName: 'Invader Set',
            head: 'Invader Morkyfeets',
            chest: 'Invader Robefings',
            hands: 'Invader Greenbringas',
            shoulders: 'Invader Sholdafings',
            belt: 'Invader Waaaghat',
            accessory: 'Invader Bitskeepa',
            cloak: 'Invader Waaaghchain',
            stats: 'CR 40/RR 63 | 292 Armor | WP 171, TOU 43, WOU 82 | 6pc: Absolve I | 7pc: Much Good Green'
        },
        'shaman_goblin_healer_rr70': {
            setName: 'Sovereign Set of da Great Green',
            head: 'Sovereign Morkyfeets of da Great Green',
            chest: 'Sovereign Robefings of da Great Green',
            hands: 'Sovereign Greenbringas of da Great Green',
            shoulders: 'Sovereign Sholdafings of da Great Green',
            belt: 'Sovereign Waaaghat of da Great Green',
            accessory: 'Sovereign Bitskeepa of da Great Green',
            cloak: 'Sovereign Waaaghchain of da Great Green',
            ring: 'Sovereign Waaaghfings of da Great Green',
            stats: 'CR 40/RR 78 | 334 Armor | WP 215, TOU 60, WOU 137 | 6pc: +2 Path of Mork | 8pc: Absolute Preservation'
        },

        // ========== SHAMAN DPS SETS ==========
        'shaman_goblin_dps_rr5': {
            setName: 'Carnage Set',
            head: 'Carnage Morkyfeets',
            chest: 'Carnage Robefings',
            hands: 'Carnage Greenbringas',
            stats: 'CR 5 | 45 Armor | INT 13, TOU 12, WP 17, WOU 10 | Can use for early DPS'
        },
        'shaman_goblin_dps_rr8': {
            setName: 'Set of the Braggart',
            head: 'Braggart Morkyfeets',
            chest: 'Braggart Robefings',
            hands: 'Braggart Bits Keepa',
            stats: 'CR 8/RR 8 | 55 Armor | INT 18, TOU 9 | 2pc: +18 INT | 3pc: +22 Toughness'
        },
        'shaman_goblin_dps_rr16': {
            setName: 'Set of the Challenger',
            head: 'Challenger Morkyfeets',
            chest: 'Challenger Robefings',
            hands: 'Challenger Greenbringas',
            shoulders: 'Challenger Shouldafings',
            stats: 'CR 17/RR 17 | 105 Armor | INT 50, TOU 34 | 2pc: +32 INT | 4pc: +2% Magic Crit'
        },
        'shaman_goblin_dps_rr26': {
            setName: 'Duelist Set',
            head: 'Morkyfeets of the Duelist',
            chest: 'Robefings of the Duelist',
            hands: 'Greenbringas of the Duelist',
            shoulders: 'Sholdafings of the Duelist',
            belt: 'Waaaghat of the Duelist',
            stats: 'CR 29/RR 29 | 190 Armor | INT 136, TOU 32 | 2pc: +47 INT | 5pc: +4% Magic Crit'
        },
        'shaman_goblin_dps_rr35': {
            setName: 'Mercenary Set',
            head: 'Morkyfeets of the Mercenary',
            chest: 'Robefings of the Mercenary',
            hands: 'Greenbringas of the Mercenary',
            shoulders: 'Sholdafings of the Mercenary',
            belt: 'Waaaghat of the Mercenary',
            stats: 'CR 35/RR 39 | 236 Armor | INT 29, TOU 28 | 4pc: +1 Path of Gork | 5pc: +5% Magic Crit'
        },
        'shaman_goblin_dps_rr45': {
            setName: 'Dominator Set',
            head: 'Dominator Morkyfeets',
            chest: 'Dominator Robefings',
            hands: 'Dominator Greenbringas',
            shoulders: 'Dominator Sholdafings',
            belt: 'Dominator Waaaghat',
            accessory: 'Dominator Bitskeepa',
            stats: 'CR 40/RR 45 | 255 Armor | INT 133, TOU 52, WOU 79 | 5pc: Domination | 6pc: +5% Magic Crit'
        },
        'shaman_goblin_dps_rr55': {
            setName: 'Oppressor Set',
            head: 'Oppressor Morkyfeets',
            chest: 'Oppressor Robefings',
            hands: 'Oppressor Greenbringas',
            shoulders: 'Oppressor Sholdafings',
            belt: 'Oppressor Waaaghat',
            accessory: 'Oppressor Bitskeepa',
            stats: 'CR 40/RR 58 | 274 Armor | INT 148, TOU 30, WOU 107 | 5pc: +5% Magic Crit | 6pc: Increasing Impetus'
        },
        'shaman_goblin_dps_rr60': {
            setName: 'Warlord Set',
            head: 'Warlord Morkyfeets',
            chest: 'Warlord Robefings',
            hands: 'Warlord Greenbringas',
            shoulders: 'Warlord Sholdafings',
            belt: 'Warlord Waaaghat',
            accessory: 'Warlord Bitskeepa',
            cloak: 'Warlord Greencloak',
            ring: 'Warlord Waaagh Beads',
            stats: 'CR 40/RR 73 | 323 Armor | INT 179, TOU 84, WOU 56 | 6pc: +2 Path of Da Green | 8pc: Just a bit mor\''
        },
        'shaman_goblin_dps_rr70': {
            setName: 'Sovereign Set of da Windbreaker',
            head: 'Sovereign Morkyfeets of da Windbreaker',
            chest: 'Sovereign Robefings of da Windbreaker',
            hands: 'Sovereign Greenbringas of da Windbreaker',
            shoulders: 'Sovereign Sholdafings of da Windbreaker',
            belt: 'Sovereign Waaaghat of da Windbreaker',
            accessory: 'Sovereign Bitskeepa of da Windbreaker',
            cloak: 'Sovereign Waaaghchain of da Windbreaker',
            ring: 'Sovereign Waaaghfings of da Windbreaker',
            stats: 'CR 40/RR 78 | 334 Armor | INT 203, TOU 27, WOU 114 | 6pc: +2 Path of Gork | 8pc: Unshackled Freedom'
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
