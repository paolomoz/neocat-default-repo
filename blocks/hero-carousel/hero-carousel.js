export default function decorate(block) {
  const slides = [...block.children];
  
  // Clear and rebuild structure
  block.innerHTML = '';
  
  // Create wrapper for slides
  const wrapper = document.createElement('div');
  wrapper.className = 'hero-carousel-wrapper';
  
  // Create slides
  slides.forEach((slide, index) => {
    const cells = [...slide.children];
    const slideEl = document.createElement('div');
    slideEl.className = 'hero-carousel-slide';
    if (index === 0) slideEl.classList.add('active');
    
    // Image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'hero-carousel-slide-image';
    if (cells[0]) {
      imageContainer.innerHTML = cells[0].innerHTML;
    }
    slideEl.appendChild(imageContainer);
    
    // Content container
    const contentContainer = document.createElement('div');
    contentContainer.className = 'hero-carousel-content';
    
    // Heading
    if (cells[1]) {
      contentContainer.innerHTML += cells[1].innerHTML;
    }
    
    // Description
    if (cells[2]) {
      contentContainer.innerHTML += cells[2].innerHTML;
    }
    
    // CTA
    if (cells[3]) {
      contentContainer.innerHTML += cells[3].innerHTML;
    }
    
    slideEl.appendChild(contentContainer);
    wrapper.appendChild(slideEl);
  });
  
  block.appendChild(wrapper);
  
  // Create navigation buttons
  const prevBtn = document.createElement('button');
  prevBtn.className = 'hero-carousel-nav hero-carousel-nav-prev';
  prevBtn.innerHTML = '‹';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  
  const nextBtn = document.createElement('button');
  nextBtn.className = 'hero-carousel-nav hero-carousel-nav-next';
  nextBtn.innerHTML = '›';
  nextBtn.setAttribute('aria-label', 'Next slide');
  
  block.appendChild(prevBtn);
  block.appendChild(nextBtn);
  
  // Create dots
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'hero-carousel-dots';
  
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'hero-carousel-dot';
    if (index === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dotsContainer.appendChild(dot);
  });
  
  block.appendChild(dotsContainer);
  
  // Carousel functionality
  let currentSlide = 0;
  const totalSlides = slides.length;
  const dots = dotsContainer.querySelectorAll('.hero-carousel-dot');
  
  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    currentSlide = index;
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }
  
  prevBtn.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
  });
  
  nextBtn.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
  });
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
  });
  
  // Auto-advance (optional)
  let autoPlay = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 5000);
  
  // Pause on hover
  block.addEventListener('mouseenter', () => {
    clearInterval(autoPlay);
  });
  
  block.addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5000);
  });
}