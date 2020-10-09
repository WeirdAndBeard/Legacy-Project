<template>
  <div class="container">
    <br />
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="company.companyName"
          required
          placeholder="Enter company-name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="company.description"
          type="text"
          required
          placeholder="Enter company-description"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="company.email"
          type="text"
          required
          placeholder="Enter offcial company-email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="company.adress"
          required
          placeholder="Enter company-adress"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="company.imageUrl"
          type="url"
          required
          placeholder="Enter image-Url"
        ></b-form-input>
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

    <!-- <pre class="m-0">{{ form }}</pre> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      company: {
        companyName: "",
        description: "",
        imageUrl: "",
        adress:"",
        email:""


        
      },

      positions: [
        { text: "Select One", value: null },
        "Project_Manager",
        "SCRUM Master",
        "Developper",
        "Designer",
      ],
      show: true,
    };
  },
  mounted:async function(){
    if (this.$route.params.id){
      const result=await axios.get(`/api/companies/${this.$route.params.id}`)
      console.log(result.data);
       
      this.company.companyName = result.data.companyName;
      this.company.description = result.data.description;
      this.company.imageUrl = result.data.imageUrl;
      this.company.adress=result.data.adress;
      this.company.email=result.data.email;
    }
    console.log(this.$route.params.id)
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      var url="/api/companies/add";
      if (this.$route.params.id){
        url=`/api/companies/update/${this.$route.params.id}`
      }
      try {
        const data = await axios.post(url, this.company);
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
      this.$router.push("/companies");
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.company.email = "";
      this.company.name = "";
      this.company.description = null;
      this.company.imgurl = [];
      this.company.adress = "";
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
