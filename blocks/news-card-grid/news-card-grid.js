export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    row.classList.add('news-card');
    
    if (cells[0]) {
      cells[0].classList.add('news-card-image');
    }
    
    if (cells[1]) {
      cells[1].classList.add('news-card-title');
      const heading = cells[1].querySelector('h2');
      const link = cells[4]?.querySelector('a');
      if (heading && link) {
        const titleLink = document.createElement('a');
        titleLink.href = link.href;
        titleLink.textContent = heading.textContent;
        heading.textContent = '';
        heading.appendChild(titleLink);
      }
    }
    
    if (cells[2]) {
      cells[2].classList.add('news-card-date');
    }
    
    if (cells[3]) {
      cells[3].classList.add('news-card-description');
    }
    
    if (cells[4]) {
      cells[4].classList.add('news-card-link');
    }
  });
}