<template>
  <div class="bg-light border-right" id="sidebar-wrapper">
    <div class="sidebar-heading">Start Bootstrap</div>
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
      <router-link
        to="/SignUp"
        class="list-group-item list-group-item-action bg-light"
      >
        SignUp
      </router-link>
      <router-link
        to="/LogIn"
        class="list-group-item list-group-item-action bg-light"
      >
        LogIn
      </router-link>
      <router-link
        to="/SignUp"
        @click="logout"
        class="list-group-item list-group-item-action bg-light"
      >
        logout
      </router-link>
      <router-link
        to="/profile"
        class="list-group-item list-group-item-action bg-light"
      >
        Profile
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
  },
  logout() {
    localStorage.clear();
  }
};
</script>
