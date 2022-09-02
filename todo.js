var app = new Vue({
  el: "#app",
  data: {
    message: "Olá Vue!",
    tasks: [],
    modoAdicionar: false,
  },
  methods: {
    getTasks() {
      fetch("http://localhost:3000/tasks")
        .then((response) => response.json())
        .then((tarefasJson) => {
          console.log(tarefasJson);
          this.tasks = tarefasJson;
        });
    },
    adicionar() {
      this.modoAdicionar = true;
    },
    salvar() {
      this.modoAdicionar = false;
    },
    deletar(id) {
      fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" });
    },
  },
  created() {
    console.log("created");
    this.getTasks();
  },
  mounted() {
    console.log("montend");
  },
});
