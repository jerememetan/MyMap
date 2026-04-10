<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <header class="top-nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/test">Test Library</RouterLink>
    </header>

    <main class="route-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
}

.top-nav {
  display: flex;
  gap: 12px;
  justify-content: center;
  padding: 16px;
  border-bottom: 1px solid var(--border);
}

.top-nav a {
  text-decoration: none;
  color: var(--text-h);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px 12px;
}

.top-nav a.router-link-active {
  border-color: var(--accent);
  color: var(--accent);
}

.route-content {
  padding: 24px;
}
</style>