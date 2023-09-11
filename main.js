const content = document.querySelector('.content');

const tasks = [];
// Create a project div
const projectDiv = document.createElement('div');
projectDiv.className = 'project';
projectDiv.innerHTML = '<h1>TODO LIST</h1>';

const projectList = document.createElement('div');
projectList.className = 'project-list';
projectList.innerHTML = '<h3>Projects list</h3>';

const projectBtn = document.createElement('button');
projectBtn.className = 'project-btn';
projectBtn.innerHTML = 'Add Project';

projectDiv.appendChild(projectBtn);
content.appendChild(projectDiv);
content.appendChild(projectList);

function addProject() {
  // Your addProject function logic here
  projectBtn.addEventListener("click", () => {
    alert("Add Project");
    const addList = document.createElement("div");
    addList.className = "projectList";
    const projectForm = document.createElement("form");
    projectForm.classList.add("projectForm");
    
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.classList.add("nameInput");
    projectForm.appendChild(nameInput);

    addList.appendChild(projectForm);
    projectDiv.appendChild(addList);
  })
}

function addTask(){
  const newTask = document.querySelector(".nameInput");
  if (newTask.trim !== ""){
    tasks.push({title: newTask,status: "completed"});
    document.querySelector(".nameInput").value = "";
    alert("task finished");
  }
}

function listTasks() {
  const taskList = document.querySelector(".addList");
  taskList.innerHTML = ""; // Clear the existing list

  tasks.forEach((task, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `[${task.status}] ${task.title}`;
      taskList.appendChild(listItem);
  });

}

function removeProject() {
  // Your removeProject function logic here
}
 addProject();