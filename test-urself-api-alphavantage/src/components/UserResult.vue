<template>
  <div class="company-card" v-if="result != null">
    <div class="top">
      <p>
        <span>{{ result.companyName }} ({{ result.symbol }})</span>
      </p>
      <div>
        <p></p>
      </div>
    </div>
    <div class="middle">
      <img :src="result.image" />
    </div>
    <div class="bottom">
      <div>
        <p>
          <span>Price:</span>
          {{ result.currency == "USD" ? "$" : "" }}{{ result.price }}
        </p>
      </div>
      <div>
        <p><span>Changes:</span> {{ result.changes }}</p>
      </div>
      <div>
        <p><span>Address:</span> {{ result.address }}, {{ result.country }}</p>
      </div>
      <div>
        <p><span>Employee:</span> {{ result.fullTimeEmployees }}</p>
      </div>
      <div>
        <p><span>Market Cap:</span> {{ result.mktCap }}</p>
      </div>
      <div>
        <p><span>Industry:</span> {{ result.industry }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["pass-user-input"],
  props: ["result"],
  data() {
    return {};
  },
  methods: {},

  computed: {},
};
</script>

<style>
.company-card {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: grid;
  padding: 20px;
  max-width: 400px;
  row-gap: 30px;
  color: #fff;
}

.company-card > .middle img {
  display: block;
  margin: auto;
  max-width: 120px;
}

.company-card p > span {
  font-weight: 700;
  display: inline-block;
  min-width: 100px;
  width: 100px;
}

.company-card .top p > span {
  display: inline;
}
</style>
