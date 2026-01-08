export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    row.classList.add('card');

    // Create card structure
    const imageCell = cells[0];
    const eyebrowCell = cells[1];
    const headingCell = cells[2];
    const descriptionCell = cells[3];
    const ctaCell = cells[4];

    // Clear row and rebuild with proper structure
    row.innerHTML = '';

    // Image container with overlay
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('card-image');
    if (imageCell) {
      imageWrapper.innerHTML = imageCell.innerHTML;
    }
    row.appendChild(imageWrapper);

    // Gradient overlay
    const overlay = document.createElement('div');
    overlay.classList.add('card-overlay');
    row.appendChild(overlay);

    // Content container
    const content = document.createElement('div');
    content.classList.add('card-content');

    // Eyebrow
    if (eyebrowCell) {
      const eyebrow = document.createElement('div');
      eyebrow.classList.add('card-eyebrow');
      eyebrow.textContent = eyebrowCell.textContent;
      content.appendChild(eyebrow);
    }

    // Heading
    if (headingCell) {
      const heading = document.createElement('div');
      heading.classList.add('card-heading');
      const h2 = headingCell.querySelector('h2');
      if (h2) {
        heading.textContent = h2.textContent;
      } else {
        heading.textContent = headingCell.textContent;
      }
      content.appendChild(heading);
    }

    // Description
    if (descriptionCell) {
      const description = document.createElement('div');
      description.classList.add('card-description');
      description.textContent = descriptionCell.textContent;
      content.appendChild(description);
    }

    // CTA
    if (ctaCell) {
      const cta = document.createElement('div');
      cta.classList.add('card-cta');
      const link = ctaCell.querySelector('a');
      if (link) {
        cta.appendChild(link.cloneNode(true));
      } else {
        cta.innerHTML = ctaCell.innerHTML;
      }
      content.appendChild(cta);
    }

    row.appendChild(content);
  });
}