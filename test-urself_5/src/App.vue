<template>
  <active-topic
    v-for="f in topics"
    :key="f.id"
    :id="f.id"
    :name="f.name"
    :about="f.about"
    :is-active="f.isActive"
  ></active-topic>
  <all-topics
    v-for="f in topics"
    :key="f.id"
    :id="f.id"
    :name="f.name"
    :about="f.about"
    @set-active="setActive"
  ></all-topics>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: 0,
          name: "Topic Zero",
          about: "Something 00000000",
          isActive: false,
        },
        {
          id: 1,
          name: "Topic One",
          about: "Something 11111111",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    setActive(incID) {
      this.topics.forEach((f) => {
        f.isActive = false;
      });
      const foundTopic = this.topics.find((f) => f.id === incID);
      foundTopic.isActive = true;
    },
  },
};
</script>
