# Gear Data totalStats Update Guide

## Overview
All `totalStats` strings in gear data files should include percentage bonuses and special effects from individual pieces, not just the base stats.

## What to Include in totalStats

### Always Include:
1. **Base Stats** (STR, TOU, WS, INI, WOU, INT, WP, BS, etc.)
2. **Armor values**
3. **Resistances** (SRes, ERes, CRes)

### ADD These Bonuses from Pieces:
- **Percentage Bonuses**:
  - `+X% Block`
  - `+X% Parry`
  - `+X% Dodge`
  - `+X% Disrupt`
  - `+X% Melee Critical Chance` (or Magic/Healing Crit)
  - `+X% Critical Damage`
  - `+X% Reduced chance to be Critically Hit`
  - `+X% Reduced chance to be Parried/Blocked/Disrupted`
  - `+X% Reduced Armor Penetration`
  - `+X% Auto Attack Haste`

- **Power Bonuses**:
  - `+X Melee Power`
  - `+X Magic Power`
  - `+X Healing Power`

- **Regeneration**:
  - `+X HP Every 4 Seconds`
  - `+X AP Per Second`
  - `+X Morale Per Second`
  - `+X Morale`

## Format Example

### Before (Missing bonuses):
```javascript
totalStats: 'Armor: 297 | STR: 8 | TOU: 17 | WS: 4 | INI: 4 | WOU: 10 | SRes: 33 | ERes: 20 | CRes: 20'
```

### After (With bonuses):
```javascript
totalStats: 'Armor: 297 | STR: 8 | TOU: 17 | WS: 4 | INI: 4 | WOU: 10 | +1% Block | +1% Reduced chance to be Critically Hit | SRes: 33 | ERes: 20 | CRes: 20'
```

## Order Convention:
1. Armor
2. Base Stats (STR, TOU, WS, INI, WOU, INT, WP, BS in alphabetical order)
3. Percentage Bonuses (grouped together)
4. Power/Regen bonuses
5. Resistances (always last)

## Files That Need Updating:
All class gear data files need this treatment:
- ✓ chosenGearData.js (DONE)
- shamanGearData.js
- zealotGearData.js
- witchHunterGearData.js
- witchElfGearData.js
- whiteLionGearData.js
- warriorPriestGearData.js
- swordmasterGearData.js
- squigHerderGearData.js
- sorceressGearData.js
- slayerGearData.js
- shadowWarriorGearData.js
- runepriestGearData.js
- marauderGearData.js
- magusGearData.js
- knightGearData.js
- ironbreakerGearData.js
- engineerGearData.js
- discipleOfKhaineGearData.js
- choppaGearData.js
- brightWizardGearData.js
- blackOrcGearData.js
- blackGuardGearData.js
- archmageGearData.js

## For Future Classes:
When adding new gear sets, always extract ALL bonuses from the `stats` field of each piece and add them to the totalStats string.

## Automation Note:
Due to the complexity of parsing JavaScript object literals with nested quotes and varied formatting, this is best done with careful manual review or with a sophisticated parser. A regex-based approach risks missing edge cases or creating formatting issues.
