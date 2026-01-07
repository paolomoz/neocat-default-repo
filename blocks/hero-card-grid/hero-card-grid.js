export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is the hero content (title + CTA)
  if (rows[0]) {
    rows[0].classList.add('hero-content');
  }
  
  // Second row is the decorative heart image
  if (rows[1]) {
    rows[1].classList.add('hero-decoration');
  }
  
  // Remaining rows are cards - wrap them in a container
  const cardRows = rows.slice(2);
  
  if (cardRows.length > 0) {
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('hero-card-grid-cards');
    
    cardRows.forEach((row) => {
      const cells = [...row.children];
      row.classList.add('card');
      
      if (cells[0]) {
        cells[0].classList.add('card-image');
      }
      
      if (cells[1]) {
        cells[1].classList.add('card-title');
      }
      
      cardsContainer.appendChild(row);
    });
    
    block.appendChild(cardsContainer);
  }
}