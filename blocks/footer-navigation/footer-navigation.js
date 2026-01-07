export default function decorate(block) {
  const columns = [...block.children];
  
  // First column - Avion Rewards
  if (columns[0]) {
    columns[0].classList.add('nav-column', 'avion-rewards');
    const cells = [...columns[0].children];
    if (cells[0]) cells[0].classList.add('column-heading');
    cells.slice(1).forEach(cell => cell.classList.add('nav-link'));
  }
  
  // Second column - RBC Royal Bank
  if (columns[1]) {
    columns[1].classList.add('nav-column', 'rbc-bank');
    const cells = [...columns[1].children];
    if (cells[0]) cells[0].classList.add('column-heading');
    cells.slice(1).forEach(cell => cell.classList.add('nav-link'));
  }
  
  // Third column - Social and App Downloads
  if (columns[2]) {
    columns[2].classList.add('social-column');
    const cells = [...columns[2].children];
    if (cells[0]) cells[0].classList.add('social-icons');
    if (cells[1]) cells[1].classList.add('app-badges');
  }
}