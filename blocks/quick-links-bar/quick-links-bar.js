export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('quick-links-bar-item');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('quick-links-bar-icon');
    }
    
    if (cells[1]) {
      cells[1].classList.add('quick-links-bar-link');
    }
  });
}