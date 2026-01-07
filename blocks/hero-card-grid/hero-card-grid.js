export default function decorate(block) {
  const rows = [...block.children];
  
  // Create hero section container
  const heroSection = document.createElement('div');
  heroSection.className = 'hero-section';
  
  // Create cards container
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cards-container';
  
  rows.forEach((row) => {
    const cells = [...row.children];
    const type = cells[0]?.textContent?.trim().toLowerCase();
    
    if (type === 'hero') {
      // Process hero row
      const heading = cells[1];
      const ctaCell = cells[2];
      const heartImg = cells[3];
      const stethoscopeImg = cells[4];
      
      if (heading) {
        heading.className = 'hero-heading';
        heroSection.appendChild(heading);
      }
      
      if (ctaCell) {
        const ctaLink = ctaCell.querySelector('a');
        if (ctaLink) {
          ctaLink.className = 'hero-cta';
          heroSection.appendChild(ctaLink);
        }
      }
      
      if (stethoscopeImg) {
        const img = stethoscopeImg.querySelector('img');
        if (img) {
          img.className = 'hero-stethoscope';
          heroSection.appendChild(img);
        }
      }
      
      if (heartImg) {
        const img = heartImg.querySelector('img');
        if (img) {
          img.className = 'hero-heart';
          heroSection.appendChild(img);
        }
      }
      
      row.remove();
    } else if (type === 'card') {
      // Process card row
      row.className = 'card-item';
      
      const imageCell = cells[1];
      const titleCell = cells[2];
      const linkCell = cells[3];
      
      // Remove type cell
      cells[0].remove();
      
      if (imageCell) {
        imageCell.className = 'card-image';
      }
      
      if (titleCell) {
        titleCell.className = 'card-title';
      }
      
      if (linkCell) {
        linkCell.className = 'card-link';
      }
      
      cardsContainer.appendChild(row);
    }
  });
  
  // Clear block and rebuild structure
  block.innerHTML = '';
  block.appendChild(heroSection);
  block.appendChild(cardsContainer);
}