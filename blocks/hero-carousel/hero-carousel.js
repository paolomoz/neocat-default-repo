export default function decorate(block) {
  const slides = [...block.children];
  const totalSlides = slides.length;
  let currentSlide = 0;

  // Process each slide
  slides.forEach((slide, index) => {
    slide.classList.add('hero-carousel-slide');
    const cells = [...slide.children];
    
    if (cells[0]) {
      cells[0].classList.add('hero-carousel-content');
      // Find and style the CTA link
      const ctaLink = cells[0].querySelector('a');
      if (ctaLink) {
        ctaLink.parentElement.classList.add('hero-carousel-cta');
      }
    }
    
    if (cells[1]) {
      cells[1].classList.add('hero-carousel-image');
    }

    if (index !== 0) {
      slide.style.display = 'none';
    }
  });

  // Create navigation arrows
  const prevBtn = document.createElement('button');
  prevBtn.className = 'hero-carousel-nav prev';
  prevBtn.innerHTML = '&#8249;';
  prevBtn.setAttribute('aria-label', 'Previous slide');

  const nextBtn = document.createElement('button');
  nextBtn.className = 'hero-carousel-nav next';
  nextBtn.innerHTML = '&#8250;';
  nextBtn.setAttribute('aria-label', 'Next slide');

  // Create pagination dots
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'hero-carousel-dots';

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'hero-carousel-dot';
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  // Add more dots for visual effect (matching original 8 dots)
  const visibleDots = 8;
  for (let i = totalSlides; i < visibleDots; i++) {
    const dot = document.createElement('button');
    dot.className = 'hero-carousel-dot';
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.style.opacity = '0.5';
    dotsContainer.appendChild(dot);
  }

  function goToSlide(index) {
    slides[currentSlide].style.display = 'none';
    currentSlide = index;
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    slides[currentSlide].style.display = 'flex';
    updateDots();
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.hero-carousel-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

  block.appendChild(prevBtn);
  block.appendChild(nextBtn);
  block.appendChild(dotsContainer);
}