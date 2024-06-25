# Vaporscape Gallery
This interactive web application generates and displays vaporwave-style images using the Unsplash API. The images are generated dynamically by making requests to the Unsplash API, fetching random images tagged with 'vaporwave'.

Vaporscape Gallery is a dynamic web gallery that provides a smooth, engaging experience that continually refreshes its visual content.


-  , ensuring a continuous and engaging visual experience.

<hr>

## How it works:
- On page load, the `fetchImages` function generates 5 image elements with random positions.
- If an image from Unsplash fails to load, it is replaced by a randomly chosen fallback image from the "local/" folder.
  
1. On page load, the application fetches 5 random vaporwave images from Unsplash. If an image fails to load, a local fallback image is used.
2. The images are positioned randomly within the browser window, giving a unique look every time.

## Set Up
The core logic for fetching images, handling errors, positioning images, and managing interactions is contained in `app.js`.

- Generates a random integer between 0 and the specified maximum value.
- Calculates a random position value for an image within the window.
- Sets the random position for each image element.
- Fetches images from Unsplash, handles errors by switching to local images, and adds them to the gallery.
- Toggles the visibility of images and handles the display of the "CLICK / TAP" signal.


> - Handles image load errors by replacing them with local fallback images.
> - Handle image load errors by replacing them with local fallback images.
> - and falls back to locally stored images if the API fails or an image can't be loaded

<hr>

# *****************
#  Welcome to the Vaporscape Gallery!
Explore a collection of vaporwave-style artworks dynamically generated from Unsplash for a unique viewing experience.

## Here's how it works:
1. Click or tap anywhere on the screen to begin.
2. Keep clicking or tapping to uncover unique vaporwave images one by one.
3. Once all images in a set are revealed, click or tap again to load a fresh set of images.

- Simply click or tap anywhere on the gallery to interact and reveal new random images.
- Images will animate away when clicked, triggering new ones to appear for continuous exploration.

#### How it works
1. On initialization, the application fetches a set of five random vaporwave images from the Unsplash API. If an image fails to load, a fallback image from a local directory is used.
2. The images are positioned randomly within the browser window for a scattered layout effect.
3. A "CLICK / TAP" signal is initially displayed to guide user interaction. Clicking anywhere within the gallery will hide one image at a time.
4. When all images are hidden, a new set of images is fetched and displayed. The "CLICK / TAP" signal reappears, indicating the gallery is ready for more interactions.
