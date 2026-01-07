export default function decorate(block) {
  const rows = [...block.children];
  
  rows.forEach((row) => {
    row.classList.add('promo-banner-row');
    const cells = [...row.children];
    
    if (cells[0]) {
      cells[0].classList.add('promo-banner-content');
      
      // Find and style the strikethrough text
      const heading = cells[0].querySelector('h2');
      if (heading) {
        const headingText = heading.innerHTML;
        // The strikethrough span should already be in the HTML
      }
      
      // Style the CTA button
      const links = cells[0].querySelectorAll('a');
      links.forEach((link) => {
        if (link.classList.contains('cta-button') || link.textContent.includes('kaufen')) {
          link.classList.add('cta-button');
        }
      });
      
      // Style discount text
      const paragraphs = cells[0].querySelectorAll('p');
      paragraphs.forEach((p) => {
        if (p.textContent.includes('Spare') || p.textContent.includes('%')) {
          p.classList.add('discount-text');
        }
      });
    }
    
    if (cells[1]) {
      cells[1].classList.add('promo-banner-images');
      
      const images = cells[1].querySelectorAll('img');
      images.forEach((img) => {
        img.classList.add('product-images');
      });
    }
  });
}