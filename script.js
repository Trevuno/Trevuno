// Password toggle
const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');
togglePassword.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  togglePassword.innerHTML = type === 'password' ? '<i data-lucide="eye"></i>' : '<i data-lucide="eye-off"></i>';
  lucide.replace();
});

// Plan selection
const plansContainer = document.getElementById('plansContainer');
let selectedPlan = 'free';

const plans = [
  {
    id: 'free',
    title: 'Free Forever',
    desc: 'Perfect to get started',
    price: '$0',
    features: ['Basic focus timer','Up to 3 habits','Task management','Daily motivation','Mobile & desktop apps'],
    border: 'border-[#D56989]/20',
    highlight: 'border-[#C2DC80]',
    bg: 'bg-white/60',
    popular: false
  },
  {
    id: 'pro',
    title: 'Pro',
    desc: 'For power users',
    price: '$12',
    per: 'per month',
    features: ['Everything in Free','Unlimited habits & tasks','AI-powered insights','Advanced analytics','Custom themes & sounds','Priority support','Team collaboration'],
    border: 'border-[#D56989]/20',
    highlight: 'border-[#EA9CAF]',
    bg: 'bg-gradient-to-br from-[#EA9CAF]/10 to-[#D56989]/10',
    popular: true
  }
];

function renderPlans() {
  plansContainer.innerHTML = '';
  plans.forEach(plan => {
    const div = document.createElement('div');
    div.className = `relative overflow-hidden rounded-[2rem] backdrop-blur-xl border-2 p-8 cursor-pointer transition-all hover:scale-105 ${selectedPlan === plan.id ? plan.highlight + ' shadow-xl ' + plan.bg : plan.border + ' bg-white/60'}`;
    div.onclick = () => { selectedPlan = plan.id; renderPlans(); };

    let popularTag = plan.popular ? `<div class="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-[#EA9CAF] to-[#D56989] rounded-bl-2xl"><span class="text-white text-xs font-bold">POPULAR</span></div>` : '';
    let checkIcon = selectedPlan === plan.id ? `<div class="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#EA9CAF] flex items-center justify-center"><i data-lucide="check" class="w-5 h-5 text-white"></i></div>` : '';

    div.innerHTML = `
      ${popularTag}
      ${checkIcon}
      <div class="flex items-start justify-between mb-6 mt-4">
        <div>
          <h3 class="text-2xl font-bold text-[#D56989] mb-2">${plan.title}</h3>
          <p class="text-[#D56989]/70">${plan.desc}</p>
        </div>
        <div class="text-right">
          <p class="text-4xl font-bold text-[#D56989]">${plan.price}</p>
          <p class="text-[#D56989]/60 text-sm">${plan.per || 'forever'}</p>
        </div>
      </div>
      <ul class="space-y-3">
        ${plan.features.map(f => `<li class="flex items-center gap-3 text-[#D56989]/80"><div class="w-5 h-5 rounded-full bg-[#C2DC80]/20 flex items-center justify-center flex-shrink-0"><i data-lucide="check" class="w-3 h-3 text-[#C2DC80]"></i></div>${f}</li>`).join('')}
      </ul>
    `;
    plansContainer.appendChild(div);
    lucide.replace();
  });
}

renderPlans();

// Generate particles
const particles = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const div = document.createElement('div');
  div.className = 'absolute animate-float-particle';
  div.style.left = `${Math.random()*100}%`;
  div.style.top = `${Math.random()*100}%`;
  div.style.animationDelay = `${Math.random()*5}s`;
  div.style.animationDuration = `${8+Math.random()*8}s`;
  div.innerHTML = `<div class="w-2 h-2 bg-gradient-to-br from-[#EA9CAF]/40 to-[#D56989]/40 rounded-full blur-[1px]" style="box-shadow:0 0 10px rgba(234,156,175,0.3)"></div>`;
  particles.appendChild(div);
}

// Generate crystals
const crystals = document.getElementById('crystals');
for (let i = 0; i < 20; i++) {
  const div = document.createElement('div');
  div.className = 'absolute animate-crystal-float';
  div.style.left = `${Math.random()*100}%`;
  div.style.top = `${Math.random()*100}%`;
  div.style.animationDelay = `${Math.random()*4}s`;
  div.style.animationDuration = `${10+Math.random()*10}s`;
  div.innerHTML = `<div class="w-3 h-3 rotate-45 bg-gradient-to-br from-[#C2DC80]/30 to-[#EA9CAF]/30" style="clip-path: polygon(50% 0%,100% 50%,50% 100%,0% 50%); filter: blur(0.5px); box-shadow:0 0 15px rgba(194,220,128,0.2)"></div>`;
  crystals.appendChild(div);
}





