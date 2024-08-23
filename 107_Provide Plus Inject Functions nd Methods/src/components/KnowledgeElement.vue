<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="activateTopic(id)">Learn More</button>
    <button @click="functionToPass(topicName)">Alert</button>
  </li>
</template>

<script>
export default {
  inject: ['activateTopic', 'functionToPass'],
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>
