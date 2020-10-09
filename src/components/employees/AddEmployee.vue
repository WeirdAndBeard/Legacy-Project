<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <br />
      <b-form-group id="input-group-0" label-for="input-0">
        <b-form-input
          id="input-0"
          v-model="form.username"
          required
          placeholder="Enter user-name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.last_name"
          required
          placeholder="Enter last-name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.first_name"
          required
          placeholder="Enter first-name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <label>Select birthday:</label>
      <b-form-datepicker
        id="example-datepicker"
        v-model="form.age"
        class="mb-2"
      ></b-form-datepicker>

      <b-form-group
        id="input-group-3"
        label="Select Position:"
        label-for="input-3"
      >
        <b-form-select
          id="input-3"
          v-model="form.position"
          :options="positions"
          required
        ></b-form-select>
      </b-form-group>

     
      <b-form-group
        id="input-group-3"
        label="Select gender:"
        label-for="input-3"
      >
        <b-form-select
          id="input-3"
          v-model="form.gender"
          :options="genders"
          required
        ></b-form-select>
      </b-form-group>
     

      <b-button class="btn-width" type="submit" variant="success"
        >Submit</b-button
      >
      <b-button class="btn-width" type="reset" variant="primary"
        >Reset</b-button
      >
      <br />
      <br />
    </b-form>

    <pre class="m-0">{{ form }}</pre>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        email: "",
        FirstName: "",
        LastName: "",
        userName: "",
        position: null,
        gender: null,
        age: ""
      },

      positions: [
        { text: "Select One", value: null },
        "Director",
        "Cleaner",
        "Developper",
        "Designer",
      ],
       genders: [
        { text: "Select One", value: null },
        "Male",
        "Female"
      ],
      show: true,
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      try {
        const data = await axios.post("/api/users/add", this.form);
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
      this.$router.push("/employees");
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      this.form.date = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style scoped>
.container {
  border: 1px solid black;
  border-radius: 10px;
  width: 50%;
}
.btn-width {
  width: 100%;
  margin: 10px;
}
</style>
