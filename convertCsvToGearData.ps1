# Automatically convert CSV data to JavaScript format and update endgameGearData.js

$csvPath = "tool from web\Copy of Minmaxing tool V.3.3.6 - Data.csv"
$outputPath = "endgameGearData.js"

Write-Host "Reading CSV file..." -ForegroundColor Cyan
$data = Import-Csv $csvPath

Write-Host "Processing $($data.Count) rows..." -ForegroundColor Cyan

# Group by class and set
$grouped = $data | Group-Object -Property Class, Sets | Sort-Object Name

$classData = @{}

foreach ($group in $grouped) {
    $class = $group.Group[0].Class
    $setName = $group.Group[0].Sets
    
    if (-not $classData.ContainsKey($class)) {
        $classData[$class] = @{}
    }
    
    if (-not $classData[$class].ContainsKey($setName)) {
        $classData[$class][$setName] = @()
    }
    
    foreach ($item in $group.Group) {
        $piece = $item.Piece
        $level = if ($item.Level) { $item.Level } else { "null" }
        $renown = if ($item.'Renown Rank') { $item.'Renown Rank' } else { "null" }
        
        # Build stats array
        $stats = @()
        
        # Add primary stats
        if ($item.Armor -and $item.Armor -ne "0") { $stats += "Armor: $($item.Armor)" }
        if ($item.Toughness -and $item.Toughness -ne "0") { $stats += "Toughness: $($item.Toughness)" }
        if ($item.Initiative -and $item.Initiative -ne "0") { $stats += "Initiative: $($item.Initiative)" }
        if ($item.Wounds -and $item.Wounds -ne "0") { $stats += "Wounds: $($item.Wounds)" }
        if ($item.'Weapon Skill' -and $item.'Weapon Skill' -ne "0") { $stats += "Weapon Skill: $($item.'Weapon Skill')" }
        if ($item.Strength -and $item.Strength -ne "0") { $stats += "Strength: $($item.Strength)" }
        if ($item.Intelligence -and $item.Intelligence -ne "0") { $stats += "Intelligence: $($item.Intelligence)" }
        if ($item.Willpower -and $item.Willpower -ne "0") { $stats += "Willpower: $($item.Willpower)" }
        if ($item.'Ballistic skill' -and $item.'Ballistic skill' -ne "0") { $stats += "Ballistic Skill: $($item.'Ballistic skill')" }
        if ($item.'Spiritual Resistance' -and $item.'Spiritual Resistance' -ne "0") { $stats += "Spiritual Resistance: $($item.'Spiritual Resistance')" }
        if ($item.'Elemental Resistance' -and $item.'Elemental Resistance' -ne "0") { $stats += "Elemental Resistance: $($item.'Elemental Resistance')" }
        if ($item.'Corporeal Resistance' -and $item.'Corporeal Resistance' -ne "0") { $stats += "Corporeal Resistance: $($item.'Corporeal Resistance')" }
        
        # Add bonuses
        if ($item.'Item bonus 1' -and $item.'Item bonus 1' -ne "-") { $stats += $item.'Item bonus 1' }
        if ($item.'Item bonus 2' -and $item.'Item bonus 2' -ne "-") { $stats += $item.'Item bonus 2' }
        if ($item.'Item bonus 3' -and $item.'Item bonus 3' -ne "-") { $stats += $item.'Item bonus 3' }
        
        $statsString = ($stats | ForEach-Object { "'$_'" }) -join ", "
        
        $classData[$class][$setName] += @{
            Piece = $piece
            Level = $level
            Renown = $renown
            Stats = $statsString
        }
    }
}

# Generate JavaScript code
Write-Host "Generating JavaScript code..." -ForegroundColor Cyan
$jsCode = @"
// Auto-generated from CSV data
const endgameGearData = {
    classes: {

"@

$classNames = $classData.Keys | Sort-Object
foreach ($className in $classNames) {
    $jsCode += "        '$className': {`n"
    
    $setNames = $classData[$className].Keys | Sort-Object
    foreach ($setName in $setNames) {
        $jsCode += "            '$setName': [`n"
        
        foreach ($item in $classData[$className][$setName]) {
            $jsCode += "                { piece: '$($item.Piece)', level: $($item.Level), renown: $($item.Renown), stats: [$($item.Stats)] },`n"
        }
        
        $jsCode += "            ],`n"
    }
    
    $jsCode += "        },`n"
}

$jsCode += @"
    },
    
    getRecommendations: function(playerClass, level, renown) {
        const classGear = this.classes[playerClass];
        if (!classGear) return [];
        
        const recommendations = [];
        
        for (const setName in classGear) {
            const pieces = classGear[setName];
            const qualifyingPieces = pieces.filter(p => 
                (p.level === null || level >= p.level) &&
                (p.renown === null || renown >= p.renown)
            );
            
            if (qualifyingPieces.length > 0) {
                recommendations.push({
                    set: setName,
                    pieces: qualifyingPieces
                });
            }
        }
        
        return recommendations;
    }
};
"@

# Write to file
Write-Host "Writing to $outputPath..." -ForegroundColor Cyan
$jsCode | Out-File -FilePath $outputPath -Encoding UTF8

Write-Host "Done! Processed $($grouped.Count) sets across $($classNames.Count) classes." -ForegroundColor Green
Write-Host "Output written to: $outputPath" -ForegroundColor Green
