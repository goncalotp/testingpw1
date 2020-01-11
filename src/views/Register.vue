<template>
  <div id="fromrRegister">
    <br />
    <br />
    <br />
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <h1>Registar corrida</h1>
        </div>
        <div class="container col-sm-6">
          <form v-on:submit.prevent="register()">
            <div class="form-group">
              <label for="registerName">Nome da corrida:</label>
              <input
                type="text"
                class="form-control"
                id="registerName"
                placeholder="Insira o seu nome da corrida"
                required
                v-model="name"
              />
            </div>
            <div class="form-group">
              <label for="registerEmail">Minutos:</label>
              <input
                type="number"
                class="form-control"
                id="registerEmail"
                aria-describedby="emailHelp"
                placeholder="minutos"
                required
                v-model="minutes"
              />
            </div>
            <div class="form-group">
              <label for="registerPass">Local:</label>
              <input
                type="text"
                class="form-control"
                id="registerPass"
                placeholder="sitio da corrida"
                required
                v-model="place"
              />
            </div>
            <button type="submit" class="button float-right">
              Criar corrida
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    id: 0,
    name: "",
    minutes: 0,
    place: ""
  }),
  methods: {
    getLastId() {
      if (this.$store.state.runs.length || this.$store.state.runs.length !== 0)
        return this.$store.state.runs[this.$store.state.runs.length - 1].id;
      else return 0;
    },
    register() {
      this.$store.commit("REGISTER", {
        id: this.getLastId() + 1,
        name: this.name,
        minutes: this.minutes,
        place: this.place
      });
    }
  },
  beforeMount() {
    if (this.$store.state.runs) {
      localStorage.setItem("runs", JSON.stringify(this.$store.state.runs));
    }
  }
};
</script>

<style>
.button {
  background-color: #555555; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  font-family: "Cinzel", serif;
}

.button:hover {
  background-color: black;
}

#loginBtn {
  background-color: white;
  border: none;
  font-family: "Cinzel", serif;
}
h1 {
  font-family: "Cinzel", serif;
}

label {
  font-family: "Didact Gothic", sans-serif;
}
@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");
</style>
