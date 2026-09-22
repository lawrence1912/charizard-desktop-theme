# 火山炭焰 Charizard — Hermes Desktop 桌面主题

![主题预览](assets/preview.png)

> 终端同款配色 + 原生磨砂玻璃（截图里的会话列表已遮挡，不含真实对话）。

桌面专属主题：不写 `config.yaml`、不动 `display.skin`，CLI/TUI 完全不受影响。

## 安装

**方式一：从 Git 安装（推荐）**

1. Hermes Desktop → **插件页** → 「**从 Git 安装**」
2. 填仓库地址：`https://github.com/lawrence1912/charizard-desktop-theme`
3. 勾选**桌面目标**，确认，等几秒热加载

**方式二：手动拷贝**

把本文件夹整体放到 `~/.hermes/desktop-plugins/charizard-desktop-theme/`，
再在 ⌘K 里搜 **Reload desktop plugins**。

> 文件夹名必须等于插件 `id`（`charizard-desktop-theme`），否则不会加载。

## 使用

- 设置 → **外观 → 主题** → 选「火山炭焰 Charizard」，或在 ⌘K 里搜「主题：火山炭焰 Charizard」
- 不想要了：插件页里关掉，或删掉该文件夹

## 可选调整

- **字体渲染增强**（默认开）：见 `plugin.js` 的 `TEXT_BOOST_CSS`。0.3–0.45px 才有明显观感，
  ≥0.7px 开始发糊；不想要就把描边改成 `0`。
- **改配色**：改 `colors` 里的值。注意桌面端会先把表面色和近黑混一遍再渲染，
  想得到某个"最终颜色"要按公式反推（占比和公式见 `plugin.js` 顶部注释）。
- **磨砂玻璃**（App 自带，不用装东西）：设置 → 外观 → **窗口透明** ——
  模式 `玻璃`、色调 30–50、质感 `明亮`、范围 `整个窗口`（想保正文对比度就选 `仅侧边栏`）。
- 不想装插件：也可以把配色导出成 VS Code 主题 JSON，用 App 的「安装主题…」导入，
  但没有字体增强。
