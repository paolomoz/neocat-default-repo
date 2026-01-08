export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('service-card');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('service-card-image');
    }
    
    if (cells[1]) {
      cells[1].classList.add('service-card-title');
    }
    
    if (cells[2]) {
      cells[2].classList.add('service-card-description');
    }
  });
}