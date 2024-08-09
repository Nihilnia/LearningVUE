<template>
  <div class="container">
    <div class="card">
      <div class="content">
        <h2 class="title">{{ joke }}</h2>
        <button @click="getNewJoke">Bela</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      joke: "",
    };
  },
  methods: {
    fetchTheJoke() {
      // Fetch the joke and return the promise
      return fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      })
        .then((resp) => {
          if (!resp.ok) {
            throw new Error("Network response was not ok");
          }
          return resp.json();
        })
        .catch((err) => {
          console.error("There was a problem with the fetch operation:", err);
          throw err;
        });
    },
    getNewJoke() {
      this.fetchTheJoke()
        .then((data) => {
          this.joke = data.joke;
        })
        .catch((err) => {
          console.error("Failed to fetch a new joke:", err);
        });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat";
  border: none;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212121;
}

.card {
  position: relative;
  width: 200px;
  height: 280px;
  padding: 5px;
  background: linear-gradient(315deg, #03a9f4, #ff0058);
}

.content {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  color: #fff;
  z-index: 10;
}

.card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(315deg, #03a9f4, #ff0058);
  filter: blur(30px);
}

h2.title {
  font-size: 16px;
}

button {
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #03a9f4;
}
</style>
