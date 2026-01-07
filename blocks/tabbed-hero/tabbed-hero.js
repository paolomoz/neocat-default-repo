export default function decorate(block) {
  const rows = [...block.children];
  const tabsData = [];
  
  // Extract data from rows
  rows.forEach((row) => {
    const cells = [...row.children];
    const tabName = cells[0]?.textContent?.trim() || '';
    const heading = cells[1]?.textContent?.trim() || '';
    const image = cells[2]?.querySelector('img') || cells[2]?.querySelector('picture img');
    
    tabsData.push({
      tabName,
      heading,
      image: image ? image.cloneNode(true) : null
    });
  });
  
  // Clear original content
  block.innerHTML = '';
  
  // Create header section
  const header = document.createElement('div');
  header.className = 'tabbed-hero-header';
  
  // Create tabs container
  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'tabbed-hero-tabs';
  
  // Create heading element
  const headingEl = document.createElement('h2');
  headingEl.className = 'tabbed-hero-heading';
  headingEl.textContent = tabsData[0]?.heading || '';
  
  // Create panels container
  const panelsContainer = document.createElement('div');
  panelsContainer.className = 'tabbed-hero-panels';
  
  // Create tabs and panels
  tabsData.forEach((data, index) => {
    // Create tab button
    const tab = document.createElement('button');
    tab.className = 'tabbed-hero-tab';
    if (index === 0) tab.classList.add('active');
    tab.textContent = data.tabName;
    tab.setAttribute('data-tab-index', index);
    tabsContainer.appendChild(tab);
    
    // Create panel
    const panel = document.createElement('div');
    panel.className = 'tabbed-hero-panel';
    if (index === 0) panel.classList.add('active');
    panel.setAttribute('data-panel-index', index);
    
    if (data.image) {
      panel.appendChild(data.image);
    }
    panelsContainer.appendChild(panel);
  });
  
  // Add tab click handlers
  tabsContainer.addEventListener('click', (e) => {
    const clickedTab = e.target.closest('.tabbed-hero-tab');
    if (!clickedTab) return;
    
    const index = parseInt(clickedTab.getAttribute('data-tab-index'), 10);
    
    // Update active tab
    tabsContainer.querySelectorAll('.tabbed-hero-tab').forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
    
    // Update heading
    headingEl.textContent = tabsData[index]?.heading || '';
    
    // Update active panel
    panelsContainer.querySelectorAll('.tabbed-hero-panel').forEach((p, i) => {
      p.classList.toggle('active', i === index);
    });
  });
  
  // Assemble structure
  header.appendChild(tabsContainer);
  header.appendChild(headingEl);
  block.appendChild(header);
  block.appendChild(panelsContainer);
}