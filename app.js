/**
 * VAPORSCAPE GALLERY
 *
 * This script dynamically generates a gallery of vaporwave-style images using the Unsplash API.
 *
 * Key functionalities:
 * 1. Randomly position images within the browser window.
 * 2. Load 5 new images each time the previous set is fully clicked away.
 * 3. Handle image load errors by replacing them with local fallback images.
 * 4. Animate the disappearance of images on click/tap.
 *
 * The script uses:
 * - Asynchronous image fetching for smooth user experience.
 * - CSS for layout, positioning, and basic transitions.
 * - JavaScript for dynamic content generation, event handling, and error management.
 *
 * How it works:
 * - On page load, the `fetchImages` function generates 5 image elements with random positions.
 * - If an image from Unsplash fails to load, it is replaced by a randomly chosen fallback image from the "local/" folder.
 * - Each click on the gallery hides one image. When all images are hidden, 5 new images are loaded.
 */

// Function to generate a random integer up to a maximum value
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

// Function to calculate a random position for the images within the window
const getImgPosValue = (imgSize, winSize) => {
    const windowSize = winSize;
    const totalWidth = windowSize - imgSize;
    const randomPosVal = getRandomInt(totalWidth);

    return `${randomPosVal}px`;
};

// Function to set the position of each image
const setImgPosition = (elImg) => {
    const windowW = window.innerWidth;
    const windowH = window.innerHeight;
    const imgWidth = Math.round(elImg.getBoundingClientRect().width);
    const imgHeight = Math.round(elImg.getBoundingClientRect().height);

    elImg.style.left = getImgPosValue(imgWidth, windowW);
    elImg.style.top = getImgPosValue(imgHeight, windowH);
};

// Function to position all images in the gallery randomly
const createImgArray = () => {
    const vaporscapeImg = document.querySelectorAll(".vaporscape");

    vaporscapeImg.forEach((el) => {
        setImgPosition(el);
    });
};

// Set to keep track of used fallback images to avoid repeats
let usedFallbacks = new Set();

// Function to get a random fallback image path, ensuring no repeats
const getRandomFallbackImage = () => {
    if (usedFallbacks.size >= 90) {
        usedFallbacks.clear();
    }
    let fallbackNumber;
    do {
        fallbackNumber = getRandomInt(90) + 1;
    } while (usedFallbacks.has(fallbackNumber));
    usedFallbacks.add(fallbackNumber);
    return `local/${String(fallbackNumber).padStart(2, '0')}.png`;
};

// Function to fetch images from Unsplash or use fallback images if fetching fails
const fetchImages = async () => {
    const gallery = document.getElementById('js-gallery');
    gallery.innerHTML = ''; // Clear previous images

    for (let i = 0; i < 5; i++) {
        const imgElement = document.createElement('figure');
        imgElement.classList.add('vaporscape');
        imgElement.id = `js-item-${i + 1}`;
        
        const img = document.createElement('img');
        img.classList.add('vaporscape__img');
        const randomNum = Math.floor(Math.random() * 1000); // Generate a random number
        const timestamp = Date.now(); // Get the current timestamp
        const imgUrl = `https://source.unsplash.com/random/800x600/?vaporwave&t=${timestamp}${randomNum}`;
        img.src = imgUrl;
        img.alt = `Vaporwave Artwork ${i + 1}`;
        img.loading = 'lazy';

        // Add error handling for image loading
        img.onerror = () => {
            img.src = getRandomFallbackImage();
        };

        imgElement.appendChild(img);
        gallery.appendChild(imgElement);
    }

    const signalDiv = document.createElement('div');
    signalDiv.classList.add('click-tap', 'vaporscape');
    signalDiv.id = 'js-item-signal';
    signalDiv.innerText = 'CLICK / TAP';
    gallery.appendChild(signalDiv);

    createImgArray();
};

let imgArray = [];
let signalDiv;

// Function to initialize the gallery by setting up the image array and signal div
const initializeGallery = () => {
    imgArray = Array.from(document.querySelectorAll('.vaporscape'));
    signalDiv = imgArray.pop(); // Remove signalDiv from array and store it
};

// Function to toggle the visibility of images and handle gallery reloading
const toggleImgVisibility = () => {
    if (imgArray.length === 0) {
        signalDiv.classList.remove('is-hidden');
        fetchImages();
        initializeGallery();
        return;
    }
    
    const currentImg = imgArray.pop();
    currentImg.classList.add('is-hidden');

    // Remove the signalDiv when the first image is hidden
    if (imgArray.length === 4) {
        signalDiv.classList.add('is-hidden');
    }

    // Show the signalDiv when all images are hidden
    if (imgArray.length === 0) {
        signalDiv.classList.remove('is-hidden');
    }
};

// Set up the event listener for the gallery clicks
const gallery = document.querySelector("#js-gallery");
gallery.addEventListener("click", toggleImgVisibility);

// Fetch the initial set of images and initialize the gallery
fetchImages();
initializeGallery();
