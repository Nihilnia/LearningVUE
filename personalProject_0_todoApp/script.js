const App = Vue.createApp({
  data() {
    return {
      newTask: "",
      tasks: [],
      completedTasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask === "") {
        return;
      } else {
        this.tasks.push(this.newTask);
        this.newTask = "";
      }
    },
    completeTask(index) {
      this.completedTasks.push(this.tasks[index]);
      this.tasks.splice(index, 1);
    },
    h2Text() {
      return this.tasks.length === 0
        ? "You didn' t add anything yet"
        : "Tasks to do:";
    },
  },
});

App.mount("#grid-container");
