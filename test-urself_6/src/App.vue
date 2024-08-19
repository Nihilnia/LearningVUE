<template>
  <knowledge-grid
    :all-topics="this.allTopics"
    :active-element="this.activeElement"
    @make-it-active="makeItActive"
  ></knowledge-grid>
</template>

<script>
import KnowledgeGrid from "./components/KnowledgeGrid.vue";
export default {
  components: { KnowledgeGrid },
  data() {
    return {
      allTopics: [
        {
          id: 0,
          title: "Element Zero",
        },
        {
          id: 1,
          title: "Element One",
        },
      ],
      activeElement: null,
    };
  },
  methods: {
    makeItActive(id) {
      this.activeElement = this.allTopics.find(function (f) {
        return f.id === id;
      });
    },
  },
};
</script>
