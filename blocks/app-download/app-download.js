export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('app-download-content');
    
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('app-download-image');
    }
    
    if (cells[1]) {
      cells[1].classList.add('app-download-text');
      
      // Find and wrap app store buttons
      const links = cells[1].querySelectorAll('a');
      if (links.length > 0) {
        // Check if buttons container already exists
        let buttonsContainer = cells[1].querySelector('.app-buttons');
        if (!buttonsContainer) {
          buttonsContainer = document.createElement('div');
          buttonsContainer.classList.add('app-buttons');
          
          links.forEach((link) => {
            const img = link.querySelector('img');
            if (img) {
              buttonsContainer.appendChild(link);
            }
          });
          
          if (buttonsContainer.children.length > 0) {
            cells[1].appendChild(buttonsContainer);
          }
        }
      }
      
      // Find and style download label
      const paragraphs = cells[1].querySelectorAll('p');
      paragraphs.forEach((p) => {
        if (p.textContent.toLowerCase().includes('download the app')) {
          p.classList.add('download-label');
        }
      });
    }
  });
}