export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('promo-banner-logo');
    }
    
    // Create content wrapper for heading, description, and CTA
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('promo-banner-content');
    
    if (cells[1]) {
      cells[1].classList.add('promo-banner-heading');
      contentWrapper.appendChild(cells[1]);
    }
    
    if (cells[2]) {
      cells[2].classList.add('promo-banner-description');
      contentWrapper.appendChild(cells[2]);
    }
    
    if (cells[3]) {
      cells[3].classList.add('promo-banner-cta');
      contentWrapper.appendChild(cells[3]);
    }
    
    row.appendChild(contentWrapper);
  });
}