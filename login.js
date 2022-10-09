const loginForm = document.querySelector("#loginForm");
const greeting = document.querySelector('#greeting');
const toDoForm = document.querySelector('#toDoForm');

function login(e) {
  e.preventDefault();
  const logInput = document.querySelector('#loginForm input');
  const userName = logInput.value;
  localStorage.setItem('userName', userName);
  loginForm.classList.add('hidden');
  toDoForm.classList.remove('hidden');
  hello(userName);
}

function hello(userName) {
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove('hidden');
}

const savedUserName = localStorage.getItem('userName');

if(savedUserName === null) {
  loginForm.classList.remove('hidden');
  loginForm.addEventListener('submit', login);
}else {
  hello(savedUserName);
  toDoForm.classList.remove('hidden');
}