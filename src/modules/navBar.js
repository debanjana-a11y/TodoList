import '../styles/navBar.css';
import '../styles/dialogBox.css';
import logo from '../assets/logo.png';
import hamburgerMenuIcon from '../assets/hamburgerIcon.png';
import closeIcon from '../assets/closeIcon.svg';
import {loadProjects} from './taskPage.js';

function displayProjectsFromMenu() {
    const content = document.querySelector('.content');    

    const menuDialog = document.createElement('div');
    menuDialog.classList.add('displayProjectListMobile');

    const header = document.createElement('header');
    const textHeader = document.createElement('span');
    textHeader.innerText = 'Project List';
    header.appendChild(textHeader);

    const closeImage = new Image();
    closeImage.src = closeIcon;
    closeImage.classList.add('closeImage');
    closeImage.addEventListener('click', function() {
        content.removeChild(menuDialog);
    });
    header.appendChild(closeImage);
    menuDialog.appendChild(header);

    const newProject = document.createElement('div');
    newProject.classList.add('newProjectMobile');
    const addProject = document.createElement('button');
    addProject.innerText = 'Add New Project';
    addProject.classList.add('addProjectMobile');
    newProject.appendChild(addProject);
    menuDialog.appendChild(newProject);

    const projectItems = document.createElement('div');
    projectItems.classList.add('project-items-mobile');
    menuDialog.appendChild(projectItems);
    content.appendChild(menuDialog);

    loadProjects(true);
}

export default function loadNavBar() {
    const content = document.querySelector('.content');

    const div = document.createElement('div');
    div.classList.add('navBar');
    div.innerHTML =
    `<div class="navBarContent">
        <div class="officialHeader">
            <h2>TodoList</h2>
            <div>
            <!-- dark mode -->
            <div>
            <center>Dark</center>
            </div>
            <div class="toggle">
                <input id="switch" type="checkbox" name="theme">
                <label for="switch">Toggle</label>
            </div> 
        </div>
        </div>
        <div class="hamburger-project-list"></div>
        
        <div class="project-list">
            <p>My Projects</p>
            <ul class="project-items"></ul>
        </div>
        
        <div class="newProject">
            <button class="addProject">Add New Project</button>
        </div>
    </div>`;

    content.appendChild(div);

    // dark mode js 
    const html = document.querySelector("html")
    const checkbox = document.querySelector("input[name=theme]")
    const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style);
    const initialColors = {
    bg: getStyle(html, "--bg"),
    }
    const darkMode = {
    bg: "#333333", // override styles here
    }
    const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();
    const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    );
    }
    checkbox.addEventListener("change", ({target}) => {
        target.checked ? changeColors(darkMode) : changeColors(initialColors);
    });
    const isExistLocalStorage = (key) => 
    localStorage.getItem(key) != null;
    const createOrEditLocalStorage = (key, value) => 
    localStorage.setItem(key, JSON.stringify(value));
    const getValeuLocalStorage = (key) =>
    JSON.parse(localStorage.getItem(key));
    checkbox.addEventListener("change", ({target}) => {
    if (target.checked) {
        changeColors(darkMode);
        createOrEditLocalStorage('mode','darkMode');
    } else {
        changeColors(initialColors);
        createOrEditLocalStorage('mode','initialColors');
    }
    })
    if(!isExistLocalStorage('mode'))
    createOrEditLocalStorage('mode', 'initialColors');
    if (getValeuLocalStorage('mode') === "initialColors") {
    checkbox.removeAttribute('checked');
    changeColors(initialColors);
    } else {
    checkbox.setAttribute('checked', "");
    changeColors(darkMode);
    }

    const logoImage = new Image();
    logoImage.alt = "Picture of Offcial logo";
    logoImage.src = logo;

    const officialHeader = document.querySelector('.officialHeader');
    officialHeader.appendChild(logoImage);

    const hamburgerMenu = document.querySelector('.hamburger-project-list');
    const menuImage = new Image();
    menuImage.src = hamburgerMenuIcon;
    menuImage.alt = "Hamburger Menu picture"
    menuImage.classList.add('hamburgerMenu');
    hamburgerMenu.appendChild(menuImage);
    hamburgerMenu.addEventListener('click', displayProjectsFromMenu);
    loadProjects();
}