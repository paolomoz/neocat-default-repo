export default function decorate(block) {
  [...block.children].forEach((row, index) => {
    const cells = [...row.children];
    row.classList.add('split-signup-card');

    // Cell 0: Heading
    if (cells[0]) {
      cells[0].classList.add('split-signup-heading');
      const headingText = cells[0].textContent.trim();
      
      // Check for NEW! badge in second card
      if (headingText.includes('NEW!')) {
        const parts = headingText.split('NEW!');
        cells[0].innerHTML = `${parts[0].trim()}<span class="split-signup-badge">NEW!</span>`;
      }
    }

    // Cell 1: Description
    if (cells[1]) {
      cells[1].classList.add('split-signup-description');
    }

    // Cell 2: Primary CTA button
    if (cells[2]) {
      cells[2].classList.add('split-signup-cta');
    }

    // Cell 3: Secondary link (if present)
    if (cells[3]) {
      cells[3].classList.add('split-signup-secondary');
      // Style inline links as text links, not buttons
      const links = cells[3].querySelectorAll('a');
      links.forEach(link => {
        link.classList.add('text-link');
      });
    }
  });
}