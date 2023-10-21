<template>
  <div class="post">
    <div>
      <h3 v-on:click="triggerEvent">{{ post.title }}</h3>
      <p>{{ post.description }}</p>
    </div>
    <div class="btns">
      <button>
        <router-link v-bind:to="`/posts/update/${post.id}`">Update</router-link>
      </button>
      <button v-on:click="deletePost">Delete</button>
    </div>
  </div>
</template>

<script>
import EventBus from "../../emits/EventBus"

export default {
  name: "Post-Item",
  props: ["post"],
  methods: {
    deletePost() {
      this.$emit("delete-post", this.post.id)
    },
    triggerEvent() {
      EventBus.$emit("hello")
    },
  },
}
</script>

<style lang="scss" scoped>
.post {
  padding: 12px;
  border-top: 1px solid #d0d4ca;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  h3 {
    cursor: pointer;
  }

  p {
    margin-top: 8px;
    max-width: 90%;
    font-size: 14px;
  }
}

.btns {
  display: flex;
  gap: 8px;
  align-items: center;

  button {
    padding: 8px 16px;
    color: #fff;
    border-radius: 4px;

    &:nth-child(1) {
      background-color: #3876bf;
    }

    &:nth-child(2) {
      background-color: #d80032;
    }
  }
}
</style>
