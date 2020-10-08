<template>
  <b-card-group deck class="taskslist-container">
    <b-card :header="list.title">
      <b-list-group>
        <Task v-for="task in listOfTasks" :key="task._id" :task="task" />
      </b-list-group>
    </b-card>
  </b-card-group>
</template>
<script>
import Task from "./Task.vue";
import axios from "axios";

export default {
  name: "TasksList",
  props: ["tasksList"],
  data() {
    return {
      listOfTasks: this.tasksList,
      tasks: [],
    };
  },
  components: {
    Task,
  },
  mounted: async function() {
    console.log(this.tasksList);
    try {
      this.tasks = await axios.get(
        `/api/tasks_list/${this.listOfTasks._id}/tasks`
      );

      console.log(this.tasks);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
<style scoped>
.taskslist-container {
  min-width: 300px;
}
</style>
