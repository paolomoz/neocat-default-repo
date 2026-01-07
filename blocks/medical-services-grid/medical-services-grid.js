const iconSVGs = {
  allergy: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 6c-1 0-2 0.5-2.5 1.5L18 16c-1 1.5-2.5 2.5-4.5 2.5H10v4h3.5c1 0 2 0.5 2.5 1.5l2.5 6M24 6l4 10" stroke-linecap="round"/><circle cx="18" cy="30" r="3" fill="none"/><path d="M24 10v6M20 14h8" stroke-linecap="round"/></svg>`,
  diabetes: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="14" width="20" height="20" rx="2" stroke-dasharray="3 3"/><circle cx="20" cy="20" r="1.5" fill="currentColor" stroke="none"/><circle cx="28" cy="28" r="1.5" fill="currentColor" stroke="none"/><circle cx="28" cy="20" r="1.5" fill="currentColor" stroke="none"/><circle cx="20" cy="28" r="1.5" fill="currentColor" stroke="none"/><circle cx="24" cy="24" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  physiotherapy: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="10" r="3"/><path d="M10 40l6-12M16 28l8-4M24 24l-4-8M28 32l8 6" stroke-linecap="round"/></svg>`,
  gynecology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="16" r="8"/><path d="M24 24v14M18 32h12" stroke-linecap="round"/></svg>`,
  surgery: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M12 36l10-10M22 26l14-14c1.5-1.5 1.5-4 0-5.5s-4-1.5-5.5 0L16 20" stroke-linecap="round"/><path d="M12 36l-2 2" stroke-linecap="round"/></svg>`,
  internal: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M18 10c-4 0-6 3-6 6v6c0 2-1 3-3 4v0c2 1 3 2 3 4v6c0 3 2 6 6 6M30 10c4 0 6 3 6 6v6c0 2 1 3 3 4v0c-2 1-3 2-3 4v6c0 3-2 6-6 6" stroke-linecap="round"/></svg>`,
  cardiology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 38s-12-8-12-18c0-5 3.5-8 8-8 2.5 0 4 1.5 4 1.5s1.5-1.5 4-1.5c4.5 0 8 3 8 8 0 10-12 18-12 18z"/><path d="M18 22h4l2-4 4 8 2-4h4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  psychology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 8c-6 0-10 4-10 10 0 4 2 7 5 9v13h10V27c3-2 5-5 5-9 0-6-4-10-10-10z"/><path d="M20 40h8" stroke-linecap="round"/><path d="M22 44h4" stroke-linecap="round"/></svg>`,
  dermatology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M12 20c0-6 5-10 12-10s12 4 12 10c0 8-6 18-12 22-6-4-12-14-12-22z"/><path d="M18 22l3 3-3 3M27 22l3 3-3 3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  neurology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M14 24h6" stroke-linecap="round"/><path d="M20 18v12" stroke-linecap="round"/><path d="M28 20v8" stroke-linecap="round"/><path d="M28 24h6" stroke-linecap="round"/></svg>`,
  ophthalmology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><ellipse cx="24" cy="24" rx="14" ry="8"/><circle cx="24" cy="24" r="5"/><circle cx="24" cy="24" r="2" fill="currentColor" stroke="none"/></svg>`,
  orl: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M18 14c0-3 3-6 6-6s6 3 6 6v10c0 3-3 6-6 6s-6-3-6-6V14z"/><path d="M14 22v4c0 5.5 4.5 10 10 10s10-4.5 10-10v-4" stroke-linecap="round"/><path d="M24 36v6" stroke-linecap="round"/></svg>`
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