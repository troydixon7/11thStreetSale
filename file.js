
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.getElementById("dots");
    
let currentSlide = 0;
let slideTimer;

// Create indicator dots
slides.forEach((slide, index) => {
    const dot = document.createElement("span");

    dot.classList.add("dot");

    dot.addEventListener("click", () => {
        showSlide(index);
        restartTimer();
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Display selected image
function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

// Next or previous image
function changeSlide(direction) {
    showSlide(currentSlide + direction);
    restartTimer();
}

// Automatically rotate images
function startTimer() {
    slideTimer = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);
}

// Reset timer after manual navigation
function restartTimer() {
    clearInterval(slideTimer);
    startTimer();
}

// Start slideshow
showSlide(0);
startTimer();



let directionIndex = 0;
let directionTimer;

const directionSlides = document.querySelectorAll(
    ".direction-slide"
);

function showDirection(index) {

    directionSlides[directionIndex].classList.remove("active");

    directionIndex =
        (index + directionSlides.length) % directionSlides.length;

    directionSlides[directionIndex].classList.add("active");

    document.getElementById("directionCounter").textContent =
        `${directionIndex + 1} of ${directionSlides.length}`;
}

function changeDirection(step) {
    showDirection(directionIndex + step);
    restartDirectionTimer();
}

function startDirectionTimer() {
    directionTimer = setInterval(() => {
        showDirection(directionIndex + 1);
    }, 4000);
}

function restartDirectionTimer() {
    clearInterval(directionTimer);
    startDirectionTimer();
}

function openDirections() {
    const modal = document.getElementById("directionsModal");

    modal.style.display = "flex";

    showDirection(0);
    startDirectionTimer();
}

function closeDirections() {
    document.getElementById("directionsModal").style.display = "none";

    clearInterval(directionTimer);
}

// Close popup when clicking outside the image carousel
document.getElementById("directionsModal").addEventListener(
    "click",
    function(event) {
        if (event.target === this) {
            closeDirections();
        }
    }
);

// Close popup with Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeDirections();
    }
});

