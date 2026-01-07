export default function decorate(block) {
  const rows = [...block.children];
  
  // Clear the block
  block.innerHTML = '';
  
  // First row is the header
  if (rows.length > 0) {
    const headerRow = rows[0];
    const headerCells = [...headerRow.children];
    
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('faq-header');
    
    if (headerCells[0]) {
      const title = document.createElement('h2');
      title.classList.add('faq-title');
      title.textContent = headerCells[0].textContent.trim();
      headerDiv.appendChild(title);
    }
    
    if (headerCells[1]) {
      const subtitle = document.createElement('p');
      subtitle.classList.add('faq-subtitle');
      subtitle.textContent = headerCells[1].textContent.trim();
      headerDiv.appendChild(subtitle);
    }
    
    block.appendChild(headerDiv);
  }
  
  // Remaining rows are FAQ items
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const cells = [...row.children];
    
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');
    
    // Question
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('faq-question');
    
    const questionText = document.createElement('span');
    questionText.classList.add('faq-question-text');
    questionText.textContent = cells[0] ? cells[0].textContent.trim() : '';
    questionDiv.appendChild(questionText);
    
    const icon = document.createElement('span');
    icon.classList.add('faq-icon');
    questionDiv.appendChild(icon);
    
    faqItem.appendChild(questionDiv);
    
    // Answer
    const answerDiv = document.createElement('div');
    answerDiv.classList.add('faq-answer');
    
    const answerContent = document.createElement('div');
    answerContent.classList.add('faq-answer-content');
    answerContent.textContent = cells[1] ? cells[1].textContent.trim() : '';
    answerDiv.appendChild(answerContent);
    
    faqItem.appendChild(answerDiv);
    
    // Click handler for accordion
    questionDiv.addEventListener('click', () => {
      const isActive = faqItem.classList.contains('active');
      
      // Close all other items
      block.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Toggle current item
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
    
    block.appendChild(faqItem);
  }
}