export default function decorate(block) {
  const rows = [...block.children];
  
  // Extract header info (first row)
  const headerRow = rows[0];
  const headerCells = [...headerRow.children];
  const title = headerCells[0]?.textContent || '';
  const subtitle = headerCells[1]?.textContent || '';
  
  // Extract testimonials (middle rows)
  const testimonials = [];
  for (let i = 1; i < rows.length - 1; i++) {
    const cells = [...rows[i].children];
    const stars = parseInt(cells[0]?.textContent) || 5;
    const quote = cells[1]?.textContent || '';
    testimonials.push({ stars, quote });
  }
  
  // Extract CTA (last row)
  const ctaRow = rows[rows.length - 1];
  const ctaLink = ctaRow.querySelector('a');
  const ctaText = ctaLink?.textContent || 'Join now';
  const ctaHref = ctaLink?.getAttribute('href') || '#';
  
  // Generate star SVG
  const starSVG = `<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
  
  // Build HTML
  block.innerHTML = `
    <div class="testimonial-carousel-header">
      <h2 class="testimonial-carousel-title">${title}</h2>
      <p class="testimonial-carousel-subtitle">${subtitle}</p>
    </div>
    <div class="testimonial-carousel-container">
      <div class="testimonial-carousel-track">
        ${testimonials.map((t) => `
          <div class="testimonial-carousel-card">
            <div class="testimonial-carousel-stars">
              ${Array(t.stars).fill(`<span class="testimonial-carousel-star">${starSVG}</span>`).join('')}
            </div>
            <p class="testimonial-carousel-quote">${t.quote}</p>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="testimonial-carousel-pagination">
      <button class="testimonial-carousel-nav testimonial-carousel-prev" aria-label="Previous">‹</button>
      <div class="testimonial-carousel-dots">
        ${testimonials.map((_, i) => `<button class="testimonial-carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`).join('')}
      </div>
      <button class="testimonial-carousel-nav testimonial-carousel-next" aria-label="Next">›</button>
    </div>
    <div class="testimonial-carousel-cta">
      <a href="${ctaHref}">${ctaText}</a>
    </div>
  `;
  
  // Carousel functionality
  const track = block.querySelector('.testimonial-carousel-track');
  const dots = block.querySelectorAll('.testimonial-carousel-dot');
  const prevBtn = block.querySelector('.testimonial-carousel-prev');
  const nextBtn = block.querySelector('.testimonial-carousel-next');
  
  let currentIndex = 0;
  const totalSlides = testimonials.length;
  
  function getVisibleSlides() {
    const width = window.innerWidth;
    if (width <= 600) return 1;
    if (width <= 992) return 2;
    return 3;
  }
  
  function updateCarousel() {
    const visibleSlides = getVisibleSlides();
    const maxIndex = Math.max(0, totalSlides - visibleSlides);
    currentIndex = Math.min(currentIndex, maxIndex);
    
    const slideWidth = 100 / visibleSlides;
    const offset = currentIndex * slideWidth;
    track.style.transform = `translateX(-${offset}%)`;
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }
  
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
  
  nextBtn.addEventListener('click', () => {
    const visibleSlides = getVisibleSlides();
    const maxIndex = Math.max(0, totalSlides - visibleSlides);
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });
  
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.dataset.index);
      updateCarousel();
    });
  });
  
  window.addEventListener('resize', updateCarousel);
  updateCarousel();
}