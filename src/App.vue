<template>
  <div id="app">
    <Header />
    <main
      v-bind:style="{
        marginTop: '80px',
      }"
    >
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header"
export default {
  components: {
    Header,
  },
}
</script>

<style lang="scss"></style>
