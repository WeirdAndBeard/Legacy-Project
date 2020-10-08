<template>
  <div id="id01">
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
          v-model="userSignUp.first_name"
          required
        />

        <label><b>Last Name </b></label>
        <input
          type="text"
          placeholder="Enter Your Last Name"
          name="Last Name"
          v-model="userSignUp.last_name"
          required
        />

        <label><b>User Name</b></label>
        <input
          type="text"
          placeholder="Choose a user_name"
          name="User Name"
          v-model="userSignUp.user_name"
          required
        />
        <label><b>email</b></label>
        <input
          type="text"
          placeholder="Enter Your Email"
          name="Email"
          v-model="userSignUp.email"
          required
        />

        <label><b>Password</b></label>
        <input
          type="password"
          placeholder="Password"
          name="repeat"
          v-model="userSignUp.password"
          required
        />

        <label><b>Repeat Password</b></label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          v-model="RepeatPassword"
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
          <span> {{ output }} </span>
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
  name: "SignUp",
  props: {
    msg: String
  },
  data() {
    return {
      userSignUp: {
        first_name: "",
        last_name: "",
        user_name: "",
        email: "",
        password: ""
      },
      RepeatPassword: "",
      output: "",
      check: false
    };
  },
  methods: {
    async register() {
      console.log("this.userSignUp", this.userSignUp);
      if (this.userSignUp.password !== this.RepeatPassword) {
        alert("Check Your Password");
      } else {
        this.check = !this.check;
        try {
          let res = await axios.post("/api/users/add", this.userSignUp);
          this.output = res.data;
          if (this.check === true) {
            this.$router.push("logIn");
          }
        } catch (e) {
          this.output = e;
        }
      }
    }
  },
  watch: {
    userSignUp: function(val) {
      console.log(val);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.modal-content {
  height: 50pc;
}
.test {
  margin: auto;
  height: 20pc;
  width: 20%;
}
.container {
  background-image: url("https://www.wallpaperflare.com/static/547/541/191/mountains-sunset-landscape-mount-hood-wallpaper.jpg");
  border-radius: 13px;
  height: 50.9pc;
  width: 20%;
  margin: 10px auto;
  padding: 5%;
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
</style>
