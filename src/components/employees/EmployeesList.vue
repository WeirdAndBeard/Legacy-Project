<template>
  <div>
    <b-button @click="Add" class="btn-width" variant="success">Add employee</b-button>

    <b-table striped hover :fields="fields" :items="users">
      <template v-slot:cell(actions)="row">
        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        <!-- {{row}} -->
        <b-button @click="() => deleteEmployee(row.item._id)" class="btn-width " variant="danger"
          >Delete</b-button
        >
        <b-button @click="() => updateEmployee(row.item._id)" class="btn-width" variant="primary"
          >Update</b-button
        >
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // Note `isActive` is left out and will not appear in the rendered table
      fields: ["first_name", "last_name", "actions"],
      users: [],
    };
  },
  mounted: async function() {
    this.getAllUsers();
  },
  methods: {
    updateEmployee(id) {
      this.$router.push(`/employees/update/${id}`);
    },
    async getAllUsers() {
      const result = await axios.get("/api/users/");
      this.users = result.data;
      console.log(this.users);
    },
    async deleteEmployee(id) {
      const data = await axios.delete(`/api/users/delete/${id}`);
      console.log(data);
      this.getAllUsers();
    },
    Add() {
      this.$router.push("/employees/add");
    },
  },
};
</script>
<style scoped>
.Table {
  width: 400px;
  height: 500px;
  margin: 0 auto;
}
.btn-width {
  margin: 10px;
}
</style>
