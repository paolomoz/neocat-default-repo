export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];

  // Cell 0: Background image
  if (cells[0]) {
    cells[0].classList.add('testimonial-hero-bg-wrapper');
    const bgImg = cells[0].querySelector('img');
    if (bgImg) {
      bgImg.classList.add('testimonial-hero-bg');
    }
  }

  // Cell 1: Logo
  if (cells[1]) {
    cells[1].classList.add('testimonial-hero-logo');
  }

  // Cell 2: Quote
  if (cells[2]) {
    cells[2].classList.add('testimonial-hero-quote');
  }

  // Cell 3: Name
  if (cells[3]) {
    cells[3].classList.add('testimonial-hero-name');
  }

  // Cell 4: Title
  if (cells[4]) {
    cells[4].classList.add('testimonial-hero-title');
  }

  // Cell 5: CTA
  if (cells[5]) {
    cells[5].classList.add('testimonial-hero-cta');
  }
}