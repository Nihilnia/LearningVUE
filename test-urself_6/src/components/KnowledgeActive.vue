<template>
  <div id="active-element">
    <h2>{{ activeOne.id }}</h2>
    <h2>{{ activeOne.title }}</h2>
  </div>
</template>

<script>
export default {
  props: ["active-one"],
  data() {
    return {};
  },
};
</script>
