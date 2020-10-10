<template>
  <div>
    <input type="text" v-model="message">
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>

 import axios from 'axios'
export default {
 
  data() {
    return {
    message:""
    };
  },
  methods:{
    async handleClick(){
      // const data= await axios.post(`/api/users/chat/${}`)
      concole.log(localStorage.get())
    }
  }
};
</script>
<style scoped></style>
