<template>
  <div id="app">
    <h1 style="text-align:center">Runner</h1>
    <br />
    <br />
    <div class="container">
      <div class="row" style="text-align:center">
        <div class="col-sm-6">
          <button type="button" class="button">
            <router-link
              style="color: white; text-decoration: none;"
              to="/register"
              >Registar corrida</router-link
            >
          </button>
        </div>
        <div class="col-sm-6">
          <button type="button" class="button ">
            <router-link
              style="color: white; text-decoration: none;"
              to="/table"
              >Tabela de corridas</router-link
            >
          </button>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data: () => ({}),

  methods: {}
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
