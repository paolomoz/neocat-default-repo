export default function decorate(block) {
  const rows = [...block.children];
  
  // Create wrapper for grid layout
  const wrapper = document.createElement('div');
  wrapper.className = 'booking-options-wrapper';
  
  rows.forEach((row, index) => {
    const cells = [...row.children];
    
    if (index === 0) {
      // First row is the section title
      const sectionTitle = document.createElement('h2');
      sectionTitle.className = 'booking-options-section-title';
      sectionTitle.textContent = cells[0]?.textContent?.trim() || '';
      wrapper.appendChild(sectionTitle);
    } else {
      // Other rows are cards
      const card = document.createElement('div');
      card.className = 'booking-options-card';
      
      // Card title
      const title = document.createElement('h3');
      title.className = 'booking-options-card-title';
      title.textContent = cells[0]?.textContent?.trim() || '';
      card.appendChild(title);
      
      // Card description
      const description = document.createElement('p');
      description.className = 'booking-options-card-description';
      description.textContent = cells[1]?.textContent?.trim() || '';
      card.appendChild(description);
      
      // Card CTA
      if (cells[2]) {
        const ctaWrapper = document.createElement('div');
        ctaWrapper.className = 'booking-options-card-cta';
        const link = cells[2].querySelector('a');
        if (link) {
          const newLink = document.createElement('a');
          newLink.href = link.href;
          newLink.textContent = link.textContent.trim();
          ctaWrapper.appendChild(newLink);
        }
        card.appendChild(ctaWrapper);
      }
      
      wrapper.appendChild(card);
    }
  });
  
  // Clear and append new structure
  block.textContent = '';
  block.appendChild(wrapper);
}