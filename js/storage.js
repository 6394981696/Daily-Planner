const STORAGE_KEY = 'daily-planner-tasks';
export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
export function loadTasks() {
  const tasksJson = localStorage.getItem(STORAGE_KEY);
  if (!tasksJson) return [];
  try {
    return JSON.parse(tasksJson);
  } catch {
    return [];
  }
}
