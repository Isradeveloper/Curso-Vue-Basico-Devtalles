import { ref } from 'vue';

const useCounter = ( initValue = 5 ) => {

  const counter = ref(initValue)

  const increase = () => {
    counter.value ++
  }

  return {
    counter,

    increase,
    decrease: () => counter.value --
  }

}

export default useCounter