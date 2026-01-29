export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('booking-options-item');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('booking-options-title');
    }
    if (cells[1]) {
      cells[1].classList.add('booking-options-description');
    }
    if (cells[2]) {
      cells[2].classList.add('booking-options-cta');
    }
  });
}