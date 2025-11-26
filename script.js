// script.js
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const radius = 150; // distance from orb center
  const orb = document.querySelector('.orb');
  const orbRect = orb.getBoundingClientRect();
  const centerX = orbRect.left + orbRect.width/2;
  const centerY = orbRect.top + orbRect.height/2;

  const angles = [210, 90, -30]; // positions in degrees for 3 cards

  cards.forEach((card, i) => {
    const angle = angles[i] * (Math.PI/180);
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    card.style.transform = `translate(0px,0px)`; // start at orb
    card.style.opacity = 0;

    setTimeout(() => {
      card.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
      card.style.transform = `translate(${x}px, ${y}px)`;
      card.style.opacity = 1;
    }, 500 + i*200); // stagger animation
  });
});
