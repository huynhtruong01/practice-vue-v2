<template>
  <div>
    <h1 v-bind:style="{
      textAlign: 'center',
      margin: '20px 0',
    }">
      Post list
    </h1>
    <div v-bind:style="{
      padding: '16px',
      margin: 'auto',
      maxWidth: '700px',
    }" v-if="!isLoading">
      <Post v-for="post in posts" v-bind:post="post" v-bind:key="post.id" @delete-post="showModalDelete" />
    </div>
    <div v-if="isLoading" v-bind:style="{
      textAlign: 'center'
    }">Loading...</div>
    <ModalDelete v-bind:showModal="showModal" @cancel-modal="showModal = false" @delete-post="deletePost" />
  </div>
</template>

<script>
import { postApi } from "../../api"
import ModalDelete from "../Modal/ModalDelete.vue"
import Post from "./Post.vue"

export default {
  name: "Post-List",
  data() {
    return {
      posts: [],
      showModal: false,
      idDelete: null,
      isLoading: false
    }
  },
  async mounted() {
    await this.getAllPosts()
  },
  methods: {
    async getAllPosts() {
      try {
        this.isLoading = true
        const posts = await postApi.getAllPosts()
        this.posts = posts
      } catch (error) {
        throw new Error(error)
      }
      this.isLoading = false
    },
    showModalDelete(id) {
      this.idDelete = id
      this.showModal = true
      document.body.style.overflow = "hidden"
    },
    async deletePost() {
      try {
        if (this.idDelete) {
          await postApi.deletePost(this.idDelete)
          this.showModal = false
        }
        this.idDelete = null
        document.body.style.overflow = "auto"
        await this.getAllPosts()
      } catch (error) {
        throw new Error(error)
      }
    },
  },
  components: {
    Post,
    ModalDelete,
  },
}
</script>

<style scoped></style>
