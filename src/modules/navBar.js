import '../styles/navBar.css';
import '../styles/dialogBox.css';
import logo from '../assets/logo.png';
import homeIcon from '../assets/homeIcon.svg';
import todayIcon from '../assets/todayIcon.svg';
import weekIcon from '../assets/thisWeekIcon.svg';
import removeIcon from '../assets/trash-can.png';
import {openNewProjectForm} from './dialogBox';
import {addEvent, deleteEvent, setCurrentActiveFolder} from './utils';
import {deleteFromProject} from './taskPage';

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
                <li class="navFolder list-item home-item"><span>Home</span></li>
                <li class="navFolder list-item today-item"><span>Today</span></li>
                <li class="navFolder list-item week-item"><span>This Week</span></li>
            </ul>
        </div>
        <div class="project-list">
            <p>My Projects</p>
            <ul class="project-items">
                <li class="list-item project-item">
                    <span>Web Development</span>
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
    setCurrentActiveFolder(homeItem);
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
            let removingItem = e.target.parentElement;
            deleteEvent(removingItem);
            projectItems.removeChild(removingItem);
            deleteFromProject(removingItem.querySelector('span').innerText);
        });
    });

    const newProjectBtn = document.querySelector('.addProject');
    newProjectBtn.addEventListener('click', openNewProjectForm);

    const folders = document.querySelectorAll('.list-item');
    
    folders.forEach(folder => {
        addEvent(folder);
    });
}