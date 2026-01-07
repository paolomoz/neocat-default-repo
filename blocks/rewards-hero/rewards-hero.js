export default function decorate(block) {
  const row = block.children[0];
  if (row) {
    row.classList.add('rewards-hero-content');
    const cell = row.children[0];
    if (cell) {
      cell.classList.add('rewards-hero-text');
    }
  }
}