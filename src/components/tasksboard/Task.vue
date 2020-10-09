<template>
  <div>
    <b-list-group-item @click="updateTask" href="#" :key="this_task._id">
      {{ this_task.description }}
    </b-list-group-item>
    <testpopup :task="this_task" />
  </div>
</template>
<script>
import axios from "axios";
import testpopup from "./testpopup.vue";

export default {
  name: "Task",
  components: {
    testpopup,
  },
  props: ["task"],
  data() {
    return {
      this_task: this.task,
    };
  },
  methods: {
    updateTask: async function() {
      console.log("task " + this.task._id + " clicked");
      try {
        await axios.put(`/api/tasks/update/${this.task._id}`, {
          task: this.this_task,
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
