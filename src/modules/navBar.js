import '../styles/navBar.css';
import '../styles/dialogBox.css';
import logo from '../assets/logo.png';
import hamburgerMenuIcon from '../assets/hamburgerIcon.png';
import closeIcon from '../assets/closeIcon.svg';
import { loadProjects } from './taskPage.js';
import {
	getLocalStorage,
	setLocalStorage,
	removeLocalStorage,
} from './storage';

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
	closeImage.addEventListener('click', function () {
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

function applyMode() {
	// const getStyle = (element, style) =>
	// 	window.getComputedStyle(element).getPropertyValue(style);
	const lightMode = {
		'light-shade-1': 'rgb(196, 112, 196)',
		'light-shade-2': '#C291D9',
		'light-shade-3': 'rgb(170, 83, 170)',
		'light-shade-4': 'purple',
		'light-shade-5': '#E8CFF3',
		'light-shade-6': '#D6B5E5',
		'radio-button': '#c470c4',
		'content-bg': '#FCFCFC',
	};
	// override styles are here
	const darkMode = {
		'light-shade-1': '#EAEAEA',
		'light-shade-2': '#C5C5C5',
		'light-shade-3': '#8D8D8D',
		'light-shade-4': 'grey',
		'light-shade-5': '#C5C5C5',
		'light-shade-6': 'lightgrey',
		'radio-button': '#black',
		'content-bg': '#333333',
	};
	const transformKey = (key) =>
		'--' + key.replace(/([A-Z])/, '-$1').toLowerCase();

	const root = document.querySelector(':root');

	const changeColors = (colors) => {
		Object.keys(colors).map((key) => {
			root.style.setProperty(transformKey(key), colors[key]);
		});
	};
	const checkbox = document.querySelector('input[name=theme]');
	checkbox.addEventListener('change', ({ target }) => {
		target.checked ? changeColors(darkMode) : changeColors(lightMode);
	});

	const isModeSet = (key) => localStorage.getItem(key) != null;

	checkbox.addEventListener('change', ({ target }) => {
		if (target.checked) {
			changeColors(darkMode);
			setLocalStorage('mode', 'darkMode');
		} else {
			changeColors(lightMode);
			setLocalStorage('mode', 'lightMode');
		}
	});

	if (!isModeSet('mode')) setLocalStorage('mode', 'lightMode');

	if (getLocalStorage('mode') === 'lightMode') {
		checkbox.removeAttribute('checked');
		changeColors(lightMode);
	} else {
		checkbox.setAttribute('checked', '');
		changeColors(darkMode);
	}
}

function loadNavBar() {
	const content = document.querySelector('.content');

	const div = document.createElement('div');
	div.classList.add('navBar');
	div.innerHTML = `<div class="navBarContent">
        <div class="officialHeader">
            <h2>TodoList</h2>
            <!-- dark mode -->
            <div class ="darkMode">
                <div class="toggle">
                    <input id="switch" type="checkbox" name="theme">
                    <label for="switch" class="modeLabel"></label>
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

	const logoImage = new Image();
	logoImage.alt = 'Picture of Offcial logo';
	logoImage.src = logo;

	const officialHeader = document.querySelector('.officialHeader');
	officialHeader.appendChild(logoImage);

	const hamburgerMenu = document.querySelector('.hamburger-project-list');
	const menuImage = new Image();
	menuImage.src = hamburgerMenuIcon;
	menuImage.alt = 'Hamburger Menu picture';
	menuImage.classList.add('hamburgerMenu');
	hamburgerMenu.appendChild(menuImage);
	hamburgerMenu.addEventListener('click', displayProjectsFromMenu);
	loadProjects();
}

export { loadNavBar, applyMode };
