import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const useTodo = () => {

  const store = useStore()

  const currentTab = ref('all')
  const isOpen = ref(false)
  const formValues = ref({
    text: ''
  })

  const all = computed(() => store.getters['allTodos'])
  const completed = computed(() => store.getters['completedTodos'])
  const getTodosByTab = computed(() => store.getters['filteredTodos'](currentTab.value))

  return {
      all,
      completed,
      currentTab,
      getTodosByTab,
      isOpen,
      formValues,
      pending: computed(() => store.getters['pendingTodos']),
      
      toogleTodo: (id) => store.commit('toogleTodo', id),
      toogleModal: () => isOpen.value = !isOpen.value,
      createNewTodo: ({text}) => {
        
        if (text.length <= 1) return

        store.commit('createTodo', {id: new Date().getTime(), text})
        isOpen.value = false
        formValues.value.text = ""
      }
      
  }

}

export default useTodo