<template>
  <section id="grid-container">
    <user-input @pass-user-input="getUserInput"></user-input>
    <user-result
      v-for="result in allResults"
      :key="result"
      :result="result"
    ></user-result>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userInput: null,
      allResults: [],
    };
  },
  methods: {
    getUserInput(userInput) {
      console.log("got userInput:");
      console.log(userInput);
      this.userInput = userInput;
      console.log(this.userInput);
      this.fetchTheData(userInput);
    },

    fetchTheData(symbol) {
      fetch(
        `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=iGsdITdm59C2kFlLT9qdlhZ0Pjj66PBG`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.allResults.unshift({
            companyName: data[0].companyName,
            price: data[0].price,
            address: data[0].address,
            changes: data[0].changes,
            country: data[0].country,
            currency: data[0].currency,
            description: data[0].description,
            exchange: data[0].exchange,
            fullTimeEmployees: data[0].fullTimeEmployees,
            image: data[0].image,
            symbol: data[0].symbol,
            website: data[0].website,
            phone: data[0].phone,
            mktCap: data[0].mktCap,
            industry: data[0].industry,
          });
          console.log(this.allResults);
        })
        .catch((error) => console.log("Got error", error));
    },
  },
};
</script>

<style>
#grid-container {
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: auto;
  row-gap: 20px;
  column-gap: 50px;
}

@media all and (max-width: 1200px) {
  .search-div {
    grid-row: 1;
    grid-column: 1/ 3;
  }

  #grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media all and (max-width: 768px) {
  .search-div {
    grid-row: 1;
    grid-column: 1/ 2;
  }

  #grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
