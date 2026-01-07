export default function decorate(block) {
  const row = block.children[0];
  if (row) {
    row.classList.add('hero-banner-content');
    const cell = row.children[0];
    if (cell) {
      cell.classList.add('hero-banner-text');
    }
  }
  
  // Add classes to paragraphs for styling
  const paragraphs = block.querySelectorAll('p');
  if (paragraphs.length >= 1) {
    paragraphs[0].classList.add('hero-description');
  }
  if (paragraphs.length >= 2) {
    paragraphs[1].classList.add('hero-cta');
  }
}