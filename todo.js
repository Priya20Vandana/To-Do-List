let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");
let emptyMessage = document.getElementById("emptyMessage");


addTaskBtn.addEventListener("click", function () {

    let taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }


    // Create task card
    let taskItem = document.createElement("div");

    taskItem.classList.add("task-item");


    // Create top section
    let taskTop = document.createElement("div");

    taskTop.classList.add("task-top");


    // Create task label
    let taskLabel = document.createElement("p");

    taskLabel.textContent = "TASK";

    taskLabel.classList.add("task-label");


    // Create task text
    let taskTextElement = document.createElement("p");

    taskTextElement.textContent = taskText;

    taskTextElement.classList.add("task-text");


    // Add label and text to top section
    taskTop.appendChild(taskLabel);

    taskTop.appendChild(taskTextElement);


    // Create action section
    let taskActions = document.createElement("div");

    taskActions.classList.add("task-actions");


    // Create delete button
    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");


    // Delete task
    deleteBtn.addEventListener("click", function () {

        taskItem.remove();

        updateTaskCount();

    });


    // Create done button
let doneBtn = document.createElement("button");

doneBtn.textContent = "Mark Done";

doneBtn.classList.add("done-btn");


// Mark task as done
doneBtn.addEventListener("click", function () {

    taskItem.classList.toggle("completed");


    if (taskItem.classList.contains("completed")) {

        doneBtn.textContent = "Completed";

    } else {

        doneBtn.textContent = "Mark Done";

    }

});


    // Add buttons to action section
    taskActions.appendChild(deleteBtn);

    taskActions.appendChild(doneBtn);


    // Add sections to task card
    taskItem.appendChild(taskTop);

    taskItem.appendChild(taskActions);


    // Add task card to task list
    taskList.appendChild(taskItem);


    // Hide empty message
    emptyMessage.style.display = "none";


    // Clear input
    taskInput.value = "";


    // Update count
    updateTaskCount();

});


function updateTaskCount() {

    let tasks = document.querySelectorAll(".task-item");

    taskCount.textContent = tasks.length;


    if (tasks.length === 0) {

        emptyMessage.style.display = "block";

    }

}