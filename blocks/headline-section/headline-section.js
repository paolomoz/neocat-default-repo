export default function decorate(block) {
  const row = block.children[0];
  if (row) {
    row.classList.add('headline-section-content');
    const cell = row.children[0];
    if (cell) {
      cell.classList.add('headline-section-text');
    }
  }
}