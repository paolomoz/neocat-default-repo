export default function decorate(block) {
  const cards = [...block.children];
  block.innerHTML = '';
  
  cards.forEach((row) => {
    const cells = [...row.children];
    const card = document.createElement('div');
    card.className = 'card';
    
    // Get card theme from first cell
    const theme = cells[0]?.textContent?.trim().toLowerCase() || 'teal';
    card.classList.add(`card-${theme}`);
    
    // Get main image
    const mainImage = cells[1]?.querySelector('img');
    
    // Get title
    const title = cells[2]?.querySelector('h3');
    
    // Get description
    const description = cells[3]?.querySelector('p');
    
    // Get CTA link
    const ctaLink = cells[4]?.querySelector('a');
    
    // Get decorative image
    const decorativeImage = cells[5]?.querySelector('img');
    
    // Build card content
    const contentDiv = document.createElement('div');
    contentDiv.className = 'card-content';
    
    if (title) {
      const titleDiv = document.createElement('div');
      titleDiv.className = 'card-title';
      titleDiv.textContent = title.textContent;
      contentDiv.appendChild(titleDiv);
    }
    
    if (description) {
      const descDiv = document.createElement('div');
      descDiv.className = 'card-description';
      descDiv.textContent = description.textContent;
      contentDiv.appendChild(descDiv);
    }
    
    if (ctaLink) {
      const ctaDiv = document.createElement('div');
      ctaDiv.className = 'card-cta';
      const link = document.createElement('a');
      link.href = ctaLink.href;
      link.textContent = ctaLink.textContent;
      ctaDiv.appendChild(link);
      contentDiv.appendChild(ctaDiv);
    }
    
    card.appendChild(contentDiv);
    
    // Add main image
    if (mainImage) {
      const imageDiv = document.createElement('div');
      imageDiv.className = 'card-image';
      imageDiv.appendChild(mainImage.cloneNode(true));
      card.appendChild(imageDiv);
    }
    
    // Add decorative image if exists
    if (decorativeImage) {
      const decorDiv = document.createElement('div');
      decorDiv.className = 'card-decorative';
      decorDiv.appendChild(decorativeImage.cloneNode(true));
      card.appendChild(decorDiv);
    }
    
    block.appendChild(card);
  });
}