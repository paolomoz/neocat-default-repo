export default function decorate(block) {
  const rows = [...block.children];
  
  if (rows.length > 0) {
    const row = rows[0];
    const cells = [...row.children];
    
    row.classList.add('app-download-row');
    
    // First cell: phone mockup with QR code
    if (cells[0]) {
      cells[0].classList.add('app-download-phone');
    }
    
    // Second cell: text content and buttons
    if (cells[1]) {
      cells[1].classList.add('app-download-content');
      
      // Find and style the app buttons container
      const appButtons = cells[1].querySelector('.app-buttons');
      if (appButtons) {
        const links = appButtons.querySelectorAll('a');
        links.forEach((link) => {
          link.classList.add('app-store-btn');
        });
      }
    }
  }
}