export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('logo-item');
    const cells = [...row.children];
    if (cells[0]) {
      cells[0].classList.add('logo-image');
    }
  });
}