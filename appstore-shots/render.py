# -*- coding: utf-8 -*-
"""Render all 126 App Store screenshots (18 languages x 7 shots) at 1290x2796."""

import os, sys, time
from playwright.sync_api import sync_playwright

sys.path.insert(0, os.path.dirname(__file__))
from locales.copy import COPY, LANG_ORDER
from templates_base import base_css, app_icon_svg, GREEN, ROSE, CJK_LANGS
from templates_screens import SHOTS

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(ROOT, "out")
W, H = 1290, 2796

SHOT_TAG = {1:"OFFLINE PLAYBACK",2:"SOUND",3:"LIBRARY",4:"SEARCH",5:"PLAYLISTS",6:"NOW PLAYING",7:"VMATE MUSIC"}

def accent(text, color):
    if ". " in text:
        parts = text.split(". ")
        before = ". ".join(parts[:-1]) + ". "
        after = parts[-1]
        return f'<span>{before}</span><span style="color:{color}">{after}</span>'
    return text

def build_html(shot, lang):
    c = COPY[lang]
    ui = c["ui"]
    rtl = c["rtl"]
    shot_copy = c["shots"][str(shot)]
    head_html = accent(shot_copy["h"], ROSE)
    sub_html = accent(shot_copy["s"], GREEN)
    cls = "stage"
    if rtl: cls += " rtl"
    if lang in CJK_LANGS: cls += " cjk"
    if lang == "ko": cls += " kr"
    screen_html = SHOTS[shot](ui, {}, lang)
    return f"""<!doctype html><html><head><meta charset="utf-8">
<style>{base_css(lang, rtl)}</style></head>
<body style="margin:0;background:#000">
<div class="{cls}">
  <div class="glow rose"></div><div class="glow green"></div><div class="glow rose2"></div><div class="grain"></div>
  <div class="head">
    <div class="eyebrow"><span class="dot"></span> {SHOT_TAG[shot]}</div>
    <div class="headline">{head_html}</div>
    <div class="sub">{sub_html}</div>
  </div>
  <div class="screen">{screen_html}</div>
  <div class="foot">
    <div class="ic">{app_icon_svg(84)}</div>
    <div class="ftext"><div class="fname">VMate Music Player</div><div class="fsub">Play. Offline. Anywhere.</div></div>
  </div>
</div>
</body></html>"""

def render_all(langs=None, shots=None):
    langs = langs or LANG_ORDER
    shots = shots or list(range(1, 8))
    os.makedirs(OUT_DIR, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        ctx = browser.new_context(viewport={"width": W, "height": H}, device_scale_factor=1)
        page = ctx.new_page()
        total = len(langs) * len(shots); done = 0; t0 = time.time()
        for lang in langs:
            lang_dir = os.path.join(OUT_DIR, lang)
            os.makedirs(lang_dir, exist_ok=True)
            for shot in shots:
                html = build_html(shot, lang)
                page.set_content(html, wait_until="networkidle")
                out = os.path.join(lang_dir, f"shot_{shot}.png")
                page.screenshot(path=out, clip={"x":0,"y":0,"width":W,"height":H})
                done += 1
                print(f"[{done}/{total}] {lang}/shot_{shot}.png  ({time.time()-t0:.1f}s)", flush=True)
        browser.close()
    print(f"\nDone. {total} screenshots in {time.time()-t0:.1f}s -> {OUT_DIR}")

if __name__ == "__main__":
    args = sys.argv[1:]
    if not args:
        render_all()
    else:
        lang = args[0]
        langs = LANG_ORDER if lang == "all" else [lang]
        shots = [int(s) for s in args[1:]] if len(args) > 1 else list(range(1, 8))
        render_all(langs, shots)
