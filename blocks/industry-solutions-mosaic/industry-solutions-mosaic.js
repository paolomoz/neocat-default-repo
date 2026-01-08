export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('industry-solutions-mosaic-row');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('industry-solutions-mosaic-content');
      
      const heading = cells[0].querySelector('h2');
      if (heading) {
        heading.classList.add('industry-solutions-mosaic-heading');
      }
      
      const paragraph = cells[0].querySelector('p');
      if (paragraph) {
        paragraph.classList.add('industry-solutions-mosaic-text');
      }
      
      const link = cells[0].querySelector('a');
      if (link) {
        link.classList.add('industry-solutions-mosaic-cta');
      }
    }
    
    if (cells[1]) {
      cells[1].classList.add('industry-solutions-mosaic-images');
      
      const img = cells[1].querySelector('img');
      if (img) {
        img.classList.add('mosaic-main');
      }
    }
  });
}