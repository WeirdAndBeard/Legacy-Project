<template>
  <b-card-group deck class="taskslist-container">
    <b-card :header="list.title">
      <b-list-group>
        <div class="list-header">
          <a
            class="btn btn-outline-primary new-task"
            href="#"
            role="button"
            v-show="!addNewTaskPressed"
            @click="addNewTaskPressed = !addNewTaskPressed"
            >Add new task here</a
          >
          <form v-show="addNewTaskPressed" class="new-task-form">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="taskDescription"
                v-model="taskDescription"
                @blur="!addNewTaskPressed"
              />
            </div>
            <button class="btn btn-success" type="submit" @click="addNewTask">
              Save
            </button>
          </form>
        </div>
        <Task v-for="task in tasks" :key="task._id" :task="task" />
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
      taskDescription: "",
      addNewTaskPressed: false,
      tasks: [],
      list: this.tasksList,
    };
  },
  components: {
    Task,
  },
  mounted: function() {
    this.getTasks();
  },
  methods: {
    getTasks: async function() {
      console.log("list ===>", this.list);
      try {
        let res = await axios.get(`/api/tasks_list/${this.list._id}/tasks`);
        this.tasks = res.data;
        console.log(this.tasks);
      } catch (err) {
        console.log(err);
      }
    },
    addNewTask: async function(e) {
      e.preventDefault();
      console.log("list add new task ===>", this.list);
      try {
        await axios.post(`/api/tasks_list/${this.list._id}/tasks/add`, {
          description: this.taskDescription,
          listId: this.list._id,
        });

        this.addNewTaskPressed = !this.addNewTaskPressed;
        this.taskDescription = "";
        this.getTasks();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
.taskslist-container {
  min-width: 300px;
  height: fit-content;
}
.new-task,
.new-task-form {
  height: fit-content;
  width: -webkit-fill-available;
  margin: 10px;
}

.list-header {
}
</style>
