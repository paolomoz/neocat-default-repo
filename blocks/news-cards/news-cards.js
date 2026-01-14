export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('news-cards-item');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('news-cards-image');
    }
    
    if (cells[1]) {
      cells[1].classList.add('news-cards-title');
    }
    
    if (cells[2]) {
      cells[2].classList.add('news-cards-date');
      const p = cells[2].querySelector('p');
      if (p) {
        p.classList.add('date');
      }
    }
    
    if (cells[3]) {
      cells[3].classList.add('news-cards-description');
    }
    
    if (cells[4]) {
      cells[4].classList.add('news-cards-cta');
    }
  });
}