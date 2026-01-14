export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is the section title
  if (rows.length > 0) {
    const titleRow = rows[0];
    const titleCell = titleRow.children[0];
    if (titleCell) {
      titleRow.classList.add('title-row');
      titleCell.classList.add('section-title');
    }
  }
  
  // Create cards container for remaining rows
  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container');
  
  // Process card rows (skip first row which is the title)
  rows.slice(1).forEach((row) => {
    const cells = [...row.children];
    row.classList.add('card');
    
    // Cell 0: Card title
    if (cells[0]) {
      cells[0].classList.add('card-title');
    }
    
    // Cell 1: Card description
    if (cells[1]) {
      cells[1].classList.add('card-description');
    }
    
    // Cell 2: CTA link
    if (cells[2]) {
      cells[2].classList.add('card-cta');
    }
    
    // Cell 3: Empty/placeholder - remove if empty
    if (cells[3] && !cells[3].textContent.trim()) {
      cells[3].remove();
    }
    
    cardsContainer.appendChild(row);
  });
  
  // Append cards container after title row
  if (rows[0]) {
    block.appendChild(cardsContainer);
  }
}