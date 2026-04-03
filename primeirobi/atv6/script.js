const QUOTES = [
    '"Doing what you love is the cornerstone of having abundance in your life." – Wayne Dyer',
    '"The secret of getting ahead is getting started." – Mark Twain',
    '"You don\'t have to be great to start, but you have to start to be great." – Zig Ziglar',
    '"Action is the foundational key to all success." – Pablo Picasso',
    '"Focus on being productive instead of busy." – Tim Ferriss',
];

document.addEventListener("DOMContentLoaded", function () {
    setRandomQuote();
    seedExampleTasks();
});

// -- Entry point

function createNewTask(event) {
    event.preventDefault();

    const input = document.getElementById("new-task");
    const task = input.value.trim();

    if (!isValidTask(task)) return; 

    createNewTaskListItem(task);
    cleanInputTaskField(input);
    updateFooter();
}

// -- Validation

function isValidTask(task) {
    return task.length > 0;
}

// -- DOM

function createNewTaskListItem(task) {
    const tasks = document.getElementById("tasks");
    const taskComponent = createNewTaskComponent(task);
    tasks.appendChild(taskComponent);
}

function createNewTaskComponent(task) {
    const taskLi = document.createElement("li");
    const div = document.createElement("div");

    const checkbox = createCheckbox();
    const taskSpan = createTaskSpan(task);
    const deleteBtn = createDeleteButton(taskLi); 

    taskLi.classList.add("task");
    div.classList.add("task-container");

    div.appendChild(checkbox);
    div.appendChild(taskSpan);
    div.appendChild(deleteBtn);
    taskLi.appendChild(div);

    return taskLi;
}

function createCheckbox() {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", updateFooter); 
    return checkbox;
}

function createTaskSpan(task) {
    const taskSpan = document.createElement("span");
    taskSpan.classList.add("task-text");
    taskSpan.textContent = task;
    return taskSpan;
}

function createDeleteButton(taskLi) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.classList.add("del-btn");
    deleteBtn.addEventListener("click", function () { 
        deleteTask(taskLi);
    });
    return deleteBtn;
}
// -- Footer

function updateFooter() {
    updateRemainingCount();
}

function updateRemainingCount() {
    const remaining = document.getElementById("remaining");
    if (!remaining) return;

    const unchecked = document.querySelectorAll(
        "#tasks input[type='checkbox']:not(:checked)"
    ).length;

    remaining.textContent = "Your remaining todos : " + unchecked;
}

function setRandomQuote() { 
    const quoteEl = document.getElementById("quote");
    if (!quoteEl) return;

    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    quoteEl.textContent = QUOTES[randomIndex];
}

// -- Actions 

function deleteTask(taskLi) {
    taskLi.remove();
    updateFooter();
}

function cleanInputTaskField(input) {
    input.value = "";
}