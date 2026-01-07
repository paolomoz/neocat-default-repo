export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    const cells = [...row.children];
    row.classList.add('option-card');

    if (cells[0]) {
      cells[0].classList.add('option-title');
      // Check for badge text (NEW!)
      const titleContent = cells[0].textContent;
      if (titleContent.includes('NEW!')) {
        const titleText = titleContent.replace('NEW!', '').trim();
        cells[0].innerHTML = `${titleText}<span class="badge">NEW!</span>`;
      }
    }

    if (cells[1]) {
      cells[1].classList.add('option-description');
    }

    if (cells[2]) {
      cells[2].classList.add('option-cta');
    }

    if (cells[3]) {
      cells[3].classList.add('option-secondary');
    }
  });
}