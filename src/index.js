import Project from "./Project";

const projectList = []
const form = document.getElementById('projectForm')
form.onsubmit() = (e) => {
    let formInput = document.getElementById('projectTitle').value
    let newProject = new Project(formInput)

}

const displayProjects = (projectList) => {
    const projDiv = document.getElementById('projects')
    projDiv.innerHTML = ''
    projectList.forEach((project) => {
        projDiv.appendChild(

        )
    })
}