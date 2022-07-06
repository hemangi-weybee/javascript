'use strict';

const containerTask = document.querySelector('.listBox');
const inputBar = document.querySelector('.inputBar');
const inputBox = document.getElementById('inputBox');
const btnAdd = document.querySelector('.add');
const btnSearch = document.querySelector('.search');
const selectAction = document.getElementById('action');
const selectSort = document.getElementById('sort');
const btnAll = document.getElementById('all');
const btnActive = document.getElementById('active');
const btnCompleted = document.getElementById('completed');
const tasks = [];
let activeBtn;
let currentOpt = 0;
let generateId = 0;
let editTaskFlag = false;
let editTaskID = 0;

const displayTasks = function (tasks) {
    containerTask.innerHTML = '';

    if (tasks.length === 0) {
        const html = `
        <div class="listRow">
            <div class="noData">
                No Data Found !
            </div>
        </div>`;

        containerTask.insertAdjacentHTML('afterbegin', html);
    }
    else {
        tasks.forEach((task) => {
            const html = `
            <div class="listRow">
                    <div class="listHead">
                        <input value="${task.id}" type="checkbox" name="task" ${task.completed ? 'checked' : ''} onclick="tickComplete(${task.id})"> 
                        <div class="title"> ${editTaskFlag && editTaskID === task.id ? `<input type="text" name="editBox" value="${task.title}" onkeypress="editing(event)">` : task.title} </div>
                    </div>
        
                    <div class="listControl">
                        <button class="edit" value="${task.id}"><img src="images/edit.svg" alt="Edit Task" class="images" onclick="editTask(${task.id})" ></button>
                        <button class="del" value="${task.id}"><img src="images/delete.svg" alt="Delete Task" class="images" onclick="deleteTask(${task.id})" ></button>
                    </div>
            </div> <hr>`;
            containerTask.insertAdjacentHTML('beforeend', html); 
        });        
    }
};

const editTask = function(taskID) {
    editTaskFlag = true;
    editTaskID = taskID;
    displayTasks(tasks);
};

const editing = function(event){
    if (event.key === "Enter") {
        const box = document.getElementsByName('editBox');
        const data = box[0].value;
        const index = tasks.findIndex(t => t.id === editTaskID);
        tasks[index].title = data;
        editTaskFlag = false;
        editTaskID = 0;
        displayTasks(tasks);
    }
}

const tickComplete = function(taskID) {
    editTaskFlag = false;
    const index = tasks.findIndex(t => t.id === taskID);
    tasks[index].completed = !tasks[index].completed;
}

const deleteTask = function (taskID) {
    editTaskFlag = false;
    const index = tasks.findIndex(t => t.id === taskID);
    tasks.splice(index,1);
    displayTasks(tasks);
}


btnAdd.addEventListener('click', function () {
    editTaskFlag = false;
    activeBtn = 0;
    inputBar.style.display = 'block';
    btnAdd.classList.add('activeMainControl');
    btnSearch.classList.remove('activeMainControl');

    if (inputBox.value.trim()) {
        const newTask = {};
        newTask.id = ++generateId;
        newTask.title = inputBox.value;
        newTask.completed = false;
        inputBox.value = '';
        tasks.push(newTask);
    }
    displayTasks(tasks);
});

btnSearch.addEventListener('click', function () {
    editTaskFlag = false;
    activeBtn = 1;
    btnAdd.classList.remove('activeMainControl');
    btnSearch.classList.add('activeMainControl');

    if (inputBox.value.trim()) {
        const data = inputBox.value;
        const searched = tasks.filter(t => t.title.toLowerCase().includes(data.toLowerCase()));
        displayTasks(searched);
    } else {
        displayTasks(tasks);
    }
});

inputBox.addEventListener('keypress', function (event) {
    editTaskFlag = false;
    if (event.key === "Enter") {
        if (activeBtn == 0)
            btnAdd.click();
        else
            btnSearch.click();
    }
});

selectAction.onchange = function () {
    editTaskFlag = false;
    const opt = selectAction.options[selectAction.selectedIndex].value;

    switch (Number(opt)) {
        case 1: {
            tasks.filter(t => t.completed === true)
                .forEach(t => {
                    const delIndex = tasks.findIndex(task => task.id === t.id);
                    tasks.splice(delIndex, 1);
                });
            displayTasks(tasks);
            break;
        }
        case 2: {
            tasks.forEach(t => t.completed = true);
            displayTasks(tasks);
            break;
        }
        case 3: {
            tasks.forEach(t => t.completed = false);
            displayTasks(tasks);
            break;
        }
        default: displayTasks(tasks);
    }
};


selectSort.onchange = function () {
    editTaskFlag = false;
    const opt = selectSort.options[selectSort.selectedIndex].value;

    let sortTasks;
    if (currentOpt === 0) sortTasks = tasks.slice();
    else if (currentOpt === 1) sortTasks = tasks.filter(t => t.completed === false);
    else sortTasks = tasks.filter(t => t.completed === true);


    switch (Number(opt)) {
        case 1: {
            const newTasks = sortTasks.slice().sort((a, b) => {
                const nameA = a.title.toUpperCase();
                const nameB = b.title.toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                
                return 0;
            });
            displayTasks(newTasks);
            break;
        }
        case 2: {
            const newTasks = sortTasks.slice().sort((a, b) => {
                const nameA = a.title.toUpperCase();
                const nameB = b.title.toUpperCase();
                if (nameA > nameB) return -1;
                if (nameA < nameB) return 1;
                
                return 0;
            });
            displayTasks(newTasks);
            break;
        }
        case 3: {
            const newTasks = sortTasks.slice().sort((a, b) => a.id - b.id);
            displayTasks(newTasks);
            break;
        }
        case 4: {
            const newTasks = sortTasks.slice().sort((a, b) => b.id - a.id);
            displayTasks(newTasks);
            break;
        }
        default: {
            displayTasks(sortTasks);
        };
    }
};

btnAll.addEventListener('click', function () {
    editTaskFlag = false;
    currentOpt = 0;
    btnAll.classList.add('current');
    btnActive.classList.remove('current');
    btnCompleted.classList.remove('current');
    displayTasks(tasks);
});

btnActive.addEventListener('click', function () {
    editTaskFlag = false;
    currentOpt = 1;
    btnAll.classList.remove('current');
    btnActive.classList.add('current');
    btnCompleted.classList.remove('current');
    const activeTasks = tasks.filter(t => t.completed === false);
    displayTasks(activeTasks);
});

btnCompleted.addEventListener('click', function () {
    editTaskFlag = false;
    currentOpt = 2;
    btnAll.classList.remove('current');
    btnActive.classList.remove('current');
    btnCompleted.classList.add('current');
    const completeTasks = tasks.filter(t => t.completed === true);
    displayTasks(completeTasks);
});

displayTasks(tasks);