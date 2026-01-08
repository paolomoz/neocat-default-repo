export default function decorate(block) {
  const rows = [...block.children];
  
  // Clear block and build carousel structure
  block.innerHTML = '';
  
  // Create slides container
  const slidesContainer = document.createElement('div');
  slidesContainer.className = 'hero-carousel-slides';
  
  // Skip first row (logo) and process content rows
  const contentRows = rows.slice(1);
  
  contentRows.forEach((row, index) => {
    const cells = [...row.children];
    
    const slide = document.createElement('div');
    slide.className = 'hero-carousel-slide';
    if (index === 0) slide.classList.add('active');
    
    // Create content section
    const contentDiv = document.createElement('div');
    contentDiv.className = 'slide-content';
    
    // Get heading
    if (cells[1]) {
      const heading = cells[1].querySelector('h2') || cells[1];
      if (heading) {
        const h2 = document.createElement('h2');
        h2.textContent = heading.textContent;
        contentDiv.appendChild(h2);
      }
    }
    
    // Get paragraph
    if (cells[2]) {
      const p = document.createElement('p');
      p.textContent = cells[2].textContent;
      contentDiv.appendChild(p);
    }
    
    // Get CTA
    if (cells[3]) {
      const link = cells[3].querySelector('a');
      if (link) {
        const cta = document.createElement('a');
        cta.href = link.href;
        cta.textContent = link.textContent;
        contentDiv.appendChild(cta);
      }
    }
    
    // Create image section
    const imageDiv = document.createElement('div');
    imageDiv.className = 'slide-image';
    
    if (cells[0]) {
      const img = cells[0].querySelector('img');
      if (img) {
        imageDiv.appendChild(img.cloneNode(true));
      }
    }
    
    slide.appendChild(contentDiv);
    slide.appendChild(imageDiv);
    slidesContainer.appendChild(slide);
  });
  
  block.appendChild(slidesContainer);
  
  // Create navigation arrows
  const prevBtn = document.createElement('button');
  prevBtn.className = 'carousel-nav prev';
  prevBtn.innerHTML = '&#8249;';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  
  const nextBtn = document.createElement('button');
  nextBtn.className = 'carousel-nav next';
  nextBtn.innerHTML = '&#8250;';
  nextBtn.setAttribute('aria-label', 'Next slide');
  
  block.appendChild(prevBtn);
  block.appendChild(nextBtn);
  
  // Create dots
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'carousel-dots';
  
  const totalSlides = contentRows.length || 7;
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  }
  
  block.appendChild(dotsContainer);
  
  // Carousel functionality
  let currentSlide = 0;
  const slides = block.querySelectorAll('.hero-carousel-slide');
  const dots = block.querySelectorAll('.carousel-dot');
  const slideCount = slides.length || 1;
  
  function goToSlide(index) {
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;
    
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      slide.style.display = i === index ? 'flex' : 'none';
    });
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    
    currentSlide = index;
  }
  
  // Initialize display
  slides.forEach((slide, i) => {
    slide.style.display = i === 0 ? 'flex' : 'none';
  });
  
  // Event listeners
  prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
  
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index, 10);
      goToSlide(index);
    });
  });
}