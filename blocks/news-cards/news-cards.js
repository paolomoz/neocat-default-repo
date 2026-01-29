export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    row.classList.add('news-card');
    
    if (cells[0]) {
      cells[0].classList.add('news-card-image');
    }
    if (cells[1]) {
      cells[1].classList.add('news-card-title');
    }
    if (cells[2]) {
      cells[2].classList.add('news-card-date');
      const p = cells[2].querySelector('p');
      if (p) p.classList.add('date');
    }
    if (cells[3]) {
      cells[3].classList.add('news-card-description');
    }
    if (cells[4]) {
      cells[4].classList.add('news-card-cta');
    }
  });
}