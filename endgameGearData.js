// Endgame Gear Data for All Classes - Return of Reckoning
// Data source: Community spreadsheet with comprehensive endgame gear information
// This file contains additional gear data that complements gearData.js

const EndgameGearData = {
    // Additional gear sets organized by class
    // Format: classId -> gear sets
    classes: {
        // Shaman Goblin additional endgame sets can go here
        // Other classes from the community spreadsheet will be added here
        
        // Example structure (to be populated from HTML data):
        // 'shaman_goblin': {
        //     'shaman_goblin_healer_rr80': {
        //         setName: 'Ultimate Endgame Set',
        //         pieces: [...],
        //         setBonuses: [...],
        //         totalStats: '...'
        //     }
        // }
    },

    // Get gear recommendations for any class/role
    getRecommendations: function(classId, level, renown, role) {
        const classGear = this.classes[classId];
        if (!classGear) {
            return []; // No data for this class
        }
        
        // Determine role identifier
        const roleKey = role ? `${classId}_${role.toLowerCase().replace(/\s+/g, '_')}` : classId;
        
        // Find all matching sets for this class/role
        const matchingSets = [];
        
        for (const setKey in classGear) {
            if (setKey.includes(roleKey) || setKey.includes(classId)) {
                const set = classGear[setKey];
                
                // Check if player meets requirements for at least some pieces
                if (set.pieces && set.pieces.length > 0) {
                    const hasAccessiblePieces = set.pieces.some(piece => {
                        const levelOk = !piece.level || level >= piece.level;
                        const renownOk = !piece.renown || renown >= piece.renown;
                        return levelOk && renownOk;
                    });
                    
                    if (hasAccessiblePieces) {
                        matchingSets.push(set);
                    }
                }
            }
        }
        
        return matchingSets;
    }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EndgameGearData;
}
