// import Vue from "vue";
// // import {
// //   axios
// // } from "vue/types/umd";
// import axios from "axios";
// import Vuex from "vuex";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     token: localStorage.getItem("access_token") || null
//   },
//   mutations: {
//     retrieveToken(state, token) {
//       state.token = token;
//     }
//   },
//   actions: {
//     retrieveToken(context, credentials) {
//       return new Promise((resolve, reject) => {
//         axios
//           .post("/add", {
//             email: credentials.email,
//             password: credentials.password
//           })
//           .then(response => {
//             const token = response.data.access_token;
//             localStorage.setItem("access_token", token);
//             context.commit("retrieveToken", token);
//             resolve(response);
//           })
//           .catch(error => {
//             console.log(error);
//             reject(error);
//           });
//       });
//     }
//   },
//   modules: {}
// });
