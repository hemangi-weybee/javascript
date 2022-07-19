'use strict';

//Elevator controls
const elevators = document.getElementsByClassName('elevator');
const toogle = document.getElementsByName('lift');
const containerElevator = document.getElementsByClassName('elevatorsBox')[0];

//lift data
const userLifts = prompt("How many Lift you want ?", "3");
const lifts = Number(userLifts) ? Number(userLifts) : 3;
const userFloors = prompt("How many Floors you want ?", "5");
const totalFloors = Number(userFloors) ? Number(userFloors) : 5;
const liftData = [];
const eleHeight = 100;

//Core Functions
const moves = function (liftNo, steps, where) {

    const downbtn = document.getElementsByClassName("downbtn")[steps - 2];
    const upbtn = document.getElementsByClassName("upbtn")[steps - 1];
    const door = document.getElementsByClassName('leftdoor')[liftNo];
    const rdoor = document.getElementsByClassName('rightdoor')[liftNo];
    if (where != null) {
        where === 0 ? downbtn.style.backgroundColor = "#eb1f48" : upbtn.style.backgroundColor = "#eb1f48";
    }

    let id = null;
    let i = 0, f = liftData[liftNo].curFloor, delay = 0;
    const ele = elevators[liftNo];

    let pos = (totalFloors - liftData[liftNo].curFloor) * eleHeight;
    let destination = (totalFloors - steps) * eleHeight;
    liftData[liftNo].curFloor = steps;

    clearInterval(id);
    id = setInterval(frame, 7);
    door.style.left = "2px";
    rdoor.style.right = "2px";

    function frame() {
        if (pos == destination) {
            ele.style.top = pos + "px";
            document.getElementsByClassName('eleFloorNo')[liftNo].innerHTML = steps;

            if (where != null) {
                where === 0 ? downbtn.style.backgroundColor = "#ffffff" : upbtn.style.backgroundColor = "#ffffff";
            }

            if (toogle[liftNo].checked) {
                door.style.left = "2px";
                rdoor.style.right = "2px";
            } else {
                door.style.left = "-100%";
                rdoor.style.right = "-100%";
            }
            clearInterval(id);

        } else {
            if (delay < 100) delay++;
            else {
                pos < destination ? pos++ : pos--;
                ele.style.top = pos + "px";

                if (i === eleHeight) {
                    i = 0;
                    pos < destination ? f-- : f++;
                } else i++;

                document.getElementsByClassName('eleFloorNo')[liftNo].innerHTML = f;
            }
        }
    }
}

const closest = function (arr, goal, where) {
    if (arr.every(v => v === arr[0])) {
        let l = Math.floor(Math.random() * lifts);
        if (l < 0) l = 0;
        return (l);
    }
    else {
        if (arr.indexOf(goal) === -1) {
            const val = arr.reduce(function (acc, cur) {
                if (Math.abs(cur - goal) < Math.abs(acc - goal)) return cur;
                else if (Math.abs(cur - goal) > Math.abs(acc - goal)) return acc;
                else {
                    if (where === 1) return Math.min(cur, acc);
                    else return Math.max(cur, acc);
                }
            });
            return arr.indexOf(val);
        } else {
            return arr.indexOf(goal);
        }
    }
}

const moveup = function (goal) {
    const floorData = liftData.map(t => t.isMaintenance ? 9999 : t.curFloor);
    moves(closest(floorData, goal, 1), goal, 1);   //for up 1
}

const movedown = function (goal) {
    const floorData = liftData.map(t => t.isMaintenance ? 9999 : t.curFloor);   
    moves(closest(floorData, goal, 0), goal, 0);  //for down 0
}

const maintenance = function (lift) {

    if (toogle[lift].checked) {
        liftData[lift].isMaintenance = true;
        moves(lift, 1, null);
        elevators[lift].style.boxShadow = "inset 0px 0px 0px 2px #eb1f48";
        document.getElementsByClassName('leftdoor')[lift].style.left = "2px";
    } else {
        liftData[lift].isMaintenance = false;
        elevators[lift].style.boxShadow = "inset 0px 0px 0px 2px black";
        document.getElementsByClassName('leftdoor')[lift].style.left = "-100%";
    }

    const allButton = document.getElementsByTagName("button");
    if (liftData.every(l => l.isMaintenance)) for (const btn of allButton) btn.disabled = true;
    else for (const btn of allButton) btn.disabled = false;
}


//UI

const displayLift = function () {
    containerElevator.style.height = `${(totalFloors * eleHeight) + 50}px`;
    containerElevator.innerHTML = '';
    for (let index = 0; index < lifts; index++) {
        const liftsHTML = `
        <div class="line">
            <div class="elevatorLine" style="height: ${totalFloors * eleHeight}px">
                <div class="elevator" id="ele-${index}"> 
                    <div class="eleFloorNo">1</div>
                    <div class="leftdoor"></div>
                    <div class="rightdoor"></div>
                </div>
            </div>
            <div class="toggleElevator">
                <label class="switch">
                    <input type="checkbox" name="lift" class="lift" onclick="maintenance(${index})">
                    <span class="slider"></span>
                </label>
            </div>
        </div>`;
        containerElevator.insertAdjacentHTML('beforeend', liftsHTML);
        liftData.push({ liftNo: index, curFloor: 1, isMaintenance: false });
    }

    const floorBoxHTML = `<div class="line"><div class="floorBox">`;
    containerElevator.insertAdjacentHTML('beforeend', floorBoxHTML);

    const floorBox = document.getElementsByClassName('floorBox')[0];
    floorBox.innerHTML = '';
    for (let i = 1; i <= totalFloors; i++) {
        let displayFloorHTML;
        if (i === 1) {
            displayFloorHTML = `                
                        <div class="allFloor">
                            <div class="floorNo">${i}</div>
                            <button class="upbtn" onclick="moveup(${i})"><img src="images/up.svg" alt=""></button>
                        </div>`;
        } else if (i === totalFloors) {
            displayFloorHTML = `
                        <div class="allFloor">
                            <div class="floorNo">${i}</div>
                            <button class="downbtn" onclick="movedown(${i})"><img src="images/down.svg" alt=""></button>
                        </div>
                        `;
        } else {
            displayFloorHTML = `
                        <div class="allFloor">
                            <div class="floorNo">${i}</div>
                            <button class="upbtn" onclick="moveup(${i})"><img src="images/up.svg" alt=""></button>
                            <button class="downbtn" onclick="movedown(${i})"><img src="images/down.svg" alt=""></button>
                        </div>`;
        }
        floorBox.insertAdjacentHTML('beforeend', displayFloorHTML);
    }
    const maintenanceHTML = `<div class="maintenanceHead"> Maintenance </div>`;
    floorBox.insertAdjacentHTML('afterend', maintenanceHTML);
}

const init = function () {
    displayLift();
    liftData.forEach((l, liftNo) => {
        moves(liftNo, l.curFloor, null);
    });
}
init();