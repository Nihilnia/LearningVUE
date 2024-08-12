<template>
  <section>
    <h2>{{ topicTitle }}</h2>
    <p>{{ text }}</p>
    <hr />
    <p>{{ losingIt }}</p>
  </section>
</template>

<script>
export default {
  inject: ['losingIt'],
  props: ['topicTitle', 'text'],
};
</script>
