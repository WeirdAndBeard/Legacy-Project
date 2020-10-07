<template>
  <Task />
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "TasksList",
  components: {
    Task
  },
  data() {
    return {
      tasks: [],
    };
  },
};
</script>

<style scoped></style>
