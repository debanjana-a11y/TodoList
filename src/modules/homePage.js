import '../styles/homePage.css';
import {createTaskPage} from './taskPage';

export default function loadPage() {
    const content = document.querySelector('.content');
    content.classList.add('lightMode');

    const defaultHomeNav = document.querySelectorAll('.list-item')[0];
    createTaskPage(defaultHomeNav);
}
