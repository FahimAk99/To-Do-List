document.addEventListener('DOMContentLoaded', function () {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    // Function to add new task
    function addTask() {
      const taskText = taskInput.value;
      if (taskText === '') {
        alert('Please enter a task');
        return;
      }
  
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = taskText;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');
  
      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
  
      taskInput.value = ''; // Clear input field
  
      // Delete task functionality
      deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
      });
    }
  
    // Add task when button is clicked
    addTaskBtn.addEventListener('click', addTask);
  
    // Add task when Enter is pressed
    taskInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  });