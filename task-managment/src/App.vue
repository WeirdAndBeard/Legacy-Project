<template>
  <div id="app">
    <SignUp />
    <!-- <LogIn/> -->
  </div>
</template>

<script>
import SignUp from "./components/SignUp"
// import LogIn from "./components/LogIn"

export default {
  name: 'App',
  components: {
    SignUp,
    // LogIn
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
