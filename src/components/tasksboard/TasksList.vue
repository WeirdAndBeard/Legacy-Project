<template>
  <b-card-group deck>
    <b-card header="Card with list group">
      <b-list-group>
        <Task v-for="task in tasks" :key="task.id" :task="task"  />
      </b-list-group>
    </b-card>
  </b-card-group>
</template>
<script>
import Task from "./Task.vue";
export default {
  name: "TasksList",
  data(){
    return {
     
      tasks:[
        {
          description:"task1",
          id:1
        },
        {
          description:"task2",
          id:2
        },
        {
          description:"task3",
          id:3
        }
      ]
    }
  },
  components: {
    Task,
  },
};
</script>
