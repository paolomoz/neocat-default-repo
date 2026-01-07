export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    row.classList.add('info-card');
    
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