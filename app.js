// Main application logic
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    populateClassDropdown();
    setupFormListener();
    setupClassChangeListener();
}

function populateClassDropdown() {
    const classSelect = document.getElementById('class');
    classSelect.innerHTML = '<option value="">Select a class...</option>';
    
    // Group classes by faction
    const factions = {};
    gearDatabase.classes.forEach(classObj => {
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

    if (!classId) {
        showError('Please select a class');
        return;
    }

    const classObj = gearDatabase.getClassById(classId);
    
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

    const gearSet = gearDatabase.getRecommendations(classId, level, renown, role);

    displayRecommendations(classObj, level, renown, role, gearSet);
}

function displayRecommendations(classObj, level, renown, role, gearSet) {
    const resultsDiv = document.getElementById('results');
    
    // Determine tier for display
    let tierName = 'Starter';
    if (level >= 31 && renown >= 61) {
        tierName = 'Endgame';
    } else if (level >= 21 && renown >= 31) {
        tierName = 'Mid-Tier';
    } else if (level >= 11 && renown >= 11) {
        tierName = 'Low-Tier';
    }

    let html = `
        <div class="stats-display">
            <div class="stat-line">
                <span class="stat-label">Class:</span>
                <span class="stat-value">${classObj.name}</span>
            </div>
            <div class="stat-line">
                <span class="stat-label">Role:</span>
                <span class="stat-value">${role || classObj.type}</span>
            </div>
            <div class="stat-line">
                <span class="stat-label">Level:</span>
                <span class="stat-value">${level}</span>
            </div>
            <div class="stat-line">
                <span class="stat-label">Renown Rank:</span>
                <span class="stat-value">${renown}</span>
            </div>
            <div class="stat-line">
                <span class="stat-label">Gear Tier:</span>
                <span class="stat-value">${tierName}</span>
            </div>
        </div>
    `;

    // Display gear recommendations
    if (gearSet && Object.keys(gearSet).length > 0) {
        // Show set name if available
        if (gearSet.setName) {
            html += `<div class="gear-item" style="background: rgba(255, 184, 28, 0.2); border-left-width: 5px;">
                <div class="gear-slot" style="font-size: 1.1rem;">Recommended Set:</div>
                <div class="gear-name" style="font-size: 1.05rem; font-weight: 700;">${gearSet.setName}</div>
            </div>`;
        }
        
        html += '<div>';
        Object.entries(gearSet).forEach(([slot, item]) => {
            // Skip special fields
            if (slot === 'setName' || slot === 'stats') return;
            
            // Format slot name nicely
            const slotName = slot.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            
            html += `
                <div class="gear-item">
                    <div class="gear-slot">${slotName}:</div>
                    <div class="gear-name">${item}</div>
                </div>
            `;
        });
        
        // Show stats summary if available
        if (gearSet.stats) {
            html += `<div class="gear-item" style="background: rgba(0, 0, 0, 0.3);">
                <div class="gear-slot">Set Bonuses:</div>
                <div class="gear-name" style="font-size: 0.9rem;">${gearSet.stats}</div>
            </div>`;
        }
        
        html += '</div>';
    } else {
        html += '<div class="no-results">No gear recommendations found for this combination.</div>';
    }

    resultsDiv.innerHTML = html;
}

function showError(message) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<div class="no-results" style="color: #ff6b6b;">${message}</div>`;
}
