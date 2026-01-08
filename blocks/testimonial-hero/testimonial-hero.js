export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];
  
  // Create wrapper for positioning
  row.classList.add('testimonial-hero-content');
  
  // Background image
  if (cells[0]) {
    cells[0].classList.add('testimonial-hero-bg');
    const bgImg = cells[0].querySelector('img');
    if (bgImg) {
      bgImg.style.position = 'absolute';
      bgImg.style.top = '0';
      bgImg.style.left = '0';
      bgImg.style.width = '100%';
      bgImg.style.height = '100%';
      bgImg.style.objectFit = 'cover';
      bgImg.style.zIndex = '0';
    }
    // Create gradient overlay
    const overlay = document.createElement('div');
    overlay.classList.add('testimonial-hero-overlay');
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'linear-gradient(to right, rgba(30, 30, 30, 0.9) 0%, rgba(30, 30, 30, 0.75) 35%, rgba(30, 30, 30, 0.4) 60%, transparent 100%)';
    overlay.style.zIndex = '1';
    cells[0].appendChild(overlay);
  }
  
  // Company logo
  if (cells[1]) {
    cells[1].classList.add('testimonial-hero-logo');
  }
  
  // Quote text
  if (cells[2]) {
    cells[2].classList.add('testimonial-hero-quote');
  }
  
  // Attribution name
  if (cells[3]) {
    cells[3].classList.add('testimonial-hero-name');
  }
  
  // Attribution title
  if (cells[4]) {
    cells[4].classList.add('testimonial-hero-title');
  }
  
  // CTA button
  if (cells[5]) {
    cells[5].classList.add('testimonial-hero-cta');
  }
}