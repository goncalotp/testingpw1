import Vue from "vue";
import Vuex from "vuex";

const Swal = require("sweetalert2");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    runs: [
      

    ]
  },
  getters: {},
  mutations: {
    REGISTER(state, payload) {
      if (!state.runs.some(runs => runs.form.name === payload.form.name)) {
        state.runs.push({
          id: payload.form.id,
          name: payload.form.name,
          minutes: payload.form.minutes,
          place: payload.form.place
        });
        localStorage.setItem("runs", JSON.stringify(this.state.runs));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Corrida registada",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Corrida já registada",
          showConfirmButton: false,
          timer: 1500
        });
      }
    },

    REMOVE_RUN(state, payload) {
      state.runs = state.runs.filter(run => run.form.name !== payload.form.name);
      localStorage.setItem("runs", JSON.stringify(this.state.runs));
    },
    ORDER_BY_NAME(state, payload) {
      state.runs.sort(payload.compare);
    }
  }
});
