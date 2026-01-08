export default function decorate(block) {
  const rows = [...block.children];
  
  if (rows[0]) {
    rows[0].classList.add('industry-solutions-content');
    const cells = [...rows[0].children];
    if (cells[0]) cells[0].classList.add('industry-solutions-heading');
    if (cells[1]) cells[1].classList.add('industry-solutions-description');
    if (cells[2]) cells[2].classList.add('industry-solutions-cta');
  }
  
  rows.slice(1).forEach((row, index) => {
    row.classList.add('industry-solutions-image-row');
    row.classList.add(`industry-solutions-image-row-${index + 1}`);
    
    const cells = [...row.children];
    cells.forEach((cell, cellIndex) => {
      cell.classList.add('industry-solutions-image-cell');
      
      const img = cell.querySelector('img');
      if (img) {
        img.classList.add('industry-solutions-image');
      }
    });
  });
}