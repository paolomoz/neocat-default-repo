export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    row.classList.add('dual-signup-card');

    if (cells[0]) {
      cells[0].classList.add('dual-signup-heading');
      // Check for NEW! badge in the heading
      const headingText = cells[0].textContent;
      if (headingText.includes('NEW!')) {
        const badge = document.createElement('span');
        badge.classList.add('dual-signup-badge');
        badge.textContent = 'NEW!';
        cells[0].innerHTML = cells[0].innerHTML.replace(/<span>NEW!<\/span>/, '').replace('NEW!', '');
        cells[0].textContent = cells[0].textContent.trim();
        cells[0].appendChild(badge);
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