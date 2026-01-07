export default function decorate(block) {
  block.classList.add('info-cards');
  
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    row.classList.add('info-cards-item');
    
    if (cells[0]) {
      cells[0].classList.add('info-cards-icon');
    }
    if (cells[1]) {
      cells[1].classList.add('info-cards-title');
    }
    if (cells[2]) {
      cells[2].classList.add('info-cards-description');
    }
  });
}