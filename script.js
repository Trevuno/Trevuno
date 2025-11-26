// Modal
const orb = document.getElementById('crystalOrb');
const orbBtn = document.getElementById('orbBtn');
const modal = document.getElementById('signupModal');
const modalClose = document.getElementById('modalClose');
const headerSignup = document.getElementById('headerSignup');

function openModal() { modal.style.display='flex'; }
function closeModal() { modal.style.display='none'; }

orb.addEventListener('click', openModal);
orbBtn.addEventListener('click', e=>{ e.stopPropagation(); openModal(); });
headerSignup.addEventListener('click', e=>{ e.preventDefault(); openModal(); });
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e=>{ if(e.target===modal) closeModal(); });

// Cards emerge animation
const cards = [
  document.getElementById('organizeCard'),
  document.getElementById('productivityCard'),
  document.getElementById('motivateCard')
];

const cardPositions = [
  {x:-200,y:150}, // organize
  {x:200,y:-150}, // productivity
  {x:-150,y:-180} // motivate
];

window.addEventListener('load', ()=>{
  cards.forEach((card,i)=>{
    card.style.opacity='1';
    card.style.transform=`translate(${cardPositions[i].x}px, ${cardPositions[i].y}px)`;
  });
});
