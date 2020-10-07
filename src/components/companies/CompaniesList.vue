<template>
    <div class="body">
    <div class="container">
      <b-button @click="Add">Add Company</b-button>
      <div v-for="company in companies" :key="company.id"  class="card" >
  <img class="card-img-top" src="https://i.ytimg.com/vi/USEfl0-r6iE/maxresdefault.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{company.Company_name}}</h5>
    <p class="card-text">{{company.Company_description}}</p>
    <a href="#" @click="Message" class="btn btn-primary">Send Message</a>
  </div>
</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companies: [
        {id:1,Company_name: "asteelflash", Company_description: "electronics", urlImage:"" },
      ],
    };
  },
  methods: {
    Add() {
      this.$router.push("/companies/add");
    },

    Message(){
      this.$router.push("/messages")
    }
  },
};
</script>
<style scoped>
.card {
  width: 40rem;
  margin-left: 250px;
}

.body {
    background-color: indianred;

}



</style>
