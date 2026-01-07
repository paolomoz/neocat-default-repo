export default function decorate(block) {
  const row = block.children[0];
  if (row) {
    row.classList.add('hero-banner-content');
    const contentCell = row.children[0];
    if (contentCell) {
      contentCell.classList.add('hero-banner-text');
    }
  }
}