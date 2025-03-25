<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/posts">Posts</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <!-- View for displaying routss -->
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  background-color: #f5f5f5;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
nav a {
  text-decoration: none;
  color: #333;
}
nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
