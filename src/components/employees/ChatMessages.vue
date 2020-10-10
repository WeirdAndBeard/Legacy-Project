<template>
  <div class="d-flex" id="wrapper">
    <div class="d-flex">
      <SideBar msg="Welcome to Your Vue.js App" />
      <b-form-group id="input-group-1" label="Your Post:" label-for="input-1">
        <div>
          <!-- Using components -->
          <b-input-group class="mt-3">
            <b-form-input placeholder="Type Your Post Here"></b-form-input>
            <b-input-group-append>
              <b-button variant="outline-success">Post</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
      </b-form-group>
    </div>
    <div v-for="employee in employees" :key="employee.employee_name" id="new">
      {{ employee.employee_name }}
      <b-card bg-variant="dark" text-variant="white" title="Employee_Name : ">
         <img
          class="card-img-top"
          :src="employee.employee_image"
          alt="Card image cap"
        />
        <b-card-text>
          Text Message : {{ employee.employee_message }}
        </b-card-text>
      </b-card>
    </div>
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
        }
      ]
    };
  },

  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      var url = "/api/chatMessages/add";
      if (this.$route.params.id) {
        url = `/api/chatMessages/update/${this.$route.params.id}`;
      }
      try {
        const data = await axios.post(url, this.employees);
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
      this.$router.push("/chatMessages");
    }
  },

  mounted: async function() {
    if (this.$route.params.id) {
      const result = await axios.get(
        `/api/chatMessages/${this.$route.params.id}`
      );
      console.log(result.data);
      this.employees.employee_name = result.data.employee_name;
      this.employees.employee_image = result.data.employee_image;
      this.employees.employee_message = result.data.employee_message;
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

#input-group-1 {
  margin-bottom: 1rem;
  position: relative;
  left: 250px;
  top: 30px;
  width: 500px;
}

#new {
  margin-bottom: 1rem;
  position: relative;
  left: -59px;
  top: 168px;
  width: 1695px;
}
</style>
