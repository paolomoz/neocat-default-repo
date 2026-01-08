export default function decorate(block) {
  const cards = [...block.children];
  
  cards.forEach((card, index) => {
    card.classList.add('promo-card');
    card.classList.add(`promo-card-${index + 1}`);
    
    const cells = [...card.children];
    
    if (cells[0]) {
      cells[0].classList.add('promo-card-image');
    }
    
    if (cells[1]) {
      cells[1].classList.add('promo-card-eyebrow');
    }
    
    if (cells[2]) {
      cells[2].classList.add('promo-card-heading');
    }
    
    if (cells[3]) {
      cells[3].classList.add('promo-card-description');
    }
    
    if (cells[4]) {
      cells[4].classList.add('promo-card-cta');
    }
  });
}