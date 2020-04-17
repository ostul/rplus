let app = require('../../app')

let toDoPage = new app.TodoPage()


describe('todo actions', () => {
    beforeEach(() => {
        toDoPage.navigate()
        toDoPage.addTodo('Clean room')
    })

    it('should add a new todo to the list', () => {
        toDoPage.validateTodoText(0, 'Clean room')
        toDoPage.validateToggleState(0, false)
    })

    describe('toggling todos', () => {
        it('should toggle test correctly', () => {
            toDoPage.toggleTodo(0)
            toDoPage.validateTodoCompletedState(0, true)
        })

        it('should clear completed', () => {
            toDoPage.toggleTodo(0)
            toDoPage.clearCompleted()
            toDoPage.validateNumberOfTodosShown(0)
        })
    })
})