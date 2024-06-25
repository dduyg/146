> Key:
> - Handle image load errors by replacing them with local fallback images.
>
> --------------------------------

# Vaporscape Gallery
- This web application dynamically generates a gallery of vaporwave-style images using the Unsplash API. The gallery is interactive and provides a visually appealing, random arrangement of images.

- Vaporscape Gallery is a dynamic web gallery that displays vaporwave-style images. It fetches random images from the Unsplash API and positions them randomly within the browser.

- Vaporscape Gallery provides a smooth, engaging experience that continually refreshes its visual content.

*Vaporscape Gallery* is an interactive web application that generates and displays vaporwave-style images using the Unsplash API. The images are generated dynamically by making requests to the Unsplash API, fetching random images tagged with 'vaporwave'.


-  and falls back to locally stored images if the API fails or an image can't be loaded, ensuring a continuous and engaging visual experience.

<hr>

## How it works:
- On page load, the `fetchImages` function generates 5 image elements with random positions.
- If an image from Unsplash fails to load, it is replaced by a randomly chosen fallback image from the "local/" folder.
- Each click on the gallery hides one image. When all images are hidden, 5 new images are loaded


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

## Set Up
- Randomly positioned images within the browser window.
- Loads 5 new images each time the previous set is fully clicked away.
- Handles image load errors by replacing them with local fallback images.
- Displays a "CLICK / TAP" signal when the gallery is empty and hides it when images are displayed.
- Animates the disappearance of images on click/tap.

<hr>

# *****************
#  Welcome to the Vaporscape Gallery!
Explore a collection of vaporwave-style artworks dynamically generated from Unsplash for a unique viewing experience.

## How to Use:
- Simply click or tap anywhere on the gallery to interact and reveal new random images.
- Images will animate away when clicked, triggering new ones to appear for continuous exploration.


## Here's how it works:
1. Click or tap anywhere on the screen to begin.
2. Keep clicking or tapping to uncover unique vaporwave images one by one.
3. Once all images in a set are revealed, click or tap again to load a fresh set of images.

#### How it works
1. On initialization, the application fetches a set of five random vaporwave images from the Unsplash API. If an image fails to load, a fallback image from a local directory is used.
2. The images are positioned randomly within the browser window for a scattered layout effect.
3. A "CLICK / TAP" signal is initially displayed to guide user interaction. Clicking anywhere within the gallery will hide one image at a time.
4. When all images are hidden, a new set of images is fetched and displayed. The "CLICK / TAP" signal reappears, indicating the gallery is ready for more interactions.
