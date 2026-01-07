export default function decorate(block) {
  const rows = [...block.children];
  
  // Extract header row (first row)
  const headerRow = rows[0];
  const headerCells = [...headerRow.children];
  const heading = headerCells[0]?.textContent || '';
  const subheading = headerCells[1]?.textContent || '';
  
  // Extract testimonials (middle rows)
  const testimonials = [];
  for (let i = 1; i < rows.length - 1; i++) {
    const cells = [...rows[i].children];
    const stars = parseInt(cells[0]?.textContent) || 5;
    const text = cells[1]?.textContent || '';
    if (text) {
      testimonials.push({ stars, text });
    }
  }
  
  // Extract CTA (last row)
  const ctaRow = rows[rows.length - 1];
  const ctaLink = ctaRow.querySelector('a');
  
  // Clear block
  block.innerHTML = '';
  
  // Create header
  const header = document.createElement('div');
  header.className = 'carousel-header';
  header.innerHTML = `
    <h2>${heading}</h2>
    <p>${subheading}</p>
  `;
  block.appendChild(header);
  
  // Create carousel container
  const carouselContainer = document.createElement('div');
  carouselContainer.className = 'carousel-container';
  
  const carouselTrack = document.createElement('div');
  carouselTrack.className = 'carousel-track';
  
  // Create star SVG
  const starSVG = `<svg class="star" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
  
  // Create testimonial cards
  testimonials.forEach((testimonial) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    const starRating = document.createElement('div');
    starRating.className = 'star-rating';
    for (let i = 0; i < testimonial.stars; i++) {
      starRating.innerHTML += starSVG;
    }
    
    const text = document.createElement('p');
    text.className = 'testimonial-text';
    text.textContent = testimonial.text;
    
    card.appendChild(starRating);
    card.appendChild(text);
    carouselTrack.appendChild(card);
  });
  
  carouselContainer.appendChild(carouselTrack);
  block.appendChild(carouselContainer);
  
  // Create navigation
  const nav = document.createElement('div');
  nav.className = 'carousel-nav';
  
  const prevArrow = document.createElement('button');
  prevArrow.className = 'nav-arrow prev';
  prevArrow.innerHTML = '&#8249;';
  prevArrow.setAttribute('aria-label', 'Previous');
  
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'nav-dots';
  
  const totalPages = Math.ceil(testimonials.length / 3);
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('button');
    dot.className = 'nav-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Page ${i + 1}`);
    dot.dataset.page = i;
    dotsContainer.appendChild(dot);
  }
  
  const nextArrow = document.createElement('button');
  nextArrow.className = 'nav-arrow next';
  nextArrow.innerHTML = '&#8250;';
  nextArrow.setAttribute('aria-label', 'Next');
  
  nav.appendChild(prevArrow);
  nav.appendChild(dotsContainer);
  nav.appendChild(nextArrow);
  block.appendChild(nav);
  
  // Create CTA
  if (ctaLink) {
    const ctaContainer = document.createElement('div');
    ctaContainer.className = 'cta-container';
    ctaContainer.appendChild(ctaLink.cloneNode(true));
    block.appendChild(ctaContainer);
  }
  
  // Carousel functionality
  let currentPage = 0;
  const dots = dotsContainer.querySelectorAll('.nav-dot');
  
  function updateCarousel() {
    const cardWidth = carouselTrack.querySelector('.testimonial-card')?.offsetWidth || 0;
    const gap = 24;
    const offset = currentPage * (cardWidth + gap) * 3;
    carouselTrack.style.transform = `translateX(-${offset}px)`;
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentPage);
    });
  }
  
  prevArrow.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      updateCarousel();
    }
  });
  
  nextArrow.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      updateCarousel();
    }
  });
  
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      currentPage = parseInt(dot.dataset.page);
      updateCarousel();
    });
  });
}