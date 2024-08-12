<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
  <button @click="update">Update</button>
  <div v-if="isClicked">
    <input type="text" placeholder="newUserName" v-model="newUserName" />
    <input type="text" placeholder="newAge" v-model="newAge" />
    <button @click="$emit('update-user', id, newUserName, newAge)">
      Update
    </button>
  </div>
  <hr />
</template>

<script>
export default {
  props: ["userName", "age", "id"],
  data() {
    return {
      newUserName: ``,
      newAge: "",
      isClicked: false,
    };
  },
  methods: {
    update() {
      this.isClicked = !this.isClicked;
    },
  },
};
</script>
