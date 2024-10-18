# To-Do-List
## Building an Interactive To-Do List with HTML, CSS, and JavaScript

In this blog, I'll walk you through how to build a simple, yet interactive *To-Do List* using *HTML, **CSS, and **JavaScript*. This is a great beginner-level project that introduces the core concepts of DOM manipulation and event handling, providing a fun way to improve your front-end development skills.

### Project Overview
Our To-Do List allows users to:
- Add new tasks.
- View tasks in a neat, organized list.
- Delete tasks once they're completed.

### Step 1: HTML Structure
We start by creating the basic structure of our webpage in HTML. This includes an input field for adding tasks, a button to submit them, and a list to display the tasks.

HTML CODE -------------------------------->

In this simple structure:
- The *input* field allows the user to enter a task.
- The *button* triggers the action of adding a new task.
- The *ul* element will display the tasks as list items.



### Step 2: Styling with CSS
Next, we define the styles in styles.css to make the interface visually appealing. We use a clean and minimalistic design with rounded corners and some spacing.

CSS CODE -------------------------------->


Key points in the CSS:
- *Container styling:* A clean, centered white box with shadow and padding.
- *Buttons:* We add hover effects to make the interaction more engaging.
- *List items:* Each task is displayed in a light-colored box with a delete button beside it.


### Step 3: Adding Interactivity with JavaScript
The functionality is brought to life using *JavaScript*. We handle events like adding tasks when clicking the button or pressing Enter, and deleting tasks with a button click.

JAVASCRIPT CODE -------------------------------->


Here's a breakdown of what the JavaScript does:
- *Adding tasks:* When a user types in the input field and clicks "Add Task" (or presses Enter), a new list item (with the task text and delete button) is created and appended to the task list.
- *Deleting tasks:* Each task has a delete button, and clicking it removes the task from the list.

### Conclusion
This To-Do List project is an excellent introduction to working with *HTML, **CSS, and **JavaScript*. It covers essential web development concepts such as DOM manipulation, event listeners, and styling. With just a few lines of code, we’ve created a fully functional to-do list that’s interactive and easy to use.

You can extend this project by adding more features such as:
- *Task editing.*
- *Marking tasks as complete.*
- *Saving tasks to local storage* to maintain them even after refreshing the page.
