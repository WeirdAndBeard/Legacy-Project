<template>
  <div id="app">
    <router-view></router-view>
    <!-- <SignUp /> -->
    <!-- <LogIn /> -->
    <!-- <Dashboard /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import SignUp from "@/components/auth/SignUp.vue";
// import LogIn from "@/components/auth/LogIn.vue";
// import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "App",
  components: {
    // SignUp: SignUp,
    //Dashboard: Dashboard
  },
  mounted: function() {
    if (localStorage.getItem("token")) {
      this.$router.push("dashboard");
    } else {
      this.$router.push("login");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
