export default function decorate(block) {
  const rows = [...block.children];
  
  // Clear block and rebuild structure
  block.innerHTML = '';
  
  // Create header section from first row
  if (rows[0]) {
    const headerRow = rows[0];
    const cells = [...headerRow.children];
    const header = document.createElement('div');
    header.className = 'signup-section-header';
    
    const h2 = document.createElement('h2');
    h2.textContent = cells[0]?.textContent || '';
    header.appendChild(h2);
    
    const desc = document.createElement('p');
    desc.textContent = cells[1]?.textContent || '';
    header.appendChild(desc);
    
    block.appendChild(header);
  }
  
  // Create columns container
  const columnsContainer = document.createElement('div');
  columnsContainer.className = 'signup-section-columns';
  
  // RBC clients column (row 1)
  if (rows[1]) {
    const rbcRow = rows[1];
    const cells = [...rbcRow.children];
    const column = document.createElement('div');
    column.className = 'signup-section-column';
    
    const h3 = document.createElement('h3');
    h3.textContent = cells[0]?.textContent || '';
    column.appendChild(h3);
    
    const p = document.createElement('p');
    p.textContent = cells[1]?.textContent || '';
    column.appendChild(p);
    
    // Button
    const btnLink = cells[2]?.querySelector('a');
    if (btnLink) {
      btnLink.className = 'button-primary';
      column.appendChild(btnLink);
    }
    
    // Enroll text and link
    if (cells[3]) {
      const enrollDiv = document.createElement('p');
      enrollDiv.className = 'enroll-text';
      enrollDiv.innerHTML = cells[3].innerHTML;
      const enrollLink = enrollDiv.querySelector('a');
      if (enrollLink) {
        enrollLink.className = 'text-link';
      }
      column.appendChild(enrollDiv);
    }
    
    columnsContainer.appendChild(column);
  }
  
  // Everyone else column (row 2)
  if (rows[2]) {
    const otherRow = rows[2];
    const cells = [...otherRow.children];
    const column = document.createElement('div');
    column.className = 'signup-section-column';
    
    const h3 = document.createElement('h3');
    const titleText = cells[0]?.textContent?.replace('NEW!', '').trim() || '';
    h3.textContent = titleText;
    
    // Add NEW badge
    const badge = document.createElement('span');
    badge.className = 'new-badge';
    badge.textContent = 'NEW!';
    h3.appendChild(badge);
    column.appendChild(h3);
    
    const p = document.createElement('p');
    p.textContent = cells[1]?.textContent || '';
    column.appendChild(p);
    
    // Button
    const btnLink = cells[2]?.querySelector('a');
    if (btnLink) {
      btnLink.className = 'button-primary';
      column.appendChild(btnLink);
    }
    
    columnsContainer.appendChild(column);
  }
  
  block.appendChild(columnsContainer);
  
  // Footer with eligibility link (row 3)
  if (rows[3]) {
    const footerRow = rows[3];
    const cells = [...footerRow.children];
    const footer = document.createElement('div');
    footer.className = 'signup-section-footer';
    
    const link = cells[0]?.querySelector('a');
    if (link) {
      link.className = 'eligibility-link';
      footer.appendChild(link);
      
      const tooltip = document.createElement('span');
      tooltip.className = 'tooltip-icon';
      tooltip.textContent = 'ⓘ';
      footer.appendChild(tooltip);
    }
    
    block.appendChild(footer);
  }
}