export default function decorate(block) {
  const rows = [...block.children];
  
  // Create structured layout
  const container = document.createElement('div');
  container.className = 'footer-navigation-container';
  
  // Column 1: Avion Rewards
  const col1 = document.createElement('div');
  col1.className = 'footer-navigation-col';
  
  const heading1 = document.createElement('div');
  heading1.className = 'col-heading';
  heading1.textContent = 'Avion Rewards';
  
  const links1 = document.createElement('div');
  links1.className = 'col-links';
  
  // Column 2: RBC Royal Bank
  const col2 = document.createElement('div');
  col2.className = 'footer-navigation-col';
  
  const heading2 = document.createElement('div');
  heading2.className = 'col-heading';
  heading2.textContent = 'RBC Royal Bank';
  
  const links2 = document.createElement('div');
  links2.className = 'col-links';
  
  // Column 3: Social & Apps
  const col3 = document.createElement('div');
  col3.className = 'col-social';
  
  const socialIcons = document.createElement('div');
  socialIcons.className = 'social-icons';
  
  const appBadges = document.createElement('div');
  appBadges.className = 'app-badges';
  
  // Process rows
  rows.forEach((row, index) => {
    const cells = [...row.children];
    
    if (index === 0) {
      // First row contains headings - skip as we've hardcoded them
      return;
    }
    
    if (index >= 1 && index <= 3) {
      // Link rows
      if (cells[0]) {
        const link1 = cells[0].querySelector('a');
        if (link1) {
          link1.style.background = 'none';
          link1.style.border = 'none';
          link1.style.padding = '0';
          links1.appendChild(link1.cloneNode(true));
        }
      }
      
      if (cells[1]) {
        const link2 = cells[1].querySelector('a');
        if (link2) {
          link2.style.background = 'none';
          link2.style.border = 'none';
          link2.style.padding = '0';
          links2.appendChild(link2.cloneNode(true));
        }
      }
      
      if (cells[2]) {
        const imgs = cells[2].querySelectorAll('img');
        const links = cells[2].querySelectorAll('a');
        
        if (index === 1 && imgs.length > 0) {
          // Social icons row
          imgs.forEach(img => {
            socialIcons.appendChild(img.cloneNode(true));
          });
        } else if (links.length > 0) {
          // App badge rows
          links.forEach(link => {
            link.style.background = 'none';
            link.style.border = 'none';
            link.style.padding = '0';
            appBadges.appendChild(link.cloneNode(true));
          });
        } else if (imgs.length > 0) {
          imgs.forEach(img => {
            const wrapper = document.createElement('a');
            wrapper.href = '#';
            wrapper.className = 'app-badge';
            wrapper.style.background = 'none';
            wrapper.style.border = 'none';
            wrapper.style.padding = '0';
            wrapper.appendChild(img.cloneNode(true));
            appBadges.appendChild(wrapper);
          });
        }
      }
    }
  });
  
  col1.appendChild(heading1);
  col1.appendChild(links1);
  
  col2.appendChild(heading2);
  col2.appendChild(links2);
  
  col3.appendChild(socialIcons);
  col3.appendChild(appBadges);
  
  container.appendChild(col1);
  container.appendChild(col2);
  container.appendChild(col3);
  
  // Clear and rebuild
  block.innerHTML = '';
  block.appendChild(container);
  
  // Apply container styles
  container.style.display = 'grid';
  container.style.gridTemplateColumns = '1fr 1fr auto';
  container.style.gap = '80px';
  container.style.maxWidth = '1200px';
  container.style.margin = '0 auto';
  container.style.padding = '48px 24px';
}