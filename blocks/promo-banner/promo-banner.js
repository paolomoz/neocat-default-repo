export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    // Find the logo cell (first one with image)
    if (cells[0]) {
      cells[0].classList.add('promo-banner-logo');
    }
    
    // Create a content wrapper for title, description, and CTA
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('promo-banner-content');
    
    if (cells[1]) {
      cells[1].classList.add('promo-banner-title');
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
    
    // Insert content wrapper after logo
    if (cells[0]) {
      row.insertBefore(contentWrapper, cells[0].nextSibling);
    } else {
      row.appendChild(contentWrapper);
    }
  });
}