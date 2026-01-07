export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    row.classList.add('specialty-card');
    
    // Cell 0: Title
    if (cells[0]) {
      cells[0].classList.add('specialty-title');
    }
    
    // Cell 1: Provider type
    if (cells[1]) {
      cells[1].classList.add('specialty-provider');
    }
    
    // Cell 2: Icon
    if (cells[2]) {
      cells[2].classList.add('specialty-icon');
    }
    
    // Cell 3: Status
    if (cells[3]) {
      cells[3].classList.add('specialty-status');
      const statusText = cells[3].textContent.trim().toLowerCase();
      
      if (statusText.includes('přijímá') && !statusText.includes('nepřijímá')) {
        cells[3].classList.add('accepting');
      } else if (statusText.includes('nepřijímá')) {
        cells[3].classList.add('not-accepting');
      } else if (statusText.includes('bez objednání')) {
        cells[3].classList.add('no-appointment');
      }
    }
    
    // Cell 4: Link (hidden but available)
    if (cells[4]) {
      cells[4].classList.add('specialty-link');
    }
  });
}