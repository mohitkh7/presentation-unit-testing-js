// test suite or combination of specs
describe('Todo', function() {
    beforeEach(function() {
        todoObj = new Todo();
    })
    // test spec
    xit('addTask() should add a task to taskList', function() {
        // arrange
        task = 'Learn unit testing';
        spyOn(window, 'confirm');

        // action
        todoObj.addTask(task);

        // assert
        expect(todoObj.taskList.length).toBe(1);
        expect(todoObj.taskList).toContain(task);
        expect(window.confirm).toHaveBeenCalled();
    });

    it('deleteTask() should remove a task from taskList', function() {
        todoObj.taskList = ['task1', 'task2', 'task3'];
        todoObj.deleteTask('task2');
        expect(todoObj.taskList).not.toContain('task2');
    });
})
