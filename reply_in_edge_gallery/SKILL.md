---
name: reply_in_edge_gallery
description: 獲取系統時間並在對話中回覆日誌
---

# Time Logger Instructions

## Instructions
When the user asks to log time, get the current time, or create a time log:
1. Call the `run_js` tool with the following parameters:
   - script name: index.html
   - data: "{}"
2. After receiving the time from the script, **reply directly to the user in the chat** using the following Markdown format:

### 回覆格式範例 (請用中文)：
# ⏱️ 系統時間日誌
- **📅 日期**: [插入日期]
- **⏰ 時間**: [插入時間]

*由 AI Edge Gallery 自動擷取*
