import {todoList} from './ToDos.js'

//save to local storage and convert to JSON

function saveLocal() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}