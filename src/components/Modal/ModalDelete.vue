<template>
  <div class="modal-container" v-if="showModal">
    <div class="modal-delete">
      <h2>Delete post</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima
        reprehenderit aliquid quo, numquam blanditiis exercitationem aut
        tempora?
      </p>
      <div class="btns">
        <button class="btn-cancel" v-on:click="handleCancel">Cancel</button>
        <button
          class="btn-delete"
          v-on:click="handleDeletePost"
          v-bind:disabled="isLoading"
        >
          {{ isLoading ? "Loading..." : "Delete" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import ModalContainer from "./ModalContainer.vue"
export default {
  props: ["showModal"],
  data() {
    return {
      isLoading: false,
    }
  },
  component: {
    // ModalContainer,
  },
  methods: {
    handleCancel() {
      document.body.style.overflow = "auto"
      this.$emit("cancel-modal")
    },
    async handleDeletePost() {
      this.isLoading = true
      await this.$emit("delete-post")
      this.isLoading = false
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-delete {
  max-width: 550px;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 64px;

  h2 {
    margin-bottom: 16px;
  }

  p {
    text-align: center;
  }

  .btns {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      flex: 1;
      display: flex;
      justify-content: center;
      padding: 8px;
      font-weight: 600;
      color: #fff;
      border-radius: 4px;
      margin-top: 24px;
    }

    .btn-cancel {
      background-color: #d0d4ca;
    }

    .btn-delete {
      background-color: #c51605;
    }
  }
}
</style>
