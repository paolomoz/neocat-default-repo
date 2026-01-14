export default function decorate(block) {
  const slides = [...block.children];
  
  // Clear and rebuild structure
  block.innerHTML = '';
  
  // Create wrapper for slides
  const wrapper = document.createElement('div');
  wrapper.className = 'hero-carousel-wrapper';
  
  slides.forEach((row, index) => {
    const cells = [...row.children];
    const slide = document.createElement('div');
    slide.className = 'hero-carousel-slide';
    if (index === 0) slide.classList.add('active');
    
    // Image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'hero-carousel-slide-image';
    if (cells[0]) {
      imageContainer.innerHTML = cells[0].innerHTML;
    }
    slide.appendChild(imageContainer);
    
    // Content container
    const content = document.createElement('div');
    content.className = 'hero-carousel-content';
    
    // Heading
    const heading = document.createElement('h2');
    heading.className = 'hero-carousel-heading';
    if (cells[1]) {
      heading.innerHTML = cells[1].textContent;
    }
    content.appendChild(heading);
    
    // Description
    const description = document.createElement('p');
    description.className = 'hero-carousel-description';
    if (cells[2]) {
      description.textContent = cells[2].textContent;
    }
    content.appendChild(description);
    
    // CTA
    const ctaContainer = document.createElement('div');
    ctaContainer.className = 'hero-carousel-cta';
    if (cells[3]) {
      const link = cells[3].querySelector('a');
      if (link) {
        ctaContainer.appendChild(link.cloneNode(true));
      }
    }
    content.appendChild(ctaContainer);
    
    slide.appendChild(content);
    wrapper.appendChild(slide);
  });
  
  block.appendChild(wrapper);
  
  // Create navigation arrows
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
  let currentIndex = 0;
  const totalSlides = slides.length;
  const dots = dotsContainer.querySelectorAll('.hero-carousel-dot');
  
  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    currentIndex = index;
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }
  
  prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });
  
  // Auto-advance every 5 seconds
  let autoAdvance = setInterval(() => goToSlide(currentIndex + 1), 5000);
  
  // Pause on hover
  block.addEventListener('mouseenter', () => clearInterval(autoAdvance));
  block.addEventListener('mouseleave', () => {
    autoAdvance = setInterval(() => goToSlide(currentIndex + 1), 5000);
  });
}