export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];
  
  // Clear the row and rebuild structure
  row.innerHTML = '';
  row.style.cssText = '';
  
  // Create background wrapper
  const bgWrapper = document.createElement('div');
  bgWrapper.className = 'testimonial-hero-bg-wrapper';
  
  // Background image
  if (cells[0]) {
    const bgImg = cells[0].querySelector('img');
    if (bgImg) {
      bgImg.className = 'testimonial-hero-bg';
      bgWrapper.appendChild(bgImg);
    }
  }
  
  // Dark overlay
  const overlay = document.createElement('div');
  overlay.className = 'testimonial-hero-overlay';
  bgWrapper.appendChild(overlay);
  
  row.appendChild(bgWrapper);
  
  // Create content container
  const content = document.createElement('div');
  content.className = 'testimonial-hero-content';
  
  // Logo
  if (cells[1]) {
    const logoWrapper = document.createElement('div');
    logoWrapper.className = 'testimonial-hero-logo';
    logoWrapper.innerHTML = cells[1].innerHTML;
    content.appendChild(logoWrapper);
  }
  
  // Quote
  if (cells[2]) {
    const quote = document.createElement('p');
    quote.className = 'testimonial-hero-quote';
    quote.textContent = cells[2].textContent.trim();
    content.appendChild(quote);
  }
  
  // Name
  if (cells[3]) {
    const name = document.createElement('p');
    name.className = 'testimonial-hero-name';
    name.textContent = cells[3].textContent.trim();
    content.appendChild(name);
  }
  
  // Title
  if (cells[4]) {
    const title = document.createElement('p');
    title.className = 'testimonial-hero-title';
    title.textContent = cells[4].textContent.trim();
    content.appendChild(title);
  }
  
  // CTA
  if (cells[5]) {
    const ctaWrapper = document.createElement('div');
    ctaWrapper.className = 'testimonial-hero-cta';
    ctaWrapper.innerHTML = cells[5].innerHTML;
    content.appendChild(ctaWrapper);
  }
  
  row.appendChild(content);
}