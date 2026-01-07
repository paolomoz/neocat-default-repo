export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];
  
  if (cells[0]) {
    cells[0].classList.add('app-download-image');
  }
  
  if (cells[1]) {
    cells[1].classList.add('app-download-content');
    
    // Find and style the app buttons container
    const links = cells[1].querySelectorAll('a');
    if (links.length >= 2) {
      // Create wrapper for app buttons if not already wrapped
      const lastP = cells[1].querySelector('p:last-of-type');
      if (lastP && lastP.textContent.includes('Download the app')) {
        lastP.classList.add('download-label');
      }
      
      // Find or create app-buttons container
      let buttonsContainer = cells[1].querySelector('.app-buttons');
      if (!buttonsContainer) {
        // Check if links are siblings and wrap them
        const linkParent = links[0].parentElement;
        if (linkParent && !linkParent.classList.contains('app-buttons')) {
          buttonsContainer = document.createElement('div');
          buttonsContainer.classList.add('app-buttons');
          links.forEach(link => {
            buttonsContainer.appendChild(link.cloneNode(true));
          });
          links.forEach(link => link.remove());
          cells[1].appendChild(buttonsContainer);
        }
      }
    }
  }
}