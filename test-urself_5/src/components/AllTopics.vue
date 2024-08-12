<template>
  <h2>{{ id }}</h2>
  <h2>{{ name }}</h2>
  <h2>{{ about }}</h2>
  <button @click="$emit('set-active', id)">Set Active</button>
</template>

<script>
export default {
  emits: ["set-active"],
  props: ["id", "name", "about"],
  data() {
    return {};
  },
};
</script>
