export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    row.classList.add('banner-content');
    
    if (cells[0]) {
      cells[0].classList.add('banner-logo');
    }
    
    if (cells[1]) {
      cells[1].classList.add('banner-heading');
    }
    
    if (cells[2]) {
      cells[2].classList.add('banner-description');
    }
    
    if (cells[3]) {
      cells[3].classList.add('banner-cta');
    }
  });
}