<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import NavbarLogo from '@/components/Icons/NavbarLogo.vue';

</script>

<template>
  <header>
      <nav class="navbar-section">
        <div class="navbar-logo">
          <RouterLink to="/"><NavbarLogo /></RouterLink>
        </div>
        <div class="navbar-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </div>
      </nav>
  </header>

  <div class="main-container" >
    <RouterView />
  </div>

  <footer>
    <div class="footer-section">
      <p class="footer-tag-line" >See the world with your own two eyes...</p>
    </div>
  </footer>

</template>

<style scoped>
.navbar-section {
  background-color: var(--vt-c-black-soft);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  cursor: pointer;
}

.navbar-links > a {
  text-decoration: none;
  color: var(--vt-c-white-soft);
  font-size: 16px;
  font-weight: bold;
  margin-right: 15px;
}

.main-container {
  min-height: 300px
}


.footer-section {
  background-color: var(--vt-c-black-soft);
  padding: 20px;
  text-align: center;
}

.footer-tag-line {
  font-size: 18px;
  font-weight: bold;
  color: var(--vt-c-white-soft)
}

</style>
