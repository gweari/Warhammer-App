// Mapping of set names to their crest/token costs and currency type
const setCostData = {
    // Recruit Ward
    'Decimator': { cost: 75, currency: 'War Crests' },
    'Braggart': { cost: 75, currency: 'War Crests' },
    'Carnage': { cost: 61, currency: 'War Tokens' },
    // Scout Ward
    'Obliterator': { cost: 142, currency: 'War Crests' },
    'Challenger': { cost: 142, currency: 'War Crests' },
    'Havoc': { cost: 197, currency: 'War Tokens' },
    'Keeper': { cost: 0, currency: 'Dungeon' }, // Dungeon: Sewers/Sacellum
    // Soldier Ward
    'Devastator': { cost: 220, currency: 'War Crests' },
    'Duelist': { cost: 220, currency: 'War Crests' },
    'Mayhem': { cost: 379, currency: 'War Tokens' },
    // Officer Ward
    'Annihilator': { cost: 352, currency: 'War Crests' },
    'Mercenary': { cost: 352, currency: 'War Crests' },
    'Ruin': { cost: 612, currency: 'War Tokens' },
    // Conqueror Ward
    'Conqueror': { cost: 849, currency: 'War Crests' },
    'Dominator': { cost: 849, currency: 'War Crests' },
    'Red-Eye': { cost: 0, currency: 'Dungeon' }, // Dungeon: Gunbad
    // Vanquisher Ward
    'Oppressor': { cost: 1691, currency: 'War Crests' },
    'Vanquisher': { cost: 1691, currency: 'War Crests' },
    'Onslaught': { cost: 0, currency: 'PQ' }, // PQ Chapter 22
    'Sentinel': { cost: 0, currency: 'Dungeon' }, // Dungeon: Crypts/Bilerot
    // Invader Ward
    'Invader': { cost: 4567, currency: 'War Crests' },
    'Victorious': { cost: 6128, currency: 'War Crests' },
    'Triumphant': { cost: 6128, currency: 'War Crests' },
    'Bloodlord': { cost: 0, currency: 'Dungeon' }, // Dungeon: Bastion Stairs
    // PvE sets (no wards)
    'Beastlord': { cost: 0, currency: 'Boss' }, // Open World Bosses
    'Vale-Walker': { cost: 0, currency: 'Dungeon' }, // Dungeon: Hunter's Vale
    // End Game
    'Warlord': { cost: 7922, currency: 'War Crests' },
    'Sovereign': { cost: 10333, currency: 'War Crests' }
};
// Main application logic

// Unified Gear Database - Uses flat recommendations structure
const UnifiedGearDatabase = {
    classes: gearDatabase.classes,
    getClassById: function(classId) {
        return gearDatabase.getClassById(classId);
    },
    getRecommendations: function(classId, level, renown, role) {
        // Use flat recommendations structure
        return gearDatabase.getRecommendations(classId, level, renown, role);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Delay initialization to ensure all gear data scripts have loaded
    setTimeout(() => {
        initializeApp();
    }, 150);
});

function initializeApp() {
    populateClassDropdown();
    setupFormListener();
    setupClassChangeListener();
}

// ...existing code...

function populateClassDropdown() {
    const classSelect = document.getElementById('class');
    classSelect.innerHTML = '<option value="">Select a class...</option>';
    
    // Group classes by faction
    const factions = {};
    UnifiedGearDatabase.classes.forEach(classObj => {
        if (!factions[classObj.faction]) {
            factions[classObj.faction] = [];
        }
        factions[classObj.faction].push(classObj);
    });

    // Add options grouped by faction
    Object.keys(factions).sort().forEach(faction => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = faction;
        
        factions[faction].forEach(classObj => {
            const option = document.createElement('option');
            option.value = classObj.id;
            option.textContent = `${classObj.name} (${classObj.type})`;
            option.dataset.roles = JSON.stringify(classObj.roles);
            optgroup.appendChild(option);
        });
        
        classSelect.appendChild(optgroup);
    });
}

function setupClassChangeListener() {
    const classSelect = document.getElementById('class');
    const roleGroup = document.getElementById('roleGroup');
    const roleSelect = document.getElementById('role');
    
    classSelect.addEventListener('change', function() {
        const selectedOption = classSelect.options[classSelect.selectedIndex];
        
        if (selectedOption.value && selectedOption.dataset.roles) {
            const roles = JSON.parse(selectedOption.dataset.roles);
            
            if (roles.length > 1) {
                // Show role selector
                roleSelect.innerHTML = '<option value="">Select a role...</option>';
                roles.forEach(role => {
                    const option = document.createElement('option');
                    option.value = role;
                    option.textContent = role;
                    roleSelect.appendChild(option);
                });
                roleGroup.style.display = 'block';
                roleSelect.required = true;
            } else {
                // Hide role selector for single-role classes
                roleGroup.style.display = 'none';
                roleSelect.required = false;
            }
        } else {
            roleGroup.style.display = 'none';
            roleSelect.required = false;
        }
    });
}

function setupFormListener() {
    const form = document.getElementById('gearForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        fetchGearRecommendations();
    });
}

function fetchGearRecommendations() {
    const classId = document.getElementById('class').value;
    const level = parseInt(document.getElementById('level').value);
    const renown = parseInt(document.getElementById('renown').value);
    const role = document.getElementById('role').value;
    const crestSaver = document.getElementById('crestSaver') && document.getElementById('crestSaver').checked;

    if (!classId) {
        showError('Please select a class');
        return;
    }

    const classObj = UnifiedGearDatabase.getClassById(classId);
    // Check if role is required
    if (classObj.roles.length > 1 && !role) {
        showError('Please select a role');
        return;
    }
    if (level < 1 || level > 40) {
        showError('Level must be between 1 and 40');
        return;
    }
    if (renown < 1 || renown > 80) {
        showError('Renown Rank must be between 1 and 80');
        return;
    }

    let gearSets = UnifiedGearDatabase.getRecommendations(classId, level, renown, role);

    // PvE progression order (edit as needed)
    const pveProgression = [
        'Ruin',
        'Beastlord',
        'Sentinel',
        'Bloodlord'
    ];

    // Helper: get/set obtained sets from localStorage
    function getObtainedSets() {
        try {
            return JSON.parse(localStorage.getItem('obtainedPveSets') || '[]');
        } catch { return []; }
    }
    function setObtainedSets(arr) {
        localStorage.setItem('obtainedPveSets', JSON.stringify(arr));
    }

    // If Crest Saver Mode is enabled and level 40, only recommend the next uncompleted PvE set in order
    if (crestSaver && level === 40) {
        const obtained = getObtainedSets();
        // Find the next PvE set in progression not yet obtained
        let nextSetName = null;
        for (const setName of pveProgression) {
            if (!obtained.includes(setName)) {
                nextSetName = setName;
                break;
            }
        }
        if (nextSetName) {
            // Only show the next set in progression
            gearSets = gearSets.filter(set => (set.setName || '').toLowerCase().includes(nextSetName.toLowerCase()));
        } else {
            // All PvE sets obtained, show all sets as fallback
        }
    }

    displayRecommendations(classObj, level, renown, role, gearSets, crestSaver, pveProgression);
}

function displayRecommendations(classObj, level, renown, role, gearSets, crestSaver, pveProgression) {
    const resultsDiv = document.getElementById('results');
    let html = '';

    if (gearSets && gearSets.length > 0) {
        // Show BiS (first set) summary at the top
        let bisSet = gearSets[0];
        if (bisSet.totalStats) {
            let displayStats = bisSet.totalStats;
            if (bisSet.setBonuses && Array.isArray(bisSet.setBonuses)) {
                const statBonuses = {};
                bisSet.setBonuses.forEach(bonusEntry => {
                    const bonus = bonusEntry.bonus;
                    const matches = bonus.matchAll(/\+(\d+)(%?)\s+([^,|]+)/g);
                    for (const match of matches) {
                        const value = match[1];
                        const isPercent = match[2];
                        let statName = match[3].trim();
                        if (!statBonuses[statName]) {
                            statBonuses[statName] = { value: 0, isPercent: false };
                        }
                        statBonuses[statName].value += parseInt(value);
                        if (isPercent) statBonuses[statName].isPercent = true;
                    }
                });
                for (const [statName, bonus] of Object.entries(statBonuses)) {
                    const bonusStr = bonus.isPercent ? `+${bonus.value}%` : `+${bonus.value}`;
                    const pattern = new RegExp(`(${statName}:\s*)(\d+)`, 'i');
                    if (pattern.test(displayStats)) {
                        displayStats = displayStats.replace(pattern, (match, prefix, currentValue) => {
                            const newValue = parseInt(currentValue) + (bonus.isPercent ? 0 : bonus.value);
                            return `${prefix}${newValue}`;
                        });
                    } else {
                        displayStats += ` | ${bonusStr} ${statName}`;
                    }
                }
            }
            html += `<div class="gear-item" style="background: rgba(100, 100, 255, 0.15); border-left-color: #6b9eff; margin-bottom: 15px;">
                <div class="gear-slot" style="color: #8bb4ff;">📊 Total Set Stats (with Set Bonuses)</div>
                <div class="gear-name" style="font-size: 0.95rem; margin-top: 5px;">${displayStats}</div>
            </div>`;
        }
        // Show BiS (first set) breakdown
        displayGearSet(gearSets[0], 0, true);
        // If there are additional sets, add a button to show them
        if (gearSets.length > 1) {
            html += `
                <div style="text-align: center; margin: 30px 0;">
                    <button id="showOthersBtn" style="
                        background: rgba(255, 184, 28, 0.2);
                        border: 2px solid #ffb81c;
                        color: #ffb81c;
                        padding: 12px 30px;
                        font-size: 1rem;
                        font-weight: 600;
                        border-radius: 5px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    " onmouseover="this.style.background='rgba(255, 184, 28, 0.3)'" onmouseout="this.style.background='rgba(255, 184, 28, 0.2)'">
                        Show ${gearSets.length - 1} Other Option${gearSets.length - 1 > 1 ? 's' : ''}
                    </button>
                </div>
                <div id="otherSets" style="display: none;">
            `;
            gearSets.slice(1).forEach((gearSet, index) => {
                html += `<div style="height: 3px; background: linear-gradient(90deg, rgba(255,184,28,0) 0%, rgba(255,184,28,0.5) 50%, rgba(255,184,28,0) 100%); margin: 40px 0;"></div>`;
                displayGearSet(gearSet, index + 1, false);
            });
            html += '</div>';
        }
    } else {
        html += '<div class="no-results">No gear recommendations found for this combination.</div>';
    }

    resultsDiv.innerHTML = html;

    // Add click handler for show others button
    if (gearSets && gearSets.length > 1) {
        const showOthersBtn = document.getElementById('showOthersBtn');
        const otherSets = document.getElementById('otherSets');
        if (showOthersBtn) {
            showOthersBtn.addEventListener('click', function() {
                if (otherSets.style.display === 'none') {
                    otherSets.style.display = 'block';
                    showOthersBtn.textContent = 'Hide Other Options';
                } else {
                    otherSets.style.display = 'none';
                    showOthersBtn.textContent = `Show ${gearSets.length - 1} Other Option${gearSets.length - 1 > 1 ? 's' : ''}`;
                }
            });
        }
    }

    // PvE progression checklist and Ward checklist logic (Crest Saver Mode)
    if (crestSaver && level === 40) {
        // PvE checklist
        const checklist = document.getElementById('pveProgressionChecklist');
        if (checklist) {
            checklist.querySelectorAll('.pve-prog-checkbox').forEach(cb => {
                cb.addEventListener('change', function() {
                    let obtained = [];
                    try { obtained = JSON.parse(localStorage.getItem('obtainedPveSets') || '[]'); } catch { obtained = []; }
                    if (this.checked) {
                        if (!obtained.includes(this.dataset.set)) obtained.push(this.dataset.set);
                    } else {
                        obtained = obtained.filter(s => s !== this.dataset.set);
                    }
                    localStorage.setItem('obtainedPveSets', JSON.stringify(obtained));
                    fetchGearRecommendations();
                });
            });
        }
        // Ward checklist
        const wardChecklist = document.getElementById('wardProgressionChecklist');
        if (wardChecklist) {
            wardChecklist.querySelectorAll('.ward-prog-checkbox').forEach(cb => {
                cb.addEventListener('change', function() {
                    let obtainedWards = [];
                    try { obtainedWards = JSON.parse(localStorage.getItem('obtainedWards') || '[]'); } catch { obtainedWards = []; }
                    if (this.checked) {
                        if (!obtainedWards.includes(this.dataset.ward)) obtainedWards.push(this.dataset.ward);
                    } else {
                        obtainedWards = obtainedWards.filter(w => w !== this.dataset.ward);
                    }
                    localStorage.setItem('obtainedWards', JSON.stringify(obtainedWards));
                });
            });
        }
    }
    
    function displayGearSet(gearSet, index, isBiS) {
        // Show set name if available
        const setLabel = isBiS ? '🏆 Best in Slot' : `Alternative Set ${index}`;
        if (gearSet.setName) {
            // Show cost if available
            let costHtml = '';
            const costInfo = setCostData[gearSet.setName.replace(/ .*/,"")]; // Match by base set name
            if (costInfo) {
                if (costInfo.currency === 'War Crests') {
                    costHtml = `<span style="color:#ff4d4d; font-weight:600; margin-left:12px;">${costInfo.cost} <span title='War Crests' style='font-size:1.1em;'>🟥</span></span>`;
                } else if (costInfo.currency === 'War Tokens') {
                    costHtml = `<span style="color:#4db8ff; font-weight:600; margin-left:12px;">${costInfo.cost} <span title='War Tokens' style='font-size:1.1em;'>🟦</span></span>`;
                } else if (costInfo.currency === 'Dungeon') {
                    costHtml = `<span style="color:#ffd700; font-weight:600; margin-left:12px;">Dungeon</span>`;
                } else if (costInfo.currency === 'PQ') {
                    costHtml = `<span style="color:#ffd700; font-weight:600; margin-left:12px;">PQ/Chapter 22</span>`;
                } else if (costInfo.currency === 'Boss') {
                    costHtml = `<span style="color:#ffd700; font-weight:600; margin-left:12px;">Open World Bosses</span>`;
                }
            }
            html += `<div class="gear-item" style="background: rgba(255, 184, 28, ${isBiS ? '0.35' : '0.15'}); border-left-width: 5px; margin-bottom: 20px;">
                <div class="gear-slot" style="font-size: 1.2rem; color: #ffb81c;">${setLabel}${costHtml}</div>
                <div class="gear-name" style="font-size: 1.1rem; font-weight: 700; margin-top: 5px;">${gearSet.setName}</div>
            </div>`;
        }
        
        // Display individual pieces with stats
        if (gearSet.pieces && Array.isArray(gearSet.pieces)) {
            html += '<div style="margin-bottom: 20px;">';
            gearSet.pieces.forEach(piece => {
                // Cost display temporarily disabled - data preserved for future use
                // const costDisplay = piece.cost && piece.currency ? 
                //     `<div style="margin-top: 6px; padding: 4px 8px; background: rgba(255, 215, 0, 0.15); border-radius: 4px; display: inline-block;">
                //         <span style="color: #ffd700; font-size: 0.85rem;">💰 ${piece.cost} ${piece.currency}</span>
                //     </div>` : '';
                
                // Requirements display
                const reqParts = [];
                if (piece.level) reqParts.push(`Level ${piece.level}`);
                if (piece.renown) reqParts.push(`RR ${piece.renown}`);
                const reqDisplay = reqParts.length > 0 ? 
                    `<div style="margin-top: 6px; padding: 3px 8px; background: rgba(107, 158, 255, 0.15); border-radius: 3px; display: inline-block;">
                        <span style="color: #6b9eff; font-size: 0.8rem;">📋 ${reqParts.join(' | ')}</span>
                    </div>` : '';
                
                html += `
                    <div class="gear-item">
                        <div class="gear-slot" style="color: #ffb81c;">${piece.slot}:</div>
                        <div class="gear-name" style="font-weight: 600; margin-top: 3px;">${piece.name}</div>
                        <div class="gear-rarity" style="margin-top: 8px; padding: 5px 0; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.85rem; color: #b8b8b8; line-height: 1.4;">${piece.stats}</div>
                        ${reqDisplay}
                    </div>
                `;
            });
            html += '</div>';
            
            // Show total stats if available - calculate with set bonuses included
            if (gearSet.totalStats) {
                let displayStats = gearSet.totalStats;
                // Parse and add set bonuses to the total stats using only full stat names
                if (gearSet.setBonuses && Array.isArray(gearSet.setBonuses)) {
                    const statBonuses = {};
                    gearSet.setBonuses.forEach(bonusEntry => {
                        const bonus = bonusEntry.bonus;
                        // Match patterns like "+45 Armor", "+20 Willpower", "+4% Dodge", "+4 HP Every 4s", etc.
                        const matches = bonus.matchAll(/\+(\d+)(%?)\s+([^,|]+)/g);
                        for (const match of matches) {
                            const value = match[1];
                            const isPercent = match[2];
                            // Use stat name exactly as in the bonus (trimmed)
                            let statName = match[3].trim();
                            if (!statBonuses[statName]) {
                                statBonuses[statName] = { value: 0, isPercent: false };
                            }
                            statBonuses[statName].value += parseInt(value);
                            if (isPercent) statBonuses[statName].isPercent = true;
                        }
                    });
                    // Add bonuses to the displayStats string
                    for (const [statName, bonus] of Object.entries(statBonuses)) {
                        const bonusStr = bonus.isPercent ? `+${bonus.value}%` : `+${bonus.value}`;
                        // Try to match stat in displayStats by full name (case-insensitive)
                        const pattern = new RegExp(`(${statName}:\\s*)(\\d+)`, 'i');
                        if (pattern.test(displayStats)) {
                            // Add to existing stat
                            displayStats = displayStats.replace(pattern, (match, prefix, currentValue) => {
                                const newValue = parseInt(currentValue) + (bonus.isPercent ? 0 : bonus.value);
                                return `${prefix}${newValue}`;
                            });
                        } else {
                            // Append new stat (for percentage bonuses not in base stats)
                            displayStats += ` | ${bonusStr} ${statName}`;
                        }
                    }
                }
                html += `<div class="gear-item" style="background: rgba(100, 100, 255, 0.15); border-left-color: #6b9eff; margin-bottom: 15px;">
                    <div class="gear-slot" style="color: #8bb4ff;">📊 Total Set Stats (with Set Bonuses)</div>
                    <div class="gear-name" style="font-size: 0.95rem; margin-top: 5px;">${displayStats}</div>
                </div>`;
            }
            
            // Show set bonuses separately
            if (gearSet.setBonuses && Array.isArray(gearSet.setBonuses)) {
                html += `<div class="gear-item" style="background: rgba(0, 255, 100, 0.1); border-left-color: #5dff8c;">
                    <div class="gear-slot" style="color: #5dff8c; font-size: 1.05rem;">✨ Set Bonuses</div>`;
                gearSet.setBonuses.forEach(bonus => {
                    html += `<div class="gear-name" style="font-size: 0.9rem; padding: 5px 0; color: #d0d0d0;">
                        <span style="color: #5dff8c; font-weight: 700;">${bonus.pieces} Pieces:</span> ${bonus.bonus}
                    </div>`;
                });
                html += '</div>';
            }
        } else {
            // Fallback for old format
            html += '<div>';
            Object.entries(gearSet).forEach(([slot, item]) => {
                // Skip special fields
                if (slot === 'setName' || slot === 'stats' || slot === 'pieces' || slot === 'setBonuses' || slot === 'totalStats') return;
                
                // Format slot name nicely
                const slotName = slot.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                
                html += `
                    <div class="gear-item">
                        <div class="gear-slot">${slotName}:</div>
                        <div class="gear-name">${item}</div>
                    </div>
                `;
            });
            
            // Show stats summary if available (old format)
            if (gearSet.stats) {
                html += `<div class="gear-item" style="background: rgba(0, 0, 0, 0.3);">
                    <div class="gear-slot">Set Bonuses:</div>
                    <div class="gear-name" style="font-size: 0.9rem;">${gearSet.stats}</div>
                </div>`;
            }
            
            html += '</div>';
        }
    }
}

function showError(message) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<div class="no-results" style="color: #ff6b6b;">${message}</div>`;
}
