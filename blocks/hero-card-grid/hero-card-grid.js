export default function decorate(block) {
  const rows = [...block.children];
  
  if (rows.length < 1) return;
  
  // First row is the hero section
  const heroRow = rows[0];
  heroRow.classList.add('hero-section');
  
  const heroCells = [...heroRow.children];
  
  // Setup hero background image
  if (heroCells[0]) {
    heroCells[0].classList.add('hero-bg-wrapper');
    const bgImg = heroCells[0].querySelector('img');
    if (bgImg) bgImg.classList.add('hero-bg');
  }
  
  // Setup decorative heart
  if (heroCells[1]) {
    heroCells[1].classList.add('hero-heart-wrapper');
    const heartImg = heroCells[1].querySelector('img');
    if (heartImg) heartImg.classList.add('hero-heart');
  }
  
  // Setup hero content
  if (heroCells[2]) {
    heroCells[2].classList.add('hero-content');
  }
  
  // Create cards grid from remaining rows
  const cardRows = rows.slice(1);
  
  if (cardRows.length > 0) {
    const cardsGrid = document.createElement('div');
    cardsGrid.classList.add('cards-grid');
    
    cardRows.forEach((row) => {
      const cells = [...row.children];
      
      const card = document.createElement('div');
      card.classList.add('card');
      
      // Card image
      if (cells[0]) {
        const cardImage = document.createElement('div');
        cardImage.classList.add('card-image');
        cardImage.innerHTML = cells[0].innerHTML;
        card.appendChild(cardImage);
      }
      
      // Card title
      if (cells[1]) {
        const cardTitle = document.createElement('div');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = cells[1].textContent;
        card.appendChild(cardTitle);
      }
      
      cardsGrid.appendChild(card);
      row.remove();
    });
    
    block.appendChild(cardsGrid);
  }
}