## Todo List App

This repository contains code for a simple Todo List web application built using React. The application allows users to add, edit, delete, and mark tasks as completed. Additionally, users can filter tasks based on priority and status.

[See live site](https://todo-list-app-v1.vercel.app/)

### Features

- **Add Task**: Users can add new tasks to the list by entering task text and selecting a priority level.
- **Edit Task**: Tasks can be edited by clicking on the edit button and modifying the task text.
- **Delete Task**: Tasks can be deleted from the list by clicking on the delete button.
- **Mark Task as Completed**: Tasks can be marked as completed by clicking on the checkbox icon.
- **Filter by Priority**: Users can filter tasks based on priority levels (Regular or Important).
- **Filter by Status**: Users can filter tasks based on their status (Completed or Incomplete).

### Components

#### 1. Appbar (`Appbar.jsx`)

The Appbar component displays the application's title and summary statistics, including the total number of tasks and completed tasks.

#### 2. AddTask (`AddTask.jsx`)

The AddTask component allows users to input new tasks and select their priority level. It includes functionality to add the task to the list.

#### 3. AllTasks (`AllTasks.jsx`)

The AllTasks component displays the list of tasks. It provides options to edit, delete, and mark tasks as completed. Users can also filter tasks based on priority and status.

### Context and State Management

The application uses React context and state management to manage tasks. The `TaskContext` provides methods to add, delete, edit, and mark tasks as completed. Task data is stored in the local storage to persist tasks across sessions.

### Usage

To run the application locally:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `pnpm install`
3. Run the development server: `npm run dev`

### Technologies Used

- ReactJs
- NextJs
- JavaScript
- Tailwind CSS
- Shadcn UI

### Credits

This application was created by Imran Hasan Ovi. Feel free to contribute or provide feedback!
