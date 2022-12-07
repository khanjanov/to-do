const addTask = document.querySelector(".add-btn");
const task = document.querySelector("#to-do-input");
const listBox = document.querySelector("ul");
const taskBox = document.querySelector(".tasks");
const xbtn = document.querySelector(".input-icon");
const sort = document.querySelector(".icon-arrow");

let localStorageGet = localStorage.getItem("taskey");
let taskArr = [];

if (localStorageGet !== null) {
  taskArr = JSON.parse(localStorage.getItem("taskey"));
}

localStorage.setItem("taskey", JSON.stringify(taskArr));
function init() {
  let data = JSON.parse(localStorage.getItem("taskey"));

  if (data.length > 0) {
    data.forEach((element) => {
      const newList = document.createElement("li");
      const newImg = document.createElement("img");
      newImg.src = "/pics/delete1.svg";
      newImg.classList.add("list-icon");
      taskBox.style.display = "block";
      newList.textContent = element;
      listBox.append(newList);
      newList.append(newImg);

      newImg.addEventListener("click", removeTaskFunc);
      function removeTaskFunc() {
        localStorage.remove("taskey");
        taskArr.splice();
        newImg.remove();
        newList.remove();
      }
    });
  }
}

init();

addTask.addEventListener("click", addTaskFunc);
function addTaskFunc(e) {
  e.preventDefault();

  const newList = document.createElement("li");
  newList.textContent = task.value;
  listBox.appendChild(newList);
  taskBox.style.display = "block";

  const newImg = document.createElement("img");
  newImg.src = "/pics/delete1.svg";
  newImg.setAttribute("class", "list-icon");
  newList.appendChild(newImg);

  taskArr.push(task.value);
  console.log(taskArr);

  localStorage.setItem("taskey", JSON.stringify(taskArr));
  let data = JSON.parse(localStorage.getItem("taskey"));

  newImg.addEventListener("click", removeTaskFunc);
  function removeTaskFunc() {
    localStorage.removeItem("taskey");
    taskArr.splice();
    newImg.remove();
    newList.remove();
  }
}

console.log(localStorage);
