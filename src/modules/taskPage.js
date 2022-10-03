import '../styles/taskPage.css';
import addIcon from '../assets/add.png';
import completedTaskPic from '../assets/completedTaskPic.png';
import { openNewTaskForm } from './dialogBox';
import { setCurrentActiveFolder } from './utils';

let folders = [
    {
        folder: 'Home',
        todos: ['Take Medicine', 'Pay house rent'],
        completed: ['Wash Dishes', 'Write email to boss']
    },
    {
        folder: 'Today',
        todos: [],
        completed: []
    },
    {
        folder: 'This Week',
        todos: [],
        completed: []
    },
    {
        folder: 'Web Development',
        todos: [],
        completed: []
    },
    {
        folder: 'Work',
        todos: [],
        completed: []
    }
];

class Project {
    constructor(name) {
        this.folder = name;
        this.todos = [];
        this.completed = [];
    }
}

function addToProject(newProject) {
    folders.push(new Project(newProject));
}

function deleteFromProject(newProject) {
    for(let i = 0; i < folders.length; i++) {
        if (folders[i].folder == newProject) {
            folders.splice(i, 1);
        } 
    }
    const defaultHomeNav = document.querySelectorAll('.list-item')[0];
    setCurrentActiveFolder(defaultHomeNav);
}

function createTaskPage(currentActiveFolder) {
    const content = document.querySelector('.content');
    /* Delete previous existed Page Display */
    const prevTaskPage = document.querySelector('.taskPage');
    if (prevTaskPage != null) {
        content.removeChild(prevTaskPage);
    }

    const taskPage = document.createElement('div');
    taskPage.classList.add('taskPage');
    taskPage.innerHTML = `
    <div class="taskHeader">
        <button>Add New Task</button>
    </div>
    <div class="taskContent">
        <div class="todoList"></div>
        <h3>Completed Tasks</h3>
        <div class="doneList"></div>
    </div>
    `;

    content.appendChild(taskPage);

    const addBtn = document.querySelector('.taskHeader').querySelector('button');
    const addTask = new Image();
    addTask.src = addIcon;
    addTask.classList.add('addTask');
    addTask.addEventListener('click', openNewTaskForm);
    addBtn.prepend(addTask);

    const folderName = currentActiveFolder.querySelector('span').innerText;
    const curretFolder = document.createElement('p');
    curretFolder.innerText = folderName;
    taskPage.prepend(curretFolder);
    displayTaskPage(folderName);
}

function markTaskAsTodo(folder, taskName) {
    folders.forEach(element => {
        if (element.folder == folder) {
            element.todos.push(taskName);
        }
    });
}

function markTaskAsCompleted(folder, taskName) {
    folders.forEach(element => {
        if (element.folder == folder) {
            element.completed.push(taskName);
        }
    });
}

function displayTaskPage(folderName) {
    folders.forEach(folder => {
        if (folder.folder == folderName) {
            const todoList = document.querySelector('.todoList');

            // clear prev elements
            todoList.innerHTML = '';

            // todo list
            if (folder.todos.length == 0) {
                // display no work picture
                const noWorkDiv = document.createElement('div');
                noWorkDiv.classList.add('noWorkDiv');
                const noWorkImage = new Image();
                noWorkImage.src = completedTaskPic;
                noWorkImage.classList.add('noWorkImage');
                noWorkDiv.appendChild(noWorkImage);
                const noWorkText = document.createElement('p');
                noWorkText.innerText = "No work for today. Enjoy your day.";
                noWorkDiv.appendChild(noWorkText);
                todoList.appendChild(noWorkDiv);
            } else {
                folder.todos.forEach(todo => {
                    const todoDiv = document.createElement('div');
                    todoDiv.innerText = todo;
                    todoDiv.classList.add('todoTask');
                    todoList.appendChild(todoDiv);
                });
            }
            // completd list
            const doneList = document.querySelector('.doneList');
            doneList.innerHTML = '';
            folder.completed.forEach(completedTask => {
                const completedDiv = document.createElement('div');
                completedDiv.innerText = completedTask;
                completedDiv.classList.add('doneTask');
                doneList.appendChild(completedDiv);
            });
        }
    });
}

export {addToProject, deleteFromProject, createTaskPage, markTaskAsTodo, markTaskAsCompleted, displayTaskPage};