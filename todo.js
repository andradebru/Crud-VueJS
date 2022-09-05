var app = new Vue({
  el: "#app",
  data: {
    message: "Olá Vue!",
    // loading = false,
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
          // this.loading = false;
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
      fetch(
        "http://localhost:3000/tasks",
        {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(this.criacao),
        },
        (this.modoAdicionar = false)
      ).then(() => {
        this.getTasks();
      });
    },
    salvarEdicao() {
      fetch(
        `http://localhost:3000/tasks/${this.att}`,
        {
          method: "PATCH",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(this.criacao),
        },
        (this.modoEditar = false)
      ).then(() => {
        this.getTasks();
      });

      // this.loading = true;
    },
    deletar(id) {
      fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" });
      this.getTasks();
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
