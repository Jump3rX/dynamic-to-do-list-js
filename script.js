// Step 1: Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", () => {
  // Step 2: Select DOM Elements
  const addButton = document.getElementById("add-task-btn"); // "Add Task" button
  const taskInput = document.getElementById("task-input"); // Input field for tasks
  const taskList = document.getElementById("task-list"); // <ul> to display tasks

  // Step 3: Create the addTask Function
  function addTask() {
    // Retrieve and trim the value from the input field
    const taskText = taskInput.value.trim();

    // Check if taskText is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Task Creation and Removal
    const listItem = document.createElement("li"); // Create a new <li> element
    listItem.textContent = taskText; // Set the task text

    const removeButton = document.createElement("button"); // Create a remove button
    removeButton.textContent = "Remove"; // Set button text
    removeButton.className = "remove-btn"; // Add a class name for styling

    // Assign an onclick event to remove the task
    removeButton.onclick = () => {
      taskList.removeChild(listItem); // Remove the <li> element from the list
    };

    // Append the remove button to the <li> and <li> to the <ul>
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
  }

  // Step 4: Attach Event Listeners
  addButton.addEventListener("click", addTask); // Call addTask when the button is clicked

  // Add tasks on pressing the "Enter" key
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
