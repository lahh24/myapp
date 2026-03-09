"""Generate PWA icons for Le Sur Mesure."""
from PIL import Image, ImageDraw, ImageFont
import os

BRAND_BG = (12, 11, 9)
GOLD = (201, 169, 110)
CREAM = (212, 205, 192)
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public")

def create_icon(size: int, filename: str):
    img = Image.new("RGBA", (size, size), BRAND_BG + (255,))
    draw = ImageDraw.Draw(img)

    # "LSM" monogram
    font_size = int(size * 0.3)
    try:
        font = ImageFont.truetype("arial.ttf", font_size)
        small_font = ImageFont.truetype("arial.ttf", int(size * 0.08))
    except OSError:
        font = ImageFont.load_default(size=font_size)
        small_font = ImageFont.load_default(size=int(size * 0.08))

    # Center "LSM"
    text = "LSM"
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (size - tw) / 2
    y = (size - th) / 2 - size * 0.06
    draw.text((x, y), text, fill=GOLD, font=font)

    # Gold line below
    line_w = int(size * 0.35)
    line_y = int(y + th + size * 0.04)
    line_x = (size - line_w) // 2
    draw.rectangle([line_x, line_y, line_x + line_w, line_y + max(2, size // 128)], fill=GOLD)

    # "SUR MESURE" subtitle for 512
    if size >= 512:
        sub = "SUR MESURE"
        bbox2 = draw.textbbox((0, 0), sub, font=small_font)
        sw = bbox2[2] - bbox2[0]
        sx = (size - sw) / 2
        sy = line_y + size * 0.04
        draw.text((sx, sy), sub, fill=CREAM, font=small_font)

    # Round corners mask
    mask = Image.new("L", (size, size), 0)
    mask_draw = ImageDraw.Draw(mask)
    r = int(size * 0.2)
    mask_draw.rounded_rectangle([0, 0, size, size], radius=r, fill=255)
    img.putalpha(mask)

    out_path = os.path.join(OUT_DIR, filename)
    img.save(out_path, "PNG")
    print(f"Generated {out_path} ({size}x{size})")

create_icon(192, "icon-192.png")
create_icon(512, "icon-512.png")
