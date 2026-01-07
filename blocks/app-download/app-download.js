export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('app-download-row');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('app-download-phone');
    }
    
    if (cells[1]) {
      cells[1].classList.add('app-download-content');
      
      // Find and wrap app store buttons
      const links = cells[1].querySelectorAll('a');
      if (links.length > 1) {
        // Check if buttons are already wrapped
        const existingWrapper = cells[1].querySelector('.app-store-buttons');
        if (!existingWrapper) {
          const buttonWrapper = document.createElement('div');
          buttonWrapper.classList.add('app-store-buttons');
          
          links.forEach((link) => {
            // Check if this link contains an app store image
            const img = link.querySelector('img');
            if (img) {
              buttonWrapper.appendChild(link.cloneNode(true));
              link.remove();
            }
          });
          
          if (buttonWrapper.children.length > 0) {
            cells[1].appendChild(buttonWrapper);
          }
        }
      }
    }
  });
}