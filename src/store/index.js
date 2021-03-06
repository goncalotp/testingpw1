import Vue from "vue";
import Vuex from "vuex";

const Swal = require("sweetalert2");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    runSelected: "",
    runs: [
      {
        id: 0,
        name: "porto run",
        minutes: 5,
        place: "porto"
      }
    ]
  },
  getters: {
    runId(state) {
      return state.runSelected;
    }
  },
  mutations: {
    REGISTER(state, payload) {
      if (!state.runs.some(runs => runs.name === payload.name)) {
        state.runs.push({
          id: payload.id,
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

    SELECT_RUN(state, payload) {
      state.runSelected = payload.idRun;
    },

    REMOVE_RUN(state, payload) {
      state.runs = state.runs.filter(run => run.name !== payload.name);
      localStorage.setItem("runs", JSON.stringify(this.state.runs));
    },
    ORDER_BY_NAME(state, payload) {
      state.runs.sort(payload.compare);
    },

    UPDATE_RUN(state, payload) {
      if (state.runs.some(runs => runs.id === payload.id)) {
        state.runs[payload.id].name = payload.name;
      }
      localStorage.setItem("users", JSON.stringify(this.state.users));
    }
  }
});
