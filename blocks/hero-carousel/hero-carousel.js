export default function decorate(block) {
  const slides = [...block.children];
  const totalSlides = slides.length;
  let currentSlide = 0;

  // Clear block and rebuild structure
  block.innerHTML = '';

  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'hero-carousel-wrapper';

  // Create track for slides
  const track = document.createElement('div');
  track.className = 'hero-carousel-track';

  // Process each slide
  slides.forEach((row, index) => {
    const cells = [...row.children];
    const slide = document.createElement('div');
    slide.className = 'hero-carousel-slide';
    if (index === 0) slide.classList.add('active');

    // Content cell
    const contentCell = cells[0];
    if (contentCell) {
      contentCell.className = 'hero-carousel-content';
      slide.appendChild(contentCell);
    }

    // Image cell
    const imageCell = cells[1];
    if (imageCell) {
      imageCell.className = 'hero-carousel-image';
      slide.appendChild(imageCell);
    }

    track.appendChild(slide);
  });

  wrapper.appendChild(track);

  // Create navigation arrows
  const prevBtn = document.createElement('button');
  prevBtn.className = 'hero-carousel-nav hero-carousel-nav--prev';
  prevBtn.innerHTML = '&#10094;';
  prevBtn.setAttribute('aria-label', 'Previous slide');

  const nextBtn = document.createElement('button');
  nextBtn.className = 'hero-carousel-nav hero-carousel-nav--next';
  nextBtn.innerHTML = '&#10095;';
  nextBtn.setAttribute('aria-label', 'Next slide');

  // Create pagination dots
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'hero-carousel-dots';

  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'hero-carousel-dot';
    if (index === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dot.dataset.slide = index;
    dotsContainer.appendChild(dot);
  });

  // Append all elements
  block.appendChild(wrapper);
  block.appendChild(prevBtn);
  block.appendChild(nextBtn);
  block.appendChild(dotsContainer);

  // Navigation functions
  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    currentSlide = index;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

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
    if (e.target.classList.contains('hero-carousel-dot')) {
      const slideIndex = parseInt(e.target.dataset.slide, 10);
      goToSlide(slideIndex);
    }
  });

  // Auto-advance slides
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