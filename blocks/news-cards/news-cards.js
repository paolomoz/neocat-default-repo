export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('news-card');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('news-card-image');
    }
    
    if (cells[1]) {
      cells[1].classList.add('news-card-title');
    }
    
    if (cells[2]) {
      cells[2].classList.add('news-card-content');
      const paragraphs = cells[2].querySelectorAll('p');
      if (paragraphs.length > 0) {
        paragraphs[0].classList.add('date');
      }
    }
    
    if (cells[3]) {
      cells[3].classList.add('news-card-cta');
    }
  });
}