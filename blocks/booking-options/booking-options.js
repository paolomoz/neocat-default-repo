export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is the section title
  if (rows.length > 0) {
    const titleRow = rows[0];
    const titleCell = titleRow.children[0];
    if (titleCell) {
      titleCell.classList.add('section-title');
      titleRow.classList.add('title-row');
    }
  }
  
  // Create columns wrapper for remaining rows
  if (rows.length > 1) {
    const columnsWrapper = document.createElement('div');
    columnsWrapper.classList.add('columns-wrapper');
    
    rows.slice(1).forEach((row) => {
      const cells = [...row.children];
      row.classList.add('column');
      
      if (cells[0]) {
        cells[0].classList.add('column-title');
      }
      if (cells[1]) {
        cells[1].classList.add('column-description');
      }
      if (cells[2]) {
        cells[2].classList.add('column-cta');
      }
      
      // Remove empty cells
      cells.forEach((cell) => {
        if (!cell.textContent.trim() && !cell.querySelector('a, img')) {
          cell.remove();
        }
      });
      
      columnsWrapper.appendChild(row);
    });
    
    block.appendChild(columnsWrapper);
  }
}