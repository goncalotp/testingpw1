<template>
  <div id="app" class="" style="text-align:center">
    <div class="container">
      <br />
      <br />
      <h1 style="text-align:center">Tabela de corridas</h1>
      <br />
      <button type="button" class="button btn-primary" @click="orderByName()">
        A-Z
      </button>
      <div class="col-sm-12">
        <tr class="table">
          <thead>
            <tr>
              <th class="align-middle" scope="col">Nome</th>
              <th class="align-middle" scope="col">Minutos</th>
              <th class="align-middle" scope="col">Local</th>
              <th class="align-middle" scope="col">Atualizar dados</th>
              <th class="align-middle" scope="col">Remover</th>
            </tr>
          </thead>
          <tbody>
            <tr
              style="text-align:center"
              v-for="run in this.$store.state.runs"
              :key="run.name"
            >
              <td class="align-middle">{{ run.name }}</td>
              <td class="align-middle">{{ run.minutes }}</td>
              <td class="align-middle">{{ run.place }}</td>
              <td class="align-middle">
                <button
                  style="border:none; background-color:white"
                  @click="editRun(run.id)"
                >
                  🔄
                </button>
              </td>
              <td class="align-middle">
                <button
                  style="border:none; background-color:white"
                  @click="removeRun(run.name)"
                >
                  🗑️
                </button>
              </td>
            </tr>
          </tbody>
        </tr>
      </div>

      <dialog id="editRunsDialog">
        <form @submit.prevent="updateRuns()" method="dialog">
          <input
            v-model="editName"
            type="text"
            class="form-control"
            placeholder="nome"
          />

          <br />
          <button
            style="border:none; background-color: #555555; color:white"
            type="submit"
          >
            Gravar
          </button>
          <button style="border:none; background-color: white" @click="close()">
            Fechar
          </button>
        </form>
      </dialog>
      <br />
      <br />
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    editId: 0,
    editName: ""
  }),
  created: function() {
    if (localStorage.getItem("runs")) {
      this.$store.state.runs = JSON.parse(localStorage.getItem("runs"));
    }
  },
  methods: {
    close() {
      document.getElementById("editRunsDialog").close();
    },
    editRun(id) {
      document.getElementById("editRunsDialog").showModal();

      const run = this.$store.state.runs.filter(run => run.id === id)[0];
      this.editId = run.id;
    },

    updateRuns() {
      this.$store.commit("UPDATE_RUN", {
        name: this.editName
      });
      document.getElementById("editRunsDialog").close();
    },
    removeRun(name1) {
      if (confirm("Deseja mesmo remover a corrida?")) {
        this.$store.commit("REMOVE_RUN", {
          name: name1
        });
      }
    },

    compareName(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      else return 0;
    },
    orderByName() {
      this.$store.commit("ORDER_BY_NAME", {
        compare: this.compareName
      });
    },
    saveStorage() {
      localStorage.setItem("runs", JSON.stringify(this.$store.state.runs));
    }
  }
};
</script>

<style scoped>
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}

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
}
</style>
