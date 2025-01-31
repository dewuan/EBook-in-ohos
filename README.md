# HarmonyOS 电子书阅读器

基于 ArkTS 开发的轻量级电子书阅读应用，支持 TXT 文件阅读与个性化设置

![应用截图](screenshot.png) <!-- 请替换实际截图 -->

## 功能特性

### 核心功能
- 📖 TXT 文件阅读支持
- 🔄 智能分页算法（支持动态字体调整）
- 🌙 日间/夜间模式切换
- 📚 最近阅读记录 (最近3本)

### 交互功能
- ➕ 文件导入按钮（支持系统文件选择器）
- ↔️ 滑动翻页手势支持
- ⚙️ 设置面板（带遮罩层）
- ✨ 字体大小滑动调节（支持长按快速操作）

### 系统适配
- 📱 自动适配安全区域（底部导航条）
- 🖥️ 响应式布局（支持不同屏幕尺寸）
- 🔄 状态持久化（阅读进度/设置项）

## 开发环境

### 要求
- DevEco Studio 3.1+
- HarmonyOS SDK API 9+
- TypeScript 4.9+
- Node.js 16+

### 安装
```bash
git clone https://github.com/dewuan/EBook-in-ohos.git
cd hm-ebook-reader
# 使用 DevEco Studio 打开项目
