export default function decorate(block) {
  const tabs = [...block.children];
  
  // Create tabs navigation
  const tabsNav = document.createElement('div');
  tabsNav.className = 'tabs-nav';
  
  // Create panels container
  const panelsContainer = document.createElement('div');
  panelsContainer.className = 'panels-container';
  
  tabs.forEach((row, index) => {
    const cells = [...row.children];
    row.classList.add('tab-item');
    
    // Get tab data
    const tabName = cells[0]?.textContent?.trim() || `Tab ${index + 1}`;
    const heading = cells[1]?.textContent?.trim() || '';
    const imageEl = cells[2]?.querySelector('img');
    
    // Create tab button
    const tabBtn = document.createElement('button');
    tabBtn.className = 'tab-btn';
    tabBtn.textContent = tabName;
    tabBtn.setAttribute('data-tab-index', index);
    if (index === 0) tabBtn.classList.add('active');
    tabsNav.appendChild(tabBtn);
    
    // Create panel
    const panel = document.createElement('div');
    panel.className = 'tab-panel';
    if (index === 0) panel.classList.add('active');
    panel.setAttribute('data-panel-index', index);
    
    // Add heading
    const headingEl = document.createElement('h2');
    headingEl.className = 'panel-heading';
    headingEl.textContent = heading;
    panel.appendChild(headingEl);
    
    // Add image
    if (imageEl) {
      const imageWrapper = document.createElement('div');
      imageWrapper.className = 'panel-image';
      const img = imageEl.cloneNode(true);
      imageWrapper.appendChild(img);
      panel.appendChild(imageWrapper);
    }
    
    panelsContainer.appendChild(panel);
  });
  
  // Clear block and add new structure
  block.innerHTML = '';
  block.appendChild(tabsNav);
  block.appendChild(panelsContainer);
  
  // Add tab click handlers
  const tabBtns = block.querySelectorAll('.tab-btn');
  const panels = block.querySelectorAll('.tab-panel');
  
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tabIndex = btn.getAttribute('data-tab-index');
      
      // Update active tab
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update active panel
      panels.forEach(p => p.classList.remove('active'));
      const activePanel = block.querySelector(`.tab-panel[data-panel-index="${tabIndex}"]`);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}