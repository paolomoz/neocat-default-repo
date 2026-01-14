export default function decorate(block) {
  const rows = [...block.children];
  
  // Clear the block
  block.innerHTML = '';
  
  // First row is the main header
  const headerRow = rows[0];
  const headerText = headerRow?.children[0]?.textContent?.trim() || '';
  
  // Create header section
  const headerSection = document.createElement('div');
  headerSection.className = 'booking-options-header';
  const h2 = document.createElement('h2');
  h2.textContent = headerText;
  headerSection.appendChild(h2);
  block.appendChild(headerSection);
  
  // Create grid for columns
  const grid = document.createElement('div');
  grid.className = 'booking-options-grid';
  
  // Process remaining rows as columns
  rows.slice(1).forEach((row) => {
    const cells = [...row.children];
    const column = document.createElement('div');
    column.className = 'booking-options-column';
    
    // Cell 0: Title
    const title = cells[0]?.textContent?.trim() || '';
    if (title) {
      const h3 = document.createElement('h3');
      h3.textContent = title;
      column.appendChild(h3);
    }
    
    // Cell 1: Description
    const description = cells[1]?.textContent?.trim() || '';
    if (description) {
      const p = document.createElement('p');
      p.textContent = description;
      column.appendChild(p);
    }
    
    // Cell 2: Link/CTA
    const linkCell = cells[2];
    if (linkCell) {
      const existingLink = linkCell.querySelector('a');
      if (existingLink) {
        column.appendChild(existingLink.cloneNode(true));
      }
    }
    
    grid.appendChild(column);
  });
  
  block.appendChild(grid);
}