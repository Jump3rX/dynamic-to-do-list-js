document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage and populate the list
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => {
      createTaskElement(taskText);
    });
  }

  // Save tasks to Local Storage
  function saveTasksToLocalStorage() {
    const tasks = Array.from(taskList.children).map((item) =>
      item.textContent.replace("Remove", "").trim()
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Create and append a task element
  function createTaskElement(taskText) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.onclick = function () {
      taskList.removeChild(listItem); // Remove the task from DOM
      saveTasksToLocalStorage(); // Update Local Storage
    };

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
  }

  // Add a new task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
    createTaskElement(taskText); // Add task to the DOM
    saveTasksToLocalStorage(); // Save task to Local Storage
    taskInput.value = ""; // Clear input field
  }

  // Add event listeners
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Load tasks from Local Storage when the page loads
  loadTasks();
});
