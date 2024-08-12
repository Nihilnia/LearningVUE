<template>
  <section v-if="isActive">
    <h1>Active Topic</h1>
    <h2>{{ id }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ about }}</h2>
    <button @click="$emit('set-active', id)">Set Active</button>
  </section>
</template>

<script>
export default {
  emits: ["set-active"],
  props: ["id", "name", "about", "isActive"],
  data() {
    return {};
  },
};
</script>

<style>
section {
  background: #ffffff3b;
  border: 1px solid hsla(0, 0%, 93%, 0.59);
  box-shadow: 1px 16px 24.1px #1907870f;
  max-width: 600px;
  margin: auto;
}
</style>
