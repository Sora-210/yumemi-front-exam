<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
.btn {
  font-size: 1em;
  font-weight: 300;
  background-color: #aed1e6;
  padding: 0.5em 2em;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  transition: background-color ease 0.2s;
}

.btn:hover {
  background-color: #85c7de;
  transition: background-color ease 0.2s;
}
</style>
