`VAPORSCAPE GALLERY` is dynamic gallery, generating and displaying vaporwave-style images using the Unsplash API. The images are generated dynamically by making requests to the Unsplash API, fetching random images tagged with 'vaporwave'.</p>

Key functionalities:
- Randomly position images within the browser window.
- Load 5 new images each time the previous set is fully clicked away.
- Handle image load errors by replacing them with local fallback images.
- - Animate the disappearance of images on click/tap.

How it works:
- On page load, the `fetchImages` function generates 5 image elements with random positions.
- If an image from Unsplash fails to load, it is replaced by a randomly chosen fallback image from the "local/" folder.
- Each click on the gallery hides one image. When all images are hidden, 5 new images are loaded.

<hr>

# `README.md`
This web application dynamically generates a gallery of vaporwave-style images using the Unsplash API. If the API fails or an image can't be loaded, it falls back to a set of local images stored in the "local/" folder. The gallery is interactive and provides a visually appealing, random arrangement of images.

## How It Works
1. **Loading Images**: On page load, the application fetches 5 random vaporwave images from Unsplash. If an image fails to load, a local fallback image is used.
2. **Random Positioning**: The images are positioned randomly within the browser window, giving a unique look every time.
3. **Interactive Gallery**: Users can click or tap anywhere on the gallery to hide one image at a time. When all images are hidden, a new set of 5 images is loaded.
4. **Click/Tap Signal**: A "CLICK / TAP" signal is shown when the gallery is empty and hides as soon as the first image appears. It reappears when all images are hidden, indicating that a new set of images can be loaded.

## Technical Background
The core logic for fetching images, handling errors, positioning images, and managing interactions is contained in `app.js`.

- Generates a random integer between 0 and the specified maximum value.
- Calculates a random position value for an image within the window.
- Sets the random position for each image element.
- Fetches images from Unsplash, handles errors by switching to local images, and adds them to the gallery.
- Toggles the visibility of images and handles the display of the "CLICK / TAP" signal.


<hr>

# Vaporscape Gallery
Vaporscape Gallery is a dynamic web gallery that displays vaporwave-style images. It fetches random images from the Unsplash API and positions them randomly within the browser window. If the Unsplash API fails, it falls back to using a set of local images stored in the `local/` folder.

## Set Up
- Randomly positioned images within the browser window.
- Loads 5 new images each time the previous set is fully clicked away.
- Handles image load errors by replacing them with local fallback images.
- Displays a "CLICK / TAP" signal when the gallery is empty and hides it when images are displayed.
- Animates the disappearance of images on click/tap.
