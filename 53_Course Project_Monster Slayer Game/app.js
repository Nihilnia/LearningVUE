const App = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      logs: [],
      result: null,
    };
  },
  methods: {
    attack() {
      if (this.result === null) {
        let randomNumberPlayer = this.randomNum(10);
        this.monsterHealth -= randomNumberPlayer;

        let randomNumberMonster = this.randomNum(10);
        this.playerHealth -= randomNumberMonster;

        this.logs.push(`Player attacked Monster for ${randomNumberPlayer}`);
        this.logs.push(`Monster attacked Player for ${randomNumberMonster}`);
      } else {
        return;
      }
    },
    specialAttack() {
      let randomNumberPlayer = this.randomNum(15);
      this.monsterHealth -= randomNumberPlayer;

      let randomNumberMonster = this.randomNum(15);
      this.playerHealth -= randomNumberMonster;

      this.logs.push(`Player attacked Monster for ${randomNumberPlayer}`);
      this.logs.push(`Monster attacked Player for ${randomNumberMonster}`);
    },
    heal() {
      let randomNumberPlayer = this.randomNum(20);
      this.playerHealth += randomNumberPlayer;

      let randomNumberMonster = this.randomNum(20);
      this.monsterHealth += randomNumberMonster;

      this.logs.push(`Player got heal for ${randomNumberPlayer}`);
      this.logs.push(`Monster got heal for ${randomNumberMonster}`);
    },
    surrender() {
      this.result = "lost";
    },
    randomNum(maxVal) {
      return Math.floor(Math.random() * maxVal);
    },
    newGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.logs = [];
      this.result = null;
    },
  },
  computed: {
    playerHealtBar() {
      return { width: this.playerHealth + "%" };
    },
    monsterHealtBar() {
      return { width: this.monsterHealth + "%" };
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.result = "draw";
      } else if (value <= 0 && this.monsterHealth > 0) {
        this.result = "lost";
      } else if (value > 0 && this.monsterHealth <= 0) {
        this.result = "Won";
      }
    },
  },
});

App.mount("#game");
