<template>
  <header>
    <h1 class="title">
      <slot></slot>
    </h1>
  </header>
</template>

<style scoped>
header {
  position: relative;
  background-color: #ffffff;
  border-bottom: solid 2px #d8d8d8;
}
.title {
  font-size: 2em;
  text-align: center;
  padding: 0.3em 0;
}
</style>
