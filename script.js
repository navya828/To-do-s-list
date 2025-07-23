function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");
  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  listItem.addEventListener("click", function () {
    listItem.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "❌";
  deleteBtn.className = "delete";
  deleteBtn.addEventListener("click", function () {
    listItem.remove();
  });

  listItem.appendChild(deleteBtn);
  taskList.appendChild(listItem);
  taskInput.value = "";
}
