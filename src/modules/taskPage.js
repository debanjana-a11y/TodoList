import '../styles/taskPage.css';
import addIcon from '../assets/add.png';
import infoIcon from '../assets/infoIcon.png';
import editIcon from '../assets/editBtn.png';
import deleteIcon from '../assets/deleteBtn.png';
import removeIcon from '../assets/trash-can.png';
import completedTaskPic from '../assets/completedTask.jpg';
import { openNewProjectForm, openNewTaskForm,
         openDescriptionBox, openEditTaskForm,
         closeForm } from './dialogBox';

let projectList = [];

const sampleProjects = [
    {
        name: 'Web Development',
        todos: [
            {
                title: 'Work on ToDo List',
                description: `Add a 'AddTask' button on Odin's TODO List Project`,
                due: null,
                priority: 'high'
            },
            {
                title: 'Start studying OOP',
                description: `Start reading OOP Chapter from Odin Project`,
                due: null,
                priority: 'medium'
            },
            {
                title: 'Read others websites',
                description: `Find and read 2 of others websites from Odin's discord`,
                due: null,
                priority: 'low'
            }
        ],
        completed: [
            {
                title: `Add a 'AddProject' button on ToDo List`,
                description: `Add a 'AddProject' button on Odin's TODO List Project`,
                due: null,
                priority: 'high'
            }
        ]
    },
    {
        name: 'Work',
        todos: [],
        completed: [
            {
                title: 'Send email to Sonia',
                description: `Write Sonia about yesterday's regression test results`,
                due: null,
                priority: 'high'
            }
        ]
    }
];

class Project {
    constructor(name, todos = [], completed= []) {
        this.name = name;
        this.todos = [];
        if (todos.length > 0) {
            todos.forEach(todo => {
                this.todos.push(new Task(todo.title, todo.description, todo.due, todo.priority));
            });
        }
        this.completed = [];
        if (completed.length > 0) {
            completed.forEach(todo => {
                this.completed.push(new Task(todo.title, todo.description, todo.due, todo.priority));
            });
        }
    }

    getTask(taskName) {
        let retTask = undefined;
        this.todos.forEach(task => {
            if (task.title == taskName) {
                retTask = task;
                return;
            }
        });

        if (retTask != undefined) return retTask;

        this.completed.forEach(task => {
            if (task.title == taskName) {
                retTask = task;
                return;
            }
        });
        return retTask;
    }
}

class Task {
    constructor(name, description, due = null, priority='low') {
        this.title = name;
        if (description == '') {
            description = 'No description is available';
        }
        this.description = description;
        if (due == '' || due == null) {
            this.due = new Date().toJSON().slice(0, 10);
        } else {
            this.due = due;
        }
        this.priority = priority;
    }
}
createTaskPage
function getProject(projectName) {
    let retProject = undefined;
    projectList.forEach(project => {
        if (project.name == projectName) {
            retProject = project;
            return retProject;
        }
    });

    return retProject;
}

let currentActiveFolder = undefined;

function setFirstAsCurrentFolder() {
    /* Desktop view */
    const desktopItems = document.querySelector('.project-items');
    if (desktopItems.childNodes.length > 0) {
        const defaultTaskPage = desktopItems.childNodes[0].childNodes[0].innerText;
        setCurrentActiveFolder(defaultTaskPage);
    }

    /* Mobile view */
    const mobileItems = document.querySelector('.project-items-mobile');
    if (mobileItems != null && mobileItems.childNodes.length > 0) {
        const defaultTaskPage = mobileItems.childNodes[0].childNodes[0].innerText;
        setCurrentActiveFolder(defaultTaskPage);
    }
}

function setCurrentActiveFolder(projectName) {
    // if (currentActiveFolder == projectName) return;
    const projectItemsDesktop = document.querySelector('.project-items');
    const projectItemsMobile = document.querySelector('.project-items-mobile');
    if (currentActiveFolder != undefined) {
        projectItemsDesktop.childNodes.forEach(projectDesktop => {
            if (projectDesktop.innerText == currentActiveFolder) {
                projectDesktop.classList.remove('activeFolder');
            }
        });
        if (projectItemsMobile != null) {
            projectItemsMobile.childNodes.forEach(projectMobile => {
                if (projectMobile.innerText == currentActiveFolder) {
                    projectMobile.classList.remove('activeFolder');
                }
            });
        }
    }
    currentActiveFolder = projectName;
    projectItemsDesktop.childNodes.forEach(projectDesktop => {
        if (projectDesktop.innerText == currentActiveFolder) {
            projectDesktop.classList.add('activeFolder');
        }
    });
    if (projectItemsMobile != null) {
        projectItemsMobile.childNodes.forEach(projectMobile => {
            if (projectMobile.innerText == currentActiveFolder) {
                projectMobile.classList.add('activeFolder');
            }
        });
    }
    createTaskPage(currentActiveFolder);
}

function changeActiveFolder(e) {
    setCurrentActiveFolder(e.srcElement.innerText);
}

function addToProjectList(newProjectName) {
    projectList.push(new Project(newProjectName));
}

function deleteFromProjectList(newProject) {
    for(let i = 0; i < projectList.length; i++) {
        if (projectList[i].name == newProject) {
            delete(projectList[i]);
            projectList.splice(i, 1);
        } 
    }
    /* Display Blank Page to indicate steps to use TODO List */
    if (projectList.length == 0) {
        const content = document.querySelector('.content');
        /* Delete previous existed Task Page Display */
        const prevTaskPage = document.querySelector('.taskPage');
        if (prevTaskPage != null) {
            content.removeChild(prevTaskPage);
        }

        const projectItems = document.querySelector('.project-items-mobile');
        if (projectItems != null) {
            projectItems.innerText = "No Project";
        }

        const directions = document.createElement('div');
        const header = document.createElement('h2');
        header.innerText = 'Please Add New Project First';

        directions.appendChild(header);
        directions.classList.add('directions');
        content.appendChild(directions);
    }
}

function addEvent(newListItem) {
    newListItem.addEventListener('click', changeActiveFolder);
}

function deleteEvent(project) {
    project.removeEventListener('click', changeActiveFolder);
}

function removeProject(e) {
    const projectItemsDesktop = document.querySelector('.project-items');
    const projectItemsMobile = document.querySelector('.project-items-mobile');
    const projectName = e.target.parentElement.querySelector('span').innerText;

    if (currentActiveFolder == projectName) {
        setFirstAsCurrentFolder();
    }
    projectItemsDesktop.childNodes.forEach(projectDesktop => {
        if (projectDesktop.innerText == projectName) {
            deleteEvent(projectDesktop);
            projectItemsDesktop.removeChild(projectDesktop);
        }
    });
    if (projectItemsMobile != null) {
        projectItemsMobile.childNodes.forEach(projectMobile => {
            if (projectMobile.innerText == projectName) {
                deleteEvent(projectMobile);
                projectItemsMobile.removeChild(projectMobile);
            }
        });
    }
    deleteFromProjectList(projectName);
}

function displayProject(name) {
    const newListItem = document.createElement('li');
    newListItem.classList.add('project-item');
    newListItem.classList.add('list-item');

    const newProjectName = document.createElement('span')
    newProjectName.innerText = name;
    newListItem.appendChild(newProjectName);

    const removeImage = new Image();
    removeImage.src = removeIcon;
    removeImage.classList.add('removeProject');
    removeImage.addEventListener('click', removeProject);

    newListItem.appendChild(removeImage);  
    addEvent(newListItem);

    return newListItem;
}

function displayProjectMobile(name) {
    const newListItem = document.createElement('li');
    newListItem.classList.add('project-item-mobile');
    newListItem.classList.add('list-item');

    const newProjectName = document.createElement('span')
    newProjectName.innerText = name;
    newListItem.appendChild(newProjectName);

    const removeImage = new Image();
    removeImage.src = removeIcon;
    removeImage.classList.add('removeProjectMobile');
    removeImage.addEventListener('click', removeProject);

    newListItem.appendChild(removeImage);  
    addEvent(newListItem);

    return newListItem;
}

function addProjectToList(projectName, isMobile=false) {
    const projectItems = document.querySelector('.project-items');
    const newListItem = displayProject(projectName);
    projectItems.appendChild(newListItem);

    /* Set New Project as Current Project */
    setCurrentActiveFolder(projectName);
}

function addProjectToListMobile(projectName) {
    const projectItems = document.querySelector('.project-items-mobile');
    const newListItem = displayProjectMobile(projectName);
    projectItems.appendChild(newListItem);

    /* Set New Project as Current Project */
    setCurrentActiveFolder(projectName);
}

function addProject(e) {
    e.preventDefault();
    const projectName = document.querySelector('#projectName');
    /* Add to storage */
    addToProjectList(projectName.value);
    /* Add to DOM */
    addProjectToList(projectName.value);
    addProjectToListMobile(projectName.value);
    // closeForm(null, true, false);
}

function loadProjects(isMobile = false) {
    if (isMobile == false && projectList.length == 0) {
        sampleProjects.forEach(sample => {
            const newProject = new Project(sample.name, sample.todos, sample.completed);
            projectList.push(newProject);
        });
    }

    if (isMobile == false) {
        projectList.forEach(project => {
            addProjectToList(project.name);
        });

        const newProjectBtn = document.querySelector('.addProject');
        newProjectBtn.addEventListener('click', openNewProjectForm);
    } else {
        projectList.forEach(project => {
            addProjectToListMobile(project.name);
        });

        const newProjectBtn = document.querySelector('.addProjectMobile');
        newProjectBtn.addEventListener('click', openNewProjectForm);
    }

    const folders = document.querySelectorAll('.list-item');
    
    folders.forEach(folder => {
        addEvent(folder);
    });
}

/****** Task Functions *******/
function createTaskPage(currentActiveFolder) {
    const content = document.querySelector('.content');
    /* Delete previous existed Page Display */
    const directions = document.querySelector('.directions');
    if (directions != null) {
        content.removeChild(directions);
    }
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

    const projectName = currentActiveFolder;
    const curretFolder = document.createElement('p');
    curretFolder.innerText = projectName;
    taskPage.prepend(curretFolder);
    displayTaskPage(projectName);
}

function markTaskAsTodo(projectName, taskName) {
    projectList.forEach(project => {
        if (project.name == projectName) {
            for(let i = 0; i < project.completed.length; i++) {
                if (project.completed[i].title == taskName) {
                    project.todos.push(
                        new Task(project.completed[i].title,
                                    project.completed[i].description,
                                    project.completed[i].due,
                                    project.completed[i].priority));
                    delete(project.completed[i]);
                    project.completed.splice(i, 1);
                    break;
                }
            }
        }
    });
}

function markTaskAsCompleted(projectName, taskName) {
    projectList.forEach(project => {
        if (project.name == projectName) {
            for(let i = 0; i < project.todos.length; i++) {
                if (project.todos[i].title == taskName) {
                    project.completed.push(
                        new Task(project.todos[i].title,
                                    project.todos[i].description,
                                    project.todos[i].due,
                                    project.todos[i].priority));
                    delete(project.todos[i]);
                    project.todos.splice(i, 1);
                    break;
                }
            }
        }
    });
}

function addTaskToProject(projectName, taskName, taskDescription, taskDue, taskPriority, isTodoItem=true) {
    for(let i = 0; i < projectList.length; i++) {
        if (projectList[i].name == projectName) {
            if (isTodoItem == true) {
                projectList[i].todos.push(new Task(taskName, taskDescription, taskDue, taskPriority));
            } else {
                projectList[i].completed.push(new Task(taskName, taskDescription, taskDue, taskPriority));
            }
        } 
    }
}

function updateTaskInProject(projectName, oldTitle, taskName, taskDescription, taskDue, taskPriority, isTodoItem=true) {
    projectList.forEach(project => {
        if (project.name == projectName) {
            for(let i = 0; i < project.todos.length; i++) {
                if (project.todos[i].title == oldTitle) {
                    project.todos[i].title = taskName;
                    project.todos[i].description = taskDescription;
                    project.todos[i].due = taskDue;
                    project.todos[i].priority = taskPriority;
                }
            }
        }
    });
}

function deleteTaskFromProject(projectName, taskTitle) {
    projectList.forEach(project => {
        if (project.name == projectName) {
            for(let i = 0; i < project.todos.length; i++) {
                if (project.todos[i].title == taskTitle) {
                    delete(project.todos[i]);
                    project.todos.splice(i, 1);
                    break;
                }
            }
        }
    });
}

function addTask(e) {
    e.preventDefault();
    const taskName = document.querySelector('#taskName');
    const taskDescription = document.querySelector('#taskDescription');
    const taskDueDate = document.querySelector('#dateEntered');
    const taskPriority = document.querySelector('#priority');
    
    /* Add to storage */
    const projectName = document.querySelector('.taskPage').firstElementChild.innerText;
    addTaskToProject(projectName, taskName.value, taskDescription.value, taskDueDate.value, taskPriority.value);

    taskName.value = '';
    displayTaskPage(projectName);
}

function deleteTODO(todoList, todoDiv) {
    todoList.removeChild(todoDiv);
    /* Delete From storage */
}

function changeStatus(e) {
    const taskName = e.currentTarget.parentElement.childNodes[1].innerText;
    const projectName = document.querySelector('.taskPage').firstElementChild.innerText;

    /* Check if this task is pending or completed*/
    const taskDiv = e.currentTarget.parentElement.parentElement;
    if (taskDiv.classList.contains('todoTask')) {
        markTaskAsCompleted(projectName, taskName);
    } else if (taskDiv.classList.contains('doneTask')) {
        markTaskAsTodo(projectName, taskName);
    }
    displayTaskPage(projectName);
}

function showInfo(e) {
    const projectName = document.querySelector('.taskPage').firstElementChild.innerText;
    const taskName = e.currentTarget.parentElement.childNodes[1].innerText;

    const project = getProject(projectName);
    const task = project.getTask(taskName);

    if (task == undefined) {
        return;
    }

    openDescriptionBox(task.title, task.description, task.due, task.priority);
}

function updateTask(e, title) {
    e.preventDefault();
    const taskName = document.querySelector('#taskName');
    const taskDescription = document.querySelector('#taskDescription');
    const taskDueDate = document.querySelector('#dateEntered');
    const taskPriority = document.querySelector('#priority');
    
    /* Update to storage */
    const projectName = document.querySelector('.taskPage').firstElementChild.innerText;
    updateTaskInProject(projectName, title, taskName.value, taskDescription.value,
                        taskDueDate.value, taskPriority.value);
    displayTaskPage(projectName);
    closeForm();
}

function editTask(e) {
    const projectName = document.querySelector('.taskPage').firstElementChild.innerText;
    const taskName = e.srcElement.parentElement.parentElement.previousSibling.innerText;

    const project = getProject(projectName);
    const task = project.getTask(taskName);

    if (task == undefined) {
        return;
    }

    openEditTaskForm(projectName, task.title, task.description, task.due, task.priority);
}

function deleteTask(e) {    
    const taskName = e.srcElement.parentElement.parentElement.previousSibling.innerText;
    
    /* Delete from storage */
    const projectName = document.querySelector('.taskPage').firstElementChild.innerText;
    deleteTaskFromProject(projectName, taskName);

    displayTaskPage(projectName);
}

function displayTODO(todoList, todo) {
    const todoDiv = document.createElement('div');

    const todoDivMain = document.createElement('div');
    const radioBtn = document.createElement("input");
    radioBtn.setAttribute("type", "radio");
    radioBtn.addEventListener('change', changeStatus);
    todoDivMain.appendChild(radioBtn);
    const todoTitle = document.createElement('span');
    todoTitle.innerText = todo.title;
    todoDivMain.appendChild(todoTitle);
    const details = document.createElement('button');
    const infoIconImg = new Image();
    infoIconImg.src = infoIcon;
    infoIconImg.alt = "Image of Info Icon";
    infoIconImg.classList.add('infoIconImg');
    details.addEventListener('click', showInfo);
    details.appendChild(infoIconImg);
    todoDivMain.appendChild(details);
    todoDivMain.classList.add('todoDivMain');
    todoDiv.appendChild(todoDivMain);

    const todoDivSettings = document.createElement('div');
    const remainingTime = document.createElement('span');
    todoDivSettings.appendChild(remainingTime);
    const editBtn = document.createElement('button');
    const editTaskImage = new Image();
    editTaskImage.src = editIcon;
    editTaskImage.alt = "Edit for Task";
    editTaskImage.classList.add('editTaskImage');
    editBtn.appendChild(editTaskImage);
    editBtn.addEventListener('click', editTask);

    todoDivSettings.appendChild(editBtn);
    const deleteBtn = document.createElement('button');
    const deleteTaskImage = new Image();
    deleteTaskImage.src = deleteIcon;
    deleteTaskImage.alt = "Deelet the Task";
    deleteTaskImage.classList.add('deleteTaskImage');
    deleteBtn.appendChild(deleteTaskImage);
    deleteBtn.addEventListener('click', deleteTask);

    todoDivSettings.appendChild(deleteBtn);
    todoDivSettings.classList.add('todoDivSettings');

    todoDiv.appendChild(todoDivSettings);
    todoDiv.classList.add('todoTask');
    switch(todo.priority) {
        case 'high':
            todoDiv.classList.add('highTodoTask');
            break;
        case 'medium':
            todoDiv.classList.add('mediumTodoTask');
            break;
        default:
            todoDiv.classList.add('lowTodoTask');
    }
    todoList.appendChild(todoDiv);
}

function displayCompleted(doneList, completedTask) {
    const completedDiv = document.createElement('div');
    
    const completedDivMain = document.createElement('div');
    const radioBtn = document.createElement("input");
    radioBtn.setAttribute("type", "radio");
    radioBtn.setAttribute("class", "doneTaskRadio fa-solid fa-circle-check");
    radioBtn.addEventListener('change', changeStatus);
    completedDivMain.appendChild(radioBtn);
    const completedTitle = document.createElement('span');
    completedTitle.innerText = completedTask.title;
    completedDivMain.appendChild(completedTitle);
    completedDivMain.classList.add('completedDivMain');

    completedDiv.appendChild(completedDivMain);
    completedDiv.classList.add('doneTask');
    doneList.appendChild(completedDiv);
}

function displayTaskPage(projectName) {
    projectList.forEach(project => {
        if (project.name == projectName) {
            const todoList = document.querySelector('.todoList');
            const doneList = document.querySelector('.doneList');

            // clear prev elements
            todoList.innerHTML = '';

            // todo list
            if (project.todos.length == 0) {
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
                // clear prev elements, in case of no work image is here
                todoList.innerHTML = '';

                project.todos.forEach(todo => {
                    displayTODO(todoList, todo);
                });
            }
            // completed list
            doneList.innerHTML = '';
            project.completed.forEach(completedTask => {
                displayCompleted(doneList, completedTask);
            });
        }
    });
}

export {loadProjects, addProject, addTask, updateTask};