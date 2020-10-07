<template>
  <div id="app">
     <span>test</span>
     <LogIn />
     <!-- <ProfileOfTheEmployee /> -->
  </div>
</template>
<script>
// import ProfileOfTheEmployee from './components/ProfileOfTheEmployee'
import LogIn from './components/LogIn'
export default {
  name: 'App',
  components: {
    // ProfileOfTheEmployee,
    LogIn

  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
