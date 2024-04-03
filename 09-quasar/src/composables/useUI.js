import { useStore } from "vuex";
import { computed, ref } from "vue";

const useUI = () => {
  const store = useStore();

  const isSideMenuOpen = computed({
    get() {
      return store.getters["ui/isSideMenuOpen"];
    },
    set(value) {
      store.commit("ui/toogleSideMenu");
    },
  });
  const toogleSideMenu = () => {
    store.commit("ui/toogleSideMenu");
  };

  return {
    isSideMenuOpen,
    toogleSideMenu,
  };
};

export default useUI;
