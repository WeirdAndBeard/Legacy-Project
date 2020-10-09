<template>
  <div class="bg-light border-right" id="sidebar-wrapper">
    <div class="sidebar-heading"></div>
    <div class="list-group list-group-flush">
      <router-link
        to="/companies"
        class="list-group-item list-group-item-action bg-light"
      >
        Channel1
      </router-link>
      <router-link
        to="/employees"
        class="list-group-item list-group-item-action bg-light"
      >
      
        Channel2
      </router-link>
      <router-link
        to="/tasksboard"
        class="list-group-item list-group-item-action bg-light"
      >
        Channel3
      </router-link>
      <router-link
        to="/chat"
        class="list-group-item list-group-item-action bg-light"
      >
        Channel4
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      counter: 1,
    };
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>



</style>
