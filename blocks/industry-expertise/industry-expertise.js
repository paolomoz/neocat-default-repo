export default function decorate(block) {
  const rows = [...block.children];
  
  // Clear block and rebuild structure
  block.innerHTML = '';
  
  // Row 0: Header text
  if (rows[0]) {
    const headerRow = document.createElement('div');
    headerRow.className = 'header-row';
    const headerText = document.createElement('p');
    headerText.className = 'header-text';
    headerText.textContent = rows[0].children[0]?.textContent?.trim() || '';
    headerRow.appendChild(headerText);
    block.appendChild(headerRow);
  }
  
  // Create collage wrapper
  const collageWrapper = document.createElement('div');
  collageWrapper.className = 'collage-wrapper';
  
  // Row 1: Top row images (4 images)
  if (rows[1]) {
    const topImages = [...rows[1].children];
    topImages.forEach((cell, index) => {
      const img = cell.querySelector('img');
      if (img) {
        img.className = 'collage-image';
        img.style.gridRow = '1';
        img.style.gridColumn = (index + 1).toString();
        collageWrapper.appendChild(img);
      }
    });
  }
  
  // Row 2: Bottom row images (2 larger images)
  if (rows[2]) {
    const bottomImages = [...rows[2].children];
    bottomImages.forEach((cell, index) => {
      const img = cell.querySelector('img');
      if (img) {
        img.className = 'collage-image-large';
        img.style.gridRow = '2';
        img.style.gridColumn = index === 0 ? '1 / 3' : '3 / 5';
        collageWrapper.appendChild(img);
      }
    });
  }
  
  block.appendChild(collageWrapper);
  
  // Row 3: Content card
  if (rows[3]) {
    const cardCells = [...rows[3].children];
    const contentCard = document.createElement('div');
    contentCard.className = 'content-card';
    
    // Heading
    if (cardCells[0]) {
      const heading = document.createElement('h2');
      heading.className = 'card-heading';
      heading.textContent = cardCells[0].textContent?.trim() || '';
      contentCard.appendChild(heading);
    }
    
    // Paragraph
    if (cardCells[1]) {
      const text = document.createElement('p');
      text.className = 'card-text';
      text.textContent = cardCells[1].textContent?.trim() || '';
      contentCard.appendChild(text);
    }
    
    // CTA
    if (cardCells[2]) {
      const ctaWrapper = document.createElement('div');
      ctaWrapper.className = 'card-cta';
      const link = cardCells[2].querySelector('a');
      if (link) {
        ctaWrapper.appendChild(link.cloneNode(true));
      }
      contentCard.appendChild(ctaWrapper);
    }
    
    collageWrapper.appendChild(contentCard);
  }
}