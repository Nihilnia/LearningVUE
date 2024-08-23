<template>
  <section>
    <h2>Add New Topic</h2>
    <input type="text" placeholder="Topic Name" v-model="topicName" />
    <input
      type="text"
      placeholder="Topic Description"
      v-model="topicDescripton"
    />
    <input
      type="text"
      placeholder="Full Description"
      v-model="fullDescription"
    />
    <button @click="addNewTopic">Add</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      topicName: null,
      topicDescripton: null,
      fullDescription: null,
    };
  },
  methods: {
    addNewTopic() {
      this.$emit(
        'add-new-topic',
        this.topicName,
        this.topicDescripton,
        this.fullDescription
      );
    },
  },
};
</script>
