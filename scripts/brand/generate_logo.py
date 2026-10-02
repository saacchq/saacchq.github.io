#!/usr/bin/env python3
"""Rebuild the sa/acc square, growth curve, and Saudi pattern as editable SVG.

Run: python3 generate_logo.py
Outputs a 1254 x 1254 SVG and PNG beside this script. No source bitmap is needed.
"""
from pathlib import Path
import shutil
import subprocess

SIZE = 1254
BACKGROUND = "#000000"
WHITE = "#FFFFFF"
GREEN = "#22A95A"

OUT_DIR = Path(__file__).resolve().parent
SVG_PATH = OUT_DIR / "saacc-pattern.svg"
PNG_PATH = OUT_DIR / "saacc-pattern.png"


def diamond(cx: float, cy: float, radius: float) -> str:
    return (
        f'<path d="M {cx:g} {cy-radius:g} L {cx+radius:g} {cy:g} '
        f'L {cx:g} {cy+radius:g} L {cx-radius:g} {cy:g} Z"/>'
    )


def make_svg() -> str:
    # Draw the border and growth as ONE white shape. Its black upper-left
    # opening is the inner path, so there can be no raster seam where the
    # curve reaches the bottom and right sides of the frame.
    white_mark = (
        "M 290 290 H 962 V 962 H 290 Z "
        "M 314 314 H 938 C 938 924.83 523.56 932.91 314 938 Z"
    )

    # Pattern center is (390, 622). Rails and zigzag are mirrored horizontally;
    # all turns and dots use the same 61.25px vertical spacing.
    turn_y = [377 + 61.25 * i for i in range(9)]
    turns = [(360 if i % 2 == 0 else 420, y) for i, y in enumerate(turn_y)]
    weave = (
        "M 410 333 "
        + " ".join(f"L {x:g} {y:g}" for x, y in turns)
        + " L 410 911"
    )
    dot_centers = [(405 if i % 2 == 0 else 375, y) for i, y in enumerate(turn_y)]
    diamonds = "\n      ".join(diamond(cx, cy, 12) for cx, cy in dot_centers)

    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{SIZE}" height="{SIZE}" viewBox="0 0 {SIZE} {SIZE}" role="img" aria-labelledby="title desc">
  <title id="title">sa/acc growth mark with vertical pattern</title>
  <desc id="desc">White square and exponential growth shape on black, with a green geometric pattern inside the left side of the square.</desc>
  <rect width="{SIZE}" height="{SIZE}" fill="{BACKGROUND}"/>
  <defs><clipPath id="weave-bounds"><rect x="350" y="333" width="80" height="578"/></clipPath></defs>
  <g id="fixed-white-growth-mark" fill="{WHITE}">
    <path d="{white_mark}" fill-rule="evenodd"/>
  </g>
  <g id="vertical-saudi-pattern" fill="{GREEN}">
    <path d="M 337 333 H 347 V 911 H 337 Z M 433 333 H 443 V 911 H 433 Z"/>
    <path d="{weave}" fill="none" stroke="{GREEN}" stroke-width="14" stroke-linecap="butt" stroke-linejoin="miter" clip-path="url(#weave-bounds)"/>
    {diamonds}
  </g>
</svg>
'''


def main() -> None:
    SVG_PATH.write_text(make_svg(), encoding="utf-8")
    renderer = shutil.which("rsvg-convert")
    if renderer:
        subprocess.run([renderer, "-w", str(SIZE), "-h", str(SIZE), "-o", str(PNG_PATH), str(SVG_PATH)], check=True)
        print(f"Wrote {SVG_PATH} and {PNG_PATH}")
    else:
        print(f"Wrote {SVG_PATH}; install librsvg to render the PNG")


if __name__ == "__main__":
    main()
