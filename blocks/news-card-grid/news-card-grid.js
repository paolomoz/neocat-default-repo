export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    row.classList.add('card');
    
    if (cells[0]) {
      cells[0].classList.add('card-image');
    }
    if (cells[1]) {
      cells[1].classList.add('card-title');
    }
    if (cells[2]) {
      cells[2].classList.add('card-date');
    }
    if (cells[3]) {
      cells[3].classList.add('card-description');
    }
    if (cells[4]) {
      cells[4].classList.add('card-cta');
    }
  });
}