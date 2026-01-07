export default function decorate(block) {
  const rows = [...block.children];
  
  // First row is header section
  if (rows[0]) {
    rows[0].classList.add('signup-options-header');
    const headerCells = [...rows[0].children];
    if (headerCells[0]) headerCells[0].classList.add('signup-options-title');
    if (headerCells[1]) headerCells[1].classList.add('signup-options-description');
  }

  // Create columns wrapper for options
  const columnsWrapper = document.createElement('div');
  columnsWrapper.classList.add('signup-options-columns');

  // Second row is RBC clients option
  if (rows[1]) {
    rows[1].classList.add('signup-options-column', 'signup-options-rbc');
    const rbcCells = [...rows[1].children];
    if (rbcCells[0]) rbcCells[0].classList.add('signup-options-column-title');
    if (rbcCells[1]) rbcCells[1].classList.add('signup-options-column-desc');
    if (rbcCells[2]) rbcCells[2].classList.add('signup-options-column-cta');
    if (rbcCells[3]) rbcCells[3].classList.add('signup-options-column-secondary');
    columnsWrapper.appendChild(rows[1]);
  }

  // Third row is Everyone else option
  if (rows[2]) {
    rows[2].classList.add('signup-options-column', 'signup-options-everyone');
    const everyoneCells = [...rows[2].children];
    if (everyoneCells[0]) {
      everyoneCells[0].classList.add('signup-options-column-title');
      // Check if NEW badge exists and wrap it properly
      const titleText = everyoneCells[0].innerHTML;
      if (titleText.includes('NEW!') && !titleText.includes('new-badge')) {
        everyoneCells[0].innerHTML = titleText.replace('NEW!', '<span class="new-badge">NEW!</span>');
      }
    }
    if (everyoneCells[1]) everyoneCells[1].classList.add('signup-options-column-desc');
    if (everyoneCells[2]) everyoneCells[2].classList.add('signup-options-column-cta');
    if (everyoneCells[3]) everyoneCells[3].classList.add('signup-options-column-secondary');
    columnsWrapper.appendChild(rows[2]);
  }

  // Insert columns wrapper after header
  if (rows[0] && rows[0].nextSibling) {
    block.insertBefore(columnsWrapper, rows[0].nextSibling);
  } else {
    block.appendChild(columnsWrapper);
  }

  // Fourth row is eligibility footer
  if (rows[3]) {
    rows[3].classList.add('signup-options-footer');
    block.appendChild(rows[3]);
  }
}