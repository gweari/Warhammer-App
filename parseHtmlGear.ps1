# PowerShell HTML Gear Parser
# Parses the community HTML gear data and generates JavaScript entries

param(
    [string]$ClassFilter = "",
    [int]$MaxRows = 100
)

Write-Host "Parsing HTML gear data..." -ForegroundColor Cyan

$htmlContent = Get-Content "tool from web\Data.html" -Raw

# Extract table rows using regex
$rowPattern = '<tr style="height: 20px">.*?</tr>'
$rows = [regex]::Matches($htmlContent, $rowPattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)

Write-Host "Found $($rows.Count) rows in HTML" -ForegroundColor Green

# Parse each row
$gearData = @()
$rowCount = 0

foreach ($row in $rows) {
    if ($rowCount -ge $MaxRows) { break }
    
    $rowHtml = $row.Value
    
    # Extract cell values
    $cellPattern = '<td[^>]*>([^<]*)</td>'
    $cells = [regex]::Matches($rowHtml, $cellPattern)
    
    if ($cells.Count -lt 20) { continue }
    
    $gearType = $cells[0].Groups[1].Value.Trim()
    $class = $cells[1].Groups[1].Value.Trim()
    $setName = $cells[2].Groups[1].Value.Trim()
    $piece = $cells[3].Groups[1].Value.Trim()
    
    # Skip if filtering by class
    if ($ClassFilter -ne "" -and $class -ne $ClassFilter) { continue }
    
    # Skip empty rows
    if ($gearType -eq "" -or $class -eq "") { continue }
    
    # Extract stats
    $armor = $cells[5].Groups[1].Value.Trim()
    $toughness = $cells[6].Groups[1].Value.Trim()
    $initiative = $cells[7].Groups[1].Value.Trim()
    $wounds = $cells[8].Groups[1].Value.Trim()
    $weaponSkill = $cells[9].Groups[1].Value.Trim()
    $strength = $cells[10].Groups[1].Value.Trim()
    $intelligence = $cells[11].Groups[1].Value.Trim()
    $willpower = $cells[12].Groups[1].Value.Trim()
    $ballisticSkill = $cells[13].Groups[1].Value.Trim()
    $spiritRes = $cells[14].Groups[1].Value.Trim()
    $elementalRes = $cells[15].Groups[1].Value.Trim()
    $corporealRes = $cells[16].Groups[1].Value.Trim()
    $bonus1 = $cells[17].Groups[1].Value.Trim()
    $bonus2 = $cells[18].Groups[1].Value.Trim()
    $bonus3 = $cells[19].Groups[1].Value.Trim()
    $level = $cells[20].Groups[1].Value.Trim()
    $renown = $cells[21].Groups[1].Value.Trim()
    
    $gearData += [PSCustomObject]@{
        Type = $gearType
        Class = $class
        Set = $setName
        Piece = $piece
        Armor = $armor
        TOU = $toughness
        INI = $initiative
        WOU = $wounds
        WS = $weaponSkill
        STR = $strength
        INT = $intelligence
        WP = $willpower
        BS = $ballisticSkill
        SpiritRes = $spiritRes
        ElementalRes = $elementalRes
        CorporealRes = $corporealRes
        Bonus1 = $bonus1
        Bonus2 = $bonus2
        Bonus3 = $bonus3
        Level = $level
        Renown = $renown
    }
    
    $rowCount++
    
    if ($rowCount % 10 -eq 0) {
        Write-Host "Parsed $rowCount rows..." -ForegroundColor Yellow
    }
}

Write-Host "`nParsed $($gearData.Count) gear pieces" -ForegroundColor Green

# Group by class and set
$groupedData = $gearData | Group-Object -Property Class, Set

Write-Host "Found gear for $($groupedData.Count) unique class/set combinations" -ForegroundColor Green

# Display sample data
Write-Host "`nSample data (first 5 sets):" -ForegroundColor Cyan
$groupedData | Select-Object -First 5 | ForEach-Object {
    Write-Host "  $($_.Name) - $($_.Count) pieces" -ForegroundColor White
}

# Offer to export specific class data
Write-Host "`nAvailable classes:" -ForegroundColor Cyan
$gearData | Select-Object -Property Class -Unique | ForEach-Object {
    Write-Host "  - $($_.Class)" -ForegroundColor White
}

Write-Host "`nTo parse a specific class, run:" -ForegroundColor Yellow
Write-Host "  .\parseHtmlGear.ps1 -ClassFilter 'CLASSNAME' -MaxRows 1000" -ForegroundColor Gray
