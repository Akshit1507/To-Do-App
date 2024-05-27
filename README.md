# To-Do List React App

A modern, stylish To-Do List application built with React. This app allows users to add, remove, and mark tasks as completed. It also includes features for filtering tasks and saving them in local storage to persist data across sessions.

## Features

- Add new tasks
- Remove tasks
- Mark tasks as completed
- Filter tasks (All, Completed, Pending)
- Persist tasks using localStorage
- Stylish and responsive design

## Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd todo-list
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The app should automatically open in your default browser at `http://localhost:3000`.

## Usage

1. **Add a Task**: Type a task in the input field and click the "Add" button. The task will appear in the list.
2. **Remove a Task**: Click the "Remove" button next to a task. The task will be removed from the list.
3. **Mark as Completed**: Click on a task to mark it as completed. The task text will be struck through.
4. **Filter Tasks**: Use the filter buttons to display all, completed, or pending tasks.

## Testing Guidance

To test the To-Do List component:

1. **Add Tasks**: Type a task in the input field and click "Add". Ensure the task appears in the list.
2. **Remove Tasks**: Click the "Remove" button next to a task. Ensure the task is removed from the list.
3. **Mark as Completed**: Click on a task to mark it as completed. Ensure the task text is struck through.
4. **Filter Tasks**: Use the filter buttons to display all, completed, or pending tasks. Ensure the correct tasks are shown based on the selected filter.
5. **Local Storage**: Refresh the page and ensure the tasks persist.
