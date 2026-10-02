#!/usr/bin/env python3
"""Publish size-specific copies of the approved sa/acc mark.

The master geometry in generate_logo.py is never changed here. Only the SVG
viewBox is cropped so the same mark remains readable at avatar/favicon sizes.
"""

from pathlib import Path
import os
import re
import shutil
import subprocess

from PIL import Image, ImageDraw, ImageFont


HERE = Path(__file__).resolve().parent
SITE = Path(os.environ.get("SAACC_SITE_PUBLIC", HERE.parents[1] / "public"))
BRAND = SITE / "assets/brand"
GREEN = "#22A95A"
MONO = Path(os.environ.get("SAACC_MONO_FONT", Path.home() / "Library/Fonts/JetBrainsMono-Variable.ttf"))


def cropped_svg(view_box: str, size: int) -> str:
    source = (HERE / "saacc-pattern.svg").read_text()
    return source.replace(
        'width="1254" height="1254" viewBox="0 0 1254 1254"',
        f'width="{size}" height="{size}" viewBox="{view_box}"',
        1,
    )


def pattern_rail(canvas: Image.Image, x: int, y: int, width: int, height: int) -> None:
    """Tile the exact same motif SVG used by the website's left edge."""
    tile_svg = BRAND / "saacc-pattern-rail.svg"
    tile_height = round(width * 49 / 48)
    tile_png = HERE / ".pattern-rail-render.png"
    try:
        subprocess.run(
            ["rsvg-convert", "-w", str(width), "-h", str(tile_height), "-o", str(tile_png), str(tile_svg)],
            check=True,
        )
        with Image.open(tile_png) as tile:
            for top in range(y, y + height, tile_height):
                part = tile.crop((0, 0, width, min(tile_height, y + height - top)))
                canvas.paste(part.convert("RGB"), (x, top))
    finally:
        tile_png.unlink(missing_ok=True)


def wordmark(draw: ImageDraw.ImageDraw, xy: tuple[int, int], size: int) -> None:
    font = ImageFont.truetype(str(MONO), size)
    font.set_variation_by_name("Bold")
    x, y = xy
    for part, color in (("sa", "white"), ("/", GREEN), ("acc", "white")):
        draw.text((x, y), part, font=font, fill=color, stroke_width=0)
        x += round(draw.textlength(part, font=font))


def main() -> None:
    BRAND.mkdir(parents=True, exist_ok=True)
    source = (HERE / "saacc-pattern.svg").read_text()
    pattern = re.search(r'<g id="vertical-saudi-pattern"[^>]*>.*?</g>', source, re.S)
    if pattern is None:
        raise ValueError("The master logo is missing its vertical pattern")
    (BRAND / "saacc-pattern.svg").write_text(
        '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="604" '
        'viewBox="330 320 120 604" role="img" aria-label="Saudi geometric pattern">\n'
        '<defs><clipPath id="weave-bounds"><rect x="350" y="333" width="80" height="578"/></clipPath></defs>\n'
        + pattern.group(0) + '\n</svg>\n'
    )
    (BRAND / "saacc-pattern-rail.svg").write_text(
        '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" '
        'viewBox="330 407.625 120 122.5" aria-hidden="true">\n'
        '  <path fill="#22A95A" d="M337 407.625h10v122.5h-10zM433 407.625h10v122.5h-10z"/>\n'
        '  <path d="M360 377 420 438.25 360 499.5 420 560.75" '
        'fill="none" stroke="#22A95A" stroke-width="14" '
        'stroke-linecap="butt" stroke-linejoin="miter"/>\n'
        '  <path fill="#22A95A" d="M375 426.25 387 438.25 375 450.25 '
        '363 438.25zM405 487.5 417 499.5 405 511.5 393 499.5z"/>\n'
        '</svg>\n'
    )
    avatar = cropped_svg("225 225 804 804", 800)
    favicon = cropped_svg("260 260 734 734", 64)
    for name in ("saacchq-logo.svg", "saacc-avatar.svg"):
        (BRAND / name).write_text(avatar)
    obs_logo = os.environ.get("SAACC_OBS_LOGO")
    if obs_logo:
        obs_path = Path(obs_logo).expanduser()
        obs_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(BRAND / "saacc-avatar.svg", obs_path)
        subprocess.run(
            ["rsvg-convert", "-w", "800", "-h", "800", "-o",
             str(obs_path.with_name("saacchq-logo-preview.png")), str(obs_path)],
            check=True,
        )
    (SITE / "favicon.svg").write_text(favicon)
    subprocess.run(
        ["rsvg-convert", "-w", "800", "-h", "800", "-o",
         str(BRAND / "saacc-avatar.png"), str(BRAND / "saacc-avatar.svg")],
        check=True,
    )
    with Image.open(BRAND / "saacc-avatar.png") as icon:
        icon.convert("RGB").resize((1340, 1340), Image.Resampling.LANCZOS).save(
            SITE / "assets/imgs/saacchq_logo.jpeg", quality=95
        )

    card = Image.new("RGB", (1200, 630), "#000000")
    pattern_rail(card, 0, 0, 38, 630)
    draw = ImageDraw.Draw(card)
    with Image.open(BRAND / "saacc-avatar.png") as icon:
        icon = icon.convert("RGB").resize((370, 370), Image.Resampling.LANCZOS)
        card.paste(icon, (100, 130))
    wordmark(draw, (510, 188), 82)
    regular = ImageFont.truetype(str(MONO), 28)
    small = ImageFont.truetype(str(MONO), 21)
    draw.text((515, 328), "SAUDI ACCELERATION", font=regular, fill="white")
    draw.text((515, 400), "Build  /  Research  /  Engineer", font=small, fill="white")
    draw.rectangle((515, 498, 738, 542), outline=GREEN, width=2)
    draw.text((530, 507), "SAACCHQ.ORG", font=small, fill=GREEN)
    card.save(SITE / "og.png")

    # YouTube crops a 2560x1440 banner differently on phones and TVs. Keep all
    # identifying content inside the central 1546x423 safe area.
    banner = Image.new("RGB", (2560, 1440), "#000000")
    # Place the website rail at the left of YouTube's central safe area, so it
    # remains visible in the narrow mobile crop.
    pattern_rail(banner, 515, 510, 38, 420)
    draw = ImageDraw.Draw(banner)
    with Image.open(BRAND / "saacc-avatar.png") as icon:
        banner.paste(icon.convert("RGB").resize((315, 315), Image.Resampling.LANCZOS), (610, 563))
    wordmark(draw, (990, 586), 145)
    banner_regular = ImageFont.truetype(str(MONO), 43)
    draw.text((1000, 785), "SAUDI ACCELERATION", font=banner_regular, fill="white")
    banner.save(BRAND / "youtube-banner.png")
    banner.crop((508, 509, 2052, 931)).save(BRAND / "youtube-banner-mobile-preview.png")
    with Image.open(BRAND / "saacc-avatar.png") as icon:
        icon.resize((150, 150), Image.Resampling.LANCZOS).save(BRAND / "youtube-watermark.png")


if __name__ == "__main__":
    main()
