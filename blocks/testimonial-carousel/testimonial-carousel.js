export default function decorate(block) {
  const rows = [...block.children];
  
  // Clear block content
  block.innerHTML = '';
  
  // Extract header (first row)
  const headerRow = rows[0];
  const headerCells = [...headerRow.children];
  
  const header = document.createElement('div');
  header.className = 'testimonial-carousel-header';
  header.innerHTML = `
    <h2>${headerCells[0]?.textContent || ''}</h2>
    <p>${headerCells[1]?.textContent || ''}</p>
  `;
  block.appendChild(header);
  
  // Extract testimonials (middle rows)
  const testimonials = [];
  for (let i = 1; i < rows.length - 1; i++) {
    const cells = [...rows[i].children];
    const rating = parseInt(cells[0]?.textContent) || 5;
    const quote = cells[1]?.textContent || '';
    testimonials.push({ rating, quote });
  }
  
  // Extract CTA (last row)
  const ctaRow = rows[rows.length - 1];
  const ctaCells = [...ctaRow.children];
  const ctaText = ctaCells[0]?.textContent || 'Join now';
  const ctaLink = ctaCells[1]?.textContent || '#';
  
  // Create star SVG
  const createStarSVG = () => `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
  
  // Create track wrapper
  const trackWrapper = document.createElement('div');
  trackWrapper.className = 'testimonial-carousel-track-wrapper';
  
  const track = document.createElement('div');
  track.className = 'testimonial-carousel-track';
  
  testimonials.forEach((testimonial) => {
    const card = document.createElement('div');
    card.className = 'testimonial-carousel-card';
    
    const starsHtml = Array(testimonial.rating).fill(0).map(() => 
      `<span class="testimonial-carousel-star">${createStarSVG()}</span>`
    ).join('');
    
    card.innerHTML = `
      <div class="testimonial-carousel-stars">${starsHtml}</div>
      <p class="testimonial-carousel-quote">${testimonial.quote}</p>
    `;
    track.appendChild(card);
  });
  
  trackWrapper.appendChild(track);
  block.appendChild(trackWrapper);
  
  // Create navigation
  const nav = document.createElement('div');
  nav.className = 'testimonial-carousel-nav';
  
  const prevBtn = document.createElement('button');
  prevBtn.className = 'testimonial-carousel-nav-btn prev';
  prevBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>';
  prevBtn.setAttribute('aria-label', 'Previous');
  
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'testimonial-carousel-dots';
  
  const totalSlides = Math.ceil(testimonials.length / 3);
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'testimonial-carousel-dot';
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  }
  
  const nextBtn = document.createElement('button');
  nextBtn.className = 'testimonial-carousel-nav-btn next';
  nextBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>';
  nextBtn.setAttribute('aria-label', 'Next');
  
  nav.appendChild(prevBtn);
  nav.appendChild(dotsContainer);
  nav.appendChild(nextBtn);
  block.appendChild(nav);
  
  // Create CTA
  const cta = document.createElement('div');
  cta.className = 'testimonial-carousel-cta';
  cta.innerHTML = `<a href="${ctaLink}">${ctaText}</a>`;
  block.appendChild(cta);
  
  // Carousel functionality
  let currentIndex = 0;
  const dots = dotsContainer.querySelectorAll('.testimonial-carousel-dot');
  
  const updateCarousel = () => {
    const cardWidth = track.querySelector('.testimonial-carousel-card').offsetWidth + 16;
    const cardsPerView = window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;
    const maxIndex = Math.max(0, testimonials.length - cardsPerView);
    currentIndex = Math.min(currentIndex, maxIndex);
    
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === Math.floor(currentIndex / cardsPerView));
    });
  };
  
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
  
  nextBtn.addEventListener('click', () => {
    const cardsPerView = window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;
    const maxIndex = Math.max(0, testimonials.length - cardsPerView);
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });
  
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const cardsPerView = window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;
      currentIndex = parseInt(dot.dataset.index) * cardsPerView;
      updateCarousel();
    });
  });
  
  window.addEventListener('resize', updateCarousel);
}