// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to shuffle logos
function shuffleLogos() {
    const carousel = document.getElementById('logoCarousel');
    const logos = Array.from(carousel.children);  // Get all logo <img> elements

    // Shuffle the logos array
    const shuffledLogos = shuffleArray(logos);

    // Clear the carousel and append logos in shuffled order
    carousel.innerHTML = '';
    shuffledLogos.forEach(logo => carousel.appendChild(logo));

    console.log("Logos shuffled!");  // Add a log to confirm it worked
}

// Use DOMContentLoaded to make sure the DOM is ready before running the script
document.addEventListener("DOMContentLoaded", shuffleLogos);
