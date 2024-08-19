<template>
  <h4>Details</h4>
  <p>{{ selectedUser.details[0].age }}</p>
  <p v-for="f in selectedUser.details[0].hobbies" :key="f.hobbies">{{ f }}</p>
</template>

<script>
export default {
  props: ["selectedUser"],
  data() {
    return {};
  },
  methods: {},
};
</script>
