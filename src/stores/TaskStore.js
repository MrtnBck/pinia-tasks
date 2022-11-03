import { defineStore } from "pinia";

export const useTaskStore = defineStore("tasksStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 2, title: "play gitar", isFav: true },
    ],
  }),
  getters: {
    favs() {
      return this.tasks.filter((task) => task.isFav);
    },
    favCount() {
      return this.tasks.reduce((prev, curr) => {
        return curr.isFav ? prev + 1 : prev;
      }, 0);
    },
    totalCount: (state) => {
      //refer to state arg (arrow function)
      return state.tasks.length;
    },
  },
});
