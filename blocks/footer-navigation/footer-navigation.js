export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row, index) => {
    const cell = row.children[0];
    
    if (index === 0) {
      row.classList.add('footer-navigation-column', 'footer-navigation-avion');
    } else if (index === 1) {
      row.classList.add('footer-navigation-column', 'footer-navigation-rbc');
    } else if (index === 2) {
      row.classList.add('footer-navigation-column', 'footer-navigation-social');
    }
    
    if (cell) {
      cell.classList.add('footer-navigation-content');
      
      const heading = cell.querySelector('h3');
      if (heading) {
        heading.classList.add('footer-navigation-heading');
      }
      
      const list = cell.querySelector('ul');
      if (list) {
        list.classList.add('footer-navigation-links');
      }
      
      const socialDiv = cell.querySelector('.social-icons');
      if (socialDiv) {
        socialDiv.classList.add('footer-navigation-social-icons');
      }
      
      const appDiv = cell.querySelector('.app-buttons');
      if (appDiv) {
        appDiv.classList.add('footer-navigation-app-buttons');
      }
    }
  });
}