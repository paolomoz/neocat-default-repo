export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('promo-banner-logo');
    }
    
    if (cells[1]) {
      cells[1].classList.add('promo-banner-heading');
    }
    
    if (cells[2]) {
      cells[2].classList.add('promo-banner-description');
    }
    
    if (cells[3]) {
      cells[3].classList.add('promo-banner-cta');
    }
  });
}