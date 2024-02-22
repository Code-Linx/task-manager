function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  const taskText = document.createTextNode(taskInput.value);

  const listItem = document.createElement("li");
  listItem.appendChild(taskText);

  const deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.classList.add("delete-btn");
  deleteButton.onclick = function () {
    taskList.removeChild(listItem);
  };

  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  taskInput.value = "";
}
