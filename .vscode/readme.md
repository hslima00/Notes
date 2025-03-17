# VS Code Tasks Configuration

This repository contains automated VS Code tasks for managing MkDocs documentation deployment and development.

## Available Tasks

### 1. Deploy to GitHub Pages and Push
This task automates the deployment process:
```bash
./.venv/Scripts/activate
cd Notes
mkdocs gh-deploy
cd ..
git add .
git commit -m tasks_json_update
git push
```

### 2. Serve MkDocs Locally
This task starts a local development server:
```bash
./.venv/Scripts/activate
cd Notes
mkdocs serve
cd ..
git add .
git commit -m tasks_json_update
git push
```

## How to Use

1. Open the Command Palette in VS Code (`Ctrl+Shift+P` or `Cmd+Shift+P`)
2. Type "Tasks: Run Task"
3. Select either:
   - "Deploy to GitHub Pages and Push" to deploy your documentation
   - "Serve mkdocs" to start local development server

## Configuration Details

Both tasks are configured as:
- Build tasks
- Default tasks
- Output displayed in shared panel
- Always visible during execution

For more details, see the `.vscode/tasks.json` file.
