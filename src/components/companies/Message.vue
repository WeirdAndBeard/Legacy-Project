<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Your message here:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.message"
          required
          placeholder="Type your message here"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="primary">Reset</b-button>
        <img class="card-img-top" src="http://www.onlygoodmovies.com/blog/wp-content/uploads/2010/09/woody-allen.jpg" alt="Card image cap">

    </b-form>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        message: "",
      },

      show: true
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        const data = await axios.post("/api/messages/add", this.form);
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
      this.$router.push("/messages");
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.message = "";
      
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
<style scoped>
.container {
  background-color: #8080808c;
  width: 50%;
  margin-top: 50px;
}

#input-1 {
  height: 50px;
}
</style>
