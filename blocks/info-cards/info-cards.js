export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('info-card');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('info-card-icon');
    }
    if (cells[1]) {
      cells[1].classList.add('info-card-title');
    }
    if (cells[2]) {
      cells[2].classList.add('info-card-description');
    }
  });
}