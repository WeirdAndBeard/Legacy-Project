<template>
  <b-list-group-item @click="updateTask" href="#" :key="this_task._id">
    <testpopup :id="this_task._id" />
    {{ this_task.description }}
  </b-list-group-item>
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
