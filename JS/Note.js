var Task = function (title, when, description) {
	this.title = title;
	this.when = when;
	this.description = description;
	this.id = new Date().getTime();
}