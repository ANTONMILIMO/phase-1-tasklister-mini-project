document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById('create-task-form');
  const userTasks = document.getElementById('tasks');
  taskForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const newTask = document.getElementById('new-task-description').value;

    if (newTask.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = newTask;
      userTasks.appendChild(li);
      taskForm.reset();
    }
  });
});
