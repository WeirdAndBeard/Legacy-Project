<template>
  <div class="bg-light border-right" id="sidebar-wrapper">
    <div class="sidebar-heading">
      <router-link to="/dashboard">
        <img src="https://f4.bcbits.com/img/0019989185_10.jpg" />
      </router-link>
    </div>
    <div class="list-group list-group-flush">
      <router-link
        to="/companies"
        class="list-group-item list-group-item-action bg-light"
      >
        Companies
      </router-link>
      <router-link
        to="/employees"
        class="list-group-item list-group-item-action bg-light"
      >
        Employees
      </router-link>
      <router-link
        to="/tasksboard"
        class="list-group-item list-group-item-action bg-light"
      >
        Tasks
      </router-link>
      <router-link
        to="/chat"
        class="list-group-item list-group-item-action bg-light"
      >
        Chat
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      counter: 1
    };
  },
  props: {
    msg: String
  }
};
</script>
<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
