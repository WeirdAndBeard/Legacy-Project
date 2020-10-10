import Vue from "vue";
import axios from "axios";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { usersData: [] },
  mutations: {},
  actions: {
    getData() {
      const userId = localStorage.getItem("id");
      console.log("userId -", userId);
      axios
        .post("http://127.0.0.1:3000/api/login/getuser", { id: userId })
        .then(res => {
          this.state.usersData = res.data;
          console.log("userLogInData", res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  modules: {}
});
