const iconSVGs = {
  allergy: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 8c-1 0-2 0.5-3 1.5l-6 10c-0.5 1-1.5 1.5-3 1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="21" r="2"/><path d="M24 8l6 10" stroke-linecap="round"/><path d="M30 18c1.5 0 2.5-0.5 3-1.5" stroke-linecap="round"/><path d="M18 26c-2 2-3 5-3 8 0 4 3 7 7 7" stroke-linecap="round"/><circle cx="22" cy="41" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  diabetes: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="12" width="24" height="24" rx="3" stroke-dasharray="2 2"/><circle cx="18" cy="18" r="1.5" fill="currentColor" stroke="none"/><circle cx="30" cy="30" r="1.5" fill="currentColor" stroke="none"/><circle cx="30" cy="18" r="1.5" fill="currentColor" stroke="none"/><circle cx="18" cy="30" r="1.5" fill="currentColor" stroke="none"/><circle cx="24" cy="24" r="1.5" fill="currentColor" stroke="none"/><circle cx="24" cy="18" r="1.5" fill="currentColor" stroke="none"/><circle cx="24" cy="30" r="1.5" fill="currentColor" stroke="none"/><circle cx="18" cy="24" r="1.5" fill="currentColor" stroke="none"/><circle cx="30" cy="24" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  physiotherapy: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="12" r="4"/><path d="M24 20l-12 8" stroke-linecap="round"/><circle cx="12" cy="28" r="2"/><path d="M24 20l8 4v12" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 36l6 4" stroke-linecap="round"/></svg>`,
  gynecology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="18" r="10"/><path d="M24 28v12" stroke-linecap="round"/><path d="M18 36h12" stroke-linecap="round"/></svg>`,
  surgery: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M14 40l12-14" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 26l12-12c2-2 2-5 0-7s-5-2-7 0L19 19" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 44l4-4" stroke-linecap="round"/><path d="M19 19l7 7" stroke-linecap="round"/></svg>`,
  internal: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v8M24 32v-4" stroke-linecap="round"/><path d="M18 20c0-3 3-6 6-6s6 3 6 6" stroke-linecap="round"/><path d="M24 24c-4 0-6 2-6 5 0 2 1 3 2 4" stroke-linecap="round"/><path d="M24 24c4 0 6 2 6 5 0 2-1 3-2 4" stroke-linecap="round"/></svg>`,
  cardiology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 40s-14-9-14-20c0-6 4-9 9-9 3 0 5 2 5 2s2-2 5-2c5 0 9 3 9 9 0 11-14 20-14 20z"/><path d="M16 22h6l2-4 4 8 2-4h6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  psychology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 8c-7 0-12 5-12 12s5 12 12 12 12-5 12-12-5-12-12-12z"/><path d="M24 32v8" stroke-linecap="round"/><path d="M20 40h8" stroke-linecap="round"/><path d="M22 44h4" stroke-linecap="round"/></svg>`,
  dermatology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M12 18c-2 4-2 8 0 12" stroke-linecap="round"/><path d="M18 12c-4 2-6 5-6 8" stroke-linecap="round"/><path d="M30 12c4 2 6 5 6 8" stroke-linecap="round"/><path d="M36 18c2 4 2 8 0 12" stroke-linecap="round"/><path d="M18 36c4 2 8 2 12 0" stroke-linecap="round"/><path d="M12 30c2 4 5 6 8 6" stroke-linecap="round"/><path d="M28 36c3 0 6-2 8-6" stroke-linecap="round"/></svg>`,
  neurology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M10 24h10" stroke-linecap="round"/><path d="M20 24v-8" stroke-linecap="round"/><path d="M20 24v8" stroke-linecap="round"/><path d="M28 24h10" stroke-linecap="round"/><path d="M28 24v-6" stroke-linecap="round"/><path d="M28 24v6" stroke-linecap="round"/></svg>`,
  ophthalmology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M6 24c4-8 10-12 18-12s14 4 18 12c-4 8-10 12-18 12S10 32 6 24z"/><circle cx="24" cy="24" r="6"/><circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none"/></svg>`,
  orl: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M18 12c0-3 3-5 6-5s6 2 6 5v12c0 3-3 5-6 5s-6-2-6-5V12z"/><path d="M12 22v4c0 6.5 5.5 12 12 12s12-5.5 12-12v-4" stroke-linecap="round"/><path d="M24 38v6" stroke-linecap="round"/><path d="M18 44h12" stroke-linecap="round"/></svg>`
};

export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';
  
  rows.forEach((row) => {
    const cells = [...row.children];
    const title = cells[0]?.textContent?.trim() || '';
    const provider = cells[1]?.textContent?.trim() || '';
    const iconType = cells[2]?.textContent?.trim() || '';
    const status = cells[3]?.textContent?.trim() || '';
    const linkCell = cells[4];
    const link = linkCell?.querySelector('a')?.href || '#';
    
    const card = document.createElement('div');
    card.className = 'service-card';
    
    let statusClass = '';
    if (status === 'Přijímá') {
      statusClass = 'status-accepting';
    } else if (status === 'Nepřijímá') {
      statusClass = 'status-not-accepting';
    } else if (status === 'Bez objednání') {
      statusClass = 'status-no-appointment';
    }
    
    const iconSVG = iconSVGs[iconType] || iconSVGs.internal;
    
    card.innerHTML = `
      <h3 class="service-title">${title}</h3>
      <p class="service-provider">${provider}</p>
      <div class="service-icon">${iconSVG}</div>
      ${status ? `<span class="service-status ${statusClass}">${status}</span>` : ''}
    `;
    
    if (link && link !== '#') {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        window.location.href = link;
      });
    }
    
    block.appendChild(card);
  });
}