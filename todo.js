var app = new Vue({
  el: "#app",
  data: {
    message: "Olá Vue!",
    tasks: [],
    modoAdicionar: false,
    criacao: {
      title: "",
      dueTo: null,
      project: "",
      usuario: "",
    },
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
      if (this.modoAdicionar == false) {
        this.modoAdicionar = true;
      } else {
        this.modoAdicionar = false;
      }
    },
    salvar() {
      fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(this.criacao),
      });
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
