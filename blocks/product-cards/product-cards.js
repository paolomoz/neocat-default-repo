export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    row.classList.add('card');
    
    // Create content wrapper for text elements
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('card-content');
    
    // Cell 0: Image
    if (cells[0]) {
      cells[0].classList.add('card-image');
    }
    
    // Cell 1: Title
    if (cells[1]) {
      cells[1].classList.add('card-title');
      contentWrapper.appendChild(cells[1]);
    }
    
    // Cell 2: Description
    if (cells[2]) {
      cells[2].classList.add('card-description');
      contentWrapper.appendChild(cells[2]);
    }
    
    // Insert content wrapper at the beginning (before image)
    row.insertBefore(contentWrapper, row.firstChild);
  });
}