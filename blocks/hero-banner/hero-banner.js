export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];
  const contentCell = cells[0];
  const imageCell = cells[1];

  if (contentCell) {
    contentCell.classList.add('hero-banner-content');
  }

  if (imageCell) {
    imageCell.classList.add('hero-banner-image');
    const img = imageCell.querySelector('img');
    if (img) {
      img.classList.add('hero-banner-bg-image');
    }
  }
}