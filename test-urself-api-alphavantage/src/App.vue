<template><mutter-grid></mutter-grid></template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

body {
  font-family: Lato;
  background: linear-gradient(300deg, #c01818, #2b1697);
  animation: gradient-animation 6s ease infinite;
  height: 100vh;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

#grid-container {
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: auto;
  row-gap: 20px;
  column-gap: 50px;
}

@media all and (max-width: 1200px) {
  #grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media all and (max-width: 768px) {
  #grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
