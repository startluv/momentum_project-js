const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
let todos =[];

function saveTodo(){
    localStorage.setItem("todos",JSON.stringify(todos));

}

function paintTodo(newtodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newtodo.text;
    li.id = newtodo.id;
    button.innerText = "X";
    button.addEventListener("click",deleteTodo);
    todoList.appendChild(li);    
}



function handleTodoSubmit(event){
    event.preventDefault();
    const newtodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text : newtodo,
        id : Date.now()
        };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

function deleteTodo(event){
    const delLi = event.target.parentElement;
    delLi.remove();
    todos = todos.filter((toDo)=>toDo.id !== parseInt(delLi.id));
    console.log(delLi.id);
    saveTodo();
    
}

function sexyFilter(todo){
    return todo.id !== Number 
}

todoForm.addEventListener("submit",handleTodoSubmit);


const savedTodos = localStorage.getItem("todos");
console.log(savedTodos);
if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
    //함수를 호출할때 item도 first argument로 숨겨진채로 넘겨줌.
}

