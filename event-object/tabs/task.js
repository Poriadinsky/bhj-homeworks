const tabs = document.querySelectorAll('.tab');

const tabContents = document.querySelectorAll('.tab__content');

tabs.forEach((tab, tabIndex) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.remove('tab_active');
    });

    tab.classList.add('tab_active');

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('tab__content_active');
    });

    tabContents[tabIndex].classList.add('tab__content_active');
  });
});