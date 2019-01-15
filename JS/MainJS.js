var tasks = [];
var counter = 0;
var index = 0;

function addTask() {
	if (!validateTitle() || !validateWhen() || !validateDescription()){
		return;
	}
	addClick();

	var title = document.getElementById("titleInput");
	var when = document.getElementById("whenInput");
	var description = document.getElementById("descriptionInput");

	var taskObject = new Task(title.value, when.value, description.value, index);
		index++;
		tasks.push(taskObject);
		console.log(tasks);

	var element = createTask(taskObject);
	var index = document.getElementById("taskLists");
		index.appendChild(element);
	
	title.value = "";
	when.value = "";
	description.value = "";
}

function removeTask(event) {
	event.target.parentElement.remove();
	var idToRemove = event.target.id;

	for (var i=0; i<tasks.length; i++) {
		if (tasks[i].id == idToRemove) {
			tasks.splice(i, 1);
			break;
		}
	}
	getCounter();
	console.log(tasks);
}

function createTask(tasks) {
	var index = document.createElement("div");

	var title = document.createElement("h3");
		title.innerHTML = tasks.title;

	var when = document.createElement("p");
		when.innerHTML = tasks.when;

	var description = document.createElement("p");
		description.innerHTML = tasks.description;

	var removeTaskButton = document.createElement("img");
		removeTaskButton.className = "removeTask";
		removeTaskButton.id = tasks.id;
		removeTaskButton.onclick = removeTask;
		removeTaskButton.src = "Resources/IMG/DeleteButton.png";

		index.appendChild(title);
		index.appendChild(when);
		index.appendChild(description);
		index.appendChild(removeTaskButton);
		return index;
}

var clicks = tasks.length;
var addClick = function() {
	clicks += 1;
	document.getElementById("counter").innerHTML = clicks;
}

var getCounter = function() {
	clicks -= 1;
	document.getElementById("counter").innerHTML = clicks;
}

function validateTitle() {
	var title = document.getElementById("titleInput").value;
		if (title.length == 0) {
			document.getElementById("titleInput").style.borderColor = "red";
			alert ("Please enter a job title!");
			document.getElementById("titleInput").focus();
			return false;
			} else {
			document.getElementById("titleInput").style.borderColor = "black";
			return true;
		}
}

function validateWhen() {
	var when = document.getElementById("whenInput").value;
		if (when.length == 0) {
			document.getElementById("whenInput").style.borderColor = "red";
			alert ("Please enter when the target of the task execution!");
			document.getElementById("whenInput").focus();
			return false;
			} else {
			document.getElementById("whenInput").style.borderColor = "black";
			return true;
		}
}

function validateDescription() {
	var description = document.getElementById("descriptionInput").value;
		if (description.length == 0) {
			document.getElementById("descriptionInput").style.borderColor = "red";
			alert ("Please describe the task execution request!");
			document.getElementById("descriptionInput").focus();
			return false;
			} else {
			document.getElementById("descriptionInput").style.borderColor = "black";
			return true;
		}
}