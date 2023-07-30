<template>
  <main class="container">
    <slot></slot>
  </main>
</template>

<style scoped>
.container {
  width: 900px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px 50px;
}

@media screen and (max-width: 900px) {
  .container {
    width: calc(100vw - 100px);
  }
}

@media screen and (max-width: 500px) {
  .container {
    width: calc(100vw - 50px);
    padding: 20px 25px;
  }
}
</style>
