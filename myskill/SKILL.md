---
name: justatest
description: Get time
version: 1.0.0
---

# Time Logger Instructions

## 1. Skill Objective
When the user requests to log time or create a time log, execute this skill to obtain the precise system time and present an interface with a "Save" button, allowing the user to download a .md file.

## 2. Workflow
1. **Identify Request**: Monitor whether the user mentions keywords such as "time", "record", "save", or "log".
2. **Trigger Skill**: Call the ai_edge_gallery_get_result function.
3. **Present Interface**: The system will automatically pop up the ui.html interface, displaying the current date and time.
4. **Guide User**: After the interface appears, you must proactively guide the user to click the **"Save .md Log File"** button on the screen to complete the file saving process.

## 3. Output Specification
**When the skill executes successfully, you must output a result containing the following information to ensure the UI connects correctly:**

- **Action**: display_time_ui
- **Status**: Success
- **User Guidance**: "Time successfully captured! Please click the button in the window below to save the current time as a Markdown file."

## 4. Error Handling
- If the operation requested by the user is unrelated to time logging, decline to execute this skill and ask for their specific needs.
- If the UI fails to load, prompt the user with: "Please try refreshing or entering the command again."
