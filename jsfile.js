document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value;

    if (taskText.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const todoColumn = document.getElementById('todo').querySelector('ul');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskItem.addEventListener('click', moveTask);
    todoColumn.appendChild(taskItem);

    taskInput.value = '';
}

function moveTask(event) {
    const taskItem = event.target;
    const currentColumn = taskItem.parentElement.parentElement.id;

    let nextColumn;
    if (currentColumn === 'todo') {
        nextColumn = document.getElementById('in-progress').querySelector('ul');
    } else if (currentColumn === 'in-progress') {
        nextColumn = document.getElementById('done').querySelector('ul');
    } else {
        nextColumn = document.getElementById('todo').querySelector('ul');
    }

    nextColumn.appendChild(taskItem);
}
