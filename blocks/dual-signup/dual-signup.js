export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    row.classList.add('dual-signup-card');

    if (cells[0]) {
      cells[0].classList.add('dual-signup-heading');
      const badge = cells[0].querySelector('.new-badge');
      if (!badge) {
        const headingText = cells[0].innerHTML;
        if (headingText.includes('NEW!')) {
          cells[0].innerHTML = headingText.replace(/<span class="new-badge">NEW!<\/span>/g, '') + '<span class="new-badge">NEW!</span>';
        }
      }
    }

    if (cells[1]) {
      cells[1].classList.add('dual-signup-description');
    }

    if (cells[2]) {
      cells[2].classList.add('dual-signup-cta');
    }

    if (cells[3]) {
      cells[3].classList.add('dual-signup-secondary');
    }
  });
}