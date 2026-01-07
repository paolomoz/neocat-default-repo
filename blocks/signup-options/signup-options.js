export default function decorate(block) {
  const rows = [...block.children];
  
  // Clear and rebuild structure
  block.innerHTML = '';
  
  // Process header row (first row)
  if (rows[0]) {
    const headerRow = document.createElement('div');
    headerRow.className = 'header-row';
    
    const cells = [...rows[0].children];
    
    if (cells[0]) {
      const title = document.createElement('h2');
      title.className = 'section-title';
      title.textContent = cells[0].textContent.trim();
      headerRow.appendChild(title);
    }
    
    if (cells[1]) {
      const intro = document.createElement('p');
      intro.className = 'section-intro';
      intro.textContent = cells[1].textContent.trim();
      headerRow.appendChild(intro);
    }
    
    block.appendChild(headerRow);
  }
  
  // Create options container
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'options-container';
  
  // Process option rows (rows 1 and 2)
  [rows[1], rows[2]].forEach((row) => {
    if (!row) return;
    
    const cells = [...row.children];
    const cardType = cells[0]?.textContent.trim();
    
    if (cardType === 'rbc-client' || cardType === 'everyone-else') {
      const card = document.createElement('div');
      card.className = `option-card ${cardType}`;
      
      // Title
      if (cells[1]) {
        const titleDiv = document.createElement('h3');
        titleDiv.className = 'card-title';
        titleDiv.innerHTML = cells[1].innerHTML;
        card.appendChild(titleDiv);
      }
      
      // Description
      if (cells[2]) {
        const descDiv = document.createElement('p');
        descDiv.className = 'card-description';
        descDiv.textContent = cells[2].textContent.trim();
        card.appendChild(descDiv);
      }
      
      // CTA Button
      if (cells[3]) {
        const ctaDiv = document.createElement('div');
        ctaDiv.className = 'cta-button';
        ctaDiv.innerHTML = cells[3].innerHTML;
        card.appendChild(ctaDiv);
      }
      
      // Secondary link
      if (cells[4] && cells[4].textContent.trim()) {
        const secondaryDiv = document.createElement('div');
        secondaryDiv.className = 'secondary-link';
        secondaryDiv.innerHTML = cells[4].innerHTML;
        card.appendChild(secondaryDiv);
      }
      
      optionsContainer.appendChild(card);
    }
  });
  
  block.appendChild(optionsContainer);
  
  // Process eligibility row (last row)
  if (rows[3]) {
    const cells = [...rows[3].children];
    const rowType = cells[0]?.textContent.trim();
    
    if (rowType === 'eligibility') {
      const eligibilityRow = document.createElement('div');
      eligibilityRow.className = 'eligibility-row';
      
      if (cells[1]) {
        const linkWrapper = document.createElement('span');
        linkWrapper.innerHTML = cells[1].innerHTML;
        
        const infoIcon = document.createElement('span');
        infoIcon.className = 'info-icon';
        infoIcon.textContent = 'i';
        infoIcon.setAttribute('aria-label', 'More information');
        
        eligibilityRow.appendChild(linkWrapper);
        eligibilityRow.appendChild(infoIcon);
      }
      
      block.appendChild(eligibilityRow);
    }
  }
}