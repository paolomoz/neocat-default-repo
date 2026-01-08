export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('hero-business-cta-row');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('hero-business-cta-content');
    }
    
    if (cells[1]) {
      cells[1].classList.add('hero-business-cta-image');
    }
  });
}