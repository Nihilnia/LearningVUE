<template>
  <section>
    <h2>Vortal Kombat</h2>
    <ul>
      <li v-for="f in friends" v-bind:key="f.id">{{ f.name }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "friendOne",
          name: "Gloria",
          phone: "123123",
          eMail: "example@Gloria.com",
        },
        {
          id: "friendTwo",
          name: "Kayle",
          phone: "321321",
          eMail: "example@Kayle.com",
        },
      ],
    };
  },
};
</script>

<style></style>
