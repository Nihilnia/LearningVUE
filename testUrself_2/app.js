function createRandNumb(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Game = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      round: 0,
      result: null,
      log: [],
    };
  },
  methods: {
    attackToMonster() {
      this.round++;
      let attackValue = createRandNumb(5, 10);
      let = this.monsterHealth -= attackValue;
      this.attackToPlayer();
      this.addLog("Player", "Attack", attackValue, this.round);
    },
    attackToPlayer() {
      let attackValue = createRandNumb(5, 14);
      this.playerHealth -= attackValue;
      this.addLog("Monster", "Attack", attackValue, this.round);
    },
    specialAttack() {
      this.round++;
      let attackValue = createRandNumb(9, 17);
      this.monsterHealth -= attackValue;
      this.attackToPlayer();
      this.addLog("Player", "Special Attack", attackValue, this.round);
    },
    heal() {
      this.round++;
      let healValue = createRandNumb(10, 14);
      this.playerHealth += healValue;
      this.attackToPlayer();
      this.addLog("Player", "Got Heal", healValue, this.round);
    },
    newGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.round = 0;
      this.result = null;
      this.log = [];
    },
    surrender() {
      this.result = "Monsta won";
    },
    addLog(who, what, value, round) {
      this.log.unshift({
        who: who,
        what: what,
        value: value,
        round: round,
      });
    },
  },
  computed: {
    monsterHealthBar() {
      if (this.result === "You won") {
        return `width: 0%`;
      }
      return `width: ${this.monsterHealth}%`;
    },
    playerHealthBar() {
      if (this.result === "Monsta won") {
        return `width: 0%`;
      }
      return `width: ${this.playerHealth}%`;
    },
    mayUseSpecialAttack() {
      return this.round % 3 !== 0;
    },
    mayUseHeal() {
      return !(this.playerHealth < 100);
    },
  },
  watch: {
    playerHealth(val) {
      if (val <= 0 && this.monsterHealth !== 0) {
        this.result = "Monsta won";
      } else if (val > 0 && this.monsterHealth <= 0) {
        this.result = "You won";
      } else if (val <= 0 && this.monsterHealth <= 0) {
        this.result = "Draw";
      }
    },
  },
});

Game.mount("#game");
