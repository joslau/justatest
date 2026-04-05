window['ai_edge_gallery_get_result'] = async (dataStr) => {
  try {
    const now = new Date();
    const d = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
    const t = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0') + ':' + String(now.getSeconds()).padStart(2, '0');

    // 呼叫同一個資料夾嘅 ui.html
    const fullUrl = "ui.html?date=" + d + "&time=" + t + "&v=" + Date.now();

    return JSON.stringify({
      webview: { url: fullUrl, aspectRatio: 0.6 },
      result: "【步驟二：執行成功】已獲取時間：" + d + " " + t + "。請引導用戶點擊畫面的按鈕儲存檔案。"
    });
  } catch (e) {
    return JSON.stringify({error: e.toString()});
  }
};