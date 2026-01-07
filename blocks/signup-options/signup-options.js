export default function decorate(block) {
  const rows = [...block.children];
  
  if (rows[0]) {
    rows[0].classList.add('header-section');
  }
  
  if (rows[1]) {
    rows[1].classList.add('options-section');
    const cells = [...rows[1].children];
    if (cells[0]) cells[0].classList.add('rbc-option');
    if (cells[1]) cells[1].classList.add('email-option');
  }
  
  if (rows[2]) {
    rows[2].classList.add('footer-section');
  }
  
  // Find and style buttons
  block.querySelectorAll('a').forEach((link) => {
    const text = link.textContent.toLowerCase();
    if (text.includes('sign in') || text.includes('sign up')) {
      link.classList.add('button-primary');
    } else if (text.includes('click here') || text.includes('eligibility')) {
      link.classList.add('text-link');
    }
  });
}