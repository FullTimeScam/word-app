from PIL import Image
import numpy as np

def image_to_ascii(image_path, output_width=100):
    # Load the image
    image = Image.open(image_path).convert('L')  # Convert to grayscale

    # Calculate the new height to maintain aspect ratio
    aspect_ratio = image.height / image.width
    output_height = int(output_width * aspect_ratio * 0.55)  # 0.55 to adjust for character height

    # Resize the image
    image = image.resize((output_width, output_height))

    # Convert image to numpy array
    image_array = np.array(image)

    # Define ASCII characters
    ascii_chars = "@%#*+=-:.oO0 "

    # Normalize image array to the range of ASCII characters
    normalized_array = (image_array / 255) * (len(ascii_chars) - 1)
    ascii_array = normalized_array.astype(int)

    # Create ASCII art
    ascii_art = "\n".join("".join(ascii_chars[pixel] for pixel in row) for row in ascii_array)
    
    return ascii_art

# Path to the image
image_path = 'C:/Users/Shinsejong/Downloads/KIM.png'

# Convert image to ASCII art
ascii_art = image_to_ascii(image_path)

# Save the ASCII art to a file
with open('ascii_art.txt', 'w') as file:
    file.write(ascii_art)

# Print ASCII art
print(ascii_art)
