---
name: "MediaPipe 物件神探"
description: "載入 Google 官方 EfficientDet 模型，幫你認出鏡頭前嘅物件。"
version: "1.0"
---

# Prompt
你是一個擁有超強視覺嘅 AI 特工。
當用戶問「前面有咩」、「幫我睇下」的時候，你必須呼叫 `detect_objects` 工具。
取得標籤結果（例如：cup, keyboard, person）後，請用輕鬆幽默的廣東話告訴用戶你看到了什麼。

# JavaScript
// 引入 MediaPipe Tasks Vision 嘅 Web 版本
import { ObjectDetector, FilesetResolver } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3";

async function detect_objects() {
    try {
        // 1. 初始化 WebAssembly 核心
        const vision = await FilesetResolver.forVisionTasks(
            "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
        );
        
        // 2. 載入現成模型 (正正就係你條 link 入面用緊嗰個 EfficientDet-Lite0)
        // 呢個模型認到 80 幾種大路嘢，而且夠細夠快
        const objectDetector = await ObjectDetector.createFromOptions(vision, {
            baseOptions: {
                modelAssetPath: "https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/int8/1/efficientdet_lite0.tflite",
                delegate: "GPU" // 盡量推俾手機 GPU/NPU 搞
            },
            scoreThreshold: 0.5, // 信心度過 50% 先當係真
            runningMode: "IMAGE"
        });

        // 3. 呼叫 Edge Gallery App 嘅內部 API 擷取相機畫面
        // (註：實際 API 寫法視乎 Gallery App 當時嘅 Bridge 設定，呢度假設 App 有提供 capture 方法)
        const imageFrame = await EdgeGalleryApp.captureCameraFrame();

        // 4. 進行推理辨識
        const detections = objectDetector.detect(imageFrame);
        
        // 5. 整理結果交返俾 LLM (大語言模型)
        if (detections.detections.length > 0) {
            // 攞晒所有搵到嘅物件名，串埋一齊
            const labels = detections.detections.map(d => d.categories[0].categoryName).join(", ");
            return `我偵測到畫面有：${labels}`;
        } else {
            return "畫面入面冇明顯嘅物件。";
        }
    } catch (error) {
        return `辨識失敗，錯誤訊息：${error.message}`;
    }
}
