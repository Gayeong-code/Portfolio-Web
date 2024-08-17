'use strict';

//Handeling logic for filtering projects
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.filter;
  if (filter == null) {
    return;
  }

 handleActiveMenu(event.target);
 filterProjects(filter);


 
});

function handleActiveMenu(target){
    //Highlighting Active menu 
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}


function filterProjects(filter){
  projectsContainer.classList.add('anim-out');
  //Filtering Project
  projects.forEach((project) => {
    if (filter === "all" || filter === project.dataset.type){
      project.style.display = 'block';
    } else {
      project.style.display= 'none';
    }
  });
  projectsContainer.classList.add('anim-out');
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  },250)
}
