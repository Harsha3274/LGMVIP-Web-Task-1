let tasks = [];

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.className = "task-item";

        const taskText = document.createElement("div");
        taskText.className = `task-text ${task.completed ? "completed" : ""}`;
        taskText.textContent = task.text;

        const taskActions = document.createElement("div");
        taskActions.className = "task-actions";

        const editButton = document.createElement("button");
        editButton.className = "edit";
        editButton.textContent = "Edit";
        editButton.onclick = () => editTask(index);

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTask(index);

        taskActions.appendChild(editButton);
        taskActions.appendChild(deleteButton);

        taskItem.appendChild(taskText);
        taskItem.appendChild(taskActions);

        taskList.appendChild(taskItem);
    });
}

function addTask() {
    const newTaskInput = document.getElementById("newTask");
    const taskText = newTaskInput.value.trim();

    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        newTaskInput.value = "";
        renderTasks();
    }
}

function editTask(index) {
    const newText = prompt("Edit task:", tasks[index].text);

    if (newText !== null && newText.trim() !== "") {
        tasks[index].text = newText.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();