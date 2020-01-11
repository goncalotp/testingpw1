<template>
  <div id="fromrRegister">
    <br />
    <div style="text-align:center">
      <a
        ><router-link style="color: black; text-decoration: none;" to="/home"
          >Menu</router-link
        ></a
      >
    </div>
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
    name: "",
    minutes: "",
    place: ""
  }),
  created: function() {
    window.addEventListener("unload", this.saveStorage);
    if (localStorage.getItem("runs")) {
      this.$store.state.runs = JSON.parse(localStorage.getItem("runs"));
    }
  },
  methods: {
    register() {
      this.$store.commit("REGISTER", {
        name: this.name,
        minutes: this.minutes,
        place: this.place
      });
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
