class Todo {

    constructor() {
        this.taskList = [];
    }

    addTask(task) {
	    window.confirm('adding task to taskList');
        this.taskList.push(task);
    }

    deleteTask(task){        
        for(let i=0; i<this.taskList.length; i++) {
            if (this.taskList[i] == task) {
                this.taskList.splice(i, 1);
                break;
            }
        }
    }
}
