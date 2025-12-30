@echo off
echo.
echo 🌌 Welcome to Skill Universe Setup!
echo.
echo This script will help you set up your project.
echo.

REM Check if Node.js is installed
echo Checking prerequisites...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed.
    echo Please install Node.js from: https://nodejs.org
    echo Then run this script again.
    pause
    exit /b 1
)

where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Git is not installed.
    echo Please install Git from: https://git-scm.com
    echo Then run this script again.
    pause
    exit /b 1
)

node --version
npm --version
git --version
echo.

REM Install dependencies
echo 📦 Installing dependencies...
echo This may take 2-3 minutes...
call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Installation complete!
    echo.
    echo 🎉 You're ready to go!
    echo.
    echo Next steps:
    echo 1. Run 'npm run dev' to start the development server
    echo 2. Open http://localhost:5173 in your browser
    echo 3. See DEPLOYMENT.md for how to deploy to production
    echo.
) else (
    echo.
    echo ❌ Installation failed.
    echo Please check the error messages above.
)

pause
