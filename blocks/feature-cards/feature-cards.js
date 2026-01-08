export default function decorate(block) {
  const cards = [...block.children];
  
  cards.forEach((card, index) => {
    card.classList.add('card');
    const cells = [...card.children];
    
    // cells[0] = image
    if (cells[0]) {
      cells[0].classList.add('card-image');
      // For the third card (black background), hide empty image cell
      if (index === 2 && !cells[0].querySelector('img')) {
        cells[0].style.display = 'none';
      }
    }
    
    // cells[1] = eyebrow
    if (cells[1]) {
      cells[1].classList.add('card-eyebrow');
    }
    
    // cells[2] = heading
    if (cells[2]) {
      cells[2].classList.add('card-heading');
    }
    
    // cells[3] = description
    if (cells[3]) {
      cells[3].classList.add('card-description');
    }
    
    // cells[4] = CTA
    if (cells[4]) {
      cells[4].classList.add('card-cta');
    }
  });
}