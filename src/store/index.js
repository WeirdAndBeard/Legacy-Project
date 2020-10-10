import Vue from "vue";
import axios from "axios";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { usersData: [] },
  mutations: {
    getData(state) {
      const userId = localStorage.getItem("id");
      console.log("userId -", userId);
      axios
        .post("http://127.0.0.1:3000/api/login/getuser", { id: userId })
        .then(res => {
          state.usersData = res.data;
          console.log("userLogInData", res.data);
        })
        .catch(err => {
          console.log(err);
        });
      console.log("store data======>", state.usersData);
    }
  },
  modules: {}
});
