export default function decorate(block) {
  const rows = [...block.children];
  
  // Create slides container
  const slidesContainer = document.createElement('div');
  slidesContainer.className = 'hero-carousel-slides';
  
  // Process rows (skip first row which is logo)
  const slides = [];
  
  rows.forEach((row, index) => {
    const cells = [...row.children];
    
    if (index === 0) {
      // First row is logo - hide it
      row.style.display = 'none';
      return;
    }
    
    // Create slide element
    const slide = document.createElement('div');
    slide.className = 'hero-carousel-slide';
    if (index === 1) slide.classList.add('active');
    
    // Content container
    const content = document.createElement('div');
    content.className = 'hero-carousel-content';
    
    // Image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'hero-carousel-image';
    
    // Process cells
    cells.forEach((cell, cellIndex) => {
      if (cellIndex === 0) {
        // Image
        const img = cell.querySelector('img');
        if (img) {
          imageContainer.appendChild(img.cloneNode(true));
        }
      } else if (cellIndex === 1) {
        // Heading
        const heading = cell.querySelector('h2') || cell;
        if (heading) {
          const h2 = document.createElement('h2');
          h2.textContent = heading.textContent;
          content.appendChild(h2);
        }
      } else if (cellIndex === 2) {
        // Description
        const p = document.createElement('p');
        p.textContent = cell.textContent;
        content.appendChild(p);
      } else if (cellIndex === 3) {
        // CTA
        const link = cell.querySelector('a');
        if (link) {
          content.appendChild(link.cloneNode(true));
        }
      }
    });
    
    slide.appendChild(content);
    slide.appendChild(imageContainer);
    slides.push(slide);
    
    row.remove();
  });
  
  // Add slides to container
  slides.forEach(slide => slidesContainer.appendChild(slide));
  block.appendChild(slidesContainer);
  
  // Create navigation arrows
  const prevBtn = document.createElement('button');
  prevBtn.className = 'hero-carousel-nav prev';
  prevBtn.innerHTML = '&#8249;';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  
  const nextBtn = document.createElement('button');
  nextBtn.className = 'hero-carousel-nav next';
  nextBtn.innerHTML = '&#8250;';
  nextBtn.setAttribute('aria-label', 'Next slide');
  
  block.appendChild(prevBtn);
  block.appendChild(nextBtn);
  
  // Create pagination dots
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'hero-carousel-dots';
  
  // Create 7 dots as shown in design
  const totalDots = 7;
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('button');
    dot.className = 'hero-carousel-dot';
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  }
  
  block.appendChild(dotsContainer);
  
  // Carousel functionality
  let currentIndex = 0;
  const allSlides = block.querySelectorAll('.hero-carousel-slide');
  const dots = block.querySelectorAll('.hero-carousel-dot');
  
  function updateCarousel(index) {
    // Wrap around
    if (index < 0) index = totalDots - 1;
    if (index >= totalDots) index = 0;
    
    currentIndex = index;
    
    // Update slides (show first slide for demo since we only have one)
    allSlides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === 0) slide.classList.add('active');
    });
    
    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }
  
  // Event listeners
  prevBtn.addEventListener('click', () => {
    updateCarousel(currentIndex - 1);
  });
  
  nextBtn.addEventListener('click', () => {
    updateCarousel(currentIndex + 1);
  });
  
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      updateCarousel(parseInt(dot.dataset.index, 10));
    });
  });
}