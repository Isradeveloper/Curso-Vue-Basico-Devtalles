import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Recolectar las piedras del infinito', completed: false},
      { id: '2', text: 'Piedra del alma', completed: false},
      { id: '3', text: 'Piedra del poder', completed: true},
      { id: '4', text: 'Piedra de realidad', completed: false},
    ]
  },
  getters: {

    pendingTodos(state, getters, rootState) {
      return state.todos.filter((todo)=>!todo.completed)
    },

    allTodos(state, getters, rootState) {
      return state.todos
    },

    completedTodos: (state, getters, rootState) => {
      return state.todos.filter((todo) => todo.completed)
    },

    filteredTodos: (state, getters, rootState) => ( tab ) => {
      switch (tab) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.completedTodos
      }
    }

  },
  mutations: {

    toogleTodo: (state, id) => {
      const index = state.todos.findIndex((todo) => todo.id == id)
      state.todos[index].completed = !state.todos[index].completed 
    },

    createTodo: (state, formValues) => {
      const {id, text} = formValues
      state.todos = [...state.todos, {id, text, completed: false}]
    }

  },
  actions: {
  },
  modules: {
  }
})
