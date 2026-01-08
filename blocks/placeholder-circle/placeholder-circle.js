export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('circle-container');
      
      // Ensure the circle element exists
      let circleEl = cells[0].querySelector('.circle-element');
      if (!circleEl) {
        circleEl = document.createElement('div');
        circleEl.classList.add('circle-element');
        cells[0].appendChild(circleEl);
      }
    }
  });
}