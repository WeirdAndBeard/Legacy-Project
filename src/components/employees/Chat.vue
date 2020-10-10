<template>
  <div>
    <b-list-group-item class="d-flex align-items-center" v-for="(message,key) in arrayOfmessages" :key="key">
        <b-avatar class="mr-3"></b-avatar>
        <span class="mr-auto">{{message.message}}</span>
      </b-list-group-item>
    <input type="text" v-model="message">
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>

 import axios from 'axios'
export default {
 
  data() {
    return {
    message:"",
    arrayOfmessages:[],
    };
  },
    mounted: async function() {
  this.fetching();
   },
  
  methods:{
    async fetching(){
   const alldata=await axios.get("api/chat/");
   this.arrayOfmessages=alldata.data
   console.log(this.arrayOfmessages)
    },
    async handleClick(){
      const data= await axios.post("/api/chat/add",{userid:localStorage.getItem("id"),message:this.message});
     
       this.fetching();
        this.message="";
      console.log(data.data);
     
    }
  }
};
</script>
<style scoped></style>
