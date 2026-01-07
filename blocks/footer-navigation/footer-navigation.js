export default function decorate(block) {
  const rows = [...block.children];
  
  // Find the row with navigation columns (the one with multiple cells)
  rows.forEach((row, index) => {
    const cells = [...row.children];
    
    if (index === 0) {
      // Header row (hidden visually but for accessibility)
      row.classList.add('footer-navigation-header');
    } else if (cells.length >= 4) {
      // Navigation columns row
      row.classList.add('footer-navigation-columns');
      cells.forEach((cell, cellIndex) => {
        cell.classList.add('footer-navigation-column');
        cell.classList.add(`footer-navigation-column-${cellIndex + 1}`);
      });
    } else if (cells.length === 1) {
      // Settings button row
      row.classList.add('footer-navigation-settings');
    }
  });
  
  // Ensure all links have proper styling (remove EDS button defaults)
  const links = block.querySelectorAll('a');
  links.forEach(link => {
    link.classList.add('footer-link');
  });
}