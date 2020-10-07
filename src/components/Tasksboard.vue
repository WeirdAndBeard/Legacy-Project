<template>
  <div class="tasksboard-container">
    <TasksList
      v-for="tasksList in tasksLists"
      :key="tasksList._id"
      :tasksList="tasksList"
    />
    <div>
      <a
        class="btn btn-outline-primary new-taskslist"
        href="#"
        role="button"
        v-show="!addNewListPressed"
        @click="addNewListPressed = !addNewListPressed"
        >Add new tasks list</a
      >
      <form v-show="addNewListPressed" class="new-taskslist-form">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="listTitle"
            v-model="listTitle"
          />
        </div>
        <button class="btn btn-success" type="submit" @click="addNewTasksList">
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import TasksList from "@/components/tasksboard/TasksList.vue";

export default {
  name: "TasksBoard",
  components: {
    TasksList,
  },
  data() {
    return {
      addNewListPressed: false,
      listTitle: "",
      tasksLists: [],
    };
  },
  methods: {
    addNewTasksList: async function(e) {
      e.preventDefault();
      // this.tasksLists.push({
      //   _id: 798,
      //   title: "planned",
      // });
      try {
        this.tasksLists = await this.$axios.post("/api/tasks_list/add", {
          title: this.listTitle,
          adminId: "3213213211"
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.tasksboard-container {
  display: flex;
  column-gap: 20px;
  justify-items: end;
  overflow-x: auto;
  height: 100%;
}
.new-taskslist,
.new-taskslist-form {
  min-width: 300px;
  height: fit-content;
}
</style>
