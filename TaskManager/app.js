let tasks = [];
let visibleTasks = [];
//Named function: Adds a task
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;
  const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };
  tasks.push(task);
  input.value = "";
  showAllTasks();
}
//Anonymous function: add event listner
document.getElementById("addBtn").addEventListener("click", function () {
  addTask();
});

const renderTasks = () => {
  const list = document.getElementById("taskList");
  console.log(visibleTasks);
  list.innerHTML = "";
  visibleTasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.className = task.completed ? "completed" : "";

    //call back functions for actions
    li.addEventListener("click", () => toggleTask(task.id));
    li.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      deleteTask(task.id);
    });
    list.appendChild(li);
  });
};

//Named function toggle task completion
function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
    showAllTasks();
  }
}
//delete a task
function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  showAllTasks();
}

//named functions for filters
function filterTasks(callback) {
  visibleTasks = tasks.filter(callback);
  renderTasks();
}

function showAllTasks() {
  visibleTasks = [...tasks];
  renderTasks();
}

function showCompletedTasks() {
  filterTasks((task) => task.completed); //Arrow + callback
}

function showPendingTasks() {
  filterTasks((task) => !task.completed);
}

showAllTasks();
