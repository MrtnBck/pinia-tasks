<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>
  <!-- new Task form -->
<div class="new-task-form">
  <task-form></task-form>
</div>
    <!-- filter -->
    <nav class="filter">
       <!-- store will be reset tot the original state -->
    <button class='reset-button' @click="taskStore.$reset">reset state</button>
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <!-- loading -->
    <div class="loading" v-if='loading'>Loading tasks...</div>

    <!--  task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} tasks left to do</p>
      <div v-for="task in tasks" :key="task.id">
        <task-details :task="task"></task-details>
      </div>
    </div>

    <!-- fav list -->
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }} favs left to do</p>

      <div v-for="task in favs" :key="task.id">
        <task-details :task="task"></task-details>
      </div>
    </div>
   
  </main>
</template>

<script>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from './components/TaskForm.vue'

export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore();

    const {tasks, loading, favs, totalCount, favCount } = storeToRefs(taskStore)

    const filter = ref("all");


    //fetch tasks
    taskStore.getTasks()

    return { taskStore, filter, tasks, loading, favs, totalCount, favCount };
  },
};
</script>
