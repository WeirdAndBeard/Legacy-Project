<template>
  <div class="Table">
    <b-button @click="Add">Add employee</b-button>
    <b-table striped hover :items="items" :fields="fields"></b-table>
    
    
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['imgUrl','Full_name'],
        items: [
          { isActive: true, imgUrl: 'imgurl from database', Full_name: 'Dickerson Macdonald'},
          { isActive: false, imgUrl: 'imgurl from database', Full_name: 'Larsen Shaw'},
          { isActive: false, imgUrl: 'imgurl from database', Full_name: 'Geneva Wilson'},
          { isActive: true, imgUrl: 'imgurl from database', Full_name: 'Jami Carney'}
        ]
      }
    },
    methods:{
      Add(){
        this.$router.push('/employees')
      }
    }
  }
</script>
<style scoped>

.Table{
   width: 400px;
  height: 500px; 
   margin: 0 auto; 
  
}
</style>

