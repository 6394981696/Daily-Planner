import { debounce, throttle } from './utils.js';
import { saveTasks, loadTasks } from './storage.js';

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskCategory = document.getElementById('task-category');
const taskList = document.getElementById('task-list');
const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-tasks');
const backToTopBtn = document.getElementById('back-to-top');

let tasks = loadTasks(); 
let filteredTasks = [...tasks];
function renderTasks(tasksToRender) {
  taskList.innerHTML = '';

  if (tasksToRender.length === 0) {
    taskList.innerHTML = '<li>No tasks found.</li>';
    return;
  }

  tasksToRender.forEach((task) => {
    const li = document.createElement('li');
    li.dataset.id = task.id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.className = 'task-checkbox';
    checkbox.setAttribute('aria-label', `Mark task "${task.text}" complete`);

    const spanText = document.createElement('span');
    spanText.textContent = task.text;
    spanText.className = 'task-text';

    const spanCategory = document.createElement('span');
    spanCategory.textContent = `[${task.category}]`;
    spanCategory.className = 'task-category';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.setAttribute('aria-label', `Delete task "${task.text}"`);

    li.appendChild(checkbox);
    li.appendChild(spanText);
    li.appendChild(spanCategory);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}
function addTask(text, category) {
  if (!text.trim()) return;

  const newTask = {
    id: Date.now().toString(),
    text,
    category,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks(tasks);
  filteredTasks = [...tasks];
  renderTasks(filteredTasks);
}
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks(tasks);
  filteredTasks = filteredTasks.filter((task) => task.id !== id);
  renderTasks(filteredTasks);
}
function toggleTaskComplete(id, completed) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = completed;
    saveTasks(tasks);
  }
}
function filterTasks(searchTerm) {
  if (!searchTerm.trim()) {
    filteredTasks = [...tasks];
  } else {
    filteredTasks = tasks.filter((task) =>
      task.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  renderTasks(filteredTasks);
}
function clearAllTasks() {
  if (confirm('Are you sure you want to clear all tasks?')) {
    tasks = [];
    filteredTasks = [];
    saveTasks(tasks);
    renderTasks(filteredTasks);
  }
}
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(taskInput.value, taskCategory.value);
  taskInput.value = '';
  taskInput.focus();
});
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const li = e.target.closest('li');
    if (li) deleteTask(li.dataset.id);
  }
});

taskList.addEventListener('change', (e) => {
  if (e.target.classList.contains('task-checkbox')) {
    const li = e.target.closest('li');
    if (li) toggleTaskComplete(li.dataset.id, e.target.checked);
    renderTasks(filteredTasks);
  }
});
searchInput.addEventListener(
  'input',
  debounce((e) => {
    filterTasks(e.target.value);
  }, 300)
);
clearBtn.addEventListener('click', clearAllTasks);
function toggleBackToTop() {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
}

window.addEventListener('scroll', throttle(toggleBackToTop, 200));

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
renderTasks(tasks);
