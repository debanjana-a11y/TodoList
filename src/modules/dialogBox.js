import '../styles/dialogBox.css';
import closeIcon from '../assets/closeIcon.svg';
import {addProject, addTask} from './taskPage';

// import { markTaskAsTodo, displayTaskPage } from './taskPage';

function deleteForm() {
    const formContainer = document.querySelector('.formContainer');
    const content = document.querySelector('.content');
    content.removeChild(formContainer);
}

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
    addBtn.addEventListener('click', addProject);
    newProjectForm.appendChild(addBtn);

    formContainer.appendChild(newProjectForm);
    content.appendChild(formContainer);
}

function openNewTaskForm(e) {
    const projectName = e.srcElement.parentElement.parentElement.
                        parentNode.childNodes[0].innerText;
    const content = document.querySelector('.content');
    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');
    formContainer.classList.add('formContainerOpen');
    const newTaskForm = document.createElement('div');
    newTaskForm.classList.add('newForm');
    newTaskForm.classList.add('formOpen');

    const header = document.createElement('header');
    const textHeader = document.createElement('span');
    textHeader.innerText = projectName;
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
    addBtn.addEventListener('click', addTask);
    newTaskForm.appendChild(addBtn);

    formContainer.appendChild(newTaskForm);
    content.appendChild(formContainer);
}

function openDescriptionBox(description) {
    const content = document.querySelector('.content');
    // const formContainer = document.createElement('div');
    // formContainer.classList.add('formOpen');
    // formContainer.innerText = description;

    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');
    formContainer.classList.add('formContainerOpen');
    const detailsForm = document.createElement('div');
    detailsForm.classList.add('newForm');
    detailsForm.classList.add('formOpen');
    const header = document.createElement('header');
    const textHeader = document.createElement('span');
    textHeader.innerText = 'Description';
    header.appendChild(textHeader);

    const closeImage = new Image();
    closeImage.src = closeIcon;
    closeImage.classList.add('closeImage');
    closeImage.addEventListener('click', function() {
        detailsForm.classList.replace('formOpen', 'formClose');
        formContainer.classList.replace('formContainerOpen', 'formContainerClose');
        setTimeout(deleteForm, 1000);
    });
    header.appendChild(closeImage);
    detailsForm.appendChild(header);

    const main = document.createElement('main');
    main.innerText = description;
    main.classList.add('descriptionDetails');
    detailsForm.appendChild(main);

    formContainer.appendChild(detailsForm);
    content.appendChild(formContainer);
}

export {openNewProjectForm, openNewTaskForm, openDescriptionBox};

