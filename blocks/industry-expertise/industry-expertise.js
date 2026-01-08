export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is the intro text
  if (rows[0]) {
    rows[0].classList.add('industry-expertise-intro');
  }
  
  // Create collage container
  const collageContainer = document.createElement('div');
  collageContainer.classList.add('industry-expertise-collage');
  
  // Second row contains top images (4 images)
  if (rows[1]) {
    rows[1].classList.add('industry-expertise-row-top');
    collageContainer.appendChild(rows[1]);
  }
  
  // Third row contains bottom images (2 images)
  if (rows[2]) {
    rows[2].classList.add('industry-expertise-row-bottom');
    collageContainer.appendChild(rows[2]);
  }
  
  // Fourth row is the card content
  let cardRow = rows[3];
  if (cardRow) {
    const cells = [...cardRow.children];
    
    // Create card element
    const card = document.createElement('div');
    card.classList.add('industry-expertise-card');
    
    // Heading
    if (cells[0]) {
      const heading = document.createElement('h2');
      heading.classList.add('industry-expertise-card-heading');
      heading.textContent = cells[0].textContent.trim();
      card.appendChild(heading);
    }
    
    // Description
    if (cells[1]) {
      const text = document.createElement('p');
      text.classList.add('industry-expertise-card-text');
      text.textContent = cells[1].textContent.trim();
      card.appendChild(text);
    }
    
    // CTA
    if (cells[2]) {
      const ctaWrapper = document.createElement('div');
      ctaWrapper.classList.add('industry-expertise-card-cta');
      const link = cells[2].querySelector('a');
      if (link) {
        ctaWrapper.appendChild(link.cloneNode(true));
      } else {
        ctaWrapper.innerHTML = cells[2].innerHTML;
      }
      card.appendChild(ctaWrapper);
    }
    
    collageContainer.appendChild(card);
    cardRow.remove();
  }
  
  // Insert collage after intro
  if (rows[0] && rows[0].nextSibling) {
    block.insertBefore(collageContainer, rows[0].nextSibling);
  } else {
    block.appendChild(collageContainer);
  }
  
  // Clean up moved rows that are now in collage
  rows.forEach((row, index) => {
    if (index > 0 && index < 3 && row.parentNode === block) {
      // Already moved to collage container
    }
  });
}