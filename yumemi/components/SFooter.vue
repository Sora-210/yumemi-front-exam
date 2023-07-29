<template>
  <footer>
    <span>
      <slot></slot>
    </span>
  </footer>
</template>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  width: 100vw;
  background-color: #ffffff;
  border-top: solid 2px #d8d8d8;
}
span {
  display: block;
  text-align: center;
  padding: 0.1em 0;
}
</style>
