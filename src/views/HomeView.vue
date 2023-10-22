<template>
  <div class="container">
    <h1>Welcome to my practice code</h1>
    <div class="hero-img">
      <img src="/practice-code-img.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "home-view",
}
</script>

<style lang="scss" scoped>
.container {
  width: 700px;
  margin: auto;

  h1 {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 16px;
  }

  .hero-img {
    width: 100%;
  }
}

.btn-view-post {
  border-radius: 4px;
  background-color: #748e63;
  color: #fff;
  font-weight: 500;

  a {
    color: #fff;
    padding: 8px 16px;
  }
}
</style>
