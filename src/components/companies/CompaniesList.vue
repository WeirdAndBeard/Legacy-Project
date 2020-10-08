<template>
    <div class="body">
    <div class="container">
      <b-button @click="Add">Add Company</b-button>
      <div v-for="company in companies" :key="company.id"  class="card" >
  <img class="card-img-top" src="https://i.ytimg.com/vi/USEfl0-r6iE/maxresdefault.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{company.Company_name}}</h5>
    <p class="card-text">{{company.Company_description}}</p>
    <a href="#" @click="Message" class="btn btn-primary">Private Message</a>
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
  margin-left: 500px;
}

.body {
    background-image: url("https://th.bing.com/th/id/OIP.bt7kwisAC81jQEBiuNUNWgHaIq?pid=Api&w=500&h=585&rs=1");
    background-repeat: no-repeat;

}

</style>
