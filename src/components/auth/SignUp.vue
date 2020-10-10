<template>
  <div class="modal-content">
    <div class="container">
      <h1>Sign Up</h1>
      <hr />
      <input
        type="text"
        placeholder="Enter Your  First Name"
        name="First Name"
        v-model="user.first_name"
        required
      />

      <input
        type="text"
        placeholder="Enter Your Last Name"
        name="Last Name"
        v-model="user.last_name"
        required
      />

      <input
        type="text"
        placeholder="Choose a username"
        name="User Name"
        v-model="user.username"
        required
      />
      <input
        type="text"
        placeholder="Enter Your Email"
        name="Email"
        v-model="user.email"
        required
      />

      <input
        type="password"
        placeholder="Password"
        name="repeat"
        v-model="user.password"
        required
      />

      <input
        type="password"
        placeholder="Repeat Password"
        name="psw-repeat"
        v-model="RepeatPassword"
        required
      />

      <!-- <label>
          <input
            type="checkbox"
            checked="checked"
            name="remember"
            style="margin-bottom: 15px"
          />
          Remember me
        </label> -->

      <!-- <p>
          By creating an account you agree to our
          <a href="#" style="color: dodgerblue">Terms & Privacy</a>.
        </p> -->

      <div class="clearfix">
        <span> {{ this.output }} </span>
        <button type="button" class="cancelbtn">Cancel</button>
        <button type="submit" @click="register" class="signupbtn">
          Sign Up
        </button>
      </div>
      You already have an account?
      <router-link to="/login">
        Login.
      </router-link>
    </div>
  </div>
</template>

<script>
// import ''
import axios from "axios";
// import LogIn from "./LogIn.vue"
// import router from 'vue-router'
export default {
  name: "SignUp",
  props: {
    msg: String,
  },
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
      },
      RepeatPassword: "",
      output: "",
      check: false,
    };
  },

  methods: {
    async register() {
      console.log("this.user", this.user);
      if (this.user.password !== this.RepeatPassword) {
        alert("Check Your Password");
      } else {
        this.check = !this.check;
        try {
          let res = await axios.post("/api/register", this.user);
          this.output = res.data;
          // if (this.check === true) {
          console.log("redirect");
          this.$router.push("/login");
          // }
        } catch (error) {
          console.log(error);
          console.log("errrooror");
          this.output = error;
        }
      }
    },
  },
  watch: {
    user: function(val) {
      console.log(val);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
body {
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
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 7.5px;
  margin: 2.5px 0 11px 0;
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
h1,
p {
  color: white;
}
</style>
