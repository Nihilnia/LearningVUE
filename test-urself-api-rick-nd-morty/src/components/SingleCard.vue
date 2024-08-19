<template>
  <li class="cards_item">
    <div class="card" tabindex="0">
      <div class="card_image">
        <img :src="image" alt="mixed vegetable salad in a mason jar. " />
      </div>
      <div class="card_content">
        <h2 class="card_title">{{ name }}</h2>
        <div class="card_text">
          <p>Status: {{ status }}</p>
          <p>Species: {{ species }}</p>
          <p>Gender: {{ gender }}</p>
          <p>Origin: {{ origin.name }}</p>
          <p>
            Location:
            {{ location.name }}
          </p>

          <p class="upcharge">I {{ selected }} you Caio.</p>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: [
    "id",
    "name",
    "status",
    "species",
    "gender",
    "origin",
    "location",
    "image",
    "selected",
  ],
  data() {
    return {};
  },
  methods: {},
};
</script>
