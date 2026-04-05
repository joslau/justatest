---
name: write_time_skill
description: Retrieves the current time and generates a file for user download.
---

# Overview
The **write_time_skill** is designed to fetch the current time upon user request and generate a downloadable file containing the time-stamp. It simplifies the process of creating quick time records.

## Instructions
1. **Step One (步驟一):** Receive the user command to execute the skill.  
   【步驟一】收到指令，準備執行。
2. **Step Two (步驟二):** Retrieve the current time and generate a time-stamped file.  
   【步驟二】調用技能，生成包含當前時間的檔案。
3. **Step Three (步驟三):** Guide the user to save the time-stamped file by clicking the "Download" button.  
   【步驟三】引導用戶通過點擊 "下載" 按鈕來保存檔案。

## Examples
- User Command: "Save time file."
- Generated File: `time_2026-04-05_15-30.txt`

## Error Handling
- If the time cannot be retrieved, a message will display: "Unable to fetch current time. Please try again."
- If the file generation fails, provide instructions to retry.
