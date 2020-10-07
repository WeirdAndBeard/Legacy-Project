<template>
  <b-list-group-item href="#">{{task.description}}</b-list-group-item>
</template>
<script>
export default {
    props:["task"],
  name: "Task",
};
</script>
