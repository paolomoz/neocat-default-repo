export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    row.classList.add('card');
    
    // Create content wrapper for title and CTA
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('card-content');
    
    if (cells[0]) {
      cells[0].classList.add('card-image');
    }
    
    if (cells[1]) {
      cells[1].classList.add('card-title');
      contentWrapper.appendChild(cells[1]);
    }
    
    if (cells[2]) {
      cells[2].classList.add('card-cta');
      contentWrapper.appendChild(cells[2]);
    }
    
    // Reorder: content first, then image
    row.innerHTML = '';
    row.appendChild(contentWrapper);
    if (cells[0]) {
      row.appendChild(cells[0]);
    }
  });
}