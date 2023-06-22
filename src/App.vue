<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <h1 id="brand" class="text-center text-6xl text-primary mb-2">Scribble</h1>
  </header>
  <nav class="flex justify-content-center">
    <RouterLink to="/">EXPLORE</RouterLink>
    <div class="mx-2">|</div>
    <RouterLink to="/create">CREATE</RouterLink>
  </nav>
  <div class="main mx-auto">
    <RouterView />
  </div>
</template>

<style scoped>
.main {
  max-width: 60rem;
}
.router-link-active {
  font-weight: 700;
}
</style>
