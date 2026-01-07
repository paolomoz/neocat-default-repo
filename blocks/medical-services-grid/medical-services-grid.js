const iconSVGs = {
  allergy: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 8c-2 0-4 1-5 3l-3 6c-1 2-3 3-5 3h-3v12h3c2 0 4 1 5 3l3 6c1 2 3 3 5 3s4-1 5-3l3-6c1-2 3-3 5-3h3V20h-3c-2 0-4-1-5-3l-3-6c-1-2-3-3-5-3z"/><circle cx="24" cy="24" r="4"/></svg>`,
  diabetes: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="12" width="24" height="24" rx="2" stroke-dasharray="2 2"/><circle cx="20" cy="20" r="2"/><circle cx="28" cy="28" r="2"/><circle cx="28" cy="20" r="2"/><circle cx="20" cy="28" r="2"/></svg>`,
  physiotherapy: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="12" r="4"/><path d="M12 44l8-16 8-4M20 28l12 8M16 20l-4 8"/></svg>`,
  gynecology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="18" r="10"/><path d="M24 28v12M18 36h12"/></svg>`,
  surgery: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M10 38l12-12M22 26l4-4M34 10l-8 8 4 4 8-8c2-2 2-5 0-7s-5-2-7 0z"/><path d="M14 34l-4 4"/></svg>`,
  internal: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 8c-6 0-10 4-10 10v4c0 2-2 4-4 4v4c2 0 4 2 4 4v4c0 6 4 10 10 10M24 8c6 0 10 4 10 10v4c0 2 2 4 4 4v4c-2 0-4 2-4 4v4c0 6-4 10-10 10"/></svg>`,
  cardiology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 40s-14-10-14-20c0-6 4-10 10-10 3 0 4 2 4 2s1-2 4-2c6 0 10 4 10 10 0 10-14 20-14 20z"/></svg>`,
  psychology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M16 24c-4 0-8-4-8-8s4-8 8-8c2 0 4 1 5 2M32 24c4 0 8-4 8-8s-4-8-8-8c-2 0-4 1-5 2M24 8v32M16 40h16"/></svg>`,
  dermatology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M8 24c0-8 8-16 16-16s16 8 16 16-8 16-16 16S8 32 8 24z"/><path d="M16 20l4 4-4 4M28 20l4 4-4 4"/></svg>`,
  neurology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M12 24h8M20 16v16M28 20v8"/><path d="M36 24h-8"/></svg>`,
  ophthalmology: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><ellipse cx="24" cy="24" rx="16" ry="10"/><circle cx="24" cy="24" r="6"/><circle cx="24" cy="24" r="2"/></svg>`,
  orl: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M16 16c0-4 4-8 8-8s8 4 8 8v8c0 4-4 8-8 8s-8-4-8-8v-8z"/><path d="M12 24v4c0 6 6 12 12 12s12-6 12-12v-4"/><path d="M24 40v4"/></svg>`
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