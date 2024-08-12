<template>
  <label for="">Username</label>
  <input type="text" placeholder="username" v-model="newUserName" />
  <label for="">Age</label>
  <input type="text" placeholder="age" v-model="newAge" />
  <h2>{{ newUserName }}</h2>
  <h2>{{ newAge }}</h2>
  <button @click="handleNewUser">Add</button>
</template>

<script>
export default {
  data() {
    return {
      newUserName: "",
      newAge: "",
    };
  },
  methods: {
    handleNewUser() {
      this.$emit("add-new-user", this.newUserName, this.newAge);
      (this.newUserName = ""), (this.newAge = "");
    },
  },
};
</script>
