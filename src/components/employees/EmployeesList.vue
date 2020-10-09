<template>
  <div>
    <b-button @click="Add" class="btn-width">Add employee</b-button>
    <b-button @click="Delete" class="btn-width">Delete employee</b-button>
    <b-button @click="update" class="btn-width">Update employee</b-button>
    <b-table striped hover :fields="fields" :items="users">
      <template v-slot:cell(actions)="row">
        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        <!-- {{row}} -->

        <b-form-checkbox
          @change="(event) => {handleChange(event, row.item._id)}"
         
          ></b-form-checkbox
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
      usersID: [],
      userId: false,
    };
  },
  mounted: async function() {
    this.getAllUsers();
  },
  methods: {
    handleChange(event, id) {
      if (event) {
        this.usersID.push(id);
        console.log(this.usersID);
      } else {
        this.usersID.splice(this.usersID.indexOf(id), 1);
      }
      console.log(this.usersID);
    },
   
    update() {
      for (var i = 0; i < this.usersID.length; i++) {
        if (this.usersID.length !== 1) {
           alert("check one user to update");
        
        } else {
         this.$router.push(`/employees/update/${this.usersID[0]}`);
        }
      }
    },
    async getAllUsers() {
      const result = await axios.get("/api/users/");
      this.users = result.data;
      console.log(this.users);
    },
    async Delete() {
      for (var i = 0; i < this.usersID.length; i++) {
        const data = await axios.delete(`/api/users/delete/${this.usersID[i]}`);
        console.log(data);
        this.getAllUsers();
      }
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
