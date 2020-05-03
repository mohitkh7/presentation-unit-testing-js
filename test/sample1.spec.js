// test suite or combination of specs
describe('Todo', function() {
    beforeEach(function() {
        todoObj = new Todo();
    })
    // test spec
    it('addTask() should add a task to taskList', function() {
        // init
        task = 'Learn unit testing';
        // action
        todoObj.addTask(task);
        // assert
        expect(todoObj.taskList.length).toBe(1); // ===
        console.log(todoObj);
        expect(todoObj.taskList).toContain(task);
    })

    it('deleteTask() should remove a task from taskList', function() {
        todoObj.taskList = ['task1', 'task2', 'task3'];
        todoObj.deleteTask('task2');
        expect(todoObj.taskList).not.toContain('task2');

    })
})