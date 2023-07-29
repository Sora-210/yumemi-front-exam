<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  width: calc(100% - 3em);
  padding: 1.5em;
  border-radius: 1em;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px -5px #777777;
}
</style>
