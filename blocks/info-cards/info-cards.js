export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    
    // Create card structure
    row.classList.add('card');
    
    // Handle image cell
    if (cells[0]) {
      cells[0].classList.add('card-image');
    }
    
    // Handle title cell
    if (cells[1]) {
      cells[1].classList.add('card-title');
    }
    
    // Handle description cell
    if (cells[2]) {
      cells[2].classList.add('card-description');
    }
    
    // Handle link cell
    if (cells[3]) {
      cells[3].classList.add('card-link');
    }
    
    // Wrap title, description, and link in a content container
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('card-content');
    
    if (cells[1]) contentWrapper.appendChild(cells[1]);
    if (cells[2]) contentWrapper.appendChild(cells[2]);
    if (cells[3]) contentWrapper.appendChild(cells[3]);
    
    row.appendChild(contentWrapper);
  });
}