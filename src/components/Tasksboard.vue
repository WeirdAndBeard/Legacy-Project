<template>
  <div class="tasksboard-container">
    <TasksList v-for="list in lists" :key="list._id" :tasksList="list" />
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
            id="newlistTitle"
            v-model="newlistTitle"
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
import axios from "axios";

export default {
  name: "TasksBoard",
  components: {
    TasksList,
  },
  data() {
    return {
      addNewListPressed: false,
      newlistTitle: "",
      lists: [],
    };
  },
  mounted: function() {
    this.getAllLists();
  },
  methods: {
    getAllLists: async function() {
      try {
        let res = await axios("/api/tasks_list");
        this.lists = res.data;
        console.log("lists ====>", this.lists);
      } catch (err) {
        console.log(err);
      }
    },
    addNewTasksList: async function(e) {
      e.preventDefault();
      try {
        this.lists = await axios.post("/api/tasks_list/add", {
          title: this.newlistTitle,
          adminId: "3213213211",
        }).data;
        this.addNewListPressed = !this.addNewListPressed;
        this.newlistTitle = "";
        this.getAllLists();
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
