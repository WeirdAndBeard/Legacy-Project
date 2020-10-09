<template>
  <div id="id01" class="test">
    <div class="modal-content">
      <div class="container">
        <h1>Log In</h1>
        <p>Please fill in this form to Log In To Your account.</p>
        <hr />
        <v-alert color="error" :value="error" icon="close">
          test
        </v-alert>

        <input
          type="text"
          placeholder="Enter Your email"
          name="email"
          v-model="userLogIn.email"
          required
        />

        <input
          type="password"
          placeholder="Password"
          name="repeat"
          v-model="userLogIn.password"
          required
        />

        <div class="clearfix">
          <span> {{ outputLogIn }} </span>
          <button type="button" class="cancelbtn">Cancel</button>
          <button type="submit" @click="login" class="signupbtn">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "logIn",
  props: {
    msg: String
  },
  data() {
    return {
      userLogIn: {
        email: "",
        password: ""
      },
      outputLogIn: "",
      error: false
    };
  },
  methods: {
    login() {
      axios
        .post("/api/login", this.userLogIn)
        .then(res => {
          if (res.status === 200) {
            console.log("still cooking jwt", res);
          }
          localStorage.setItem("token", res.data.token);
          this.$router.push("/login");
        })
        .catch(err => {
          console.log(err.response);
          this.outputLogIn = err;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
  background: #c31432; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #240b36,
    #c31432
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #240b36,
    #c31432
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  margin: 10px auto;
  padding: 5%;
}
.modal-content {
  /* background-color: blur(2); */
  /* background-image: url("https://www.wallpaperflare.com/static/547/541/191/mountains-sunset-landscape-mount-hood-wallpaper.jpg"); */
  border-radius: 13px;

  height: 40pc;
  width: 40%;
  margin: 10px auto;
  padding: 5%;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}
button {
  background-color: #a0349a;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
button:hover {
  opacity: 1;
}
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}
.cancelbtn,
.signupbtn {
  float: left;
  width: 50%;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
</style>
