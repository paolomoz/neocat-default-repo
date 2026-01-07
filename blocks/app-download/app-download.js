export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    // First cell contains the phone image
    if (cells[0]) {
      cells[0].classList.add('app-download-image');
    }
    
    // Second cell contains the text content
    if (cells[1]) {
      cells[1].classList.add('app-download-content');
      
      // Find and style the download label
      const paragraphs = cells[1].querySelectorAll('p');
      paragraphs.forEach((p) => {
        if (p.textContent.trim() === 'Download the app') {
          p.classList.add('app-download-label');
        }
        // Find the buttons container
        const links = p.querySelectorAll('a');
        if (links.length > 1) {
          p.classList.add('app-download-buttons');
        }
      });
    }
  });
}