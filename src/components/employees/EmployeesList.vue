<template>
  
    <div>
      <b-button @click="Add">Add employee</b-button>
      <b-table striped hover :items="users"></b-table>
    </div>

</template>

<script>
export default {
  data() {
    return {
      // Note `isActive` is left out and will not appear in the rendered table
     
      users: [
        { id:1,first_name: "hbj", last_name: "saber" },
        {id:2, first_name: "hbj", last_name: "saber" }
      ],
    };
  },
  methods: {
    Add() {
      this.$router.push("/employees/add");
    },
  },
};
</script>
<style scoped>
.Table {
  width: 400px;
  height: 500px;
  margin: 0 auto;
}
</style>
