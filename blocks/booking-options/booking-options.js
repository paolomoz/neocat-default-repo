export default function decorate(block) {
  const rows = [...block.children];
  
  // Clear the block
  block.innerHTML = '';
  
  // First row is the header
  if (rows.length > 0) {
    const headerRow = rows[0];
    const headerText = headerRow.children[0]?.textContent?.trim() || '';
    
    if (headerText) {
      const headerDiv = document.createElement('div');
      headerDiv.className = 'booking-options-header';
      headerDiv.innerHTML = `<h2>${headerText}</h2>`;
      block.appendChild(headerDiv);
    }
  }
  
  // Create grid container for the remaining items
  const gridDiv = document.createElement('div');
  gridDiv.className = 'booking-options-grid';
  
  // Process remaining rows as items
  rows.slice(1).forEach((row) => {
    const cells = [...row.children];
    const title = cells[0]?.textContent?.trim() || '';
    const description = cells[1]?.textContent?.trim() || '';
    const linkEl = cells[2]?.querySelector('a');
    
    if (title) {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'booking-options-item';
      
      let itemHTML = `<h3 class="booking-options-item-title">${title}</h3>`;
      
      if (description) {
        itemHTML += `<p class="booking-options-item-description">${description}</p>`;
      }
      
      if (linkEl) {
        const linkText = linkEl.textContent?.trim() || '';
        const linkHref = linkEl.getAttribute('href') || '#';
        itemHTML += `<div class="booking-options-item-cta"><a href="${linkHref}">${linkText}</a></div>`;
      }
      
      itemDiv.innerHTML = itemHTML;
      gridDiv.appendChild(itemDiv);
    }
  });
  
  block.appendChild(gridDiv);
}