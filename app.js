let mon = document.getElementById('mon');
let tue = document.getElementById('tue');
let wed = document.getElementById('wed');
let thu = document.getElementById('thu');
let fri = document.getElementById('fri');
let sat = document.getElementById('sat');
let sun = document.getElementById('sun');


let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];


var todo = document.getElementById("eventTitleInput");


weekdays = document.querySelector(".weekdays");
saveButton = document.getElementById("saveButton");
deleteButton = document.getElementById("deleteButton");
closeButton = document.getElementById("closeButton");
newModalBackDrop = document.getElementById("newModalBackDrop");


//Load Function
function load(){
	//const eventForDay = events.find(e => e.date === clicked);

	
	weekdays.style.display = 'flex';
	newModalBackDrop.style.display = 'none';

	weekdays.addEventListener('click', openModal);
	document.querySelector("form").addEventListener('submit', saveModal)
	closeButton.addEventListener('click', closeModal);

	div = document.createElement('h1');
	div.classList.add('events');
	div.innerHTML = eventTitleInput.value;
	localStorage.getItem(targetDay)
	targetDay.append(div);
}


function openModal(e){
	targetDay = e.target.id;
	localStorage.setItem(targetDay, e.target);
	
	console.log(targetDay)
	
	document.querySelector(".weekdays").style.display = 'none';
	newModalBackDrop.style.display = 'flex';
}

function closeModal(){
	newModalBackDrop.style.display = 'none';
	document.querySelector(".weekdays").style.display = 'flex';
	eventTitleInput.value = 'hello';
	load();
}

function saveModal(){
	console.log("works")
	targetDay = localStorage.getItem(targetDay);
	console.log(targetDay)
	closeModal();
}


function addTodo(todo){
	let ul = document.querySelector("ul");
	let li = document.createElement("li");

	li.innerHTML = `
			<span class="todo-item">${todo}</span>
			<button name="checkButton"><i class="fas fa-check-square"></i></button>
			<button name="deleteButton"><i class="fas fa-trash"></i></button>
	`;

	li.classList.add("todo-list-item");
	ul.appendChild(li);
}

load();