// Get the container for the cards
const cardContainer = document.querySelector('.card-container-custom');

clothing.forEach(item => {
    // Create card element
    const card = document.createElement('div');
    card.classList.add('card');

    // Create inner structure
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <h5 class="card-title">${item.emoji}</h5>
            </div>
            <div class="card-back">
                <div class="top" data-word="${item.meaning}">
                    <p><strong>${item.meaning}</strong></p> 
                </div>
                <div class="bottom">  
                    <p>${item.translation}</p> 
                </div>
            </div>
        </div>
    `;

    // Add click event to flip the card
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    // Append card to the container
    cardContainer.appendChild(card);
});

// Text-to-Speech function
function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US'; // Set language to English (US)
    window.speechSynthesis.speak(utterance);
}

// Add event listeners to .top elements for hover and touch interactions
document.querySelectorAll('.top').forEach(topElement => {
    // Desktop: Hover to trigger TTS
    topElement.addEventListener('mouseenter', () => {
        const word = topElement.getAttribute('data-word');
        if (word) {
            speakWord(word);
        }
    });

    // Touch devices: Tap to trigger TTS
    topElement.addEventListener('click', () => {
        const word = topElement.getAttribute('data-word');
        if (word) {
            speakWord(word);
        }
    });
});

/* Footer logic */
document.getElementById('current-year').textContent = new Date().getFullYear();
