const hasTooltip = document.querySelectorAll('.has-tooltip');

function setTooltipActive(event) {
   const tooltipActive = document.querySelector('.tooltip_active');

   event.preventDefault();

   if (tooltipActive) {
      tooltipActive.classList.remove('tooltip_active');
      if (tooltipActive.textContent == this.title) {
         return false;
      }
   }

   const tooltip = document.createElement('div');
   tooltip.classList.add('tooltip', 'tooltip_active');
   tooltip.textContent = this.getAttribute('title');
   const coordinates = this.getBoundingClientRect();
   tooltip.style.top = coordinates.top + coordinates.height + 3 + 'px';
   tooltip.style.left = coordinates.left + 'px';
   document.body.appendChild(tooltip);
}

for (const element of hasTooltip) {
   element.addEventListener('click', setTooltipActive);
}
