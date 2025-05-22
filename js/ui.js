export function renderTasks(tasks, container) {
  container.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.dataset.id = task.id;
    li.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.classList.add('task-checkbox');
    checkbox.setAttribute('aria-label', `Mark task "${task.text}" as completed`);

    const span = document.createElement('span');
    span.textContent = task.text;
    if (task.completed) {
      span.style.textDecoration = 'line-through';
      span.classList.add('completed-task');
    }

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.classList.add('delete-btn');
    delBtn.setAttribute('aria-label', `Delete task "${task.text}"`);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    container.appendChild(li);
  });
}
