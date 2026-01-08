export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;
  
  const cells = [...row.children];
  
  // Cell 0: Background image
  if (cells[0]) {
    cells[0].classList.add('testimonial-bg-wrapper');
    const bgImg = cells[0].querySelector('img');
    if (bgImg) {
      bgImg.classList.add('testimonial-banner-bg');
    }
  }
  
  // Cell 1: Company logo
  if (cells[1]) {
    cells[1].classList.add('testimonial-logo');
  }
  
  // Cell 2: Quote text
  if (cells[2]) {
    cells[2].classList.add('testimonial-quote');
  }
  
  // Cell 3: Author name
  if (cells[3]) {
    cells[3].classList.add('testimonial-name');
  }
  
  // Cell 4: Author title
  if (cells[4]) {
    cells[4].classList.add('testimonial-title');
  }
  
  // Cell 5: CTA button
  if (cells[5]) {
    cells[5].classList.add('testimonial-cta');
  }
}