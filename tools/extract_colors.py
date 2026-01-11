import sys
from PIL import Image
from collections import Counter

def get_dominant_color(image_path, num_colors=3):
    try:
        image = Image.open(image_path)
        image = image.convert('RGB')
        # Resize for faster processing
        image = image.resize((150, 150))
        pixels = list(image.getdata())
        # Filter for brighter colors (simple brightness heuristic)
        # Brightness = (R+G+B)/3
        bright_colors = [c for c in pixels if sum(c)/3 > 50] # Lowered threshold to catch mid-tones
        counts = Counter(bright_colors)
        most_common = counts.most_common(10)
        
        print(f"Colors:")
        for color, count in most_common:
            hex_color = '#{:02x}{:02x}{:02x}'.format(*color)
            print(f"{hex_color}")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_colors.py <image_path>")
        sys.exit(1)
    
    get_dominant_color(sys.argv[1])
