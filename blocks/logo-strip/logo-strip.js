export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    row.classList.add('logo-item');
    
    if (cells[0]) {
      cells[0].classList.add('logo-image');
    }
    
    if (cells[1]) {
      cells[1].classList.add('logo-link');
      
      // Make the entire logo clickable if there's a link
      const link = cells[1].querySelector('a');
      if (link && cells[0]) {
        const img = cells[0].querySelector('img');
        if (img) {
          row.style.cursor = 'pointer';
          row.addEventListener('click', () => {
            link.click();
          });
        }
      }
    }
  });
}