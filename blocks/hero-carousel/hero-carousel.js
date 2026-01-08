export default function decorate(block) {
  const rows = [...block.children];
  const slides = [];
  
  // Process rows - first row is logo (hidden), rest are slides
  rows.forEach((row, index) => {
    const cells = [...row.children];
    
    if (index === 0) {
      // Logo row - keep hidden
      row.style.display = 'none';
      return;
    }
    
    // Create slide structure
    row.classList.add('hero-carousel-slide');
    if (index === 1) row.classList.add('active');
    
    const imageCell = cells[0];
    const headingCell = cells[1];
    const textCell = cells[2];
    const ctaCell = cells[3];
    
    // Create content wrapper
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('hero-carousel-content');
    
    if (headingCell) {
      contentWrapper.appendChild(headingCell.cloneNode(true));
    }
    if (textCell) {
      contentWrapper.appendChild(textCell.cloneNode(true));
    }
    if (ctaCell) {
      contentWrapper.appendChild(ctaCell.cloneNode(true));
    }
    
    // Create image wrapper
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('hero-carousel-image');
    if (imageCell) {
      imageWrapper.appendChild(imageCell.cloneNode(true));
    }
    
    // Clear and rebuild row
    row.innerHTML = '';
    row.appendChild(contentWrapper);
    row.appendChild(imageWrapper);
    
    slides.push(row);
  });
  
  // Create navigation arrows
  const prevBtn = document.createElement('button');
  prevBtn.classList.add('hero-carousel-nav', 'prev');
  prevBtn.innerHTML = '&#10094;';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  
  const nextBtn = document.createElement('button');
  nextBtn.classList.add('hero-carousel-nav', 'next');
  nextBtn.innerHTML = '&#10095;';
  nextBtn.setAttribute('aria-label', 'Next slide');
  
  // Create dots navigation
  const dotsContainer = document.createElement('div');
  dotsContainer.classList.add('hero-carousel-dots');
  
  // Create 7 dots as shown in the original
  const totalDots = 7;
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('button');
    dot.classList.add('hero-carousel-dot');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  }
  
  block.appendChild(prevBtn);
  block.appendChild(nextBtn);
  block.appendChild(dotsContainer);
  
  // Carousel functionality
  let currentIndex = 0;
  const dots = dotsContainer.querySelectorAll('.hero-carousel-dot');
  
  function updateSlide(newIndex) {
    // Handle wrap-around
    if (newIndex < 0) newIndex = totalDots - 1;
    if (newIndex >= totalDots) newIndex = 0;
    
    // Update slides (if we have them)
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === Math.min(newIndex, slides.length - 1)) {
        slide.classList.add('active');
      }
    });
    
    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === newIndex);
    });
    
    currentIndex = newIndex;
  }
  
  prevBtn.addEventListener('click', () => {
    updateSlide(currentIndex - 1);
  });
  
  nextBtn.addEventListener('click', () => {
    updateSlide(currentIndex + 1);
  });
  
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index, 10);
      updateSlide(index);
    });
  });
}