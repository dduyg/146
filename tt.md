/**
 * Welcome to Vaporscape Gallery!
 * 
 * Explore a collection of vaporwave-style artworks dynamically generated from Unsplash or local fallbacks.
 * Click or tap on an artwork to reveal the next one in this random display. Enjoy the aesthetic journey!
 * 
 * Key Features:
 * - Images are positioned randomly within your browser window for a unique viewing experience.
 * - If an image fails to load from Unsplash, it seamlessly switches to a local fallback image.
 * - The gallery reshuffles with 5 new images each time all current artworks are clicked away.
 * - Look for the "CLICK / TAP" signal to guide you when the gallery is empty.
 * 
 * How to Use:
 * - Simply click or tap anywhere on the gallery to interact and reveal new artworks.
 * - Images will animate away when clicked, triggering new ones to appear for continuous exploration.
 * 
 * Enjoy your journey through the Vaporscape Gallery!
 */

---

## Welcome to the Vaporscape Gallery!

Explore a mesmerizing collection of vaporwave-inspired art right here! Every time you click or tap on the screen, you'll reveal a new set of unique and captivating images. Here's how it works:

1. **Initial View**: When you first arrive, you'll see a "CLICK / TAP" message.
2. **Reveal Images**: Click or tap anywhere on the screen to uncover a stunning vaporwave artwork.
3. **Continue Exploring**: Keep clicking or tapping to reveal more images. Each set contains 5 new artworks.
4. **New Sets**: Once all images in a set are revealed, click or tap again to load a fresh set of images.

Enjoy the ever-changing, vibrant display of vaporwave art and immerse yourself in the aesthetic experience. Happy exploring!

---

**Welcome to the Vaporscape Gallery!**

Our gallery showcases a collection of unique, vaporwave-inspired images. Here's how it works:

1. **Interactive Experience**: Click or tap anywhere on the screen to reveal a series of 5 stunning images.
2. **Dynamic Layout**: Each time you click, one image will disappear, revealing the next. Once all images are gone, click again to load a new set of images.
3. **Smooth Transitions**: Enjoy a seamless and visually appealing transition between images.
4. **Fallback Images**: In case some images fail to load, we have prepared a set of local images to ensure you always have a great visual experience.

**How to Use:**
- **Start**: Click or tap anywhere on the screen to begin.
- **Navigate**: Continue clicking to hide images one by one.
- **Refresh**: Once all images are hidden, click again to load new images.

Enjoy exploring the ever-changing world of Vaporscape!

---

#### What is this?

**Vaporscape Gallery** is an interactive web application that dynamically displays a gallery of vaporwave-style images. Each time the gallery is clicked, the displayed images vanish one by one, revealing new ones when all images are hidden. This application fetches images from the Unsplash API and falls back to locally stored images if the API fails or an image can't be loaded, ensuring a continuous and engaging visual experience.

#### How it works

1. **Image Fetching**: On initialization, the application fetches a set of five random vaporwave images from the Unsplash API. If an image fails to load, a fallback image from a local directory is used.
2. **Image Display**: The images are positioned randomly within the browser window for a scattered layout effect.
3. **Interactive Elements**: A "CLICK / TAP" signal is initially displayed to guide user interaction. Clicking anywhere within the gallery will hide one image at a time.
4. **Image Rotation**: When all images are hidden, a new set of images is fetched and displayed. The "CLICK / TAP" signal reappears, indicating the gallery is ready for more interactions.
5. **Loading Experience**: During image fetching, a rotating circle loader is displayed to enhance the user experience and avoid showing a broken image icon.

By combining dynamic content fetching, error handling, and interactive elements, the Vaporscape Gallery provides a smooth, engaging experience that continually refreshes its visual content.
