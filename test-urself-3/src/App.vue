<template>
  <div id="grid-container">
    <gloria-ai
      :head-title="this.Project.headTitle"
      :self-explanatory="this.Project.selfExplanatory"
      @change-self-exp="changeSelfExp"
    ></gloria-ai>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Project: {
        headTitle: "Head Example",
        selfExplanatory: "Self example",
      },
    };
  },
  methods: {
    changeSelfExp(intel) {
      this.Project.selfExplanatory = intel;
    },
  },
};
</script>
