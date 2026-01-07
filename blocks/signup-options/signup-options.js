export default function decorate(block) {
  const rows = [...block.children];
  
  if (rows[0]) {
    rows[0].classList.add('signup-options-header');
  }
  
  if (rows[1]) {
    rows[1].classList.add('signup-options-columns');
    const columns = [...rows[1].children];
    if (columns[0]) columns[0].classList.add('signup-options-rbc');
    if (columns[1]) columns[1].classList.add('signup-options-everyone');
  }
  
  if (rows[2]) {
    rows[2].classList.add('signup-options-footer');
  }

  // Add button classes to primary CTAs
  block.querySelectorAll('a').forEach((link) => {
    const text = link.textContent.toLowerCase();
    if (text.includes('sign in') || text.includes('sign up with email')) {
      link.classList.add('btn-primary');
    } else if (text.includes('click here') || text.includes('eligibility')) {
      link.classList.add('text-link');
      if (text.includes('eligibility')) {
        link.classList.add('eligibility-link');
      }
    }
  });

  // Handle tooltip button functionality
  const tooltipBtn = block.querySelector('.tooltip-btn');
  if (tooltipBtn) {
    tooltipBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Tooltip functionality can be extended here
    });
  }
}