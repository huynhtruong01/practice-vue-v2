<template>
  <div>
    <PostForm v-bind:id="null" />
  </div>
</template>

<script>
import PostForm from "../components/Posts/PostForm.vue"

export default {
  name: "create-post",
  components: {
    PostForm,
  },
}
</script>

<style lang="scss" scoped></style>
