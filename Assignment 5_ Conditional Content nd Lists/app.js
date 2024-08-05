const App = Vue.createApp({
  data() {
    return {
      newTask: "",
      taskList: [],
      isShown: true,
    };
  },
  methods: {
    addTask() {
      this.taskList.push(this.newTask);
      this.newTask = "";
    },
    toggleList() {
      this.isShown = !this.isShown;
    },
  },
});

App.mount("#assignment");
