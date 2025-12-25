@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Starting development server...
if exist "node_modules\.bin\vite.cmd" (
    node_modules\.bin\vite.cmd
) else (
    yarn dev
)


