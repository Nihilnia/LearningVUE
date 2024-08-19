<template>
  <button id="aa" class="button-33" @click="getNewChar">Click here Caio</button>
  <ul class="cards">
    <single-card
      v-for="f in characters"
      :key="f.id"
      :id="f.id"
      :name="f.name"
      :status="f.status"
      :species="f.species"
      :gender="f.gender"
      :origin="f.origin"
      :location="f.location"
      :image="f.image"
      :selected="selected"
    ></single-card>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      characters: [],
      abc: ["hate", "dont like", "damn"],
      selected: null,
    };
  },
  methods: {
    getNewChar() {
      let randomNumb = Math.floor(Math.random() * (826 - 1 + 1)) + 1;
      fetch(`https://rickandmortyapi.com/api/character/${randomNumb}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.characters.unshift(data);
          console.log(this.characters);
          console.log(this.characters[0].name);

          let randomNumbTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
          switch (randomNumbTwo) {
            case 1:
              this.selected = this.abc[0];
              break;
            case 2:
              this.selected = this.abc[1];
              break;
            case 3:
              this.selected = this.abc[2];
              break;
          }
        })
        .catch((error) => console.error("Error:", error));
    },
  },
  mounted() {
    this.getNewChar();
  },
};
</script>

<style>
#aa {
  margin: auto;
  display: block;
  margin-bottom: 20px;
  margin-top: 20px;
}

.button-33 {
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-33:hover {
  box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
    rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
    rgba(44, 187, 99, 0.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
</style>
