export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;
  
  const cells = [...row.children];
  
  if (cells[0]) {
    cells[0].classList.add('phone-mockup');
  }
  
  if (cells[1]) {
    cells[1].classList.add('content-panel');
    
    const badgesContainer = cells[1].querySelector('.app-badges');
    if (badgesContainer) {
      const links = badgesContainer.querySelectorAll('a');
      links.forEach(link => {
        link.classList.add('app-badge-link');
      });
    }
  }
}