export default function decorate(block) {
  const rows = [...block.children];
  
  if (rows.length > 0) {
    const row = rows[0];
    const cells = [...row.children];
    
    row.classList.add('hero-banner-content');
    
    if (cells[0]) {
      cells[0].classList.add('hero-banner-background');
      const img = cells[0].querySelector('img');
      if (img) {
        img.classList.add('hero-banner-bg-image');
        img.setAttribute('alt', '');
      }
    }
    
    if (cells[1]) {
      cells[1].classList.add('hero-banner-text');
    }
  }
}