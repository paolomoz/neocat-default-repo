export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];
  
  // Create wrapper structure
  const wrapper = document.createElement('div');
  wrapper.className = 'testimonial-hero-wrapper';

  // Background image
  if (cells[0]) {
    const bgImg = cells[0].querySelector('img');
    if (bgImg) {
      bgImg.className = 'testimonial-hero-bg';
      wrapper.appendChild(bgImg);
    }
  }

  // Dark overlay
  const overlay = document.createElement('div');
  overlay.className = 'testimonial-hero-overlay';
  wrapper.appendChild(overlay);

  // Content container
  const content = document.createElement('div');
  content.className = 'testimonial-hero-content';

  // Logo
  if (cells[1]) {
    const logoDiv = document.createElement('div');
    logoDiv.className = 'testimonial-hero-logo';
    logoDiv.innerHTML = cells[1].innerHTML;
    content.appendChild(logoDiv);
  }

  // Quote
  if (cells[2]) {
    const quoteDiv = document.createElement('div');
    quoteDiv.className = 'testimonial-hero-quote';
    quoteDiv.textContent = '"' + cells[2].textContent.trim() + '"';
    content.appendChild(quoteDiv);
  }

  // Name
  if (cells[3]) {
    const nameDiv = document.createElement('div');
    nameDiv.className = 'testimonial-hero-name';
    nameDiv.textContent = cells[3].textContent.trim();
    content.appendChild(nameDiv);
  }

  // Title
  if (cells[4]) {
    const titleDiv = document.createElement('div');
    titleDiv.className = 'testimonial-hero-title';
    titleDiv.textContent = cells[4].textContent.trim();
    content.appendChild(titleDiv);
  }

  // CTA button
  if (cells[5]) {
    const ctaDiv = document.createElement('div');
    ctaDiv.className = 'testimonial-hero-cta';
    ctaDiv.innerHTML = cells[5].innerHTML;
    content.appendChild(ctaDiv);
  }

  wrapper.appendChild(content);

  // Clear and rebuild block
  block.textContent = '';
  block.appendChild(wrapper);
}