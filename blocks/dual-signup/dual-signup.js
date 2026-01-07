export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row, index) => {
    row.classList.add('signup-card');
    
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('card-heading');
    }
    
    if (cells[1]) {
      cells[1].classList.add('card-description');
    }
    
    if (cells[2]) {
      cells[2].classList.add('card-cta');
    }
    
    if (cells[3]) {
      cells[3].classList.add('card-secondary');
    }
  });
}