<template>
  <div id="id01" class="modal">
    <div class="modal-content">
      <div class="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label><b>First Name</b></label>
        <input
          type="text"
          placeholder="Enter Your  First Name"
          name="First Name"
          v-model="userSignUp.FirstName"
          required
        />

        <label><b>Last Name </b></label>
        <input
          type="text"
          placeholder="Enter Your Last Name"
          name="Last Name"
          v-model="userSignUp.LastName"
          required
        />

        <label><b>User Name</b></label>
        <input
          type="text"
          placeholder="Choose a UserName"
          name="User Name"
          v-model="userSignUp.UserName"
          required
        />
        <label><b>Email</b></label>
        <input
          type="text"
          placeholder="Enter Your Email"
          name="Email"
          v-model="userSignUp.Email"
          required
        />

        <label><b>Password</b></label>
        <input
          type="password"
          placeholder="Password"
          name="repeat"
          v-model="userSignUp.Password"
          required
        />

        <label><b>Repeat Password</b></label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          v-model="userSignUp.RepeatPassword"
          required
        />

        <label>
          <input
            type="checkbox"
            checked="checked"
            name="remember"
            style="margin-bottom: 15px"
          />
          Remember me
        </label>

        <p>
          By creating an account you agree to our
          <a href="#" style="color: dodgerblue">Terms & Privacy</a>.
        </p>

        <div class="clearfix">
          <span> {{ output }}</span>
          <button type="button" class="cancelbtn">Cancel</button>
          <button type="submit" @click="register" class="signupbtn">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ''
import axios from "axios";
// import LogIn from "./LogIn.vue"
// import router from 'vue-router'
export default {
  name: "signUp",
  props: {
    msg: String,
  },
  data() {
    return {
      userSignUp: {
        FirstName: "",
        LastName: "",
        UserName: "",
        Email: "",
        Password: "",
        RepeatPassword: "",
      },
      output: "",
      check: false,
    };
  },
  methods: {
    async register() {
      console.log("this.userSignUp", this.userSignUp);
      if (this.userSignUp.Password !== this.userSignUp.RepeatPassword) {
        alert("Check Your Password");
      } else {
        this.check = !this.check;
        try {
          let res = await axios.post("/register", {
            userSignUp: this.userSignUp,
          });
          this.output = res.data;
          if (this.check === true) {
          this.$router.push('logIn') 
          }
        } catch (e) {
          this.output = e;
        }
      }
    },
  },
  watch: {
    userSignUp: function (val) {
      console.log(val);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

