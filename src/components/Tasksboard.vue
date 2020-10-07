<template>
  <div>
    <p>your tasks list goes here</p>
    <TasksList />
  </div>
</template>

<script>
import TasksList from "@/components/tasksboard/TasksList.vue";

export default {
  name: "TasksBoard",
  components: {
    TasksList
  },
  data() {
    return {
      Lists: [],
    };
  },
};
</script>

<style scoped></style>
