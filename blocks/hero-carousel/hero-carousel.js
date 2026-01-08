export default function decorate(block) {
  const slides = [...block.children];
  
  // Clear block and rebuild structure
  block.innerHTML = '';
  
  // Create wrapper for slides
  const wrapper = document.createElement('div');
  wrapper.className = 'hero-carousel-wrapper';
  
  slides.forEach((slide, index) => {
    const cells = [...slide.children];
    
    const slideEl = document.createElement('div');
    slideEl.className = 'hero-carousel-slide';
    if (index === 0) slideEl.classList.add('active');
    
    // Content section
    const content = document.createElement('div');
    content.className = 'hero-carousel-content';
    
    // Heading (cell 0)
    if (cells[0]) {
      const heading = document.createElement('h2');
      heading.className = 'hero-carousel-heading';
      heading.textContent = cells[0].textContent.trim();
      content.appendChild(heading);
    }
    
    // Subheading (cell 1)
    if (cells[1]) {
      const subheading = document.createElement('p');
      subheading.className = 'hero-carousel-subheading';
      subheading.textContent = cells[1].textContent.trim();
      content.appendChild(subheading);
    }
    
    // CTA (cell 2)
    if (cells[2]) {
      const link = cells[2].querySelector('a');
      if (link) {
        link.className = 'hero-carousel-cta';
        content.appendChild(link);
      }
    }
    
    slideEl.appendChild(content);
    
    // Image section (cell 3)
    if (cells[3]) {
      const imageContainer = document.createElement('div');
      imageContainer.className = 'hero-carousel-image-container';
      
      const img = cells[3].querySelector('img');
      if (img) {
        imageContainer.appendChild(img);
      }
      
      // Add decorative orange circle
      const decoration = document.createElement('div');
      decoration.className = 'hero-carousel-decoration';
      imageContainer.appendChild(decoration);
      
      slideEl.appendChild(imageContainer);
    }
    
    wrapper.appendChild(slideEl);
  });
  
  block.appendChild(wrapper);
  
  // Navigation arrows
  const prevBtn = document.createElement('button');
  prevBtn.className = 'hero-carousel-nav hero-carousel-nav-prev';
  prevBtn.innerHTML = '&#8249;';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  
  const nextBtn = document.createElement('button');
  nextBtn.className = 'hero-carousel-nav hero-carousel-nav-next';
  nextBtn.innerHTML = '&#8250;';
  nextBtn.setAttribute('aria-label', 'Next slide');
  
  block.appendChild(prevBtn);
  block.appendChild(nextBtn);
  
  // Pagination dots
  const pagination = document.createElement('div');
  pagination.className = 'hero-carousel-pagination';
  
  const slideEls = wrapper.querySelectorAll('.hero-carousel-slide');
  const totalSlides = slideEls.length;
  
  // Create 6 dots as shown in original (even if we have fewer slides)
  const dotsCount = Math.max(totalSlides, 6);
  for (let i = 0; i < dotsCount; i++) {
    const dot = document.createElement('button');
    dot.className = 'hero-carousel-dot';
    if (i === 4) dot.classList.add('active'); // 5th dot is active as shown
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.dataset.index = i;
    pagination.appendChild(dot);
  }
  
  block.appendChild(pagination);
  
  // Carousel functionality
  let currentIndex = 0;
  
  function updateCarousel(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;
    
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update active slide
    slideEls.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });
    
    // Update pagination dots
    const dots = pagination.querySelectorAll('.hero-carousel-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }
  
  prevBtn.addEventListener('click', () => {
    updateCarousel(currentIndex - 1);
  });
  
  nextBtn.addEventListener('click', () => {
    updateCarousel(currentIndex + 1);
  });
  
  pagination.addEventListener('click', (e) => {
    if (e.target.classList.contains('hero-carousel-dot')) {
      const index = parseInt(e.target.dataset.index, 10);
      if (index < totalSlides) {
        updateCarousel(index);
      }
    }
  });
}