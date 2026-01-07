export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];
  
  if (cells[0]) {
    cells[0].classList.add('app-download-phone');
  }
  
  if (cells[1]) {
    cells[1].classList.add('app-download-content');
    
    // Find and style the download label and app buttons
    const paragraphs = cells[1].querySelectorAll('p');
    paragraphs.forEach((p, index) => {
      if (p.textContent.trim().toLowerCase().includes('download the app') && !p.querySelector('a')) {
        p.classList.add('download-label');
      }
      if (p.querySelector('a img')) {
        p.classList.add('app-buttons');
      }
    });
  }
}