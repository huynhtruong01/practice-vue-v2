<template>
  <div class="container">
    <h2>User</h2>
    <form v-on:submit.prevent="setUserData">
      <div class="field">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter name..."
          v-model="name"
        />
      </div>
      <div class="field">
        <label for="age">Age</label>
        <input
          type="number"
          id="age"
          placeholder="Enter age..."
          v-model="age"
        />
      </div>
      <div class="field">
        <label for="address">Address</label>
        <input
          type="text"
          id="address"
          placeholder="Enter address..."
          v-model="address"
        />
      </div>
      <button
        type="submit"
        class="btn-submit-user"
        v-bind:disabled="!checkValid"
      >
        Set user
      </button>
    </form>
  </div>
</template>

<script>
import store from "../store"

export default {
  name: "user-view",
  data() {
    return {
      name: "",
      address: "",
      age: "",
      store,
    }
  },
  mounted() {
    this.name = store.state.userStore.user.name || ""
    this.age = store.state.userStore.user.age || ""
    this.address = store.state.userStore.user.address || ""
    console.log(store.state.userStore)
  },
  computed: {
    checkValid() {
      if (this.name && this.age && this.address) return true
      return false
    },
  },
  methods: {
    setUserData() {
      if (!this.checkValid) return
      store.commit("userStore/setUserData", {
        name: this.name,
        age: +this.age,
        address: this.address,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 500px;
  margin: auto;
  padding: 16px;
  border: 1px solid #00000040;
  border-radius: 4px;

  h2 {
    text-align: center;
    margin-bottom: 12px;
  }
}

.field {
  margin-bottom: 16px;

  label {
    margin-bottom: 4px;
  }

  input {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #00000040;
  }
}

.btn-submit-user {
  width: 100%;
  padding: 12px;
  color: #fff;
  background-color: #192655;
  font-size: 17px;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: 500;
  opacity: 0.9;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      opacity: 0.5;
    }
  }

  &:hover {
    opacity: 1;
  }
}
</style>
