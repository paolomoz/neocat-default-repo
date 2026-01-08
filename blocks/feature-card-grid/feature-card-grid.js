export default function decorate(block) {
  [...block.children].forEach((row, index) => {
    const cells = [...row.children];
    row.classList.add('card');
    
    // Cell 0: card type (for styling)
    if (cells[0]) {
      cells[0].classList.add('card-type');
    }
    
    // Cell 1: image
    if (cells[1]) {
      cells[1].classList.add('card-image');
    }
    
    // Cell 2: title
    if (cells[2]) {
      cells[2].classList.add('card-title');
    }
    
    // Cell 3: description
    if (cells[3]) {
      cells[3].classList.add('card-description');
    }
    
    // Cell 4: CTA
    if (cells[4]) {
      cells[4].classList.add('card-cta');
    }
  });
}