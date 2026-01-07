export default function decorate(block) {
  const rows = [...block.children];
  const testimonials = [];

  // Extract testimonial data from rows
  rows.forEach((row) => {
    const cells = [...row.children];
    const rating = parseInt(cells[0]?.textContent?.trim() || '5', 10);
    const quote = cells[1]?.textContent?.trim() || '';
    testimonials.push({ rating, quote });
  });

  // Clear block content
  block.innerHTML = '';

  // Create wrapper for carousel
  const wrapper = document.createElement('div');
  wrapper.className = 'testimonial-carousel-wrapper';

  // Create track for slides
  const track = document.createElement('div');
  track.className = 'testimonial-carousel-track';

  // Create testimonial cards
  testimonials.forEach((testimonial) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';

    // Create star rating
    const starRating = document.createElement('div');
    starRating.className = 'star-rating';
    for (let i = 0; i < testimonial.rating; i++) {
      const star = document.createElement('span');
      star.className = 'star';
      star.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
      starRating.appendChild(star);
    }

    // Create quote
    const quoteEl = document.createElement('p');
    quoteEl.className = 'testimonial-quote';
    quoteEl.textContent = testimonial.quote;

    card.appendChild(starRating);
    card.appendChild(quoteEl);
    track.appendChild(card);
  });

  wrapper.appendChild(track);
  block.appendChild(wrapper);

  // Create navigation
  const nav = document.createElement('div');
  nav.className = 'testimonial-carousel-nav';

  const prevBtn = document.createElement('button');
  prevBtn.className = 'nav-arrow nav-prev';
  prevBtn.innerHTML = '&#8249;';
  prevBtn.setAttribute('aria-label', 'Previous');

  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'testimonial-carousel-dots';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'nav-arrow nav-next';
  nextBtn.innerHTML = '&#8250;';
  nextBtn.setAttribute('aria-label', 'Next');

  // Calculate number of pages based on visible cards
  const getVisibleCards = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };

  let currentIndex = 0;
  let totalPages = Math.ceil(testimonials.length / getVisibleCards());

  // Create dots
  const createDots = () => {
    dotsContainer.innerHTML = '';
    totalPages = Math.ceil(testimonials.length / getVisibleCards());
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('button');
      dot.className = 'dot' + (i === currentIndex ? ' active' : '');
      dot.setAttribute('aria-label', `Go to page ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  };

  const updateCarousel = () => {
    const visibleCards = getVisibleCards();
    const cardWidth = track.querySelector('.testimonial-card')?.offsetWidth || 300;
    const gap = 24;
    const offset = currentIndex * (cardWidth + gap) * visibleCards;
    track.style.transform = `translateX(-${offset}px)`;

    // Update dots
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });

    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= totalPages - 1;
  };

  const goToSlide = (index) => {
    currentIndex = Math.max(0, Math.min(index, totalPages - 1));
    updateCarousel();
  };

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalPages - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  nav.appendChild(prevBtn);
  nav.appendChild(dotsContainer);
  nav.appendChild(nextBtn);
  block.appendChild(nav);

  // Initialize
  createDots();
  updateCarousel();

  // Handle resize
  window.addEventListener('resize', () => {
    const newTotalPages = Math.ceil(testimonials.length / getVisibleCards());
    if (newTotalPages !== totalPages) {
      totalPages = newTotalPages;
      currentIndex = Math.min(currentIndex, totalPages - 1);
      createDots();
      updateCarousel();
    }
  });
}