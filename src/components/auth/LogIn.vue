<template>
  <div id="id01" class="modal">
    <div class="modal-content">
      <div class="container">
        <h1>Log In</h1>
        <p>Please fill in this form to Log In To Your account.</p>
        <hr />

        <label><b>email</b></label>
        <input
          type="text"
          placeholder="Enter Your email"
          name="email"
          v-model="userLogIn.email"
          required
        />

        <label><b>Password</b></label>
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
      outputLogIn: ""
    };
  },
  methods: {
    login() {
      this.$store.dispatch("retrieveToken", {
        email: this.userLogIn.email,
        password: this.userLogIn.password
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  background-image: url("https://www.wallpaperflare.com/static/547/541/191/mountains-sunset-landscape-mount-hood-wallpaper.jpg");
  border-radius: 13px;
  height: 30pc;
  width: 20%;
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
