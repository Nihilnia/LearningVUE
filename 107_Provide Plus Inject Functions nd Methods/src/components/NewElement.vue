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
    <button @click="deneme">Add</button>
    <h2 v-if="exMessage">{{ exMessage }}</h2>
  </section>
</template>

<script>
export default {
  inject: ['deneme', 'exMessage', 'functionToPass'],

  data() {
    return {
      topicName: null,
      topicDescripton: null,
      fullDescription: null,
    };
  },
  methods: {
    addNewTopic() {
      this.functionToPass();

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
