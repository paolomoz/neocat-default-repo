export default function decorate(block) {
  const slides = [...block.children];
  const totalSlides = slides.length;
  let currentSlide = 0;

  // Create carousel structure
  const track = document.createElement('div');
  track.className = 'hero-carousel-track';

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

    // Content overlay
    const content = document.createElement('div');
    content.className = 'hero-carousel-content';

    // Heading
    const heading = document.createElement('h2');
    heading.className = 'hero-carousel-heading';
    if (cells[1]) {
      heading.innerHTML = cells[1].innerHTML;
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
      ctaContainer.innerHTML = cells[3].innerHTML;
    }
    content.appendChild(ctaContainer);

    slide.appendChild(content);
    track.appendChild(slide);
  });

  // Clear and rebuild block
  block.textContent = '';
  block.appendChild(track);

  // Previous button
  const prevBtn = document.createElement('button');
  prevBtn.className = 'hero-carousel-nav hero-carousel-nav-prev';
  prevBtn.innerHTML = '‹';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  block.appendChild(prevBtn);

  // Next button
  const nextBtn = document.createElement('button');
  nextBtn.className = 'hero-carousel-nav hero-carousel-nav-next';
  nextBtn.innerHTML = '›';
  nextBtn.setAttribute('aria-label', 'Next slide');
  block.appendChild(nextBtn);

  // Pagination dots
  const pagination = document.createElement('div');
  pagination.className = 'hero-carousel-pagination';

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'hero-carousel-dot';
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    pagination.appendChild(dot);
  }
  block.appendChild(pagination);

  // Functions
  function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    const dots = pagination.querySelectorAll('.hero-carousel-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  // Event listeners
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Auto-play (optional)
  let autoplayInterval = setInterval(nextSlide, 5000);

  block.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });

  block.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 5000);
  });
}