export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is the section heading
  const headingRow = rows[0];
  const headingCell = headingRow.children[0];
  
  // Create section heading
  const sectionHeading = document.createElement('h2');
  sectionHeading.className = 'booking-options-section-heading';
  sectionHeading.textContent = headingCell.textContent.trim();
  
  // Create wrapper for cards
  const wrapper = document.createElement('div');
  wrapper.className = 'booking-options-wrapper';
  
  // Process remaining rows as cards
  rows.slice(1).forEach((row) => {
    const cells = [...row.children];
    
    const card = document.createElement('div');
    card.className = 'booking-options-card';
    
    // Title (cell 0)
    if (cells[0]) {
      const title = document.createElement('h3');
      title.className = 'booking-options-card-title';
      title.textContent = cells[0].textContent.trim();
      card.appendChild(title);
    }
    
    // Description (cell 1)
    if (cells[1]) {
      const description = document.createElement('p');
      description.className = 'booking-options-card-description';
      description.textContent = cells[1].textContent.trim();
      card.appendChild(description);
    }
    
    // Link (cell 2)
    if (cells[2]) {
      const linkContainer = document.createElement('div');
      linkContainer.className = 'booking-options-card-link';
      const anchor = cells[2].querySelector('a');
      if (anchor) {
        linkContainer.appendChild(anchor.cloneNode(true));
      }
      card.appendChild(linkContainer);
    }
    
    wrapper.appendChild(card);
  });
  
  // Clear block and rebuild
  block.innerHTML = '';
  block.appendChild(sectionHeading);
  block.appendChild(wrapper);
}