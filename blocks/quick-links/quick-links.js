export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    row.classList.add('quick-links-item');
    
    if (cells[0]) {
      cells[0].classList.add('quick-links-icon');
    }
    
    if (cells[1]) {
      cells[1].classList.add('quick-links-link');
    }
  });
}