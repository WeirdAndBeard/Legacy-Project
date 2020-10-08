<template>
  <div class="d-flex" id="wrapper">
    <SideBar msg="Welcome to Your Vue.js App" />
    <div v-for="employee in employees" :key="employee.id" id="page-content-wrapper">
      <b-card bg-variant="dark" text-variant="white" title="Employee Name : ">
        <b-card-text>
          <h5>Text Message : </h5>
          <img
            class="card-img-top"
            src="https://i.ytimg.com/vi/USEfl0-r6iE/maxresdefault.jpg"
            alt="Card image cap"
          />
        </b-card-text>
      </b-card>
      <b-form-group
        id="input-group-1"
        label="Your Post:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          required
          placeholder="Enter your Post Here"
        ></b-form-input>
      </b-form-group>
      <div class="container-fluid">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/sidebar/SideBar.vue";

export default {
  name: "Dashboard",
  components: {
    SideBar
  },
  data() {
    return {
      employees: [
        {
          employee_name: "",
          employee_image: "",
          employee_message: "",
        }
      ]
    };
  },
  methods: {
    getEmployees() {
      this.axios
        .get("/employees")
        .then(res => this.employees.push(res.data))
        .catch(err => console.log(err));
    }
  }
};
</script>
<style scoped>
.container-fluid {
  padding: 20px;
}

#sidebar-wrapper {
  background-color: grey;
  text-align: left;
}

.card-img-top {
  width: 100px;
}
</style>
