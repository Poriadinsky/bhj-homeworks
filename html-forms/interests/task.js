const checkBoxes = document.querySelectorAll('.interest__check');

checkBoxes.forEach(function (checkbox) {
   checkbox.addEventListener('change', function (event) {
      let parentLi = event.target.closest('.interest');
      let parentCheckbox = parentLi.querySelector('.interest__check');
      let childCheckboxes = parentLi.querySelectorAll('.interest__check');

      if (event.target === parentCheckbox) {
         childCheckboxes.forEach(function (childCheckbox) {
            childCheckbox.checked = parentCheckbox.checked;
         });
      } else {
         let checkedChilds = parentLi.querySelectorAll('.interest__check:checked');
         if (checkedChilds.length === 0) {
            parentCheckbox.checked = false;
            parentCheckbox.indeterminate = false;
         } else if (checkedChilds.length === childCheckboxes.length) {
            parentCheckbox.checked = true;
            parentCheckbox.indeterminate = false;
         } else {
            parentCheckbox.indeterminate = true;
         }
      }
   });
});