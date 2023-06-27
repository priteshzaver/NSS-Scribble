<script setup>
import { RouterLink } from 'vue-router'
import Button from 'primevue/button'
import { user, login, logout, username } from './stores/authStore'
</script>

<template>
  <header>
    <div class="flex justify-content-end align-items-center">
      <div v-if="user" class="mr-2 text-primary">Hi {{ username }}!</div>
      <Button v-if="user" outlined size="small" label="Logout" @click="logout" />
      <Button v-else outlined size="small" label="Login" @click="login" />
    </div>
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
