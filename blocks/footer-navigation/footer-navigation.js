export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row, index) => {
    const cells = [...row.children];
    
    if (index === 0) {
      row.classList.add('footer-navigation-column', 'footer-navigation-avion');
    } else if (index === 1) {
      row.classList.add('footer-navigation-column', 'footer-navigation-rbc');
    } else if (index === 2) {
      row.classList.add('footer-navigation-column', 'footer-navigation-social');
    }
    
    cells.forEach((cell) => {
      cell.classList.add('footer-navigation-cell');
      
      const socialDiv = cell.querySelector('.social-icons');
      const appDiv = cell.querySelector('.app-badges');
      
      if (socialDiv) {
        socialDiv.querySelectorAll('a').forEach((link) => {
          link.classList.add('social-link');
        });
      }
      
      if (appDiv) {
        appDiv.querySelectorAll('a').forEach((link) => {
          link.classList.add('app-badge-link');
        });
      }
    });
  });
}