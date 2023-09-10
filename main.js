const content = document.querySelector('.content');
const container = document.createElement('div');

const projectDiv = document.createElement('div');
projectDiv.className = 'project';
projectDiv.innerHTML = 'TODO LIST';

const projectList = document.createElement('div');
projectList.className = 'project-list';
projectList.innerHTML = 'Projects list';

const projectBtn = document.createElement('button');
projectBtn.className = 'project-btn';
projectBtn.innerHTML = 'Add Project';

projectDiv.appendChild(projectBtn);
content.appendChild(projectDiv);
content.appendChild(projectList);

function addProject () {

}

function removeProject () {

}

