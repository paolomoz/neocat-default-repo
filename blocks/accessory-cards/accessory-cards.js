export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('card');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('card-heading');
    }
    
    if (cells[1]) {
      cells[1].classList.add('card-cta');
      const link = cells[1].querySelector('a');
      if (link) {
        const wrapper = document.createElement('span');
        wrapper.classList.add('cta-wrapper');
        
        const arrowIcon = document.createElement('span');
        arrowIcon.classList.add('arrow-icon');
        arrowIcon.innerHTML = '→';
        
        const linkText = link.textContent;
        link.textContent = '';
        
        wrapper.appendChild(arrowIcon);
        wrapper.appendChild(document.createTextNode(linkText));
        link.appendChild(wrapper);
      }
    }
    
    if (cells[2]) {
      cells[2].classList.add('card-image');
    }
  });
}