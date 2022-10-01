import '../styles/dialogBox.css';
import closeIcon from '../assets/closeIcon.svg';
import removeIcon from '../assets/trash-can.png';

export default function openNewProjectForm() {
    const content = document.querySelector('.content');
    
    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');
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

        const newProjectName = document.createElement('span')
        newProjectName.innerText = projectName.value;
        li.appendChild(newProjectName);

        const removeImage = new Image();
        removeImage.src = removeIcon;
        removeImage.classList.add('removeProject');
        li.appendChild(removeImage);
        removeImage.addEventListener('click', function(e) {
            console.log(e.target.parentElement);
            projectItems.removeChild(e.target.parentElement);
        });
        projectItems.appendChild(li);
        projectName.value = '';
    });
    newProjectForm.appendChild(addBtn);

    formContainer.appendChild(newProjectForm);
    content.appendChild(formContainer);
}

