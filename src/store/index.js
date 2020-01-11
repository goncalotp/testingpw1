import Vue from "vue";
import Vuex from "vuex";

const Swal = require("sweetalert2");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    runs: [
      {
        name: "corrida",
        minutes: "30",
        place: "porto"
      }
    ]
  },
  getters: {},
  mutations: {
    REGISTER(state, payload) {
      if (!state.runs.some(runs => runs.name === payload.name)) {
        state.runs.push({
          name: payload.name,
          minutes: payload.minutes,
          place: payload.place
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
      state.runs = state.runs.filter(run => run.name !== payload.name);
      localStorage.setItem("runs", JSON.stringify(this.state.runs));
    },
    ORDER_BY_NAME(state, payload) {
      state.runs.sort(payload.compare);
    }
  }
});
