const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("add-task");
const getTaskList = document.getElementById("tasks");

addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      getTaskList.removeChild(taskItem);
    });

    taskItem.appendChild(removeButton);
    getTaskList.appendChild(taskItem);

    taskInput.value = "";
  }
});
