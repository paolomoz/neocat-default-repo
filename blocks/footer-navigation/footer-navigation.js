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
    }
  });
}