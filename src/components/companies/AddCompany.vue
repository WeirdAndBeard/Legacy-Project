<template>
  <div class="body">
    <div class="container">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Your Company-Name:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.Company_Name"
            required
            placeholder="Enter your Company-Name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Your Industry Sector:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.Industry"
            required
            placeholder="Enter Your Industry Sector"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Your Official Company Link:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.Website"
            required
            placeholder="Enter Your Official Company Link"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Company address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.Location"
            type="text"
            required
            placeholder="Enter Your Company Location"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-1" label="Your id:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.adminId"
            required
            placeholder="Enter your Company-id"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Your Company-Description:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.Description"
            required
            placeholder="Enter Description"
          ></b-form-input>
        </b-form-group>

        <label for="example-datepicker">Choose a date</label>
        <b-form-datepicker
          id="example-datepicker"
          v-model="form.date"
          class="mb-2"
        ></b-form-datepicker>
        <div class="container">
          <div class="large-12 medium-12 small-12 cell">
            <label
              >File
              <input
                type="file"
                id="file"
                ref="file"
                v-on:change="handleFileUpload()"
              />
            </label>
          </div>
        </div>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="primary">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        Company_Name: "",
        Industry: "",
        Website: "",
        Location: "",
        adminId: "",
        Description: "",
        date: "",
        urlImage: "",
        employee: []
      },
      show: true
    };
  },
  methods: {
    async onSubmit(evt) {
      // Handle Image Upload
      let formData = new FormData();
      formData.append("file", this.form.urlImage);
      axios
        .post("/single-file", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function() {
          console.log("SUCCESS!!");
        })
        .catch(function() {
          console.log("FAILURE!!");
        });

      evt.preventDefault();
      try {
        const data = await axios.post("/api/companies/add", this.form);
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
      this.$router.push("/companies");
    },

    // Handles a change on the file upload
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },

    onReset(evt) {
      evt.preventDefault();
      this.form.Company_Name = "";
      this.form.Industry = "";
      this.form.Website = "";
      this.form.Location = "";
      this.form.adminId = "";
      this.form.Description = "";
      this.form.date = "";
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
  background-color: grey;
  width: 50%;
  margin-top: 50px;
}

.body {
  background-image: url("https://clinicea.com/App_Themes/Default/images/walk1.png");
  background-repeat: no-repeat;
  background-color: black;
}
</style>
