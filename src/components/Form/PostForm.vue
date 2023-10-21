<template>
  <form class="form-container" v-on:submit.prevent="handleSubmitPost">
    <div class="field">
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        placeholder="Enter title..."
        v-model="title"
      />
    </div>
    <div class="field">
      <label for="title">Description</label>
      <input
        type="text"
        id="description"
        placeholder="Enter description..."
        v-model="description"
      />
    </div>
    <button
      type="submit"
      class="btn-submit"
      v-bind:disabled="!isValidForm || isLoading"
    >
      <span v-if="!isLoading">{{ id ? "Update Post" : "+ Create Post" }}</span>
      <span v-if="isLoading">Loading...</span>
    </button>
  </form>
</template>

<script>
import { postApi } from "@/api"
export default {
  name: "post-form",
  props: ["id"],
  data() {
    return {
      title: "",
      description: "",
      isLoading: false,
    }
  },
  async mounted() {
    console.log(this.id)
    await this.getPost()
  },
  computed: {
    isValidForm() {
      return Boolean(this.title && this.description)
    },
  },
  methods: {
    async getPost() {
      try {
        if (this.id) {
          const post = await postApi.getPost(this.id)
          this.title = post.title
          this.description = post.description
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    async handleAddPost() {
      try {
        await postApi.createPost({
          title: this.title,
          description: this.description,
        })
      } catch (error) {
        throw new Error(error)
      }
    },
    async handleUpdatePost() {
      try {
        await postApi.updatePost({
          id: this.id,
          title: this.title,
          description: this.description,
        })
      } catch (error) {
        throw new Error(error)
      }
    },
    async handleSubmitPost() {
      try {
        if (!this.isValidForm) return
        this.isLoading = true
        if (this.id) {
          await this.handleUpdatePost()
        } else {
          await this.handleAddPost()
        }
        this.isLoading = false
        this.$router.push("/posts")
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form-container {
  max-width: 450px;
  width: 100%;
  margin: auto;
  padding: 16px;
  border: 1px solid #dbdfea;
  border-radius: 4px;
}

.field {
  width: 100%;
  margin-bottom: 12px;

  label {
    margin-bottom: 4px;
  }

  input {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #dbdfea;
    font-size: 16px;
  }
}

.btn-submit {
  padding: 8px 16px;
  width: 100%;
  color: #fff;
  background-color: #d80032;
  border-radius: 4px;
  margin-top: 12px;
  font-weight: 500;
  opacity: 1;
}

.btn-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
