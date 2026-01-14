export default function decorate(block) {
  const slides = [...block.children];
  const totalSlides = slides.length;
  let currentSlide = 0;

  // Clear and rebuild structure
  block.innerHTML = '';

  // Create wrapper for slides
  const wrapper = document.createElement('div');
  wrapper.className = 'hero-carousel-wrapper';

  // Build slides
  slides.forEach((row, index) => {
    const cells = [...row.children];
    const slide = document.createElement('div');
    slide.className = 'hero-carousel-slide';

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

    // Title
    if (cells[1]) {
      const title = document.createElement('h2');
      title.textContent = cells[1].textContent;
      content.appendChild(title);
    }

    // Description
    if (cells[2]) {
      const desc = document.createElement('p');
      desc.textContent = cells[2].textContent;
      content.appendChild(desc);
    }

    // CTA
    if (cells[3]) {
      const link = cells[3].querySelector('a');
      if (link) {
        content.appendChild(link.cloneNode(true));
      }
    }

    slide.appendChild(content);
    wrapper.appendChild(slide);
  });

  block.appendChild(wrapper);

  // Create navigation arrows
  const prevBtn = document.createElement('button');
  prevBtn.className = 'hero-carousel-nav hero-carousel-nav-prev';
  prevBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>';
  prevBtn.setAttribute('aria-label', 'Previous slide');

  const nextBtn = document.createElement('button');
  nextBtn.className = 'hero-carousel-nav hero-carousel-nav-next';
  nextBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>';
  nextBtn.setAttribute('aria-label', 'Next slide');

  block.appendChild(prevBtn);
  block.appendChild(nextBtn);

  // Create dots
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'hero-carousel-dots';

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'hero-carousel-dot';
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.dataset.index = i;
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
  prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

  dotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('hero-carousel-dot')) {
      const index = parseInt(e.target.dataset.index, 10);
      goToSlide(index);
    }
  });

  // Auto-play (optional)
  let autoPlayInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);

  block.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
  block.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
  });
}