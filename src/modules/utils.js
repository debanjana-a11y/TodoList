import createTaskPage from "./taskPage";

let currentActiveFolder = 'undefined';

function addEvent(li) {
    li.addEventListener('click', function() {
        if (currentActiveFolder == li) return;
        if (currentActiveFolder != undefined) {
            console.log(currentActiveFolder);
            currentActiveFolder.classList.remove('activeFolder');
        }
        currentActiveFolder = li;
        li.classList.add('activeFolder');
        console.log(currentActiveFolder);
        createTaskPage(currentActiveFolder);
    });
}

function setCurrentActiveFolder(li) {
    currentActiveFolder = li;
}

export {addEvent, setCurrentActiveFolder};
