export default class Project {
    cosntructor(projectTitle) {
        this.projectTitle = projectTitle
        this.tasks = []
    }

    addTask (task) {
        this.tasks.push(task)
    }

    removeTask (taskName) {
        this.tasks = this.tasks.filter(task => task != taskName)
    }
}