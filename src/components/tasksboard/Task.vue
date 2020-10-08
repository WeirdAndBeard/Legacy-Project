<template>
  <b-list-group-item href="#" :key="this_task._id">{{
    this_task.description
  }}</b-list-group-item>
</template>
<script>
export default {
  name: "Task",
  props: ["task"],
  data() {
    return {
      this_task: this.task,
    };
  },
};
</script>
