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
    removeItem(index) {
      this.taskList.splice(index, 1);
    },
  },
});

App.mount("#assignment");
