export default function decorate(block) {
  const testimonials = [];
  
  // Extract testimonial data from rows
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    const rating = parseInt(cells[0]?.textContent?.trim() || '5', 10);
    const text = cells[1]?.textContent?.trim() || '';
    
    if (text) {
      testimonials.push({ rating, text });
    }
  });
  
  // Clear block and rebuild
  block.innerHTML = '';
  
  // Create carousel track
  const carouselTrack = document.createElement('div');
  carouselTrack.className = 'carousel-track';
  
  testimonials.forEach((testimonial, index) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    // Star rating
    const starRating = document.createElement('div');
    starRating.className = 'star-rating';
    for (let i = 0; i < testimonial.rating; i++) {
      const star = document.createElement('span');
      star.className = 'star';
      star.textContent = '★';
      starRating.appendChild(star);
    }
    
    // Testimonial text
    const textEl = document.createElement('p');
    textEl.className = 'testimonial-text';
    textEl.textContent = `"${testimonial.text}"`;
    
    card.appendChild(starRating);
    card.appendChild(textEl);
    carouselTrack.appendChild(card);
  });
  
  block.appendChild(carouselTrack);
  
  // Create carousel controls
  const controls = document.createElement('div');
  controls.className = 'carousel-controls';
  
  const prevArrow = document.createElement('button');
  prevArrow.className = 'carousel-arrow prev';
  prevArrow.innerHTML = '&#8249;';
  prevArrow.setAttribute('aria-label', 'Previous');
  
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'carousel-dots';
  
  const totalPages = Math.ceil(testimonials.length / 3);
  for (let i = 0; i < Math.max(totalPages, 4); i++) {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => {
      dotsContainer.querySelectorAll('.carousel-dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
    dotsContainer.appendChild(dot);
  }
  
  const nextArrow = document.createElement('button');
  nextArrow.className = 'carousel-arrow next';
  nextArrow.innerHTML = '&#8250;';
  nextArrow.setAttribute('aria-label', 'Next');
  
  controls.appendChild(prevArrow);
  controls.appendChild(dotsContainer);
  controls.appendChild(nextArrow);
  block.appendChild(controls);
  
  // Create CTA button
  const ctaContainer = document.createElement('div');
  ctaContainer.className = 'cta-container';
  
  const ctaButton = document.createElement('a');
  ctaButton.className = 'cta-button';
  ctaButton.href = '#';
  ctaButton.textContent = 'Join now';
  
  ctaContainer.appendChild(ctaButton);
  block.appendChild(ctaContainer);
  
  // Simple carousel navigation
  let currentIndex = 0;
  
  prevArrow.addEventListener('click', () => {
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    dots[currentIndex].classList.add('active');
  });
  
  nextArrow.addEventListener('click', () => {
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % dots.length;
    dots[currentIndex].classList.add('active');
  });
}