export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('logo-strip-item');
    
    const cells = [...row.children];
    if (cells[0]) {
      cells[0].classList.add('logo-strip-image');
      
      const img = cells[0].querySelector('img');
      if (img) {
        img.classList.add('logo-strip-logo');
      }
    }
  });
}