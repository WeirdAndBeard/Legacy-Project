<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Your Last-Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.LastName"
          required
          placeholder="Enter Last-Name"
        ></b-form-input>
      </b-form-group>
     

      <b-form-group
        id="input-group-2"
        label="Your First-Name:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.FirstName"
          required
          placeholder="Enter First-Name"
        ></b-form-input>
      </b-form-group>
       <b-form-group
        id="input-group-1"
        label="Your Age:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.age"
          type="number"
          required
          placeholder="Enter Age"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
    
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Job Position:"
        label-for="input-3"
      >
        <b-form-select
          id="input-3"
          v-model="form.position"
          :options="positions"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.gender" id="checkboxes-4">
          <b-form-checkbox value="Male">Male</b-form-checkbox>
          <b-form-checkbox value="Female">Female</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <label for="example-datepicker">Choose a date</label>
      <b-form-datepicker
        id="example-datepicker"
        v-model="form.date"
        class="mb-2"
      ></b-form-datepicker>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="primary">Reset</b-button>
    </b-form>

    <!-- <pre class="m-0">{{ form }}</pre> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        email: "",
        FirstName: "",
        LastName: "",
        position: null,
        gender: [],
        date: "",
        age:""

      },

      positions: [
        { text: "Select One", value: null },
        "Director",
        "Cleaner",
        "Developper",
        "Designer",
      ],
      show: true,
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      try{
          const data= await axios.post('/api/employees/add',this.form)
          console.log(data.data)
      }catch (error) {
  console.error(error);
      }
      this.$router.push('/employees')
      
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
  background-color: #8080808c;
  width: 50%;
}
</style>
