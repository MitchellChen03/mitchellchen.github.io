// Optional: Add typing animation for dynamic-text
const textElement = document.getElementById('dynamic-text');
const words = ['Student', 'Developer', 'Research Intern'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = words[wordIndex];
  const display = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  textElement.textContent = display;

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

typeEffect();
