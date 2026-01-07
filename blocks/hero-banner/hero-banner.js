export default function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    row.classList.add('hero-banner-content');
    const cells = [...row.children];
    if (cells[0]) {
      cells[0].classList.add('hero-banner-text');
    }
  });
}