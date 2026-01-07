export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];
  
  if (cells[0]) {
    cells[0].classList.add('app-download-phone');
  }
  
  if (cells[1]) {
    cells[1].classList.add('app-download-content');
    
    // Find and wrap app store buttons
    const links = cells[1].querySelectorAll('a');
    if (links.length > 0) {
      const buttonsWrapper = document.createElement('div');
      buttonsWrapper.className = 'app-buttons';
      
      links.forEach(link => {
        const img = link.querySelector('img');
        if (img) {
          buttonsWrapper.appendChild(link.cloneNode(true));
        }
      });
      
      // Find download label paragraph and insert buttons after it
      const paragraphs = cells[1].querySelectorAll('p');
      paragraphs.forEach(p => {
        if (p.textContent.toLowerCase().includes('download the app')) {
          p.classList.add('download-label');
          // Remove original links that are now in the wrapper
          links.forEach(link => {
            const img = link.querySelector('img');
            if (img && link.parentElement) {
              link.parentElement.removeChild(link);
            }
          });
          p.after(buttonsWrapper);
        }
      });
    }
  }
}