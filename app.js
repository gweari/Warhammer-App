// Main application logic
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    populateClassDropdown();
    setupFormListener();
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
            optgroup.appendChild(option);
        });
        
        classSelect.appendChild(optgroup);
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

    if (!classId) {
        showError('Please select a class');
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

    const classObj = gearDatabase.getClassById(classId);
    const gearSet = gearDatabase.getRecommendations(classId, level, renown);

    displayRecommendations(classObj, level, renown, gearSet);
}

function displayRecommendations(classObj, level, renown, gearSet) {
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
                <span class="stat-value">${classObj.type}</span>
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
        html += '<div>';
        Object.entries(gearSet).forEach(([slot, item]) => {
            // Format slot name nicely
            const slotName = slot.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            
            html += `
                <div class="gear-item">
                    <div class="gear-slot">${slotName}:</div>
                    <div class="gear-name">${item}</div>
                </div>
            `;
        });
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
