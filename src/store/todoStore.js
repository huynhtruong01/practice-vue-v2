export default {
    namespaced: true,
    state: {
        todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    },
    mutations: {
        ADD_TODO(state, newTodo) {
            const todoList = [
                ...state.todoList,
                {
                    ...newTodo,
                    id: Date.now(),
                    createdAt: new Date(),
                    isCompleted: false,
                },
            ]
            state.todoList = todoList
            localStorage.setItem("todoList", JSON.stringify(todoList))
        },
        UPDATE_TODO(state, todo) {
            const todoList = [...state.todoList]
            const newTodoList = todoList.map((x) => {
                if (x.id === todo.id) {
                    return todo
                }
                return x
            })
            state.todoList = newTodoList
            localStorage.setItem("todoList", JSON.stringify(newTodoList))
        },
        DELETE_TODO(state, id) {
            const todoList = [...state.todoList]
            const newTodoList = todoList.filter((x) => x.id !== id)
            state.todoList = newTodoList
            localStorage.setItem("todoList", JSON.stringify(newTodoList))
        },
    },
    actions: {
        addTodo({ commit }, todo) {
            commit("ADD_TODO", todo)
        },
        updateTodo({ commit }, todo) {
            commit("UPDATE_TODO", todo)
        },
        deleteTodo({ commit }, id) {
            commit("DELETE_TODO", id)
        },
    },
}
