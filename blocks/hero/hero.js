export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;

  const cells = [...row.children];
  if (cells[0]) cells[0].classList.add('hero-image');
  if (cells[1]) cells[1].classList.add('hero-content');

  // If first cell is image, move it to background
  const firstImg = cells[0]?.querySelector('img');
  if (firstImg) {
    block.classList.add('hero-with-bg');
  }
}
