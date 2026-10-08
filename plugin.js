/**
 * 火山炭焰 Charizard — Hermes Desktop 桌面主题包（桌面专属，不影响 CLI/TUI 的 skin）
 *
 * 一套主题、明暗两档（设置 → 外观 切 浅色/深色/跟随系统；Shift+X 一键互切）：
 *   - 亮色档「暖纸昼」（浅色模式画 colors）：暖纸底 + 浓咖墨 + 焦琥珀 —— 白天的阅读版
 *   - 暗色档「火山炭焰」（深色模式画 darkColors）：与终端 1:1 同色（#282c34 底 + 奶油白 #FFF0D4 + 琥珀橙 #F29C38）
 *
 * ⚠️ 表面色都是"反推值"：桌面端不会照抄主题里的 background/card/popover/userBubble，
 * 而是先跟中性色混一遍再画（暗色：chrome = 74% background + 26% #0d0d0e；editor = 38% card
 * + 62% #161618；elevated/bubble = 46% 种子 + 54% #161618。亮色：chrome = 92% + 8% #f3f3f3；
 * editor = 22% + 78% #fcfcfc；elevated = 28% + 72% #fcfcfc；bubble = 0% + 100% #fcfcfc）。
 * sidebar 两档都是纯色。所以注释里写的目标值才是你最终看到的结果。
 *
 * 安装：见 README.md（推荐"从 Git 安装"，或把本文件夹放进 <HERMES_HOME>/desktop-plugins/）。
 */

import { THEMES_AREA, PALETTE_AREA, host, requestTheme } from '@hermes/plugin-sdk'

// ── 亮色档「暖纸昼」（浅色模式画 colors）────────────────────────────────────
// 暗档的白天化身：同一色族 —— 纸/墨反转（炭底↔暖纸、奶油字↔咖啡墨）、琥珀加深成焦糖。
// 表面色按亮色混色公式反推，注释里的「渲染后」才是最终看到的颜色。
const dayColors = {
  background: '#f4eedf',        // 反推值：渲染后 = #f4eee1（暖纸底；chrome 与侧栏同纸）
  foreground: '#302820',        // 浓咖墨：对比 12.5:1（暗档奶油白的反转位）
  card: '#f7eac5',              // 反推值：渲染后 = #fbf8f0（卡片/编辑器浮纸，比窗底更白）
  cardForeground: '#302820',
  muted: '#ece4d1',             // 悬停/浅填充底（直接渲染）
  mutedForeground: '#6f6146',   // 暖灰褐 5.2:1
  popover: '#fff8e7',           // 反推值：渲染后 = #fdfbf6（弹层最亮）
  popoverForeground: '#302820',
  primary: '#9e520e',           // 焦琥珀（= 暗档 #ffaf5f 的昼间加深版）：chrome 上 4.95:1
  primaryForeground: '#fdf4e6',
  secondary: '#e9d9b6',         // 沙金填充（标签/选中底）
  secondaryForeground: '#684912',
  accent: '#e9d9b6',
  accentForeground: '#684912',
  border: '#d8cbac',            // 暖棕发丝线
  input: '#fbf8f0',
  ring: '#9e520e',
  midground: '#9e520e',
  midgroundForeground: '#fdf4e6',
  composerRing: '#9e520e',
  destructive: '#b23a2e',
  destructiveForeground: '#fdf3e8',
  sidebarBackground: '#f4eee1', // 纯色渲染 → 与 chrome 一致（整窗同纸）
  sidebarBorder: '#d8cbac',
  userBubble: '#f0e5cd',        // 注：亮档气泡配方 = 0% 种子 + 100% #fcfcfc → 实画固定 #fcfcfc，此值仅兜底
  userBubbleBorder: '#bf7a2a'
}

// 亮色档的内置终端 ANSI（浅底版：色相不变、整体加深到可读）
const dayTerminal = {
  foreground: '#372e21',
  cursor: '#c26a14',
  black: '#3a2c1e',
  red: '#c0392b',
  green: '#558b2f',
  yellow: '#9c7a0e',
  blue: '#2569c9',
  magenta: '#8c2faf',
  cyan: '#107a83',
  white: '#7d6b50',
  brightBlack: '#6b5b45',
  brightRed: '#d34a3a',
  brightGreen: '#6ea23a',
  brightYellow: '#b8951f',
  brightBlue: '#3d86dd',
  brightMagenta: '#a44cc7',
  brightCyan: '#1f95a0',
  brightWhite: '#3f3428'
}

// ── 暗色档「火山炭焰」（深色模式画 darkColors）──────────────────────────────
// 与终端 1:1 同色：颜色取自 charizard skin（banner_text #FFF0D4 / banner_accent #F29C38 /
// banner_dim #C58A45），表面色按暗色混色公式反推 —— 渲染结果 = 终端底色 #282c34。
const nightColors = {
  background: '#303441',        // 反推值：渲染后 ≈ #272a34，与 Ghostty 实测底色 #282a33 对齐
  foreground: '#ffffd7',        // 最亮的奶油白（= 终端正文实测色，13.7:1）；纯白会丢掉暖调
  card: '#536279',              // 渲染后 #2d333d
  cardForeground: '#ffffd7',
  muted: '#2f353f',
  mutedForeground: '#d9a45e',   // 暖金：4.73 → 6.28:1，比原 banner_dim 亮一档
  popover: '#55627a',           // 渲染后 #333945
  popoverForeground: '#ffffd7',
  primary: '#ffaf5f',           // 终端里实测的橙色（= #F29C38 经 256 色量化后的 215 号）
  primaryForeground: '#241a10',
  secondary: '#3a4048',
  secondaryForeground: '#ffd39a',
  accent: '#3a4048',
  accentForeground: '#ffd39a',
  border: '#4a443c',
  input: '#2f353f',
  ring: '#ffaf5f',
  midground: '#ffaf5f',
  midgroundForeground: '#241a10',
  composerRing: '#ffaf5f',
  destructive: '#ef5350',
  destructiveForeground: '#241a10',
  sidebarBackground: '#272a34', // 纯色渲染 → 与主底/终端底色一致（终端就是整片同色）
  sidebarBorder: '#4a443c',
  userBubble: '#644c32',        // 渲染后 #3a2f24（暖色气泡）
  userBubbleBorder: '#c75b1d'   // 皮肤里的 banner_border，终端里的橙边就是这个色
}

const nightTerminal = {
  foreground: '#fff0d4',
  cursor: '#f29c38',
  black: '#4a2b1c',
  red: '#ef5350',
  green: '#9ccc65',
  yellow: '#ffca28',
  blue: '#64b5f6',
  magenta: '#ce93d8',
  cyan: '#80d6c2',
  white: '#c58a45',
  brightBlack: '#7b593a',
  brightRed: '#ff8a80',
  brightGreen: '#b9f06c',
  brightYellow: '#ffe082',
  brightBlue: '#90caf9',
  brightMagenta: '#e1bee7',
  brightCyan: '#a7e8da',
  brightWhite: '#fff0d4'
}

const charizardDesk = {
  name: 'charizard-desk',
  label: '火山炭焰 Charizard',
  description: '终端同款 · 桌面专属（明暗双档：夜 #282c34 / 昼暖纸琥珀，随外观切换）',
  colors: dayColors,
  terminal: dayTerminal,
  darkColors: nightColors,
  darkTerminal: nightTerminal
}

const THEMES = [charizardDesk]

// ── 文字渲染增强（对齐终端的 font-thicken = true）──────────────────────────────
// Chromium 在 macOS 上按 -webkit-font-smoothing: antialiased 画字：笔画偏细，
// 深色底上看着发灰；终端那边 Ghostty 开了 font-thicken，同一段字就是更饱满。
// 这里只在「火山炭焰」主题生效时把渲染档位放开，换成 subpixel-antialiased（更厚重），
// 其余主题保持应用原样，切主题即失效。
const TEXT_BOOST_ID = 'charizard-desktop-text-boost'
const TEXT_BOOST_CSS = `
  html[data-hermes-theme^="charizard-desk"] body {
    -webkit-font-smoothing: subpixel-antialiased !important;
    /* 实测（2x Retina）：Chromium 只做灰度平滑，-webkit-font-smoothing 那档是空操作
       （检测彩边 = 0%）；同字号中文行墨量桌面 16.8% vs 终端 26.8%，笔画细一截。
       同色描边是终端的 font-thicken 的 CSS 等价物：0.45px ≈ 1 个物理像素。
       实测阶梯：无 16.8% → 0.25px 17.6% → 0.45px 19.5% → 0.7px 21.7%；
       现役为 0（关闭）——描边叠上下面的"字重同权"会偏重，想更接近终端观感可调到 0.25–0.45px。*/
    -webkit-text-stroke: 0px currentColor;
  }

  /* 「界面文字同权」：侧栏与覆盖层（设置/命令面板等）原本用 500/600 字重
     （Tailwind 的 font-medium / font-semibold），中文会落到 PingFang Medium 字面 →
     看着像被描了边，比正文和终端更重。实测：侧栏横向笔画 3.0 物理px、正文 4.0 物理px，
     问题不在厚度而在字面。这里把字重压回 400 并关掉描边，让界面文字与正文同一档。
     后悔了就把本段删掉（或把 400 改回去）。 */
  html[data-hermes-theme^="charizard-desk"] :is([data-tour="sessions-sidebar"], [data-overlay-surface]) :is([class*="font-medium"], [class*="font-semibold"]) {
    font-weight: 400;
  }
  html[data-hermes-theme^="charizard-desk"] :is([data-tour="sessions-sidebar"], [data-overlay-surface]),
  html[data-hermes-theme^="charizard-desk"] :is([data-tour="sessions-sidebar"], [data-overlay-surface]) * {
    -webkit-text-stroke: 0;
  }
`

function injectTextBoost() {
  try {
    if (typeof document === 'undefined') {
      return
    }
    // 热重载时样式已存在 → 直接更新内容，保证改了 CSS 立刻生效。
    const existing = document.getElementById(TEXT_BOOST_ID)
    if (existing) {
      existing.textContent = TEXT_BOOST_CSS
      return
    }
    const el = document.createElement('style')
    el.id = TEXT_BOOST_ID
    el.textContent = TEXT_BOOST_CSS
    document.head.appendChild(el)
  } catch {
    // 没有 DOM 权限时静默跳过：只是字体略细，不影响主题本身。
  }
}

export default {
  id: 'charizard-desktop-theme', // 必须与安装后的文件夹名 / 仓库名一致
  name: '火山炭焰 Charizard',
  register(ctx) {
    for (const theme of THEMES) {
      // 出现在 设置 → 外观 → 主题 网格 / ⌘K 主题列表里，作用范围仅桌面。
      ctx.register({ id: theme.name, area: THEMES_AREA, data: theme })

      // 顺带挂一条 ⌘K 命令，方便一键切换（含键盘直达）。
      ctx.register({
        id: `apply-${theme.name}`,
        area: PALETTE_AREA,
        data: {
          id: `apply-${theme.name}`,
          label: `主题：${theme.label}`,
          keywords: ['theme', 'skin', '主题', '皮肤', theme.name],
          run: () => {
            if (requestTheme(theme.name)) {
              host.notify({ kind: 'info', message: `已切换主题：${theme.label}` })
            } else {
              host.notify({ kind: 'error', message: `主题 ${theme.name} 不可用（插件未加载？）` })
            }
          }
        }
      })
    }

    // 字体渲染增强：只对 charizard-desk 生效（选择器带 data-hermes-theme 前缀），
    // 换到别的主题就自动失效。不想要可以把这行删掉。
    injectTextBoost()
  }
}
