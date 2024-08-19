<template>
  <div>
    <user-item
      :id="id"
      :name="name"
      @make-it-selected="passSelectedUser"
    ></user-item>
  </div>
</template>

<script>
export default {
  emits: ["makeItSelected"],
  props: ["id", "name"],
  data() {
    return {};
  },
  methods: {
    passSelectedUser(daID) {
      this.$emit("passSelectedUser", daID);
    },
  },
};
</script>
