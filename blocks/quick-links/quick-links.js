export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('quick-links-item');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('quick-links-icon');
    }
    
    if (cells[1]) {
      cells[1].classList.add('quick-links-link');
      const link = cells[1].querySelector('a');
      if (link) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    }
  });
}