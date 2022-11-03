import { defineStore } from "pinia";

export const useTaskStore = defineStore("tasksStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 2, title: "play gitar", isFav: true },
    ],
  }),
});
