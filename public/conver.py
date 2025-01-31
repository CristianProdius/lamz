import os
from PIL import Image

# Get the current directory
current_directory = os.getcwd()

# Loop through all files in the current directory
for filename in os.listdir(current_directory):
    if filename.endswith(".jpg"):
        # Open the image file
        with Image.open(filename) as img:
            # Convert the image to WebP format
            webp_filename = filename.rsplit('.', 1)[0] + '.webp'
            img.save(webp_filename, 'webp')
            print(f"Converted {filename} to {webp_filename}")
        
        # Delete the original PNG file
        os.remove(filename)
        print(f"Deleted {filename}")