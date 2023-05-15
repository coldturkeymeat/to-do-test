export default class Task {
    constructor(name, description, dueDate='No Date', priority) {
        this.name = name
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

    getTaskName () {
        return this.name
    }

    setTaskName (name) {
        this.name = name
    }

    getTaskDescription () {
        return this.description
    }

    setTaskDescription (description) {
        this.description = description
    }

    getTaskDueDate () {
        return this.dueDate
    }

    setTaskDueDate (dueDate) {
        this.dueDate = dueDate
    }

    getTaskPriority () {
        return this.priority
    }

    setTaskPriority (priority) {
        this.priority = priority
    }

}