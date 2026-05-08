// ================================================
// CUTE APOLOGY/LOVE WEBSITE - JAVASCRIPT
// Full of personality, playfulness, and romance!
// ================================================

// ================================================
// CONFIGURATION - EASILY EDITABLE
// ================================================
const CONFIG = {
    // Love letter message - CUSTOMIZE THIS!
    letterMessage: `Dear my bb,


I just want you to know how much I truly love you (bisan danay ko la mapakita) and how important you are to me. Ever since you came into my life, everything has started to feel more peaceful and complete. You’ve given me a sense of direction, inspiration, comfort, and happiness, you name it all lahat lahat na, that I never knew I needed. Honestly, no amount of anything in this world could ever replace the happiness you bring into my heart. (taray English)

Until the very end, always remember that you will be the one I love. I promise to be there for you whenever you need me—during your happy days, your difficult moments, your random mood swings, and even the quiet nights when words are hard to find (bisan magdeact kapa adi laak haim sapit, bakas baya kita). I want you to know that you’ll never have to face things alone as long as I’m here.

You’ve touched my heart in ways no one else ever has (TOTOO LEGIT BAKA SABIHIN FAKE), and I’m so grateful and lucky to be part of your life. Every moment with you feels special to me, even the simplest things we do together. Being loved by you is honestly one of the best things that has ever happened to me.

I will always cherish the day you came into my life because, without realizing it, you became the light and direction I needed. You are truly a blessing to my world, and I’m thankful every single day that I get to love someone as amazing as you.

You are not just my bb, but also my motivation and pinaka pinaka pinaka favorite person.

I love you so much, always and forever 💖`,

    // Customize typing speed (ms per character)
    typingSpeed: 40,

    // Customize delay before confetti (ms)
    confettiDelay: 800,
};

// ================================================
// SCREEN NAVIGATION
// ================================================
let currentScreen = 1;

function goToScreen(screenNumber) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show specific screen
    const screenClass = `.screen-${screenNumber}`;
    const screen = document.querySelector(screenClass);
    if (screen) {
        screen.classList.remove('hidden');
        screen.classList.add('active');
    }

    currentScreen = screenNumber;
    
    // Trigger specific actions for certain screens
    if (screenNumber === 4) {
        setTimeout(() => startTypingAnimation(), 300);
    }

    if (screenNumber === 5) {
        resetNoButtonPosition();
    }
}

// ================================================
// BUTTON EVENT LISTENERS
// ================================================
document.querySelectorAll('[data-action]').forEach(button => {
    button.addEventListener('click', (e) => {
        const action = button.getAttribute('data-action');

        switch(action) {
            case 'next-screen':
                goToScreen(2);
                break;
            case 'open-letter':
                goToScreen(4);
                break;
            case 'to-final':
                goToScreen(5);
                break;
            case 'yes':
                triggerSuccess();
                break;
            case 'retry':
                goToScreen(2);
                break;
            case 'restart':
                location.reload();
                break;
        }
    });
});

// ================================================
// NOPE BUTTON - DODGING BEHAVIOR (Screen 2)
// ================================================
const nopeButton = document.getElementById('nope-button');
let nopeClickCount = 0;

nopeButton.addEventListener('mouseenter', () => {
    moveNopeButton();
});

nopeButton.addEventListener('click', (e) => {
    e.preventDefault();
    nopeClickCount++;

    if (nopeClickCount >= 3) {
        // Show sad dog screen with broken hearts
        goToScreen(3);
        setTimeout(() => {
            showBrokenHearts();
        }, 300);
        nopeClickCount = 0;
    } else {
        // Add shake animation
        nopeButton.style.animation = 'none';
        setTimeout(() => {
            nopeButton.style.animation = 'cute-wiggle 0.3s';
        }, 10);
        
        // Move button
        moveNopeButton();

        // Auto-move again after 2 seconds
        setTimeout(() => {
            moveNopeButton();
        }, 2000);
    }
});

function moveNopeButton() {
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 150;
    
    nopeButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// ================================================
// NO BUTTON - KEEP POSITIONED BESIDE YES (Screen 5)
// ================================================
const noButton = document.getElementById('no-button');
const yesButton = document.querySelector('.final-buttons .btn-yes');
const finalQuestionText = document.getElementById('final-question-text');
const finalReactionText = document.getElementById('final-reaction-text');
const defaultYesLabel = 'Yes bb 💖';
const finalYesLabel = 'Yes bb, no choice kana';
const finalNoReactions = [
    {
        question: 'Will you forgive me? 🥺',
        reaction: 'Please? >.<',
        noLabel: 'No 😭'
    },
    {
        question: 'Even just a little chance? 🥺',
        reaction: 'I can do better, promise pinky promise.',
        noLabel: 'Still no 🙈'
    },
    {
        question: 'Can I try again for you? 💗',
        reaction: 'I will spoil you with hugs and snacks.',
        noLabel: 'Hmm no 😢'
    },
    {
        question: 'What if I stay extra sweet today? ✨',
        reaction: 'One tiny yes and I will be the happiest.',
        noLabel: 'Not yet 🥹'
    },
    {
        question: 'Last ask... forgive me? 💞',
        reaction: 'You are my favorite person forever.',
        noLabel: 'Okay maybe 🤏'
    },
    {
        question: 'Tiny tiny chance for me? 🫶',
        reaction: 'I brought extra patience and extra love.',
        noLabel: 'Nope again 😶'
    },
    {
        question: 'Can I redeem myself today? 🌸',
        reaction: 'I will make your day soft and sweet.',
        noLabel: 'Still nah 🥲'
    },
    {
        question: 'I can start over properly, yes? 💫',
        reaction: 'No excuses, just actions this time.',
        noLabel: 'Hmmmm no 😬'
    },
    {
        question: 'One yes and I will smile all week 🥹',
        reaction: 'You are my comfort, always.',
        noLabel: 'You wish 🙃'
    },
    {
        question: 'Final final final ask... please? 💖',
        reaction: 'My heart is waiting for your yes bb.',
        noLabel: 'Okay... maybe yes? 👀'
    }
];
let finalNoClickCount = 0;

function updateYesButtonGrowth(clickCount) {
    if (!yesButton) {
        return;
    }

    const maxYesScale = 1.38;
    const nextYesScale = Math.min(maxYesScale, 1 + clickCount * 0.04);
    yesButton.style.setProperty('--yes-scale', String(nextYesScale));
}

function updateFinalReactionState(index) {
    const safeIndex = Math.min(index, finalNoReactions.length - 1);
    const state = finalNoReactions[safeIndex];

    if (finalQuestionText) {
        finalQuestionText.textContent = state.question;
    }

    if (finalReactionText) {
        finalReactionText.textContent = state.reaction;
    }

    if (noButton) {
        noButton.textContent = state.noLabel;
    }
}

function resetNoButtonPosition() {
    if (!noButton) {
        return;
    }

    noButton.style.position = '';
    noButton.style.left = '';
    noButton.style.top = '';
    noButton.style.transform = '';
    noButton.style.setProperty('--no-scale', '1');
    noButton.style.display = '';
    noButton.style.animation = '';

    if (yesButton) {
        yesButton.classList.remove('final-yes-boost');
        yesButton.textContent = defaultYesLabel;
        yesButton.style.setProperty('--yes-scale', '1');
    }

    finalNoClickCount = 0;
    updateFinalReactionState(0);
}

noButton.addEventListener('click', (e) => {
    e.preventDefault();

    finalNoClickCount++;
    updateFinalReactionState(finalNoClickCount);
    updateYesButtonGrowth(finalNoClickCount);

    const minScale = 0.35;
    const nextScale = Math.max(minScale, 1 - finalNoClickCount * 0.14);
    noButton.style.setProperty('--no-scale', String(nextScale));

    const lastReactionIndex = finalNoReactions.length - 1;
    if (finalNoClickCount >= lastReactionIndex) {
        noButton.style.display = 'none';

        if (yesButton) {
            yesButton.classList.add('final-yes-boost');
            yesButton.textContent = finalYesLabel;
            yesButton.style.setProperty('--yes-scale', '1.42');
        }
    }
});

// ================================================
// TYPING ANIMATION FOR LETTER
// ================================================
function startTypingAnimation() {
    const typingTextElement = document.getElementById('typing-text');
    const paragraphs = CONFIG.letterMessage
        .split('\n\n')
        .map(paragraph => paragraph.trim())
        .filter(Boolean);

    typingTextElement.innerHTML = '';

    let paragraphIndex = 0;

    function typeParagraph() {
        if (paragraphIndex >= paragraphs.length) {
            return;
        }

        const paragraphElement = document.createElement('p');
        typingTextElement.appendChild(paragraphElement);

        const currentParagraph = paragraphs[paragraphIndex];
        let charIndex = 0;

        function typeNextCharacter() {
            if (charIndex < currentParagraph.length) {
                paragraphElement.textContent += currentParagraph[charIndex];
                charIndex++;
                setTimeout(typeNextCharacter, CONFIG.typingSpeed);
            } else {
                paragraphIndex++;
                setTimeout(typeParagraph, 180);
            }
        }

        typeNextCharacter();
    }

    typeParagraph();
}

// ================================================
// MUSIC SETUP - AUTO-PLAY AT START
// ================================================
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
let isMusicPlaying = false;
let musicUnlockBound = false;

// Set volume to 80% immediately.
backgroundMusic.volume = 0.8;

function setMusicUI(playing) {
    if (!musicToggle) {
        return;
    }

    musicToggle.classList.toggle('playing', playing);
    isMusicPlaying = playing;
}

// Keep icon state synced with the real audio state.
backgroundMusic.addEventListener('play', () => setMusicUI(true));
backgroundMusic.addEventListener('pause', () => setMusicUI(false));
backgroundMusic.addEventListener('ended', () => setMusicUI(false));

function unlockMusicOnFirstInteraction() {
    if (!backgroundMusic || isMusicPlaying) {
        return;
    }

    backgroundMusic.play().then(() => {
        setMusicUI(true);
    }).catch(() => {});

    document.removeEventListener('pointerdown', unlockMusicOnFirstInteraction, true);
    document.removeEventListener('touchstart', unlockMusicOnFirstInteraction, true);
    document.removeEventListener('keydown', unlockMusicOnFirstInteraction, true);
}

function startMusic() {
    if (!backgroundMusic) {
        return;
    }

    backgroundMusic.play().then(() => {
        setMusicUI(true);
    }).catch(() => {
        console.log('Music autoplay blocked by browser - waiting for first interaction');

        if (!musicUnlockBound) {
            musicUnlockBound = true;
            document.addEventListener('pointerdown', unlockMusicOnFirstInteraction, true);
            document.addEventListener('touchstart', unlockMusicOnFirstInteraction, true);
            document.addEventListener('keydown', unlockMusicOnFirstInteraction, true);
        }
    });
}

// Try to start music immediately when DOM is ready.
if (document.readyState !== 'loading') {
    startMusic();
} else {
    document.addEventListener('DOMContentLoaded', startMusic, { once: true });
}

// Also try on window load as backup.
window.addEventListener('load', startMusic, { once: true });

// ================================================
// MUSIC TOGGLE
// ================================================

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        setMusicUI(false);
    } else {
        backgroundMusic.play().then(() => {
            setMusicUI(true);
        }).catch(() => {
            setMusicUI(false);
            console.log('Music not available or blocked by browser');
        });
    }
});

// ================================================
// BROKEN HEARTS ANIMATION (WHEN CLICKING NO)
// ================================================
function showBrokenHearts() {
    const brokenHeartsContainer = document.getElementById('broken-hearts');
    let container = brokenHeartsContainer;

    if (!container) {
        const sadCard = document.querySelector('.screen-3 .cute-card');
        if (!sadCard) {
            return;
        }

        container = document.createElement('div');
        container.id = 'broken-hearts';
        container.className = 'broken-hearts';
        sadCard.appendChild(container);
    }

    // Clear existing hearts
    container.innerHTML = '';

    // Create new broken hearts
    for (let i = 0; i < 3; i++) {
        const heart = document.createElement('span');
        heart.className = 'broken-heart';
        heart.textContent = '💔';
        container.appendChild(heart);
    }

    // Remove after animation
    setTimeout(() => {
        container.innerHTML = '';
    }, 2500);
}

// ================================================
// SUCCESS SCREEN - CONFETTI & CELEBRATION
// ================================================
function triggerSuccess() {
    goToScreen('success');

    // Show success screen with animation
    const successScreen = document.querySelector('.screen-success');
    successScreen.classList.remove('hidden');
    successScreen.classList.add('active');

    // Trigger confetti after delay
    setTimeout(() => {
        createConfetti();
    }, CONFIG.confettiDelay);

    // Create floating hearts
    createFloatingHearts();
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const emojis = ['💗', '💖', '💕', '✨', '💘', '🎉', '💝', '🌸'];

    for (let i = 0; i < 40; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        const randomX = Math.random() * window.innerWidth;
        confettiPiece.style.left = randomX + 'px';
        confettiPiece.style.top = '-50px';
        
        const randomDelay = Math.random() * 0.5;
        confettiPiece.style.animationDelay = randomDelay + 's';
        
        confettiContainer.appendChild(confettiPiece);

        // Remove after animation
        setTimeout(() => {
            confettiPiece.remove();
        }, 3500);
    }
}

function createFloatingHearts() {
    const container = document.querySelector('.celebration-container');
    const hearts = ['💗', '💖', '💕', '💘', '🎉'];

    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.style.position = 'fixed';
        heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '10';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        const animationDuration = (3 + Math.random() * 2) + 's';
        heart.style.animation = `float-up ${animationDuration} ease-in forwards`;
        heart.style.animationDelay = (Math.random() * 0.5) + 's';
        
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// ================================================
// CURSOR SPARKLE EFFECT
// ================================================
document.addEventListener('mousemove', (e) => {
    createSparkle(e.clientX, e.clientY);
});

function createSparkle(x, y) {
    if (Math.random() > 0.3) return; // Don't create sparkle every move

    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = '✨';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';

    document.querySelector('.sparkles-container').appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800);
}

// ================================================
// MOBILE TOUCH SUPPORT
// ================================================
document.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        createSparkle(touch.clientX, touch.clientY);
    }
});

// ================================================
// FALLING HEARTS ANIMATION (CONTINUOUS)
// ================================================
function createFallingHearts() {
    const container = document.querySelector('.falling-hearts');
    const hearts = ['💗', '💖'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-50px';
        heart.style.fontSize = (0.8 + Math.random() * 0.6) + 'rem';
        heart.style.opacity = '0.2';
        heart.style.pointerEvents = 'none';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

        const duration = 8 + Math.random() * 4;
        heart.style.animation = `fall ${duration}s linear`;

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }, 800);
}

// ================================================
// INITIALIZATION
// ================================================
document.addEventListener('DOMContentLoaded', () => {
    // Start on first screen
    goToScreen(1);

    // Start falling hearts
    createFallingHearts();

    // Mobile viewport height fix
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh + 'px');
    }

    setVH();
    window.addEventListener('resize', setVH);

    // Prevent pull-to-refresh on mobile
    document.body.addEventListener('touchmove', (e) => {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });
});

// ================================================
// EASTER EGGS (OPTIONAL FUN!)
// ================================================
let keysPressed = [];
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];

document.addEventListener('keydown', (e) => {
    keysPressed.push(e.key);
    keysPressed = keysPressed.slice(-8);

    // Konami code easter egg
    if (keysPressed.join('') === secretCode.join('')) {
        triggerHeartRain();
        keysPressed = [];
    }
});

function triggerHeartRain() {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '-100px';
            heart.style.fontSize = '2rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '5';
            heart.textContent = '💖';
            heart.style.animation = `fall 3s ease-in forwards`;
            
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 30);
    }
}

// ================================================
// HELPER FUNCTION FOR CUSTOM MESSAGES
// ================================================
function updateLetterMessage(newMessage) {
    CONFIG.letterMessage = newMessage;
}

// Usage: updateLetterMessage("Your custom message here");

// ================================================
// HELPER FUNCTION FOR CUSTOM MUSIC
// ================================================
function setBackgroundMusic(musicPath) {
    const audio = document.getElementById('background-music');
    audio.src = musicPath;
}

// Usage: setBackgroundMusic('assets/custom-music.mp3');

// ================================================
// HELPER FUNCTION FOR CUSTOM PHOTO
// ================================================
function setPhotoSource(photoPath) {
    const photoElement = document.querySelector('.letter-photo');
    photoElement.src = photoPath;
}

// Usage: setPhotoSource('assets/custom-photo.jpg');
