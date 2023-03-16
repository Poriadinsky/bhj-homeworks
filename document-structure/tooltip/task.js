const tooltipElements = document.querySelectorAll('.has-tooltip');

tooltipElements.forEach((element) => {
   element.addEventListener('click', (event) => {
      event.preventDefault();

      const tooltipText = event.target.getAttribute('title');
      const tooltip = document.createElement('div');

      tooltip.classList.add('tooltip');
      tooltip.innerText = tooltipText;

      const elementRect = event.target.getBoundingClientRect();
      const elementX = elementRect.x + elementRect.width / 2;
      const elementY = elementRect.y + elementRect.height + 5;

      tooltip.style.left = elementX + 'px';
      tooltip.style.top = elementY + 'px';

      document.body.appendChild(tooltip)
   });
});
