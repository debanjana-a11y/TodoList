import '../styles/navBar.css';
import logo from '../assets/logo.png';
import homeIcon from '../assets/homeIcon.svg';
import todayIcon from '../assets/todayIcon.svg';
import weekIcon from '../assets/thisWeekIcon.svg';
import removeIcon from '../assets/trash-can.png';
import openNewProjectForm from './dialogBox';
import createTaskPage from './taskPage';

let currentActiveFolder = undefined;
export default function loadNavBar() {
    const content = document.querySelector('.content');

    const div = document.createElement('div');
    div.classList.add('navBar');
    div.innerHTML =
    `<div class="navBarContent">
        <div class="officialHeader">
            <h1>TodoList</h1>
        </div>
        <div class="navFolders">
            <ul class="list-items">
                <li class="navFolder list-item home-item">Home</li>
                <li class="navFolder list-item today-item">Today</li>
                <li class="navFolder list-item week-item">This Week</li>
            </ul>
        </div>
        <div class="project-list">
            <p>My Projects</p>
            <ul class="project-items">
                <li class="list-item project-item">
                    <span>Web development</span>
                </li>
                <li class="list-item project-item">
                    <span>Work</span>
                </li>
            </ul>
        </div>
        <div class="newProject">
            <button class="addProject">Add New Project</button>
        </div>
    </div>`;

    content.appendChild(div);

    const logoImage = new Image();
    logoImage.alt = "picture of logo";
    logoImage.src = logo;

    const officialHeader = document.querySelector('.officialHeader');
    officialHeader.appendChild(logoImage);

    const homeItem = document.querySelector('.home-item');
    const homeImage = new Image();
    homeImage.src = homeIcon;
    homeImage.alt = "picture of home icon";
    homeImage.classList.add('navBarIcon');
    currentActiveFolder = homeItem;
    homeItem.classList.add('activeFolder');
    homeItem.prepend(homeImage);

    const todayItem = document.querySelector('.today-item');
    const todayImage = new Image();
    todayImage.src = todayIcon;
    todayImage.alt = "picture of today icon";
    todayImage.classList.add('navBarIcon');
    todayItem.prepend(todayImage);

    const weeklyItem = document.querySelector('.week-item');
    const weekImage = new Image();
    weekImage.src = weekIcon;
    weekImage.alt = "picture of week icon";
    weekImage.classList.add('navBarIcon');
    weeklyItem.prepend(weekImage);

    const projectItems = document.querySelector('.project-items');
    const projectItem = document.querySelectorAll('.project-item');
    projectItem.forEach(element => {
        const removeImage = new Image();
        removeImage.src = removeIcon;
        removeImage.classList.add('removeProject');
        element.appendChild(removeImage);
        removeImage.addEventListener('click', function(e) {
            projectItems.removeChild(e.target.parentElement);
        });
    });

    const newProjectBtn = document.querySelector('.addProject');
    newProjectBtn.addEventListener('click', openNewProjectForm);

    const folders = document.querySelectorAll('.list-item');
    
    folders.forEach(folder => {
        folder.addEventListener('click', function(e) {
            if (currentActiveFolder == folder) return;
            if (currentActiveFolder != undefined) {
                currentActiveFolder.classList.remove('activeFolder');
            }
            currentActiveFolder = folder;
            folder.classList.add('activeFolder');
            createTaskPage();
        });
    });
}