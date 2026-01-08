export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    row.classList.add('feature-cards-item');
    
    if (cells[0]) {
      cells[0].classList.add('feature-cards-type');
    }
    if (cells[1]) {
      cells[1].classList.add('feature-cards-title');
    }
    if (cells[2]) {
      cells[2].classList.add('feature-cards-description');
    }
    if (cells[3]) {
      cells[3].classList.add('feature-cards-cta');
    }
    if (cells[4]) {
      cells[4].classList.add('feature-cards-image');
    }
  });
}