import '../styles/taskPage.css';
import addIcon from '../assets/add.png';
import completedTaskPic from '../assets/completedTaskPic.png'

export default function createTaskPage() {
    const content = document.querySelector('.content');
    const taskPage = document.createElement('div');
    taskPage.classList.add('taskPage');
    taskPage.innerHTML = `
    <p>Home</p>
    <div class="taskHeader">
        <button>Add New Task</button>
    </div>
    <div class="taskContent">
        <div class="todoList"></div>
        <h3>Completed Tasks</h3>
        <div claas="doneList"></div>
    </div>
    `;

    content.appendChild(taskPage);

    const addBtn = document.querySelector('.taskHeader').querySelector('button');
    console.log(addBtn);
    const addTask = new Image();
    addTask.src = addIcon;
    addTask.classList.add('addTask');
    addBtn.prepend(addTask);

    const todoList = document.querySelector('.todoList');
    const noWorkImage = new Image();
    noWorkImage.src = completedTaskPic;
    noWorkImage.classList.add('noWorkImage');
    todoList.appendChild(noWorkImage);

    const noWorkText = document.createElement('p');
    noWorkText.innerText = "No work for today. Enjoy your day.";
    todoList.appendChild(noWorkText);
}