<template v-for="employee in employees" :key="employee.sender">
  <div class="container">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Your message here:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="employees.message"
          required
          placeholder="Type your message here"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Send Message</b-button>
      <img
        class="card-img-top"
        src="http://www.onlygoodmovies.com/blog/wp-content/uploads/2010/09/woody-allen.jpg"
        alt="Card image cap"
      />
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      employees: [
        {
          sender: "",
          reciever: "",
          message:"",
        },
        
      ]
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        const data = await axios.post("/api/chat/add", this.employees);
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
      this.$router.push("/chats");
    }
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
