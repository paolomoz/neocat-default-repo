export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row, index) => {
    row.classList.add('sign-up-options-column');
    
    const cell = row.children[0];
    if (cell) {
      cell.classList.add('sign-up-options-content');
      
      // Find text links and add the text-link class
      const paragraphs = cell.querySelectorAll('p');
      paragraphs.forEach((p) => {
        const text = p.textContent;
        if (text.includes('Don\'t have Online Banking?') || text.includes('Click here')) {
          const link = p.querySelector('a');
          if (link && !link.textContent.includes('Sign')) {
            link.classList.add('text-link');
          }
        }
      });
    }
  });
}