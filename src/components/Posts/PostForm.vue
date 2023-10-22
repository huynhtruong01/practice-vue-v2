<template>
  <form class="form-container" v-on:submit.prevent="handleSubmitPost">
    <div class="field">
      <label for="title" v-bind:class="{ error: errorTitle }">Title</label>
      <input v-bind:class="{ error: errorTitle }" type="text" id="title" placeholder="Enter title..." v-model="title" />
      <p class="error" v-if="errorTitle">{{ errorTitle }}</p>
    </div>
    <div class="field">
      <label for="title" v-bind:class="{ error: errorDescription }">Description</label>
      <textarea v-bind:class="{ error: errorDescription }" type="text" id="description" rows="8"
        placeholder="Enter description..." v-model="description"></textarea>
      <p class="error" v-if="errorDescription">{{ errorDescription }}</p>
    </div>
    <button type="submit" class="btn-submit" v-bind:disabled="!isValidForm || isLoading">
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
      errorTitle: '',
      errorDescription: '',
      isLoading: false,
    }
  },
  async mounted() {
    await this.getPost()
  },
  computed: {
    isValidForm() {
      return Boolean(this.title && this.description)
    },
  },
  watch: {
    title(newVal) {
      if (!newVal) {
        this.errorTitle = 'Please enter title'
      } else {
        this.errorTitle = ''
      }

    },
    description(newVal) {
      if (!newVal) {
        this.errorDescription = 'Please enter description'
      } else {
        this.errorDescription = ''
      }
    }
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
    font-weight: 500;
    font-size: 14px;

    &.error {
      color: #d80032;
    }
  }

  input,
  textarea {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #dbdfea;
    font-size: 16px;

    &.error {
      border: 1px solid #d80032;
      color: #d80032;
    }
  }
}

.btn-submit {
  padding: 12px 16px;
  width: 100%;
  color: #fff;
  background-color: #d80032;
  border-radius: 4px;
  margin-top: 20px;
  font-weight: 500;
  opacity: 1;
}

.btn-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.error {
  color: #d80032;
  font-size: 14px;
  padding-left: 4px;
}
</style>
