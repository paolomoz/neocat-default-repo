export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    row.classList.add('card');
    
    // First cell contains heading
    if (cells[0]) {
      cells[0].classList.add('card-heading');
    }
    
    // Second cell contains description
    if (cells[1]) {
      cells[1].classList.add('card-description');
    }
    
    // Third cell contains image
    if (cells[2]) {
      cells[2].classList.add('card-image');
    }
  });
}