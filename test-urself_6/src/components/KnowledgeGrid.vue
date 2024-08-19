<template>
  <knowledge-active
    v-if="activeElement != null"
    :active-one="activeElement"
  ></knowledge-active>
  <div v-for="f in allTopics" :key="f.id">
    <h2>{{ f.title }}</h2>
    <h2>{{ f.id }}</h2>
    <button @click="() => makeItActive(f.id)">Active</button>
  </div>
</template>

<script>
export default {
  props: ["all-topics", "active-element"],
  data() {
    return {};
  },
  methods: {
    makeItActive(id) {
      this.$emit("make-it-active", id);
    },
  },
};
</script>
