//get form & user input
const inputForm = document.querySelector('.inputForm');
const taskInput = document.querySelector('.addTask');
const todoTaskList = document.querySelector('.todoTaskList');

//create array and add task information to array
let todoList = [];
inputForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addTask(taskInput.value);
});

function addTask(item) {
    if(item != '') {
        const todo = {
            id: Date.now(), //create a random id number for each item
            content: item,
            completed: false
        };
        todoList.push(todo);
        saveLocal(todoList);
        taskInput.value = '';
    }
}

//display tasks and new buttons
function displayTask(todoList){

    todoTaskList.innerHTML = '';
    todoList.forEach(function(item) {
        const done = item.completed ? 'checked': null;

        const li = document.createElement('li');
        li.setAttribute('class', 'addedTask');
        li.setAttribute('itemId', item.id);

        if(item.completed === true) {
            li.classList.add('checked');
        }
        li.innerHTML = `
        <input type="checkbox" class="checkbox" ${done}>${item.content}
        <button type="button" class="taskList-btns">X</button>
        `;
        todoTaskList.append(li);
        counter();
    });
}

function saveLocal(todoList){
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayTask(todoList);
}

//delete task
function deleteTask(id) {
    todoList = todoList.filter(todo => todo.id != id);
    saveLocal(todoList);
};

//complete task
function toggle(id) {
    todoList.forEach(function(item) {
        if(item.id == id) {
            item.completed = !item.completed;
        }
    });
    saveLocal(todoList);
}

todoTaskList.addEventListener('click', function(event) {
    if(event.target.type === 'checkbox') {
        toggle(event.target.parentElement.getAttribute('itemId'));
    }

    if(event.target.classList.contains('taskList-btns')) {
        const id = event.target.parentElement.getAttribute('itemId');
        deleteTask(id);
        counter();
    }
});

//count tasks left
function counter(){
    const taskCount = document.getElementById('tasksLeft');
    if(todoList != null) {
        taskCount.innerHTML = `
        ${todoList.length} task(s) left
        `;
    }
}
counter();