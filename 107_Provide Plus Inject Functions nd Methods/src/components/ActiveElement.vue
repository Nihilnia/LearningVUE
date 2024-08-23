<template>
  <section>
    <h2>{{ topicTitle }}</h2>
    <h4>{{ topicDesc }}</h4>
    <p>{{ text }}</p>
  </section>
</template>

<script>
export default {
  props: ['topicTitle', 'text', 'topic-desc'],
};
</script>
