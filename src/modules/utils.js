import {createTaskPage} from "./taskPage";

let currentActiveFolder = 'undefined';

function setActiveFolder(e) {
    if (currentActiveFolder == e.target.parentElement) return;
    if (currentActiveFolder != undefined) {
        currentActiveFolder.classList.remove('activeFolder');
    }
    setCurrentActiveFolder(e.target.parentElement);
}

function addEvent(li) {
    li.addEventListener('click', setActiveFolder);
}

function deleteEvent(li) {
    li.removeEventListener('click', setActiveFolder);
}

function setCurrentActiveFolder(li) {
    currentActiveFolder = li;
    li.classList.add('activeFolder');
    createTaskPage(currentActiveFolder);
}

export {addEvent, deleteEvent, setCurrentActiveFolder};
