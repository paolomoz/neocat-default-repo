export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    row.classList.add('signup-option');
    
    if (cells[0]) {
      cells[0].classList.add('item-type');
    }
    if (cells[1]) {
      cells[1].classList.add('item-heading');
    }
    if (cells[2]) {
      cells[2].classList.add('item-description');
    }
    if (cells[3]) {
      cells[3].classList.add('item-cta');
      const link = cells[3].querySelector('a');
      if (link) {
        link.classList.add('button', 'primary');
      }
    }
    if (cells[4]) {
      cells[4].classList.add('item-secondary');
    }
  });
}