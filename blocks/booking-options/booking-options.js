export default function decorate(block) {
  const rows = [...block.children];
  
  // Create wrapper for grid layout
  const wrapper = document.createElement('div');
  wrapper.className = 'booking-options-content';
  
  rows.forEach((row, index) => {
    const cells = [...row.children];
    
    if (index === 0) {
      // First row is the section heading
      row.className = 'booking-options-header';
      if (cells[0]) {
        cells[0].className = 'booking-options-heading';
        const headingText = cells[0].textContent.trim();
        cells[0].innerHTML = `<h2>${headingText}</h2>`;
      }
      // Remove empty cells
      cells.slice(1).forEach(cell => cell.remove());
    } else {
      // Content columns
      row.className = 'booking-options-column';
      
      if (cells[0]) {
        cells[0].className = 'booking-options-column-title';
        const titleText = cells[0].textContent.trim();
        cells[0].innerHTML = `<h3>${titleText}</h3>`;
      }
      
      if (cells[1]) {
        cells[1].className = 'booking-options-description';
        const descText = cells[1].textContent.trim();
        cells[1].innerHTML = `<p>${descText}</p>`;
      }
      
      if (cells[2]) {
        cells[2].className = 'booking-options-cta';
      }
      
      // Remove empty cells
      if (cells[3]) cells[3].remove();
    }
    
    wrapper.appendChild(row);
  });
  
  block.innerHTML = '';
  block.appendChild(wrapper);
}