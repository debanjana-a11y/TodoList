import '../styles/navBar.css';
import logo from '../assets/logo.png';
import homeIcon from '../assets/homeIcon.svg';
import todayIcon from '../assets/todayIcon.svg';
import weekIcon from '../assets/thisWeekIcon.svg';

export default function loadNavBar() {
    const content = document.querySelector('.content');

    const div = document.createElement('div');
    div.classList.add('navBar');
    div.innerHTML =
    `<div class="navBarContent">
        <div class="officialHeader">
            <h1>TodoList</h1>
        </div>
        <ul class="list-items">
            <li class="list-item home-item">Home</li>
            <li class="list-item today-item">Today</li>
            <li class="list-item week-item">This Week</li>
        </ul>
        <div class="project-list">My Projects
            <ul class="project-items">
                <li class="project-item">Office</li>
                <li class="project-item">Study</li>
            </ul>
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
}