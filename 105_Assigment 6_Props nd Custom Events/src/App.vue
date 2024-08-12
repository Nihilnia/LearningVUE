<template>
  <active-user
    v-for="f in activeUsers"
    :key="f.id"
    :id="f.id"
    :user-name="f.userName"
    :age="f.age"
    @update-user="updateUser"
  ></active-user>
  <user-data @add-new-user="addNewFriend"></user-data>
</template>

<script>
import ActiveUserVue from "./components/ActiveUser.vue";
import UserDataVue from "./components/UserData.vue";
export default {
  components: {
    activeUser: ActiveUserVue,
    userData: UserDataVue,
  },
  data() {
    return {
      activeUsers: [
        {
          id: 0,
          userName: "Gloria",
          age: 5,
        },
      ],
      updateID: "",
    };
  },
  methods: {
    addNewFriend(incUserName, incAge) {
      this.activeUsers.push({
        id: this.activeUsers.length,
        userName: incUserName,
        age: incAge,
      });
    },
    updateUser(incID, incUserName, incAge) {
      const foundUser = this.activeUsers.find(function (f) {
        return f.id == incID;
      });

      foundUser.userName = incUserName;
      foundUser.age = incAge;
    },
  },
};
</script>
