export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('sign-up-options-column');
    
    const cell = row.children[0];
    if (cell) {
      cell.classList.add('sign-up-options-content');
      
      // Process paragraphs
      const paragraphs = cell.querySelectorAll('p');
      paragraphs.forEach((p) => {
        const link = p.querySelector('a');
        const text = p.textContent;
        
        if (text.includes("Don't have Online Banking?") || text.includes('Click here')) {
          p.classList.add('enroll-text');
          if (link && !link.textContent.includes('Sign')) {
            link.classList.add('text-link');
          }
        } else if (link && (link.textContent.includes('Sign in') || link.textContent.includes('Sign up'))) {
          p.classList.add('cta-wrapper');
          link.classList.add('cta-button');
        } else if (!link) {
          p.classList.add('description');
        }
      });
    }
  });
}