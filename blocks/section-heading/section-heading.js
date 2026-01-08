export default function decorate(block) {
  // Simple section heading - minimal JS needed
  const row = block.children[0];
  if (row) {
    row.classList.add('section-heading-content');
  }
}