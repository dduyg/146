const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const getImgPosValue = (imgSize, winSize) => {
    const windowSize = winSize;
    const totalWidth = windowSize - imgSize;
    const randomPosVal = getRandomInt(totalWidth);

    return `${randomPosVal}px`;
};

const setImgPosition = (elImg) => {
    const windowW = window.innerWidth;
    const windowH = window.innerHeight;
    const imgWidth = Math.round(elImg.getBoundingClientRect().width);
    const imgHeight = Math.round(elImg.getBoundingClientRect().height);

    elImg.style.left = getImgPosValue(imgWidth, windowW);
    elImg.style.top = getImgPosValue(imgHeight, windowH);
};

const createImgArray = () => {
    const galleryImg = document.querySelectorAll(".gallery__item");

    galleryImg.forEach((el) => {
        setImgPosition(el);
    });
};

let usedFallbacks = new Set();

const getRandomFallbackImage = () => {
    if (usedFallbacks.size >= 90) {
        usedFallbacks.clear();
    }
    let fallbackNumber;
    do {
        fallbackNumber = getRandomInt(90) + 1;
    } while (usedFallbacks.has(fallbackNumber));
    usedFallbacks.add(fallbackNumber);
    return `local/${fallbackNumber}.png`;
};

const fetchImages = async () => {
    const gallery = document.getElementById('js-gallery');
    gallery.innerHTML = ''; // Clear previous images

    for (let i = 0; i < 5; i++) {
        const imgElement = document.createElement('figure');
        imgElement.classList.add('gallery__item');
        imgElement.id = `js-item-${i + 1}`;
        
        const img = document.createElement('img');
        img.classList.add('gallery__item__img');
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
    signalDiv.classList.add('click-tap', 'gallery__item');
    signalDiv.id = 'js-item-signal';
    signalDiv.innerText = 'CLICK / TAP';
    gallery.appendChild(signalDiv);

    createImgArray();
};

let imgArray = [];
let signalDiv;

const initializeGallery = () => {
    imgArray = Array.from(document.querySelectorAll('.gallery__item'));
    signalDiv = imgArray.pop(); // Remove signalDiv from array and store it
};

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

const gallery = document.querySelector("#js-gallery");
gallery.addEventListener("click", toggleImgVisibility);

fetchImages();
initializeGallery();
