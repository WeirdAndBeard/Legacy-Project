<template>
  
    <div>
      <b-button @click="Add">Add Company</b-button>
      <div v-for="company in companies" :key="company.id" class="card" style="width: 18rem;">
  <img class="card-img-top" src="" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">company title</h5>
    <p class="card-text">company description</p>
    <a href="#" class="btn btn-primary">acces company</a>
  </div>
</div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      // Note `isActive` is left out and will not appear in the rendered table
     
      companies: [
        {id:1,Company_name: "asteelflash", Company_Sector: "electronics" },
      ],
    };
  },
  methods: {
    Add() {
      this.$router.push("/company/add");
    },
  },
};
</script>
<style scoped>


</style>
