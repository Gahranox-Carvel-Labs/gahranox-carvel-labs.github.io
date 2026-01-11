import sys
import os
from PIL import Image

def convert_png_to_ico(input_path, output_path):
    try:
        img = Image.open(input_path)
        img.save(output_path, format='ICO', sizes=[(32, 32)])
        print(f"Successfully converted {input_path} to {output_path}")
    except ImportError:
        print("Error: Pillow library is not installed. Please install it using 'pip install Pillow'")
        sys.exit(1)
    except Exception as e:
        print(f"An error occurred: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python png_to_ico.py <input_png_path> <output_ico_path>")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    if not os.path.exists(input_file):
        print(f"Error: Input file '{input_file}' not found.")
        sys.exit(1)

    convert_png_to_ico(input_file, output_file)
