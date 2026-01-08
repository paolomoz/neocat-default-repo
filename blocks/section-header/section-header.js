export default function decorate(block) {
  const row = block.children[0];
  if (row) {
    row.classList.add('section-header-content');
  }
}