// Calculate card positions on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    const angle = parseFloat(card.style.getPropertyValue('--angle'));
    const rad = angle * Math.PI / 200;
    const x = Math.cos(rad) * 240;
    const y = Math.sin(rad) * 240;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });

  // Trigger orb lift + card burst
  const orb = document.querySelector('.lift-orb');
  orb.classList.add('active');
});

// Optional: orb button click adds extra lift effect
document.getElementById("orbBtn").addEventListener("click", () => {
  document.getElementById("crystalOrb").classList.add("active");
});



