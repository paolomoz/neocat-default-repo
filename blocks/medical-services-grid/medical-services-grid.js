const iconSVGs = {
  surgery: '<svg viewBox="0 0 48 48"><path d="M12 36l8-8M28 20l8-8M16 12c2-2 6-2 8 0s2 6 0 8l-12 12c-2 2-6 2-8 0s-2-6 0-8l12-12z"/><path d="M32 12l4 4M24 28l-4-4"/></svg>',
  stethoscope: '<svg viewBox="0 0 48 48"><path d="M16 8v12c0 6 4 10 8 10s8-4 8-10V8"/><circle cx="36" cy="28" r="4"/><path d="M36 32v6c0 4-4 6-8 6h-8c-4 0-8-4-8-10"/><circle cx="12" cy="8" r="3"/><circle cx="32" cy="8" r="3"/></svg>',
  heart: '<svg viewBox="0 0 48 48"><path d="M24 40S8 28 8 18c0-6 4-10 10-10 4 0 6 2 6 2s2-2 6-2c6 0 10 4 10 10 0 10-16 22-16 22z"/><path d="M14 22l6 6 10-12"/></svg>',
  psychology: '<svg viewBox="0 0 48 48"><circle cx="24" cy="16" r="8"/><path d="M12 40v-4c0-6 6-10 12-10s12 4 12 10v4"/><path d="M20 14c0-2 2-4 4-4s4 2 4 4"/><path d="M18 18h2M28 18h2"/></svg>',
  dermatology: '<svg viewBox="0 0 48 48"><path d="M24 8c-8 0-16 8-16 20 0 8 6 12 16 12s16-4 16-12c0-12-8-20-16-20z"/><circle cx="18" cy="24" r="2"/><circle cx="30" cy="20" r="2"/><circle cx="26" cy="30" r="2"/><circle cx="20" cy="32" r="1.5"/></svg>',
  neurology: '<svg viewBox="0 0 48 48"><path d="M24 8v32"/><path d="M24 12h-8v8h8"/><path d="M24 20h8v8h-8"/><path d="M24 28h-8v8h8"/><circle cx="12" cy="16" r="2"/><circle cx="36" cy="24" r="2"/><circle cx="12" cy="32" r="2"/></svg>',
  eye: '<svg viewBox="0 0 48 48"><ellipse cx="24" cy="24" rx="16" ry="10"/><circle cx="24" cy="24" r="6"/><circle cx="24" cy="24" r="2"/></svg>',
  ear: '<svg viewBox="0 0 48 48"><path d="M32 16c0-6-4-8-8-8s-8 4-8 12c0 6-2 10-4 14"/><path d="M20 24c0 2 2 4 4 4"/><circle cx="16" cy="38" r="2"/></svg>',
  orthopedics: '<svg viewBox="0 0 48 48"><path d="M20 8v14l-8 8v10"/><path d="M28 8v14l8 8v10"/><path d="M16 22h16"/><circle cx="20" cy="8" r="3"/><circle cx="28" cy="8" r="3"/></svg>',
  lungs: '<svg viewBox="0 0 48 48"><path d="M24 8v20"/><path d="M24 14c-4 4-10 8-10 18 0 4 4 8 8 8h2"/><path d="M24 14c4 4 10 8 10 18 0 4-4 8-8 8h-2"/></svg>',
  occupational: '<svg viewBox="0 0 48 48"><rect x="12" y="16" width="24" height="24" rx="2"/><path d="M18 16v-4c0-2 2-4 6-4s6 2 6 4v4"/><path d="M24 26v6"/><path d="M20 32h8"/></svg>',
  doctor: '<svg viewBox="0 0 48 48"><circle cx="24" cy="12" r="6"/><path d="M14 40v-8c0-6 4-10 10-10s10 4 10 10v8"/><path d="M24 26v8"/><path d="M20 30h8"/></svg>',
  ultrasound: '<svg viewBox="0 0 48 48"><rect x="8" y="12" width="24" height="20" rx="2"/><path d="M32 20h8v8h-8"/><rect x="12" y="16" width="16" height="12" rx="1"/></svg>',
  'dental-surgery': '<svg viewBox="0 0 48 48"><path d="M16 8c-4 0-8 4-8 10 0 8 4 22 8 22 2 0 4-4 4-8v-8c0-2 2-4 4-4s4 2 4 4v8c0 4 2 8 4 8 4 0 8-14 8-22 0-6-4-10-8-10-2 0-4 2-4 4h-8c0-2-2-4-4-4z"/></svg>',
  tooth: '<svg viewBox="0 0 48 48"><path d="M16 8c-4 0-8 4-8 10 0 8 4 22 8 22 2 0 4-4 4-8v-8c0-2 2-4 4-4s4 2 4 4v8c0 4 2 8 4 8 4 0 8-14 8-22 0-6-4-10-8-10-2 0-4 2-4 4h-8c0-2-2-4-4-4z"/></svg>'
};

export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';
  
  rows.forEach((row) => {
    const cells = [...row.children];
    const title = cells[0]?.textContent?.trim() || '';
    const provider = cells[1]?.textContent?.trim() || '';
    const iconKey = cells[2]?.textContent?.trim() || '';
    const status = cells[3]?.textContent?.trim() || '';
    const statusClass = cells[4]?.textContent?.trim() || '';
    
    const card = document.createElement('div');
    card.className = 'service-card';
    
    const titleEl = document.createElement('h3');
    titleEl.className = 'service-title';
    titleEl.textContent = title;
    
    const providerEl = document.createElement('p');
    providerEl.className = 'service-provider';
    providerEl.textContent = provider;
    
    const iconEl = document.createElement('div');
    iconEl.className = 'service-icon';
    iconEl.innerHTML = iconSVGs[iconKey] || iconSVGs.doctor;
    
    const statusEl = document.createElement('span');
    statusEl.className = 'service-status';
    if (statusClass === 'accepting') {
      statusEl.classList.add('accepting');
    } else if (statusClass === 'not-accepting') {
      statusEl.classList.add('not-accepting');
    } else {
      statusEl.classList.add('neutral');
    }
    statusEl.textContent = status;
    
    card.appendChild(titleEl);
    card.appendChild(providerEl);
    card.appendChild(iconEl);
    card.appendChild(statusEl);
    
    block.appendChild(card);
  });
}