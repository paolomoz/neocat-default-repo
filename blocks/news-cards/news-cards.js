export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    row.classList.add('news-card');
    
    if (cells[0]) {
      cells[0].classList.add('news-cards-image');
    }
    
    if (cells[1]) {
      cells[1].classList.add('news-cards-title');
    }
    
    if (cells[2]) {
      cells[2].classList.add('news-cards-date');
    }
    
    if (cells[3]) {
      cells[3].classList.add('news-cards-excerpt');
    }
    
    if (cells[4]) {
      cells[4].classList.add('news-cards-link');
    }
  });
}