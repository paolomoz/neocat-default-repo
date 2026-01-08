export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    
    // Clear the row and rebuild with proper structure
    row.innerHTML = '';
    
    // Create card structure
    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    if (cells[0]) {
      cardImage.innerHTML = cells[0].innerHTML;
    }
    
    const cardOverlay = document.createElement('div');
    cardOverlay.classList.add('card-overlay');
    
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    
    const cardEyebrow = document.createElement('div');
    cardEyebrow.classList.add('card-eyebrow');
    if (cells[1]) {
      cardEyebrow.textContent = cells[1].textContent;
    }
    
    const cardHeading = document.createElement('div');
    cardHeading.classList.add('card-heading');
    if (cells[2]) {
      cardHeading.innerHTML = cells[2].innerHTML;
    }
    
    const cardDescription = document.createElement('div');
    cardDescription.classList.add('card-description');
    if (cells[3]) {
      cardDescription.innerHTML = cells[3].innerHTML;
    }
    
    const cardCta = document.createElement('div');
    cardCta.classList.add('card-cta');
    if (cells[4]) {
      cardCta.innerHTML = cells[4].innerHTML;
    }
    
    cardContent.appendChild(cardEyebrow);
    cardContent.appendChild(cardHeading);
    cardContent.appendChild(cardDescription);
    cardContent.appendChild(cardCta);
    
    row.appendChild(cardImage);
    row.appendChild(cardOverlay);
    row.appendChild(cardContent);
  });
}