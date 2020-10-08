<template>
  <b-list-group-item href="#" :key="task._id">{{
    task.description
  }}</b-list-group-item>
</template>
<script>
export default {
  name: "Task",
  props: ["task"],
  data() {
    return {
      task: this.task,
    };
  },
};
</script>
