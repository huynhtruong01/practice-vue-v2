<template>
  <div>
    <PostForm v-bind:id="$route.params.postId" />
  </div>
</template>

<script>
import PostForm from "../components/Form/PostForm.vue"

export default {
  name: "update-form-view",
  components: {
    PostForm,
  },
}
</script>

<style lang="scss" scoped></style>
