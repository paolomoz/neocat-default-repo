export default function decorate(block) {
  const cards = [...block.children];
  
  cards.forEach((card) => {
    const cells = [...card.children];
    
    // Get theme from first cell
    const themeCell = cells[0];
    const theme = themeCell?.textContent?.trim() || '';
    
    // Apply theme class to card
    if (theme) {
      card.classList.add(theme);
    }
    
    // Mark cells with appropriate classes
    if (cells[0]) {
      cells[0].classList.add('card-theme');
    }
    if (cells[1]) {
      cells[1].classList.add('card-heading');
    }
    if (cells[2]) {
      cells[2].classList.add('card-description');
    }
    if (cells[3]) {
      cells[3].classList.add('card-cta');
    }
    if (cells[4]) {
      cells[4].classList.add('card-image');
    }
    
    // Wrap content cells for z-index layering
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('card-content');
    
    // Move heading, description, and cta into content wrapper
    if (cells[1]) contentWrapper.appendChild(cells[1]);
    if (cells[2]) contentWrapper.appendChild(cells[2]);
    if (cells[3]) contentWrapper.appendChild(cells[3]);
    
    // Clear card and rebuild structure
    card.innerHTML = '';
    card.appendChild(contentWrapper);
    
    // Add image if present
    if (cells[4] && cells[4].querySelector('img')) {
      card.appendChild(cells[4]);
    }
  });
}