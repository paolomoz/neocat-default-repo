export default function decorate(block) {
  // Add wrapper class for background
  const wrapper = block.closest('.dual-signup-wrapper') || block.parentElement;
  if (wrapper) {
    wrapper.classList.add('dual-signup-wrapper');
  }

  [...block.children].forEach((row) => {
    const cells = [...row.children];
    
    // cells[0] = type identifier (hidden)
    // cells[1] = heading
    // cells[2] = description paragraph
    // cells[3] = primary CTA button
    // cells[4] = secondary link (optional)
    
    row.classList.add('signup-card');
    
    if (cells[0]) {
      const type = cells[0].textContent.trim();
      row.classList.add(type);
      cells[0].classList.add('card-type');
    }
    
    if (cells[1]) {
      cells[1].classList.add('card-heading');
    }
    
    if (cells[2]) {
      cells[2].classList.add('card-description');
    }
    
    if (cells[3]) {
      cells[3].classList.add('card-cta');
    }
    
    if (cells[4]) {
      cells[4].classList.add('card-secondary');
    }
  });
}