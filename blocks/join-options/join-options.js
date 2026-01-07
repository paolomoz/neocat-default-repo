export default function decorate(block) {
  const rows = [...block.children];
  
  if (rows[0]) {
    rows[0].classList.add('header-row');
  }
  
  if (rows[1]) {
    rows[1].classList.add('options-row');
    const cells = [...rows[1].children];
    if (cells[0]) cells[0].classList.add('option-rbc');
    if (cells[1]) cells[1].classList.add('option-everyone');
  }
  
  if (rows[2]) {
    rows[2].classList.add('footer-row');
  }

  block.querySelectorAll('a').forEach((link) => {
    const text = link.textContent.trim().toLowerCase();
    if (text.includes('sign in') || text.includes('sign up')) {
      link.classList.add('button-primary');
    } else {
      link.classList.add('text-link');
    }
  });
}