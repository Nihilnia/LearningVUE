<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <friend-contact
        v-for="f in friends"
        :key="f.id"
        v-bind:id="f.id"
        :name="f.name"
        :phone-number="f.phoneNumber"
        :email-adress="f.eMail"
        :is-favorite="f.isFavorite"
        :is-destroy="f.isDestroy"
        @toggle-fav-friend="toggleFavFriend"
        @remove-friend="removeFriend"
      ></friend-contact>
    </ul>
  </section>
  <section id="section-add-friend">
    <add-friend @send-the-data="registerNewFriend"></add-friend>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
import AddFriend from "./components/AddFriend.vue";

export default {
  components: {
    friendContact: FriendContact,
    addFriend: AddFriend,
  },
  data() {
    return {
      isShowFooter: true,
      friends: [
        {
          id: "0",
          name: "Gloria",
          phoneNumber: "123123",
          eMail: "プロジェクト@Gloria.com",
          isFavorite: true,
          isDestroy: true,
        },
        {
          id: "1",
          name: "Kayle",
          phoneNumber: "321321",
          eMail: "プロジェクト@Nia.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFooter() {
      this.isShowFooter = !this.isShowFooter;
    },
    toggleFavFriend(id) {
      const findFriend = this.friends.find(function (f) {
        return f.id === id;
      });

      if (findFriend != null) {
        console.log("Found friend item");
        console.log(findFriend);

        console.log(findFriend.isFavorite);
        findFriend.isFavorite = !findFriend.isFavorite;
        console.log(findFriend.isFavorite);
      }
    },
    registerNewFriend(name, phone, ema) {
      console.log(`w`);
      console.log(name);
      console.log(phone);
      console.log(ema);
      this.friends.push({
        id: this.friends.length.toString(),
        name: name,
        phoneNumber: phone,
        eMail: ema,
        isFavorite: true,
      });
    },
    removeFriend(id) {
      const foundFriend = this.friends.find(function (f) {
        return f.id === id;
      });

      let indexFriend = this.friends.indexOf(foundFriend);

      this.friends.splice(indexFriend, 1);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-bocx;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
  background-color: #0c0c0d;
  color: #fff;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #fff;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
