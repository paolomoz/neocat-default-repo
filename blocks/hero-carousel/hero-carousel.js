export default function decorate(block) {
  const slides = [...block.children];
  
  // Create wrapper structure
  const wrapper = document.createElement('div');
  wrapper.className = 'hero-carousel-wrapper';
  
  const slidesContainer = document.createElement('div');
  slidesContainer.className = 'hero-carousel-slides';
  
  // Process each slide
  slides.forEach((row, index) => {
    const cells = [...row.children];
    const slide = document.createElement('div');
    slide.className = 'hero-carousel-slide';
    
    // Image (background)
    if (cells[0]) {
      const imageDiv = document.createElement('div');
      imageDiv.className = 'hero-carousel-slide-image';
      imageDiv.innerHTML = cells[0].innerHTML;
      slide.appendChild(imageDiv);
    }
    
    // Content overlay
    const content = document.createElement('div');
    content.className = 'hero-carousel-content';
    
    // Title
    if (cells[1]) {
      const titleDiv = document.createElement('div');
      titleDiv.className = 'hero-carousel-title';
      titleDiv.innerHTML = cells[1].innerHTML;
      content.appendChild(titleDiv);
    }
    
    // Description
    if (cells[2]) {
      const descDiv = document.createElement('div');
      descDiv.className = 'hero-carousel-description';
      descDiv.innerHTML = cells[2].innerHTML;
      content.appendChild(descDiv);
    }
    
    // CTA
    if (cells[3]) {
      const ctaDiv = document.createElement('div');
      ctaDiv.className = 'hero-carousel-cta';
      ctaDiv.innerHTML = cells[3].innerHTML;
      content.appendChild(ctaDiv);
    }
    
    slide.appendChild(content);
    slidesContainer.appendChild(slide);
  });
  
  wrapper.appendChild(slidesContainer);
  
  // Create navigation arrows
  const prevBtn = document.createElement('button');
  prevBtn.className = 'hero-carousel-nav-prev';
  prevBtn.innerHTML = '‹';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  
  const nextBtn = document.createElement('button');
  nextBtn.className = 'hero-carousel-nav-next';
  nextBtn.innerHTML = '›';
  nextBtn.setAttribute('aria-label', 'Next slide');
  
  wrapper.appendChild(prevBtn);
  wrapper.appendChild(nextBtn);
  
  // Create pagination dots
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'hero-carousel-dots';
  
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'hero-carousel-dot';
    if (index === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dotsContainer.appendChild(dot);
  });
  
  wrapper.appendChild(dotsContainer);
  
  // Clear and append
  block.innerHTML = '';
  block.appendChild(wrapper);
  
  // Carousel functionality
  let currentSlide = 0;
  const totalSlides = slides.length;
  const dots = dotsContainer.querySelectorAll('.hero-carousel-dot');
  
  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    currentSlide = index;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }
  
  prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });
  
  // Auto-advance (optional)
  let autoPlay = setInterval(() => goToSlide(currentSlide + 1), 5000);
  
  block.addEventListener('mouseenter', () => clearInterval(autoPlay));
  block.addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => goToSlide(currentSlide + 1), 5000);
  });
}