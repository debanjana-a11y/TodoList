import Task from "./Task";

export default class Project {
	constructor(name, todos = [], completed = []) {
		this.name = name;
		this.todos = [];
		if (todos.length > 0) {
			todos.forEach((todo) => {
				this.todos.push(
					new Task(todo.title, todo.description, todo.due, todo.priority)
				);
			});
		}
		this.completed = [];
		if (completed.length > 0) {
			completed.forEach((todo) => {
				this.completed.push(
					new Task(todo.title, todo.description, todo.due, todo.priority)
				);
			});
		}
	}
}
