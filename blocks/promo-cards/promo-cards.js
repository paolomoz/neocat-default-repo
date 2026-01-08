export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    
    // Create wrapper for card content
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    
    // Process image cell
    if (cells[0]) {
      cells[0].className = 'card-image';
    }
    
    // Process eyebrow cell
    if (cells[1]) {
      cells[1].className = 'card-eyebrow';
      cardContent.appendChild(cells[1]);
    }
    
    // Process heading cell
    if (cells[2]) {
      cells[2].className = 'card-heading';
      cardContent.appendChild(cells[2]);
    }
    
    // Process description cell
    if (cells[3]) {
      cells[3].className = 'card-description';
      cardContent.appendChild(cells[3]);
    }
    
    // Process CTA cell
    if (cells[4]) {
      cells[4].className = 'card-cta';
      cardContent.appendChild(cells[4]);
    }
    
    // Append card content after image
    row.appendChild(cardContent);
  });
}