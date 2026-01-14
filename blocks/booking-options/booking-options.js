export default function decorate(block) {
  const rows = [...block.children];
  
  // Clear and rebuild
  block.innerHTML = '';
  
  // First row is the section header
  if (rows.length > 0) {
    const headerRow = rows[0];
    const headerText = headerRow.children[0]?.textContent?.trim() || '';
    
    if (headerText) {
      const header = document.createElement('div');
      header.className = 'booking-options-header';
      header.innerHTML = `<h2 class="booking-options-title">${headerText}</h2>`;
      block.appendChild(header);
    }
  }
  
  // Create columns container
  const columnsContainer = document.createElement('div');
  columnsContainer.className = 'booking-options-columns';
  
  // Process remaining rows as columns
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const cells = [...row.children];
    
    const column = document.createElement('div');
    column.className = 'booking-options-column';
    
    // Cell 0: Title
    const title = cells[0]?.textContent?.trim() || '';
    if (title) {
      const titleEl = document.createElement('h3');
      titleEl.className = 'booking-options-column-title';
      titleEl.textContent = title;
      column.appendChild(titleEl);
    }
    
    // Cell 1: Description
    const description = cells[1]?.textContent?.trim() || '';
    if (description) {
      const textEl = document.createElement('p');
      textEl.className = 'booking-options-column-text';
      textEl.textContent = description;
      column.appendChild(textEl);
    }
    
    // Cell 2: CTA Link
    const ctaCell = cells[2];
    if (ctaCell) {
      const link = ctaCell.querySelector('a');
      if (link) {
        const ctaEl = document.createElement('div');
        ctaEl.className = 'booking-options-column-cta';
        ctaEl.appendChild(link.cloneNode(true));
        column.appendChild(ctaEl);
      }
    }
    
    columnsContainer.appendChild(column);
  }
  
  block.appendChild(columnsContainer);
}