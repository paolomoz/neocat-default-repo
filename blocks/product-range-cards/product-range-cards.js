export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('product-card');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('product-card-image');
    }
    
    if (cells[1]) {
      cells[1].classList.add('product-card-title');
    }
    
    if (cells[2]) {
      cells[2].classList.add('product-card-description');
    }
    
    if (cells[3]) {
      cells[3].classList.add('product-card-cta');
    }
  });
}