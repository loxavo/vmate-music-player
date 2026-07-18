# -*- coding: utf-8 -*-
"""Shared design system: base CSS, header, footer, app icon, helpers."""

import base64

ROSE = "#D85B73"
GREEN = "#7BE495"
BLACK = "#000000"
WHITE = "#FFFFFF"

CJK_LANGS = {"ja", "ko", "zh-CN"}

def img_data_uri(path):
    with open(path, "rb") as f:
        b64 = base64.b64encode(f.read()).decode()
    return f"data:image/png;base64,{b64}"

def app_icon_svg(size=200, ring=True):
    sw = 3.2
    ring_stroke = f'<rect x="5" y="5" width="190" height="190" rx="47" fill="#08080a" stroke="url(#rg)" stroke-width="{sw}"/>' if ring else '<rect x="5" y="5" width="190" height="190" rx="47" fill="#08080a"/>'
    return f'''<svg width="{size}" height="{size}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{ROSE}"/><stop offset="1" stop-color="{GREEN}"/></linearGradient>
    <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{GREEN}"/><stop offset="1" stop-color="#9ff0b6"/></linearGradient>
  </defs>
  {ring_stroke}
  <path d="M72 62 L72 138 L128 100 Z" fill="url(#pg)"/>
  <rect x="140" y="80" width="9" height="40" rx="4.5" fill="{ROSE}"/>
  <rect x="156" y="68" width="9" height="64" rx="4.5" fill="{ROSE}" opacity="0.82"/>
  <rect x="172" y="88" width="9" height="24" rx="4.5" fill="{ROSE}" opacity="0.66"/>
</svg>'''

def icon(name, size=48, color=WHITE, stroke=2.2):
    p = {
        "search": f'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
        "play": '<path d="M7 5v14l12-7z" fill="COLOR" stroke="none"/>',
        "pause": '<rect x="6" y="5" width="4" height="14" rx="1" fill="COLOR" stroke="none"/><rect x="14" y="5" width="4" height="14" rx="1" fill="COLOR" stroke="none"/>',
        "prev": '<path d="M18 5v14L8 12z" fill="COLOR" stroke="none"/><rect x="5" y="5" width="2.5" height="14" rx="1" fill="COLOR" stroke="none"/>',
        "next": '<path d="M6 5v14l10-7z" fill="COLOR" stroke="none"/><rect x="16.5" y="5" width="2.5" height="14" rx="1" fill="COLOR" stroke="none"/>',
        "shuffle": '<path d="M16 3h5v5"/><path d="M4 20L21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/>',
        "repeat": '<path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 014-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/>',
        "heart": '<path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z"/>',
        "heart-fill": '<path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" fill="COLOR" stroke="none"/>',
        "clock": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
        "flame": '<path d="M12 2s5 4 5 9a5 5 0 01-10 0c0-2 1-3 1-3s-1 4 2 4 2-3 2-5-0-3 0-5z" fill="COLOR" stroke="none"/>',
        "filter": '<path d="M3 5h18M6 12h12M10 19h4"/>',
        "airplane": '<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" fill="COLOR" stroke="none"/>',
        "folder": '<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>',
        "disc": '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/>',
        "mic": '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0"/><path d="M12 18v3"/>',
        "quote": '<path d="M7 7h4v6a4 4 0 01-4 4M13 7h4v6a4 4 0 01-4 4" fill="COLOR" stroke="none"/>',
        "wave": '<path d="M3 12h2l2-6 3 14 3-18 3 12 2-2h3"/>',
        "shield": '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
        "sliders": '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
        "plus": '<path d="M12 5v14M5 12h14"/>',
        "grip": '<circle cx="9" cy="6" r="1.4" fill="COLOR" stroke="none"/><circle cx="15" cy="6" r="1.4" fill="COLOR" stroke="none"/><circle cx="9" cy="12" r="1.4" fill="COLOR" stroke="none"/><circle cx="15" cy="12" r="1.4" fill="COLOR" stroke="none"/><circle cx="9" cy="18" r="1.4" fill="COLOR" stroke="none"/><circle cx="15" cy="18" r="1.4" fill="COLOR" stroke="none"/>',
        "check": '<path d="M20 6L9 17l-5-5"/>',
        "star": '<path d="M12 3l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8L6.6 19.6l1-6L3.3 9.4l6-.9z" fill="COLOR" stroke="none"/>',
        "download": '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
        "queue": '<path d="M3 6h13M3 12h13M3 18h9M19 14v6l4-3z" fill="COLOR" stroke="none"/>',
        "arrow-left": '<path d="M19 12H5M12 19l-7-7 7-7"/>',
        "more": '<circle cx="5" cy="12" r="1.6" fill="COLOR" stroke="none"/><circle cx="12" cy="12" r="1.6" fill="COLOR" stroke="none"/><circle cx="19" cy="12" r="1.6" fill="COLOR" stroke="none"/>',
        "tune": '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M18 18h2"/><circle cx="16" cy="6" r="2" fill="#0c0c0e"/><circle cx="10" cy="12" r="2" fill="#0c0c0e"/><circle cx="16" cy="18" r="2" fill="#0c0c0e"/>',
    }
    body = p.get(name, "").replace("COLOR", color)
    fill_attr = 'fill="none"' if "fill=" not in body else ""
    return f'<svg width="{size}" height="{size}" viewBox="0 0 24 24" {fill_attr} stroke="{color}" stroke-width="{stroke}" stroke-linecap="round" stroke-linejoin="round">{body}</svg>'

def base_css(lang, rtl):
    dir = "rtl" if rtl else "ltr"
    return f"""
:root{{--black:#000;--rose:#D85B73;--rose-soft:#e88aa0;--green:#7BE495;--green-deep:#4fcf7d;--white:#FFFFFF;--panel:#0a0a0c;--card:#141418;--card2:#1b1b21;--line:rgba(255,255,255,0.07);--muted:#9a9aa3;--muted2:#6c6c75}}
*{{margin:0;padding:0;box-sizing:border-box;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}}
html,body{{background:#000}}
.stage{{width:1290px;height:2796px;position:relative;overflow:hidden;background:radial-gradient(120% 80% at 50% -10%, #141418 0%, #050506 45%, #000 100%);color:var(--white);font-family:'Inter','Noto Sans SC','Noto Sans JP','Noto Sans KR','Noto Sans Arabic','DejaVu Sans',sans-serif;direction:{dir};text-align:start}}
.stage.rtl{{font-family:'Noto Sans Arabic','Inter','DejaVu Sans',sans-serif}}
.glow{{position:absolute;border-radius:50%;pointer-events:none;filter:blur(10px)}}
.glow.rose{{width:1300px;height:1300px;left:-280px;top:-360px;background:radial-gradient(circle, rgba(216,91,115,0.42), rgba(216,91,115,0) 62%)}}
.glow.green{{width:1100px;height:1100px;right:-260px;top:520px;background:radial-gradient(circle, rgba(123,228,149,0.30), rgba(123,228,149,0) 62%)}}
.glow.rose2{{width:1000px;height:1000px;right:-200px;bottom:-300px;background:radial-gradient(circle, rgba(216,91,115,0.26), rgba(216,91,115,0) 64%)}}
.grain{{position:absolute;inset:0;opacity:.05;mix-blend-mode:overlay;pointer-events:none;background-image:radial-gradient(rgba(255,255,255,.6) 0.5px,transparent 0.5px);background-size:3px 3px}}
.head{{position:relative;z-index:3;padding:90px 84px 0}}
.eyebrow{{display:inline-flex;align-items:center;gap:14px;font-size:30px;font-weight:700;letter-spacing:.14em;color:var(--green);text-transform:uppercase;margin-bottom:30px}}
.eyebrow .dot{{width:12px;height:12px;border-radius:50%;background:var(--green);box-shadow:0 0 18px var(--green)}}
.headline{{font-size:138px;font-weight:800;line-height:0.98;letter-spacing:-0.028em;color:var(--white);max-width:1120px}}
.headline .accent{{color:var(--rose)}}
.sub{{margin-top:32px;font-size:52px;font-weight:500;line-height:1.26;letter-spacing:-0.01em;color:#cfcfd4;max-width:1060px}}
.stage.rtl .headline,.stage.rtl .sub{{letter-spacing:0}}
.stage.cjk .headline{{font-size:120px;letter-spacing:-0.01em;font-weight:800}}
.stage.cjk .sub{{font-size:48px;letter-spacing:0}}
.stage.kr .headline{{font-size:116px}}
.screen{{position:absolute;left:130px;right:130px;top:760px;bottom:150px;z-index:2;background:#000;border-radius:78px;overflow:hidden;box-shadow:0 70px 160px -40px rgba(0,0,0,.95),0 0 0 2px #1c1c20,0 0 0 14px #0a0a0c,0 0 0 15px rgba(255,255,255,.06),0 0 140px rgba(216,91,115,.10)}}
.screen-pad{{padding:0;height:100%;display:flex;flex-direction:column;position:relative}}
.appshot{{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}}
.island{{position:absolute;top:26px;left:50%;transform:translateX(-50%);width:300px;height:84px;background:#000;border-radius:42px;z-index:5;box-shadow:0 0 0 1px rgba(255,255,255,.04)}}
.callout{{position:absolute;left:36px;right:36px;z-index:6;display:flex;align-items:center;gap:20px;padding:26px 32px;background:rgba(12,12,14,0.62);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,0.12);border-radius:34px;box-shadow:0 30px 70px -20px rgba(0,0,0,.8)}}
.callout .ci{{width:84px;height:84px;border-radius:24px;flex-shrink:0;display:flex;align-items:center;justify-content:center}}
.callout .ct{{font-size:33px;font-weight:800;color:#fff;letter-spacing:-0.01em;line-height:1.12}}
.callout .cs{{font-size:24px;font-weight:500;color:#cfcfd4;margin-top:6px;line-height:1.2}}
.callout.rose .ci{{background:linear-gradient(135deg,rgba(216,91,115,.28),rgba(216,91,115,.08))}}
.callout.green .ci{{background:linear-gradient(135deg,rgba(123,228,149,.28),rgba(123,228,149,.08))}}
.pills{{position:absolute;left:36px;right:36px;z-index:6;display:flex;gap:18px;justify-content:center}}
.pill{{flex:1;display:flex;align-items:center;gap:16px;padding:22px 26px;background:rgba(12,12,14,0.62);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,0.12);border-radius:26px}}
.pill .pi{{width:64px;height:64px;border-radius:18px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(123,228,149,.26),rgba(123,228,149,.06))}}
.pill .pt{{font-size:27px;font-weight:800;color:#fff;line-height:1.1}}
.pill .ps{{font-size:21px;color:#cfcfd4;margin-top:3px}}
.foot{{position:absolute;left:0;right:0;bottom:46px;z-index:3;display:flex;align-items:center;justify-content:center;gap:22px}}
.foot .ic{{width:84px;height:84px;border-radius:21px;overflow:hidden;box-shadow:0 12px 40px rgba(216,91,115,.35),0 0 0 1px rgba(255,255,255,.08)}}
.foot .ftext{{display:flex;flex-direction:column}}
.foot .fname{{font-size:40px;font-weight:800;letter-spacing:-0.01em;color:#fff}}
.foot .fsub{{font-size:25px;font-weight:600;color:var(--green);letter-spacing:.02em}}
"""
