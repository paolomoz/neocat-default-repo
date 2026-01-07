export default function decorate(block) {
  const items = [...block.children];
  const tabs = [];
  const slides = [];

  items.forEach((row, index) => {
    const cells = [...row.children];
    const tabText = cells[0]?.textContent?.trim() || '';
    const heading = cells[1]?.textContent?.trim() || '';
    const imageEl = cells[2]?.querySelector('img');

    tabs.push({
      text: tabText,
      index
    });

    slides.push({
      heading,
      image: imageEl ? imageEl.cloneNode(true) : null
    });

    row.classList.add('item');
  });

  // Create tabs container
  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'tabbed-hero-tabs';

  tabs.forEach((tab, index) => {
    const tabBtn = document.createElement('button');
    tabBtn.className = 'tabbed-hero-tab';
    if (index === 0) tabBtn.classList.add('active');
    tabBtn.textContent = tab.text;
    tabBtn.setAttribute('data-index', index);
    tabsContainer.appendChild(tabBtn);
  });

  // Create content container
  const contentContainer = document.createElement('div');
  contentContainer.className = 'tabbed-hero-content';

  const slidesWrapper = document.createElement('div');
  slidesWrapper.className = 'tabbed-hero-slides';

  slides.forEach((slide, index) => {
    const slideEl = document.createElement('div');
    slideEl.className = 'tabbed-hero-slide';
    if (index === 0) slideEl.classList.add('active');

    const header = document.createElement('div');
    header.className = 'tabbed-hero-header';

    const headingEl = document.createElement('h2');
    headingEl.className = 'tabbed-hero-heading';
    headingEl.textContent = slide.heading;
    header.appendChild(headingEl);

    slideEl.appendChild(header);

    if (slide.image) {
      const imageContainer = document.createElement('div');
      imageContainer.className = 'tabbed-hero-image-container';
      imageContainer.appendChild(slide.image);
      slideEl.appendChild(imageContainer);
    }

    slidesWrapper.appendChild(slideEl);
  });

  contentContainer.appendChild(slidesWrapper);

  // Insert new structure
  block.insertBefore(tabsContainer, block.firstChild);
  block.appendChild(contentContainer);

  // Track current slide
  let currentIndex = 0;

  // Tab click handler
  const tabButtons = tabsContainer.querySelectorAll('.tabbed-hero-tab');

  function goToSlide(index) {
    currentIndex = index;
    slidesWrapper.style.transform = `translateX(-${index * 100}%)`;

    tabButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.getAttribute('data-index'), 10);
      goToSlide(index);
    });
  });
}