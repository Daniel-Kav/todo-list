const content = document.querySelector('.content');
const container = document.createElement('div');

// Create a navigation bar div
const navBar = document.createElement('div');
navBar.className = 'navbar';

// Create navigation links
const homeLink = document.createElement('a');
homeLink.href = '#'; // Set the appropriate href value
homeLink.textContent = 'Home';

const projectsLink = document.createElement('a');
projectsLink.href = '#'; // Set the appropriate href value
projectsLink.textContent = 'Projects';

const aboutLink = document.createElement('a');
aboutLink.href = '#'; // Set the appropriate href value
aboutLink.textContent = 'About';

// Append the navigation links to the navigation bar
navBar.appendChild(homeLink);
navBar.appendChild(projectsLink);
navBar.appendChild(aboutLink);

// Append the navigation bar to the content div
content.appendChild(navBar);

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
}

function removeProject() {
  // Your removeProject function logic here
}
