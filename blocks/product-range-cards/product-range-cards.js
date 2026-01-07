export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('product-range-cards-card');
    
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('product-range-cards-image');
    }
    
    if (cells[1]) {
      cells[1].classList.add('product-range-cards-title');
    }
    
    if (cells[2]) {
      cells[2].classList.add('product-range-cards-description');
    }
    
    if (cells[3]) {
      cells[3].classList.add('product-range-cards-cta');
    }
  });
}