export default function decorate(block) {
  const row = block.children[0];
  if (row) {
    row.classList.add('promo-content');
    const cells = [...row.children];
    if (cells[0]) cells[0].classList.add('promo-heading');
    if (cells[1]) cells[1].classList.add('promo-description');
    if (cells[2]) cells[2].classList.add('promo-cta');
  }
}