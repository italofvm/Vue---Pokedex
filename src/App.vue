<script setup>
import TheHeader from "./components/TheHeader.vue"
import TheFooter from "./components/TheFooter.vue"
</script>

<template>
  <header>
    <TheHeader />
  </header>

  <footer>
    <TheFooter />
  </footer>
</template>

<style>
body {
  height: 100vh;
  background: rgb(52, 51, 52);
  background: linear-gradient(
    0deg,
    rgba(52, 51, 52, 1) 0%,
    rgba(184, 238, 174, 1) 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
