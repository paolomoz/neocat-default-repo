export default function decorate(block) {
  // Structure is already set in HTML
  const content = block.querySelector('.avion-hero-content');
  const text = block.querySelector('.avion-hero-text');
  
  if (!content && block.children[0]) {
    block.children[0].classList.add('avion-hero-content');
    if (block.children[0].children[0]) {
      block.children[0].children[0].classList.add('avion-hero-text');
    }
  }
}