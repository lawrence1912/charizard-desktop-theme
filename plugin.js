/**
 * 火山炭焰 Charizard — Hermes Desktop 桌面主题包（桌面专属，不影响 CLI/TUI 的 skin）
 *
 * 三套主题：
 *   - charizard-desk 火山炭焰：终端同款（#282a33 底 + 奶油白 #FFFFD7 + 琥珀橙 #FFAF5F）
 *   - graphite-soft  石墨柔光：冷调深灰（GitHub Dark Dimmed 系）
 *   - paper-soft     奶白纸感：暖白纸底（Rosé Pine Dawn 系），非纯白
 *
 * ⚠️ 表面色都是"反推值"：桌面端不会照抄主题里的 background/card/popover/userBubble，
 * 而是先跟近黑混一遍再画（暗色：chrome = 74% background + 26% #0d0d0e；editor = 38% card
 * + 62% #161618；elevated/bubble = 46% 种子 + 54% #161618；sidebar 才是纯色）。
 * 所以注释里写的目标值才是你最终看到的结果。
 *
 * 安装：见 README.md（推荐"从 Git 安装"，或把本文件夹放进 <HERMES_HOME>/desktop-plugins/）。
 */

import { THEMES_AREA, PALETTE_AREA, host, requestTheme } from '@hermes/plugin-sdk'
const graphiteSoft = {
  name: 'graphite-soft',
  label: '石墨柔光 Graphite Soft',
  description: '柔和深灰 · 桌面专属（不刺眼、非纯黑）',
  colors: {
    background: '#293039',        // 反推值：渲染后 = #22272e（应用会把底色混暗 26%）
    foreground: '#cdd9e5',
    card: '#536274',              // 渲染后 #2d333b
    cardForeground: '#cdd9e5',
    muted: '#2d333b',
    mutedForeground: '#8b98a5',
    popover: '#485564',           // 渲染后 #2d333b
    popoverForeground: '#dbe4ec',
    primary: '#539bf5',
    primaryForeground: '#1c2128',
    secondary: '#373e47',
    secondaryForeground: '#cdd9e5',
    accent: '#373e47',
    accentForeground: '#cdd9e5',
    border: '#444c56',
    input: '#2d333b',
    ring: '#539bf5',
    midground: '#539bf5',
    midgroundForeground: '#1c2128',
    composerRing: '#539bf5',
    destructive: '#e5534b',
    destructiveForeground: '#ffffff',
    sidebarBackground: '#1c2128',
    sidebarBorder: '#373e47',
    userBubble: '#485564',        // 渲染后 #2d333b
    userBubbleBorder: '#444c56'
  },
  terminal: {
    foreground: '#cdd9e5',
    cursor: '#539bf5',
    black: '#545d68',
    red: '#f47067',
    green: '#57ab5a',
    yellow: '#c69026',
    blue: '#539bf5',
    magenta: '#b083f0',
    cyan: '#39c5cf',
    white: '#909dab',
    brightBlack: '#636e7b',
    brightRed: '#ff938a',
    brightGreen: '#6bc46d',
    brightYellow: '#daaa3f',
    brightBlue: '#6cb6ff',
    brightMagenta: '#dcbdfb',
    brightCyan: '#56d4dd',
    brightWhite: '#cdd9e5'
  }
}
graphiteSoft.darkColors = { ...graphiteSoft.colors }
graphiteSoft.darkTerminal = { ...graphiteSoft.terminal }

// 与终端 1:1 同色的 charizard 版：颜色取自 charizard skin（banner_text #FFF0D4 / banner_accent
// #F29C38 / banner_dim #C58A45），表面色按应用的混色公式反推 —— 渲染结果 = 终端底色 #282c34。
const charizardDesk = {
  name: 'charizard-desk',
  label: '火山炭焰 Charizard',
  description: '终端同款 · 桌面专属（#282c34 底 + 奶油白字 + 琥珀橙）',
  colors: {
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
  },
  terminal: {
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
}
charizardDesk.darkColors = { ...charizardDesk.colors }
charizardDesk.darkTerminal = { ...charizardDesk.terminal }

const paperSoft = {
  name: 'paper-soft',
  label: '奶白纸感 Paper Soft',
  description: '暖白纸底 · 桌面专属（不晃眼、非纯白）',
  colors: {
    background: '#faf4ed',
    foreground: '#575279',
    card: '#fffaf3',
    cardForeground: '#575279',
    muted: '#f2e9e1',
    mutedForeground: '#6f6a87',
    popover: '#fffaf3',
    popoverForeground: '#575279',
    primary: '#286983',
    primaryForeground: '#faf4ed',
    secondary: '#f2e9e1',
    secondaryForeground: '#575279',
    accent: '#f4ede8',
    accentForeground: '#575279',
    border: '#dfdad9',
    input: '#fffaf3',
    ring: '#286983',
    midground: '#286983',
    midgroundForeground: '#faf4ed',
    composerRing: '#286983',
    destructive: '#a4526a',
    destructiveForeground: '#fffaf3',
    sidebarBackground: '#f2e9e1',
    sidebarBorder: '#dfdad9',
    userBubble: '#f4ede8',
    userBubbleBorder: '#e0d8d2'
  },
  terminal: {
    foreground: '#1f2328',
    cursor: '#286983',
    black: '#24292f',
    red: '#cf222e',
    green: '#116329',
    yellow: '#4d2d00',
    blue: '#0969da',
    magenta: '#8250df',
    cyan: '#1b7c83',
    white: '#6e7781',
    brightBlack: '#57606a',
    brightRed: '#a40e26',
    brightGreen: '#1a7f37',
    brightYellow: '#633c01',
    brightBlue: '#218bff',
    brightMagenta: '#a475f9',
    brightCyan: '#3192aa',
    brightWhite: '#8c959f'
  }
}
paperSoft.darkColors = { ...paperSoft.colors }
paperSoft.darkTerminal = { ...paperSoft.terminal }

const THEMES = [charizardDesk, graphiteSoft, paperSoft]

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
       改用同色描边加粗：0.45px ≈ 1 个物理像素，等价于 Ghostty 的 font-thicken。
       想更粗/更细就调这个值（实测阶梯：无 16.8% → 0.25px 17.6% → 0.45px 19.5% → 0.7px 21.7%）。*/
    -webkit-text-stroke: 0.15px currentColor;
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
