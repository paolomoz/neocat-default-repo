export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('app-download-row');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('app-download-image');
    }
    
    if (cells[1]) {
      cells[1].classList.add('app-download-content');
      
      // Find the app buttons container and add class
      const links = cells[1].querySelectorAll('a');
      if (links.length > 1) {
        // Wrap the last paragraph and links in app-buttons container if not already
        const paragraphs = cells[1].querySelectorAll('p');
        paragraphs.forEach((p, index) => {
          if (index === paragraphs.length - 2) {
            p.classList.add('download-label');
          }
        });
        
        // Find the div containing the buttons or create wrapper
        const lastParagraph = paragraphs[paragraphs.length - 1];
        if (lastParagraph && lastParagraph.querySelectorAll('a').length > 0) {
          lastParagraph.classList.add('app-buttons');
        }
      }
    }
  });
}