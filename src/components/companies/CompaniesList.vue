<template>
  <div>
    <b-button @click="Add" class="btn-width" variant="primary"
      >Add company</b-button
    >
    <div class="companies-container">
      <b-card
        v-for="company in companies"
        :key="company.id"
        :title="company.companyName"
        :img-src="company.imageUrl"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-2 card"
        style="width: 15rem;  display: flex;  justify-content: center;"
      >
        <b-card-text>
          {{ company.description }}
        </b-card-text>

        <b-button href="#" variant="primary" @click="enter">Enter</b-button>
        <b-button
          @click="() => Update(company._id)"
          class="btn-width"
          variant="primary"
          >Update</b-button
        >
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      companies: [],
    };
  },
  mounted: async function() {
    const result = await axios.get("/api/companies/");
    console.log(result.data);
    this.companies = result.data;
    console.log(this.companies);
  },
  methods: {
    Update(id) {
      this.$router.push(`/companies/update/${id}`);
    },
    enter() {
      this.$router.push("/chat");
    },
    // async Delete(){
    //        const data=await axios.deleteOne(`/api/companies/delete/${}`)
    //        console.log(data);
    // },
    Add() {
      this.$router.push("/companies/add");
    },

    Message() {
      this.$router.push("/messages");
    },
  },
};
</script>
<style scoped>
.companies-container {
  column-gap: 10px;
  display: flex;
  flex-wrap: wrap;
}
.btn-width {
  margin: 10px;
}

.card img {
  height: 150px;
  width: auto;
  margin: auto;
}
</style>
