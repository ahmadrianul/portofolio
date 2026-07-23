# Script to generate PDF portfolios from local index.html using Headless Google Chrome or Microsoft Edge.
# This script creates both Indonesian and English versions in light theme for professional resume printing.

$PSScriptRoot = Split-Path -Parent -Path $MyInvocation.MyCommand.Definition
if ([string]::IsNullOrEmpty($PSScriptRoot)) {
    $PSScriptRoot = Get-Location
}

# 1. Create assets/pdf directory if it doesn't exist
$pdfDir = Join-Path $PSScriptRoot "assets\pdf"
if (!(Test-Path $pdfDir)) {
    New-Item -ItemType Directory -Force -Path $pdfDir | Out-Null
    Write-Host "Created directory: $pdfDir" -ForegroundColor Green
}

# 2. Define browser search paths
$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$browserPath = ""

if (Test-Path $chromePath) {
    $browserPath = $chromePath
    $browserName = "Google Chrome"
} elseif (Test-Path $edgePath) {
    $browserPath = $edgePath
    $browserName = "Microsoft Edge"
} else {
    Write-Host "Error: Neither Google Chrome nor Microsoft Edge was found in default installation paths. Cannot generate PDF." -ForegroundColor Red
    exit 1
}

Write-Host "Using $browserName for PDF generation..." -ForegroundColor Cyan

# 3. Resolve paths and URLs
$htmlPath = Join-Path $PSScriptRoot "index.html"
if (!(Test-Path $htmlPath)) {
    Write-Host "Error: Could not find index.html at $htmlPath" -ForegroundColor Red
    exit 1
}

# Use correct forward slash formatting for file:// url
$htmlUrlBase = "file:///" + $htmlPath.Replace("\", "/")
$profileDir = Join-Path $PSScriptRoot ".chrome-profile"

# 4. Generate Indonesian PDF
$pdfPathId = Join-Path $pdfDir "Ahmad_Rianul_Qauliah_Portfolio_ID.pdf"
$urlId = "$htmlUrlBase`?lang=id&theme=light"
Write-Host "Generating Indonesian Portfolio PDF..." -ForegroundColor Yellow
Write-Host "URL: $urlId" -ForegroundColor DarkGray
Write-Host "Output: $pdfPathId" -ForegroundColor DarkGray

$argsId = @(
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--user-data-dir=$profileDir",
    "--print-to-pdf=$pdfPathId",
    $urlId
)

$procId = Start-Process -FilePath $browserPath -ArgumentList $argsId -PassThru -Wait
if ($procId.ExitCode -ne 0) {
    Write-Host "Error: Failed to generate Indonesian PDF. Exit Code: $($procId.ExitCode)" -ForegroundColor Red
} else {
    Write-Host "Successfully generated Indonesian PDF! Size: $((Get-Item $pdfPathId).Length) bytes" -ForegroundColor Green
}

# 5. Generate English PDF
$pdfPathEn = Join-Path $pdfDir "Ahmad_Rianul_Qauliah_Portfolio_EN.pdf"
$urlEn = "$htmlUrlBase`?lang=en&theme=light"
Write-Host "Generating English Portfolio PDF..." -ForegroundColor Yellow
Write-Host "URL: $urlEn" -ForegroundColor DarkGray
Write-Host "Output: $pdfPathEn" -ForegroundColor DarkGray

$argsEn = @(
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--user-data-dir=$profileDir",
    "--print-to-pdf=$pdfPathEn",
    $urlEn
)

$procEn = Start-Process -FilePath $browserPath -ArgumentList $argsEn -PassThru -Wait
if ($procEn.ExitCode -ne 0) {
    Write-Host "Error: Failed to generate English PDF. Exit Code: $($procEn.ExitCode)" -ForegroundColor Red
} else {
    Write-Host "Successfully generated English PDF! Size: $((Get-Item $pdfPathEn).Length) bytes" -ForegroundColor Green
}

# 6. Cleanup profile dir
if (Test-Path $profileDir) {
    Remove-Item -Path $profileDir -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host "PDF Generation Complete!" -ForegroundColor Green
