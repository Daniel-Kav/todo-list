const content = document.querySelector('.content');

const projects = [];
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

// Create a task input and button
const taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.classList.add("task-input");
const addTaskBtn = document.createElement("button");
addTaskBtn.innerHTML = "Add Task";

projectDiv.appendChild(projectBtn);
content.appendChild(projectDiv);
content.appendChild(projectList);
projectDiv.appendChild(taskInput);
projectDiv.appendChild(addTaskBtn);


projectBtn.addEventListener("click", addProject);
addTaskBtn.addEventListener("click", addTask);

function addProject() {
  const projectName = prompt("Enter the project name:");
  if (projectName) {
    const project = {
      name: projectName,
      tasks: [],
    };
    projects.push(project);
    updateProjectList();
  }
}

function updateProjectList() {
  projectList.innerHTML = ""; // Clear the existing list

  projects.forEach((project, index) => {
    const listItem = document.createElement("div");
    listItem.className = "project-list-item";
    listItem.innerHTML = `<span>${project.name}</span>`;

    // Add a button to remove the project
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.addEventListener("click", () => removeProject(index));
    
    listItem.appendChild(removeBtn);

    listItem.addEventListener("click", () => displayTasks(index));
    projectList.appendChild(listItem);
  });
}

function removeProject(index) {
  projects.splice(index, 1);
  updateProjectList();
}

function displayTasks(index) {
  const selectedProject = projects[index];
  taskInput.style.display = "block";
  addTaskBtn.style.display = "block";

  addTaskBtn.addEventListener("click", () => addTaskToProject(selectedProject));
}

function addTaskToProject(project) {
  const taskTitle = taskInput.value.trim();
  if (taskTitle) {
    project.tasks.push({ title: taskTitle, status: "not completed" });
    taskInput.value = "";
    alert("Task added!");
    listTasks(project);
  }
}

function listTasks(project) {
  const taskList = document.createElement("ul");
  taskList.className = "task-list";

  project.tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.textContent = `[${task.status}] ${task.title}`;
    taskList.appendChild(listItem);
  });

  // Clear previous task list (if any) and display the new one
  projectDiv.querySelector(".task-list").remove();
  projectDiv.appendChild(taskList);
}
