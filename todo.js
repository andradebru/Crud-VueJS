var app = new Vue({
  el: "#app",
  data: {
    message: "Olá Vue!",
    tasks: [],
    modoAdicionar: false,
    modoEditar: false,
    att: 0,
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
    editar(id) {
      this.att = id;
      if (this.modoEditar == false) {
        this.modoEditar = true;
      } else {
        this.modoEditar = false;
      }
    },
    salvar() {
      fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(this.criacao),
      });
    },
    salvarEdicao() {
      fetch(`http://localhost:3000/tasks/${this.att}`, {
        method: "PATCH",
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
