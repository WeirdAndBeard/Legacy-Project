<template>
  <div class="container">
    <b-form @submit="onSubmit">
      <h1>Room Name : {{ room.room_name }}</h1>
      <p>Room ID : {{ room.room_id }}</p>
      <b-button type="submit" variant="primary">Access Room</b-button>
      <img class="card-img-top" :src="room.room_image" alt="Card image cap" />
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      room: {
        room_id: "",
        room_name: "",
        room_image: ""
      }
    };
  },
  methods: {
    getRooms() {
      this.axios
        .get("/rooms")
        .then(res => this.room.push(res.data))
        .catch(err => console.log("[client side error Room component]", err));
    },

    // needs to be fixed wrong but i can't delete it no reason
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        const data = await axios.post("api/rooms/add", this.room);
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
      this.$router.push("/rooms/chat");
    }
  }
};
</script>
<style scoped>
.container {
  background-color: #8080808c;
  width: 50%;
  margin-top: 50px;
}
</style>
