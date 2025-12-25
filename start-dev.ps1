# PowerShell script to start development server
$ErrorActionPreference = "Stop"

# Get the script directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

Write-Host "Starting development server..." -ForegroundColor Green
Write-Host "Current directory: $scriptPath" -ForegroundColor Cyan

# Check if yarn is available
if (Get-Command yarn -ErrorAction SilentlyContinue) {
    yarn dev
} else {
    Write-Host "Yarn not found. Trying npm..." -ForegroundColor Yellow
    npm run dev
}


