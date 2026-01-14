export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is the section title
  if (rows[0]) {
    const titleCell = rows[0].children[0];
    if (titleCell) {
      titleCell.classList.add('section-title');
    }
    rows[0].classList.add('title-row');
  }
  
  // Create columns wrapper for remaining rows
  const columnsWrapper = document.createElement('div');
  columnsWrapper.classList.add('columns-wrapper');
  
  // Process column rows (skip first row which is the title)
  rows.slice(1).forEach((row) => {
    const cells = [...row.children];
    
    const column = document.createElement('div');
    column.classList.add('column');
    
    // Cell 0: Column title
    if (cells[0] && cells[0].textContent.trim()) {
      const titleDiv = document.createElement('div');
      titleDiv.classList.add('column-title');
      titleDiv.textContent = cells[0].textContent.trim();
      column.appendChild(titleDiv);
    }
    
    // Cell 1: Column text/description
    if (cells[1] && cells[1].textContent.trim()) {
      const textDiv = document.createElement('div');
      textDiv.classList.add('column-text');
      textDiv.textContent = cells[1].textContent.trim();
      column.appendChild(textDiv);
    }
    
    // Cell 2: CTA link
    if (cells[2]) {
      const link = cells[2].querySelector('a');
      if (link) {
        const ctaDiv = document.createElement('div');
        ctaDiv.classList.add('column-cta');
        ctaDiv.appendChild(link.cloneNode(true));
        column.appendChild(ctaDiv);
      }
    }
    
    columnsWrapper.appendChild(column);
    row.remove();
  });
  
  block.appendChild(columnsWrapper);
}