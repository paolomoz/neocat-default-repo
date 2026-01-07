export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row, index) => {
    const cell = row.children[0];
    
    if (index === 0) {
      row.classList.add('column', 'column-avion');
    } else if (index === 1) {
      row.classList.add('column', 'column-rbc');
    } else if (index === 2) {
      row.classList.add('column', 'column-social');
      
      const socialIconsDiv = cell.querySelector('.social-icons');
      const appButtonsDiv = cell.querySelector('.app-buttons');
      
      if (socialIconsDiv) {
        socialIconsDiv.classList.add('social-icons');
      }
      
      if (appButtonsDiv) {
        appButtonsDiv.classList.add('app-buttons');
      }
    }
  });
}