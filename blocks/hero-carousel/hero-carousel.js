export default function decorate(block) {
  const slides = [...block.children];
  const totalSlides = slides.length;
  let currentSlide = 0;

  // Create wrapper for slides
  const wrapper = document.createElement('div');
  wrapper.className = 'hero-carousel-wrapper';

  // Process each slide
  slides.forEach((row, index) => {
    const cells = [...row.children];
    const slide = document.createElement('div');
    slide.className = 'hero-carousel-slide';

    // Content section
    const content = document.createElement('div');
    content.className = 'hero-carousel-content';

    // Get heading (cell 1)
    if (cells[1]) {
      const heading = cells[1].querySelector('h2') || cells[1];
      content.appendChild(heading.cloneNode(true));
    }

    // Get paragraph (cell 2)
    if (cells[2]) {
      const para = cells[2].querySelector('p') || document.createElement('p');
      if (!cells[2].querySelector('p')) {
        para.textContent = cells[2].textContent;
      }
      content.appendChild(para.cloneNode(true));
    }

    // Get CTA (cell 3)
    if (cells[3]) {
      const link = cells[3].querySelector('a');
      if (link) {
        content.appendChild(link.cloneNode(true));
      }
    }

    // Image section
    const imageContainer = document.createElement('div');
    imageContainer.className = 'hero-carousel-image';

    if (cells[0]) {
      const img = cells[0].querySelector('img');
      if (img) {
        imageContainer.appendChild(img.cloneNode(true));
      }
    }

    slide.appendChild(content);
    slide.appendChild(imageContainer);
    wrapper.appendChild(slide);
  });

  // Clear block and add wrapper
  block.innerHTML = '';
  block.appendChild(wrapper);

  // Create navigation arrows
  const prevBtn = document.createElement('button');
  prevBtn.className = 'hero-carousel-nav hero-carousel-nav-prev';
  prevBtn.setAttribute('aria-label', 'Previous slide');

  const nextBtn = document.createElement('button');
  nextBtn.className = 'hero-carousel-nav hero-carousel-nav-next';
  nextBtn.setAttribute('aria-label', 'Next slide');

  block.appendChild(prevBtn);
  block.appendChild(nextBtn);

  // Create dots navigation
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'hero-carousel-dots';

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'hero-carousel-dot';
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.dataset.slide = i;
    dotsContainer.appendChild(dot);
  }

  block.appendChild(dotsContainer);

  // Update slide position function
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
  prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

  dotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('hero-carousel-dot')) {
      const slideIndex = parseInt(e.target.dataset.slide, 10);
      goToSlide(slideIndex);
    }
  });

  // Auto-advance carousel
  let autoPlayInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);

  // Pause on hover
  block.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
  block.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
  });

  // Initialize first slide
  goToSlide(0);
}