<template>
  <user-details
    v-if="selectedUser != null"
    :selected-user="selectedUser"
  ></user-details>
  <user-list
    v-for="user in userList"
    :key="user.id"
    :id="user.id"
    :name="user.name"
    @pass-selected-user="getSelected"
  ></user-list>
</template>

<script>
export default {
  emits: ["passSelectedUser"],
  data() {
    return {
      userList: [
        {
          id: 0,
          name: "User zero",
          details: [
            {
              age: 20,
              hobbies: ["reading books", "watching movies"],
            },
          ],
        },
        {
          id: 1,
          name: "User one",
          details: [
            {
              age: 30,
              hobbies: ["computer programming", "watching movies"],
            },
          ],
        },
        {
          id: 2,
          name: "User two",
          details: [
            {
              age: 40,
              hobbies: ["reading books", "watching movies"],
            },
          ],
        },
        {
          id: 3,
          name: "User three",
          details: [
            {
              age: 50,
              hobbies: ["reading books", "watching movies"],
            },
          ],
        },
      ],
      selectedUser: null,
    };
  },
  methods: {
    getSelected(daID) {
      this.selectedUser = this.userList.find((user) => user.id === daID);
    },
  },
};
</script>
