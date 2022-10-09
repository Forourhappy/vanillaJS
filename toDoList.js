const toDoInput = document.querySelector('#toDoForm input');
const toDoList = document.querySelector('#toDoList');

let todoItems = [];
/** 클릭 시 저장소에 값 저장 */
function toDoEvent(e) {
  e.preventDefault();
  const newTodoObj = {
    id: Date.now(),
    text: toDoInput.value
  }
  toDoInput.value = '';
  addToDo(newTodoObj);
  saveTodo();
}

/** 투두 리스트 생성 */
function addToDo(newTodoObj) {
  const li = document.createElement('li');
  li.id = newTodoObj.id;
  const span = document.createElement('span');
  span.innerText = newTodoObj.text;
  li.appendChild(span);
  todoItems.push(newTodoObj);
  const button = document.createElement('button');
  button.innerText = "지우기";
  li.appendChild(button);
  button.addEventListener('click', deleteTodo);
  toDoList.appendChild(li);
}

/** 투두 리스트 항목 삭제 */
function deleteTodo(e) {
  const li = e.target.parentElement;
  todoItems = todoItems.filter(i => {
    return i.id !== parseInt(li.id);
  });
  li.remove();
  saveTodo();
}
/** 스토리지에 투두 리스트 저장 */
function saveTodo() {
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

toDoForm.addEventListener('submit', toDoEvent);

const savedTodoItems = localStorage.getItem('todoItems');

if(savedTodoItems !== null) {
  const parsedTodoItems = JSON.parse(savedTodoItems);
  parsedTodoItems.map(i => (
    addToDo(i)
  ));
}