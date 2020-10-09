<template>
  <div class="d-flex" id="wrapper">
    <SideBar msg="Welcome to Your Vue.js App" />
    <div
      v-for="employee in employees"
      :key="employee.employee_name"
      id="page-content-wrapper"
    >
      <b-card bg-variant="dark" text-variant="white" title="Employee Name : ">
        {{ employee.employee_name }}
        <b-card-text>
          <h5>Text Message : {{ employee.employee_message }}</h5>
          <img
            class="card-img-top"
            :src="employee.employee_image"
            alt="Card image cap"
          />
        </b-card-text>
      </b-card>
      <div class="container-fluid">
        <router-view />
      </div>
    </div>
    <!-- <div class="new"> -->
    <b-form-group id="input-group-1" label="Your Post:" label-for="input-1">
      <div>
        <!-- Using components -->
        <b-input-group class="mt-3">
          <b-form-input placeholder="Type Your Post Here"></b-form-input>
          <b-input-group-append>
            <b-button @submit="onSubmit" variant="outline-success"
              >Post</b-button
            >
          </b-input-group-append>
        </b-input-group>
      </div>
    </b-form-group>
      <!-- </div> -->
  </div>
</template>

<script>
import axios from "axios";
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
          employee_message: ""
        },
                {
          employee_name: "",
          employee_image: "",
          employee_message: ""
        },
      ]
    };
  },

  methods: {
    getEmployees() {
      this.axios
        .get("/chat")
        .then(res => this.employees.push(res.data))
        .catch(err => console.log(err));
    },

    // needs to be fixed to post the messages of the users
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        const data = await axios.post("chat/add", this.employees);
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.container-fluid {
  padding: 20px;
  position: relative;
    display: grid;
  grid-column: 50px;
}

#sidebar-wrapper {
  background-color: grey;
  text-align: left;
}

.card-img-top {
  width: 120px;
  position: absolute;
  margin-left: -285px;
  margin-top: -67px;
  border-radius: 50px;
}


</style>
