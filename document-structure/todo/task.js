const taskInputText = document.getElementById('task__input');
const taskInputButton = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

function removeTask() {
  const removedItem = this.closest('.task');
  taskList.removeChild(removedItem);
}

function newTask(event) {
  event.preventDefault();
  if (taskInputText.value.trim() !== '') {
    const newTaskAddDiv = `
      <div class="task">
        <div class="task__title">
          ${taskInputText.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>
    `;
    taskList.insertAdjacentHTML('beforeend', newTaskAddDiv);
    taskInputText.value = '';
    const taskRemoveButtons = document.querySelectorAll('.task__remove');
    taskRemoveButtons[taskRemoveButtons.length - 1].addEventListener('click', removeTask);
  }
}

function newTaskByEnter(event) {
  if (event.keyCode === 13){
    newTask();
  }
}

taskInputText.addEventListener('keydown', newTaskByEnter);
taskInputButton.addEventListener('click', newTask);
