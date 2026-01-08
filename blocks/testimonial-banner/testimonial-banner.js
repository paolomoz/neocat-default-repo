export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];
  
  // Cell 0: Background image
  if (cells[0]) {
    cells[0].classList.add('testimonial-banner-bg');
    const bgImg = cells[0].querySelector('img');
    if (bgImg) {
      bgImg.classList.add('testimonial-banner-bg');
      // Move image to be direct child of row for absolute positioning
      row.insertBefore(bgImg, row.firstChild);
      cells[0].remove();
    }
  }

  // Re-index cells after modification
  const remainingCells = [...row.children].filter(child => child.tagName === 'DIV');

  // Cell 1: Logo
  if (remainingCells[0]) {
    remainingCells[0].classList.add('testimonial-banner-logo');
  }

  // Cell 2: Quote
  if (remainingCells[1]) {
    remainingCells[1].classList.add('testimonial-banner-quote');
  }

  // Cell 3: Name
  if (remainingCells[2]) {
    remainingCells[2].classList.add('testimonial-banner-name');
  }

  // Cell 4: Title
  if (remainingCells[3]) {
    remainingCells[3].classList.add('testimonial-banner-title');
  }

  // Cell 5: CTA
  if (remainingCells[4]) {
    remainingCells[4].classList.add('testimonial-banner-cta');
  }
}