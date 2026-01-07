export default function decorate(block) {
  const rows = [...block.children];
  
  if (rows[0]) {
    rows[0].classList.add('footer-navigation-column', 'footer-navigation-avion');
    const cells = [...rows[0].children];
    if (cells[0]) cells[0].classList.add('footer-navigation-heading');
    cells.slice(1).forEach(cell => cell.classList.add('footer-navigation-link'));
  }
  
  if (rows[1]) {
    rows[1].classList.add('footer-navigation-column', 'footer-navigation-rbc');
    const cells = [...rows[1].children];
    if (cells[0]) cells[0].classList.add('footer-navigation-heading');
    cells.slice(1).forEach(cell => cell.classList.add('footer-navigation-link'));
  }
  
  if (rows[2]) {
    rows[2].classList.add('footer-navigation-column', 'footer-navigation-social');
    const cells = [...rows[2].children];
    if (cells[0]) cells[0].classList.add('footer-navigation-social-icons');
    if (cells[1]) cells[1].classList.add('footer-navigation-app-badges');
  }
}