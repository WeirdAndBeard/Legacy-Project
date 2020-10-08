<template v-for="employee in employees" :key="employee.employee_full_name">
  <div>
    <b-form-group
      id="input-group-1"
      label="Type Your Post Here:"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        required
        placeholder="Type Your Post Here"
      ></b-form-input>
    </b-form-group>
    <b-button @click="Message">Post Message</b-button>
    <b-table striped hover :items="employees">
      <img
        class="card-img-top"
        src=""
        alt="Card image cap"
      />
    </b-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      employees: [
        {
            // the schema should confront here
          employee_image: "",
          employee_full_name: "",
          post: ""
        }
      ]
    };
  },
  methods: {
    async Message(evt) {
      evt.preventDefault();
      try {
        const data = await axios.post("/api/chat/add", this.employees);
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
        this.$router.push("/rooms/chat");
    },
    
    getUsersData(){
        // get the users data image name and the current post
    },
  }
};
</script>
<style scoped>
.container {
  background-color: #8080808c;
  width: 30%;
  margin-top: 50px;
}
</style>
