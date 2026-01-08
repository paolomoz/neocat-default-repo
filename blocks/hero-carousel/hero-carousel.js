export default function decorate(block) {
  const slides = [...block.children];
  const totalSlides = slides.length;
  let currentSlide = 0;

  // Create wrapper structure
  const wrapper = document.createElement('div');
  wrapper.className = 'hero-carousel-wrapper';

  slides.forEach((slide, index) => {
    const cells = [...slide.children];
    slide.className = 'hero-carousel-slide';
    slide.dataset.slideIndex = index;

    // Content cell
    if (cells[0]) {
      cells[0].className = 'hero-carousel-content';
      
      // Style the CTA link
      const ctaLink = cells[0].querySelector('a');
      if (ctaLink) {
        ctaLink.classList.add('hero-carousel-cta');
      }
    }

    // Image cell
    if (cells[1]) {
      cells[1].className = 'hero-carousel-image';
    }

    wrapper.appendChild(slide);
  });

  block.innerHTML = '';
  block.appendChild(wrapper);

  // Create navigation arrows
  const prevBtn = document.createElement('button');
  prevBtn.className = 'hero-carousel-nav hero-carousel-nav-prev';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  prevBtn.innerHTML = '<svg viewBox="0 0 24 24"><polyline points="15,18 9,12 15,6"></polyline></svg>';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'hero-carousel-nav hero-carousel-nav-next';
  nextBtn.setAttribute('aria-label', 'Next slide');
  nextBtn.innerHTML = '<svg viewBox="0 0 24 24"><polyline points="9,6 15,12 9,18"></polyline></svg>';

  block.appendChild(prevBtn);
  block.appendChild(nextBtn);

  // Create pagination dots
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'hero-carousel-dots';

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'hero-carousel-dot';
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.dataset.slideIndex = i;
    dotsContainer.appendChild(dot);
  }

  block.appendChild(dotsContainer);

  // Navigation functions
  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    currentSlide = index;
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    const dots = dotsContainer.querySelectorAll('.hero-carousel-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  // Event listeners
  prevBtn.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
  });

  nextBtn.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
  });

  dotsContainer.addEventListener('click', (e) => {
    const dot = e.target.closest('.hero-carousel-dot');
    if (dot) {
      const index = parseInt(dot.dataset.slideIndex, 10);
      goToSlide(index);
    }
  });

  // Hide nav if only one slide
  if (totalSlides <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    dotsContainer.style.display = 'none';
  }
}