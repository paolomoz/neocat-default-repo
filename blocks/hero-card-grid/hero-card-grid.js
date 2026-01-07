export default function decorate(block) {
  const rows = [...block.children];
  
  if (rows.length < 2) return;
  
  // First row is the hero section
  const heroRow = rows[0];
  heroRow.classList.add('hero-card-grid-hero');
  
  // Card rows (remaining rows)
  const cardRows = rows.slice(1);
  
  // Create cards container
  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('hero-card-grid-cards');
  
  cardRows.forEach((row) => {
    const cells = [...row.children];
    
    const card = document.createElement('div');
    card.classList.add('hero-card-grid-card');
    
    // Image cell
    if (cells[0]) {
      const imageWrapper = document.createElement('div');
      imageWrapper.classList.add('hero-card-grid-card-image');
      imageWrapper.innerHTML = cells[0].innerHTML;
      card.appendChild(imageWrapper);
    }
    
    // Title cell
    if (cells[1]) {
      const titleWrapper = document.createElement('div');
      titleWrapper.classList.add('hero-card-grid-card-title');
      titleWrapper.innerHTML = cells[1].innerHTML;
      card.appendChild(titleWrapper);
    }
    
    cardsContainer.appendChild(card);
    row.remove();
  });
  
  block.appendChild(cardsContainer);
}