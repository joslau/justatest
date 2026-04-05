# justatest

這是一個用於測試和儲存 AI Edge Gallery 技能 (Skills) 的代碼庫。專案展示了如何讓 AI 透過執行前端 JavaScript 來獲取實時數據（例如本地時間和即時天氣），並將資料轉換為格式化的對話日誌回覆給使用者。

## 📂 專案結構

本代碼庫包含以下主要目錄與檔案：

- **`/reply_in_edge_gallery/`**: 核心技能資料夾，用於獲取時間與天氣並回覆日誌。
  - `scripts/`: 存放相關的腳本檔案。
  - `index.html`: 包含負責獲取系統時間與呼叫「香港天文台即時天氣 API」的 JavaScript 邏輯 (`ai_edge_gallery_get_result`)。
  - `SKILL.md`: 提供給 LLM 的 System Prompt 指令，定義了觸發條件、工具調用方式及最終 Markdown 回覆格式。
- **`/write_time/`**: 其他時間寫入相關的測試技能（待擴充）。
- **`.nojekyll`**: 告訴 GitHub Pages 忽略 Jekyll 編譯的設定檔。

---

## 🛠️ 核心技能：reply_in_edge_gallery

### 📝 功能簡介
此技能使 AI 能夠獲取用戶設備的當前精確時間，並透過香港天文台開放數據 API (Open Data API) 提取**深水埗**的實時氣溫，最後將這些資訊整合成美觀的日誌格式回覆給用戶。

### ⚙️ 運作原理
1. **觸發**: 當用戶要求記錄時間或獲取當前時間時，AI 會觸發此技能。
2. **執行 JS (`index.html`)**: 
   - AI 調用 `run_js` 工具執行 `index.html`。
   - 腳本擷取 `zh-HK` 格式的本地日期與時間。
   - 腳本透過 `fetch` 呼叫香港天文台 API (`dataType=rhrread&lang=tc`)，並在陣列中篩選出「深水埗」的氣溫數據。
   - 將結果打包成 JSON 字串回傳給 AI。
3. **格式化回覆 (`SKILL.md`)**:
   - AI 接收到數據後，會嚴格按照 `SKILL.md` 中的指示，直接在聊天室中以特定的 Markdown 格式回覆用戶。

### ✨ 預期輸出範例

當觸發成功時，AI 將會給出以下格式的回覆：

# ⏱️ 系統時間日誌
- **📅 日期**: 2026/4/6
- **⏰ 時間**: 00:11:30
- **🌡️ 深水埗氣溫**: 25.4

*由 AI Edge Gallery 自動擷取*

---

## 🚀 如何使用

1. 將此代碼庫整合至支援Google AI Edge Gallery app 中技能架構的環境中。
2. 確保 AI 模型能夠正確解析 `SKILL.md` 並具備執行 HTML/JS 的能力 (`run_js` tool)。
3. 在對話中向 AI 發送如「幫我記錄時間」或「現在幾點」等指令即可測試。

<img src=".image/WhatsApp%20Image%202026-04-06%20at%2000.17.01.jpeg">
