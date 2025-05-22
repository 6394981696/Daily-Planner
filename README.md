# Daily-Planner

## 1. Overview & Goals
This project is a simple **Daily Planner** web application that allows users to add, complete, delete, and search daily tasks. The main focus is on:

- Using semantic HTML for better accessibility and structure.
- Modular JavaScript with ES6 modules.
- CSS layout techniques like Flexbox and Grid.
- Persisting data using `localStorage`.
- Performance optimization using debounce and throttle for input and scroll events.

## 2. Core Features
- **Header:** Displays the app title, e.g., "My Daily Planner".
- **Add Task Form:** 
  - Input field for entering new tasks.
  - Add button to submit new tasks.
- **Task List:**
  - Shows the list of tasks.
  - Each task has task text, a checkbox or strikethrough for marking completion, and a delete button.
- **Search Bar:** 
  - Filters tasks as user types with a debounced input to improve performance.
- **Persistent Storage:** 
  - All tasks are saved in and loaded from the browser's `localStorage`.

## 3. Stretch Goals
- "Back to Top" button that appears on scroll (with throttled scroll event handling).
- Modularize JavaScript code using ES6 modules.
- Add categories or tags to tasks (e.g., Personal, Work, Study).
- Optional "Clear All Tasks" button to remove all tasks at once.

## 4. Tech Stack & Tools
- **HTML5:** Semantic tags for meaningful markup.
- **CSS3:** Box Model, Flexbox/Grid layouts, and Media Queries for responsiveness.
- **JavaScript (ES6+):** DOM manipulation, localStorage, modules, debounce, and throttle techniques.
- **Optional:** Git for version control and GitHub Pages for live deployment.

## 5. Project Setup
- Clone the repository.
- Open `index.html` in your browser to run the app.
- No build commands required since this is a vanilla JS project.

## 6. How to Use
- Add tasks using the input and "Add" button.
- Mark tasks as completed by checking the checkbox.
- Delete tasks using the delete button.
- Search tasks via the search bar, with results filtered in real time.
- Tasks persist on page reload using `localStorage`.

## 7. Submission
- The project code is clean and modular with comments.
- This README describes project setup and functionalities.
- GitHub repository link: [origin git@github.com:6394981696/Daily-Planner.git]

---

Feel free to customize and expand on this README as you develop the project.
