# PowerShell script to update totalStats in all gear files

$gearFiles = @(
    'shamanGearData.js',
    'zealotGearData.js',
    'witchHunterGearData.js',
    'witchElfGearData.js',
    'whiteLionGearData.js',
    'warriorPriestGearData.js',
    'swordmasterGearData.js',
    'squigHerderGearData.js',
    'sorceressGearData.js',
    'slayerGearData.js',
    'shadowWarriorGearData.js',
    'runepriestGearData.js',
    'marauderGearData.js',
    'magusGearData.js',
    'knightGearData.js',
    'ironbreakerGearData.js',
    'engineerGearData.js',
    'discipleOfKhaineGearData.js',
    'choppaGearData.js',
    'brightWizardGearData.js',
    'blackOrcGearData.js',
    'blackGuardGearData.js',
    'archmageGearData.js'
)

Write-Host "Note: This is a complex task that requires careful regex parsing." -ForegroundColor Yellow
Write-Host "The bonuses have been added to Chosen. For other classes, they should be added manually" -ForegroundColor Yellow
Write-Host "or by reviewing each set individually to ensure accuracy." -ForegroundColor Yellow
Write-Host ""
Write-Host "Files that need updating:" -ForegroundColor Cyan
foreach ($file in $gearFiles) {
    if (Test-Path $file) {
        Write-Host "  - $file" -ForegroundColor White
    }
}
