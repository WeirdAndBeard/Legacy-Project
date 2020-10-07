<template>
  <div>
    <h1>Companies list page</h1>
    <p>put your code here</p>
    {{ companies }}
  </div>
</template>
<script>
export default {
  name: "CompaniesList",
  data() {
    return {
      companies: [],
    };
  },
  methods: {
    getCompanies: function() {},
  },
};
</script>
