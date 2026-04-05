---
name: justatest
description: Get time and save log
---

# Time Logger Instructions

## Instructions
When the user asks to log time or create a time log:
1. Call the `run_js` tool with the following exact parameters:
   - script name: index.html
   - data: A JSON string with a field "action" set to "display_time_ui".
