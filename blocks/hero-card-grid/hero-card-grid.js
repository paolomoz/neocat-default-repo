export default function decorate(block) {
  const rows = [...block.children];
  
  if (rows.length < 2) return;
  
  // First row is the hero section with background heart and heading
  const heroRow = rows[0];
  heroRow.classList.add('hero-section');
  
  const heroCells = [...heroRow.children];
  if (heroCells[0]) heroCells[0].classList.add('hero-bg');
  if (heroCells[1]) heroCells[1].classList.add('hero-content');
  
  // Create cards container for remaining rows
  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container');
  
  // Process card rows (rows 2-4)
  rows.slice(1).forEach((row) => {
    const cells = [...row.children];
    
    const card = document.createElement('div');
    card.classList.add('card');
    
    if (cells[0]) {
      cells[0].classList.add('card-image');
      card.appendChild(cells[0]);
    }
    
    if (cells[1]) {
      const titleEl = document.createElement('h3');
      titleEl.classList.add('card-title');
      titleEl.textContent = cells[1].textContent.trim();
      card.appendChild(titleEl);
    }
    
    cardsContainer.appendChild(card);
    row.remove();
  });
  
  block.appendChild(cardsContainer);
}