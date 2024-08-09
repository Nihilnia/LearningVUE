<template>
  <ToDo
    v-for="f in toDoItemS"
    :key="f.id"
    :id="f.id"
    :todo-name="f.name"
    @change-todo-by-mutter="changeTodo"
  />
</template>

<script>
import ToDo from "./components/ToDo.vue";

export default {
  components: {
    ToDo,
  },
  data() {
    return {
      toDoItemS: [
        {
          id: 0,
          name: "Todo Item 0",
        },
        {
          id: 1,
          name: "Todo Item 1",
        },
        {
          id: 2,
          name: "Todo Item 2",
        },
      ],
    };
  },
  methods: {
    changeTodo(id, newTodo) {
      let foundItem = this.toDoItemS.find(function (f) {
        return f.id === id;
      });

      foundItem.name = newTodo;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
