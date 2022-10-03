import '../styles/dialogBox.css';
import closeIcon from '../assets/closeIcon.svg';
import removeIcon from '../assets/trash-can.png';
import { addEvent, deleteEvent } from './utils';
import { addToProject, deleteFromProject, markTaskAsTodo, displayTaskPage } from './taskPage';

function openNewProjectForm() {
    const content = document.querySelector('.content');
    
    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');
    formContainer.classList.add('formContainerOpen');
    const newProjectForm = document.createElement('div');
    newProjectForm.classList.add('newProjectForm');
    newProjectForm.classList.add('formOpen');

    const header = document.createElement('header');
    const textHeader = document.createElement('span');
    textHeader.innerText = 'New project';
    header.appendChild(textHeader);

    const closeImage = new Image();
    closeImage.src = closeIcon;
    closeImage.classList.add('closeImage');
    closeImage.addEventListener('click', function() {
        newProjectForm.classList.replace('formOpen', 'formClose');
        formContainer.classList.replace('formContainerOpen', 'formContainerClose');
        setTimeout(deleteForm, 1000);
    });
    header.appendChild(closeImage);
    newProjectForm.appendChild(header);

    const main = document.createElement('main');
    main.innerHTML = `
    <form>
    <label for="projectName">Project Name</label>
    <input type="text" id="projectName" name="projectName" placeholder="Enter Project Name">
    </form>`
    newProjectForm.appendChild(main);

    const addBtn = document.createElement('button');
    addBtn.innerText = 'Add Project';
    addBtn.classList.add('addBtn');
    addBtn.addEventListener('click', function() {
        const projectName = document.querySelector('#projectName');
        const projectItems = document.querySelector('.project-items');

        const li = document.createElement('li');
        li.classList.add('project-item');
        li.classList.add('list-item');

        const newProjectName = document.createElement('span')
        newProjectName.innerText = projectName.value;
        addToProject(newProjectName.innerText);
        li.appendChild(newProjectName);

        const removeImage = new Image();
        removeImage.src = removeIcon;
        removeImage.classList.add('removeProject');
        li.appendChild(removeImage);
        addEvent(li);

        removeImage.addEventListener('click', function(e) {
            let removingItem = e.target.parentElement;
            deleteEvent(removingItem);
            projectItems.removeChild(removingItem);
            deleteFromProject(removingItem.querySelector('span').innerText);
        });

        projectItems.appendChild(li);
        projectName.value = '';
    });
    newProjectForm.appendChild(addBtn);

    formContainer.appendChild(newProjectForm);
    content.appendChild(formContainer);
}

function openNewTaskForm(e) {
    const content = document.querySelector('.content');
    
    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');
    formContainer.classList.add('formContainerOpen');
    const newTaskForm = document.createElement('div');
    newTaskForm.classList.add('newTaskForm');
    newTaskForm.classList.add('formOpen');

    const header = document.createElement('header');
    const textHeader = document.createElement('span');
    textHeader.innerText = 'New Task';
    header.appendChild(textHeader);

    const closeImage = new Image();
    closeImage.src = closeIcon;
    closeImage.classList.add('closeImage');
    closeImage.addEventListener('click', function() {
        newTaskForm.classList.replace('formOpen', 'formClose');
        formContainer.classList.replace('formContainerOpen', 'formContainerClose');
        setTimeout(deleteForm, 1000);
    });
    header.appendChild(closeImage);
    newTaskForm.appendChild(header);

    const main = document.createElement('main');
    main.innerHTML = `
    <form>
    <label for="taskName">Task Name</label>
    <input type="text" id="taskName" name="taskName" placeholder="Enter Task Name">
    </form>`
    newTaskForm.appendChild(main);

    const addBtn = document.createElement('button');
    addBtn.innerText = 'Add Task';
    addBtn.classList.add('addBtn');
    addBtn.addEventListener('click', function() {
        const taskName = document.querySelector('#taskName');
        const todoList = document.querySelector('.todoList');
        
        const newTaskName = document.createElement('div')
        newTaskName.innerText = taskName.value;

        const folderName = e.srcElement.parentElement.parentElement.
        nextSibling.parentElement.firstChild.innerText;
        markTaskAsTodo(folderName, newTaskName.innerText);

        newTaskName.classList.add('todoTask');

        // const removeImage = new Image();
        // removeImage.src = removeIcon;
        // removeImage.classList.add('removeProject');
        // li.appendChild(removeImage);
        // removeImage.addEventListener('click', function(e) {
        //     todoList.removeChild(e.target.parentElement);
        // });

        // todoList.appendChild(li);
        taskName.value = '';
        displayTaskPage(folderName);
    });
    newTaskForm.appendChild(addBtn);

    formContainer.appendChild(newTaskForm);
    content.appendChild(formContainer);
}

export {openNewProjectForm, openNewTaskForm};

function deleteForm() {
    const formContainer = document.querySelector('.formContainer');
    const content = document.querySelector('.content');
    content.removeChild(formContainer);
}