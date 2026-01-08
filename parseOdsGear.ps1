# ODS Gear Data Parser for Warhammer RoR
# Extracts gear data from the ODS spreadsheet and generates JavaScript format

$odsPath = "tool from web\Copy of Minmaxing tool V.3.3.6 (1).ods"

Write-Host "Reading ODS file..." -ForegroundColor Cyan

# Extract content.xml from ODS
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($odsPath)
$content = $zip.Entries | Where-Object {$_.Name -eq "content.xml"}
$stream = $content.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xmlContent = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

Write-Host "Parsing XML..." -ForegroundColor Cyan

# Parse XML
[xml]$xml = $xmlContent

# Get namespace manager
$nsManager = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
$nsManager.AddNamespace("table", "urn:oasis:names:tc:opendocument:xmlns:table:1.0")
$nsManager.AddNamespace("text", "urn:oasis:names:tc:opendocument:xmlns:text:1.0")
$nsManager.AddNamespace("office", "urn:oasis:names:tc:opendocument:xmlns:office:1.0")

# Find the main data table (usually first table with "Data" name or similar)
$tables = $xml.SelectNodes("//table:table", $nsManager)
Write-Host "Found $($tables.Count) sheets in the spreadsheet" -ForegroundColor Green

# List all sheet names
Write-Host "`nAvailable sheets:" -ForegroundColor Yellow
foreach ($table in $tables) {
    $tableName = $table.GetAttribute("name")
    Write-Host "  - $tableName" -ForegroundColor White
}

# Get the Data sheet
$dataTable = $tables | Where-Object { $_.GetAttribute("name") -eq "Data" }
if (-not $dataTable) {
    Write-Host "Data sheet not found, using first sheet" -ForegroundColor Yellow
    $dataTable = $tables[0]
}

$tableName = $dataTable.GetAttribute("name")
Write-Host "`nParsing sheet: $tableName" -ForegroundColor Cyan

# Get all rows
$rows = $dataTable.SelectNodes(".//table:table-row", $nsManager)
Write-Host "Found $($rows.Count) rows" -ForegroundColor Green

# Parse header row (first row with data)
$headerRow = $rows[0]
$headers = @()
$headerCells = $headerRow.SelectNodes(".//table:table-cell", $nsManager)
foreach ($cell in $headerCells) {
    $textNode = $cell.SelectSingleNode(".//text:p", $nsManager)
    if ($textNode) {
        $headers += $textNode.InnerText
    } else {
        $headers += ""
    }
}

Write-Host "Headers: $($headers[0..10] -join ', ')..." -ForegroundColor Gray

# Find column indices
$colMap = @{}
$colNames = @("Type", "Class", "Sets", "Piece", "Armor", "Toughness", "Initiative", "Wounds", 
              "Weapon Skill", "Strength", "Intelligence", "Willpower", "Ballistic skill",
              "Spiritual Resistance", "Elemental Resistance", "Corporeal Resistance",
              "Item bonus 1", "Item bonus 2", "Item bonus 3", "Level", "Renown Rank")

for ($i = 0; $i -lt $headers.Count; $i++) {
    foreach ($colName in $colNames) {
        if ($headers[$i] -like "*$colName*") {
            $colMap[$colName] = $i
        }
    }
}

Write-Host "`nColumn mapping found for: $($colMap.Keys -join ', ')" -ForegroundColor Green

# Parse data rows (skip first row which is header)
$gearData = @()
$rowNum = 0

foreach ($row in $rows | Select-Object -Skip 1 -First 100) {
    $rowNum++
    if ($rowNum % 100 -eq 0) {
        Write-Host "Processing row $rowNum..." -ForegroundColor Yellow
    }
    
    $cells = @()
    $cellNodes = $row.SelectNodes(".//table:table-cell", $nsManager)
    
    foreach ($cell in $cellNodes) {
        $repeatAttr = $cell.GetAttribute("number-columns-repeated")
        $repeat = if ($repeatAttr) { [int]$repeatAttr } else { 1 }
        
        $textNode = $cell.SelectSingleNode(".//text:p", $nsManager)
        $value = if ($textNode) { $textNode.InnerText } else { "" }
        
        for ($i = 0; $i -lt $repeat; $i++) {
            $cells += $value
        }
    }
    
    if ($cells.Count -lt 20) { continue }
    
    # Skip empty rows
    if (-not $cells[$colMap["Type"]] -or -not $cells[$colMap["Class"]]) { continue }
    
    $gearData += [PSCustomObject]@{
        Type = $cells[$colMap["Type"]]
        Class = $cells[$colMap["Class"]]
        Set = $cells[$colMap["Sets"]]
        Piece = $cells[$colMap["Piece"]]
        Armor = $cells[$colMap["Armor"]]
        TOU = $cells[$colMap["Toughness"]]
        INI = $cells[$colMap["Initiative"]]
        WOU = $cells[$colMap["Wounds"]]
        WS = if ($colMap.ContainsKey("Weapon Skill")) { $cells[$colMap["Weapon Skill"]] } else { "" }
        STR = $cells[$colMap["Strength"]]
        INT = $cells[$colMap["Intelligence"]]
        WP = $cells[$colMap["Willpower"]]
        BS = if ($colMap.ContainsKey("Ballistic skill")) { $cells[$colMap["Ballistic skill"]] } else { "" }
        SpiritRes = $cells[$colMap["Spiritual Resistance"]]
        ElementalRes = $cells[$colMap["Elemental Resistance"]]
        CorporealRes = $cells[$colMap["Corporeal Resistance"]]
        Bonus1 = $cells[$colMap["Item bonus 1"]]
        Bonus2 = $cells[$colMap["Item bonus 2"]]
        Bonus3 = $cells[$colMap["Item bonus 3"]]
        Level = $cells[$colMap["Level"]]
        Renown = $cells[$colMap["Renown Rank"]]
    }
}

Write-Host "`nParsed $($gearData.Count) gear pieces successfully!" -ForegroundColor Green

# Group by class
$byClass = $gearData | Group-Object -Property Class
Write-Host "`nClasses found:" -ForegroundColor Cyan
foreach ($group in $byClass | Sort-Object Name) {
    Write-Host "  $($group.Name): $($group.Count) pieces" -ForegroundColor White
}

# Export sample as JSON
Write-Host "`nExporting first 10 items as sample..." -ForegroundColor Cyan
$sample = $gearData | Select-Object -First 10
$sample | ConvertTo-Json -Depth 3 | Out-File "parsed_sample.json"
Write-Host "Sample saved to parsed_sample.json" -ForegroundColor Green
