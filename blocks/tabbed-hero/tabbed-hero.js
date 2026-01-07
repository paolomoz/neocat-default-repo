export default function decorate(block) {
  const rows = [...block.children];
  const tabsData = [];
  
  // Extract data from rows
  rows.forEach((row) => {
    const cells = [...row.children];
    const tabLabel = cells[0]?.textContent?.trim() || '';
    const heading = cells[1]?.textContent?.trim() || '';
    const image = cells[2]?.querySelector('img');
    const isActive = cells[3]?.textContent?.trim() === 'active';
    
    tabsData.push({
      label: tabLabel,
      heading: heading,
      image: image ? image.cloneNode(true) : null,
      isActive: isActive
    });
  });
  
  // Create wrapper structure
  const wrapper = document.createElement('div');
  wrapper.className = 'tabbed-hero-wrapper';
  
  // Create header section with black background
  const header = document.createElement('div');
  header.className = 'tabbed-hero-header';
  
  // Create tabs navigation
  const tabsNav = document.createElement('div');
  tabsNav.className = 'tabbed-hero-tabs';
  
  tabsData.forEach((tab, index) => {
    const tabButton = document.createElement('button');
    tabButton.className = 'tabbed-hero-tab';
    if (tab.isActive || (index === 0 && !tabsData.some(t => t.isActive))) {
      tabButton.classList.add('active');
    }
    tabButton.textContent = tab.label;
    tabButton.setAttribute('data-tab-index', index);
    tabsNav.appendChild(tabButton);
  });
  
  header.appendChild(tabsNav);
  
  // Create heading container
  const headingContainer = document.createElement('div');
  headingContainer.className = 'tabbed-hero-heading-container';
  
  // Create panels for each tab
  const panels = [];
  tabsData.forEach((tab, index) => {
    const panel = document.createElement('div');
    panel.className = 'tabbed-hero-panel';
    if (tab.isActive || (index === 0 && !tabsData.some(t => t.isActive))) {
      panel.classList.add('active');
    }
    panel.setAttribute('data-panel-index', index);
    
    // Format heading with mixed case
    const headingEl = document.createElement('h2');
    headingEl.className = 'tabbed-hero-heading';
    
    // Parse heading to apply mixed case styling
    const words = tab.heading.split(' ');
    const formattedWords = words.map((word, wordIndex) => {
      // Make certain words lowercase based on pattern
      if (word.toLowerCase() === 'fits,' || word.toLowerCase() === 'on,' || word.toLowerCase() === 'looks,') {
        return `<span>${word.toLowerCase()}</span>`;
      }
      return word.toUpperCase();
    });
    
    // Split into two lines
    const midPoint = Math.ceil(words.length / 2);
    const line1 = formattedWords.slice(0, midPoint).join(' ');
    const line2 = formattedWords.slice(midPoint).join(' ');
    headingEl.innerHTML = `${line1}<br>${line2}`;
    
    panel.appendChild(headingEl);
    panels.push(panel);
  });
  
  panels.forEach(panel => headingContainer.appendChild(panel));
  header.appendChild(headingContainer);
  wrapper.appendChild(header);
  
  // Create image panels
  const imageContainer = document.createElement('div');
  imageContainer.className = 'tabbed-hero-images';
  
  tabsData.forEach((tab, index) => {
    const imagePanel = document.createElement('div');
    imagePanel.className = 'tabbed-hero-panel tabbed-hero-image-container';
    if (tab.isActive || (index === 0 && !tabsData.some(t => t.isActive))) {
      imagePanel.classList.add('active');
    }
    imagePanel.setAttribute('data-image-index', index);
    
    if (tab.image) {
      imagePanel.appendChild(tab.image);
    }
    imageContainer.appendChild(imagePanel);
  });
  
  wrapper.appendChild(imageContainer);
  
  // Clear and append new structure
  block.innerHTML = '';
  block.appendChild(wrapper);
  
  // Add tab click handlers
  const tabButtons = block.querySelectorAll('.tabbed-hero-tab');
  const headingPanels = block.querySelectorAll('.tabbed-hero-heading-container .tabbed-hero-panel');
  const imagePanels = block.querySelectorAll('.tabbed-hero-image-container');
  
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetIndex = button.getAttribute('data-tab-index');
      
      // Update active tab
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Update active heading panel
      headingPanels.forEach(panel => panel.classList.remove('active'));
      const targetHeadingPanel = block.querySelector(`.tabbed-hero-heading-container .tabbed-hero-panel[data-panel-index="${targetIndex}"]`);
      if (targetHeadingPanel) {
        targetHeadingPanel.classList.add('active');
      }
      
      // Update active image panel
      imagePanels.forEach(panel => panel.classList.remove('active'));
      const targetImagePanel = block.querySelector(`.tabbed-hero-image-container[data-image-index="${targetIndex}"]`);
      if (targetImagePanel) {
        targetImagePanel.classList.add('active');
      }
    });
  });
}