// Warhammer Online RoR Gear Recommendation Database
const gearDatabase = {
    // Classes available in the game
    classes: [
        // Empire
        { id: 'knight', name: 'Knight', faction: 'Empire', type: 'Melee Tank' },
        { id: 'witch_hunter', name: 'Witch Hunter', faction: 'Empire', type: 'Melee DPS' },
        { id: 'bright_wizard', name: 'Bright Wizard', faction: 'Empire', type: 'Ranged DPS' },
        { id: 'priest_sigmar', name: 'Priest of Sigmar', faction: 'Empire', type: 'Healer' },
        
        // Dwarf
        { id: 'ironbreaker', name: 'Ironbreaker', faction: 'Dwarf', type: 'Melee Tank' },
        { id: 'slayer', name: 'Slayer', faction: 'Dwarf', type: 'Melee DPS' },
        { id: 'engineer', name: 'Engineer', faction: 'Dwarf', type: 'Ranged DPS' },
        { id: 'runepriest', name: 'Runepriest', faction: 'Dwarf', type: 'Healer' },
        
        // High Elf
        { id: 'lion_guard', name: 'Lion Guard', faction: 'High Elf', type: 'Melee Tank' },
        { id: 'shadow_warrior', name: 'Shadow Warrior', faction: 'High Elf', type: 'Melee DPS' },
        { id: 'mage', name: 'Mage', faction: 'High Elf', type: 'Ranged DPS' },
        { id: 'warrior_priest', name: 'Warrior Priest', faction: 'High Elf', type: 'Healer' },
        
        // Wood Elf
        { id: 'waywatcher', name: 'Waywatcher', faction: 'Wood Elf', type: 'Ranged DPS' },
        { id: 'blackguard', name: 'Blackguard', faction: 'Wood Elf', type: 'Melee Tank' },
        { id: 'pathfinder', name: 'Pathfinder', faction: 'Wood Elf', type: 'Melee DPS' },
        { id: 'druid', name: 'Druid', faction: 'Wood Elf', type: 'Healer' },
        
        // Chaos
        { id: 'chaos_knight', name: 'Chaos Knight', faction: 'Chaos', type: 'Melee Tank' },
        { id: 'marauder', name: 'Marauder', faction: 'Chaos', type: 'Melee DPS' },
        { id: 'magus', name: 'Magus', faction: 'Chaos', type: 'Ranged DPS' },
        { id: 'zealot', name: 'Zealot', faction: 'Chaos', type: 'Healer' },
        
        // Dark Elf
        { id: 'corsair', name: 'Corsair', faction: 'Dark Elf', type: 'Melee Tank' },
        { id: 'witch_elf', name: 'Witch Elf', faction: 'Dark Elf', type: 'Melee DPS' },
        { id: 'dark_elf_ranged', name: 'Ranger', faction: 'Dark Elf', type: 'Ranged DPS' },
        { id: 'disciple_khaine', name: 'Disciple of Khaine', faction: 'Dark Elf', type: 'Healer' },
        
        // Orc
        { id: 'black_orc', name: 'Black Orc', faction: 'Orc', type: 'Melee Tank' },
        { id: 'choppa', name: 'Choppa', faction: 'Orc', type: 'Melee DPS' },
        { id: 'shaman', name: 'Shaman', faction: 'Orc', type: 'Ranged DPS' },
        { id: 'rune_priest_orc', name: 'Orc Shaman (Healer)', faction: 'Orc', type: 'Healer' },
        
        // Goblin
        { id: 'squig_herder', name: 'Squig Herder', faction: 'Goblin', type: 'Ranged DPS' },
        { id: 'goblin_tank', name: 'Goblin Tank', faction: 'Goblin', type: 'Melee Tank' },
        { id: 'goblin_melee', name: 'Goblin Melee', faction: 'Goblin', type: 'Melee DPS' },
        { id: 'shaman_goblin', name: 'Goblin Shaman', faction: 'Goblin', type: 'Healer' }
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
        }
    },

    // Get gear recommendations based on class, level, and renown
    getRecommendations: function(classId, level, renown) {
        let tier = 'starter';
        
        if (level >= 31 && renown >= 61) {
            tier = 'high';
        } else if (level >= 21 && renown >= 31) {
            tier = 'mid';
        } else if (level >= 11 && renown >= 11) {
            tier = 'low';
        }

        const key = `${classId}_${tier}`;
        return this.recommendations[key] || this.recommendations[`default_${tier}`];
    },

    // Get class by ID
    getClassById: function(classId) {
        return this.classes.find(c => c.id === classId);
    }
};
