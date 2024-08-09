<template>
  <div class="todo-container">
    <h3>{{ todoName }}</h3>
    <input type="text" placeholder="Change" v-model="newTodo" />
    <button @click="changeTodo">Do it!</button>
  </div>
</template>

<script>
export default {
  props: ["id", "todoName"],
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    changeTodo() {
      this.$emit("change-todo-by-mutter", this.id, this.newTodo);
    },
  },
};
</script>
