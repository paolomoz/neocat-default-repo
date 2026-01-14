export default function decorate(block) {
  const slides = [...block.children];
  const totalSlides = slides.length;
  let currentSlide = 0;

  // Clear block and rebuild structure
  block.innerHTML = '';

  // Create wrapper for slides
  const wrapper = document.createElement('div');
  wrapper.className = 'hero-carousel-wrapper';

  // Build slides from original rows
  slides.forEach((row, index) => {
    const cells = [...row.children];
    const slide = document.createElement('div');
    slide.className = 'slide';
    if (index === 0) slide.classList.add('active');

    // Image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'slide-image';
    if (cells[0]) {
      imageContainer.innerHTML = cells[0].innerHTML;
    }
    slide.appendChild(imageContainer);

    // Content container
    const content = document.createElement('div');
    content.className = 'slide-content';

    // Title
    const titleDiv = document.createElement('div');
    titleDiv.className = 'slide-title';
    if (cells[1]) {
      titleDiv.innerHTML = cells[1].innerHTML;
    }
    content.appendChild(titleDiv);

    // Description
    const descDiv = document.createElement('div');
    descDiv.className = 'slide-description';
    if (cells[2]) {
      descDiv.innerHTML = cells[2].innerHTML;
    }
    content.appendChild(descDiv);

    // CTA
    const ctaDiv = document.createElement('div');
    ctaDiv.className = 'slide-cta';
    if (cells[3]) {
      ctaDiv.innerHTML = cells[3].innerHTML;
    }
    content.appendChild(ctaDiv);

    slide.appendChild(content);
    wrapper.appendChild(slide);
  });

  block.appendChild(wrapper);

  // Create navigation buttons
  const prevBtn = document.createElement('button');
  prevBtn.className = 'hero-carousel-nav prev';
  prevBtn.innerHTML = '‹';
  prevBtn.setAttribute('aria-label', 'Previous slide');

  const nextBtn = document.createElement('button');
  nextBtn.className = 'hero-carousel-nav next';
  nextBtn.innerHTML = '›';
  nextBtn.setAttribute('aria-label', 'Next slide');

  block.appendChild(prevBtn);
  block.appendChild(nextBtn);

  // Create pagination dots
  const pagination = document.createElement('div');
  pagination.className = 'hero-carousel-pagination';

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'dot';
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.dataset.index = i;
    pagination.appendChild(dot);
  }

  block.appendChild(pagination);

  // Navigation functions
  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentSlide = index;

    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update pagination dots
    const dots = pagination.querySelectorAll('.dot');
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

  pagination.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot')) {
      const index = parseInt(e.target.dataset.index, 10);
      goToSlide(index);
    }
  });

  // Auto-advance every 5 seconds
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