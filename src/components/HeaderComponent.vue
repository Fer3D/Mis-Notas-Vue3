<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const onNotes = () => route.name === 'notes';
</script>

<template>
  <header class="site-header">
    <router-link to="/" class="brand" aria-label="MisNotas inicio">
      <span class="brand-name">MisNotas</span>
    </router-link>
    <nav class="site-nav" aria-label="Principal">
      <router-link to="/" class="nav-link" :class="{ 'is-active': route.name === 'home' }">
        Inicio
      </router-link>
      <router-link
        to="/notes"
        class="nav-link"
        :class="onNotes() ? 'is-active' : 'nav-link--cta'"
      >
        {{ onNotes() ? 'Notas' : 'Abrir notas' }}
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1.5rem;
  background: rgba(243, 247, 249, 0.78);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}

.brand {
  text-decoration: none;
  color: var(--ink);
}

.brand-name {
  font-family: var(--font-brand);
  font-weight: 600;
  font-size: 1.25rem;
  letter-spacing: -0.015em;
  font-optical-sizing: auto;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  text-decoration: none;
  padding: 0.5rem 0.85rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--ink-soft);
  border-radius: 8px;
  transition: color 0.2s var(--ease), background 0.2s var(--ease);
}

.nav-link:hover {
  color: var(--ink);
  background: rgba(255, 255, 255, 0.6);
}

.nav-link.is-active {
  color: var(--jade-deep);
}

.nav-link--cta {
  background: var(--ink);
  color: #f5f8fa;
}

.nav-link--cta:hover {
  background: var(--jade-deep);
  color: #f5f8fa;
}

@media (max-width: 560px) {
  .site-header {
    padding: 0.8rem 1rem;
  }
}
</style>
