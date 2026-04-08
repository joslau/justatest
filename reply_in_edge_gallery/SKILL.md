---
name: object-detector
description: 使用相機即時偵測畫面中的物件，並返回辨識結果。支援手機前後鏡頭切換。
metadata:
  require-secret: false
  homepage: https://github.com/joslau/justatest
---

# MediaPipe 物件偵測器

## Overview

這個 Skill 利用 Google MediaPipe Tasks Vision 的 EfficientDet-Lite0 模型，在裝置上即時辨識相機畫面中的物件。支援常見類別如：人、手機、書本、杯子、筆、電腦、電視等超過 80 種物件。

## Instructions

Call the `run_js` tool with the following exact parameters:
- script name: index.html
- data: A JSON string with the following fields:
  - facingMode: String (optional). Camera to use. Values: "environment" (後鏡頭), "user" (前鏡頭). Default: "environment".
  - minScore: Number (optional). Minimum confidence threshold for detections. Range: 0.0-1.0. Default: 0.5.

## Example Usage

### 基本偵測（使用後鏡頭）
```json
{
  "facingMode": "environment"
}
