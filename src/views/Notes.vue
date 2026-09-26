<script setup>
import { computed, nextTick, onMounted, ref } from 'vue';
import CreateNote from '../components/CreateNote.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import NoteCard from '../components/NoteCard.vue';
import { useNoteStore } from '../stores/note';

const noteStore = useNoteStore();
const filter = ref('all');
const composeRef = ref(null);

const filteredNotes = computed(() => {
  if (filter.value === 'open') {
    return noteStore.notes.filter((n) => !n.marked);
  }
  if (filter.value === 'done') {
    return noteStore.notes.filter((n) => n.marked);
  }
  return noteStore.notes;
});

const counts = computed(() => {
  const total = noteStore.notes.length;
  const done = noteStore.notes.filter((n) => n.marked).length;
  return {
    total,
    open: total - done,
    done,
  };
});

onMounted(async () => {
  window.scrollTo({ top: 0 });
  await noteStore.getNotes();
  await nextTick();
  composeRef.value?.focusInput?.();
});
</script>

<template>
  <div class="workspace">
    <HeaderComponent />

    <main class="panel">
      <header class="panel-head">
        <div>
          <p class="eyebrow">Lista personal</p>
          <h1 class="panel-title">Tus notas</h1>
        </div>
        <p class="panel-meta" aria-live="polite">
          <span>{{ counts.open }} abiertas</span>
          <span class="dot" aria-hidden="true"></span>
          <span>{{ counts.done }} hechas</span>
        </p>
      </header>

      <div v-if="noteStore.loading" class="state">
        <div class="spinner" aria-hidden="true"></div>
        <p>Cargando notas…</p>
      </div>

      <template v-else>
        <CreateNote ref="composeRef" />

        <div class="filters" role="tablist" aria-label="Filtrar notas">
          <button
            type="button"
            role="tab"
            class="filter"
            :aria-selected="filter === 'all'"
            :class="{ active: filter === 'all' }"
            @click="filter = 'all'"
          >
            Todas
            <span class="count">{{ counts.total }}</span>
          </button>
          <button
            type="button"
            role="tab"
            class="filter"
            :aria-selected="filter === 'open'"
            :class="{ active: filter === 'open' }"
            @click="filter = 'open'"
          >
            Abiertas
            <span class="count">{{ counts.open }}</span>
          </button>
          <button
            type="button"
            role="tab"
            class="filter"
            :aria-selected="filter === 'done'"
            :class="{ active: filter === 'done' }"
            @click="filter = 'done'"
          >
            Hechas
            <span class="count">{{ counts.done }}</span>
          </button>
        </div>

        <div v-if="!filteredNotes.length" class="state empty">
          <h2 v-if="!counts.total">Empieza por una línea</h2>
          <h2 v-else>Nada aquí</h2>
          <p v-if="!counts.total">Escribe arriba y pulsa Añadir.</p>
          <p v-else>Cambia el filtro o crea otra nota.</p>
        </div>

        <ul v-else class="note-list">
          <li v-for="note in filteredNotes" :key="note.id">
            <NoteCard :note="note" />
          </li>
        </ul>
      </template>
    </main>
  </div>
</template>

<style scoped>
.workspace {
  min-height: 100vh;
}

.panel {
  width: min(680px, calc(100% - 2rem));
  margin: 1.35rem auto 3rem;
  padding: 1.5rem 1.35rem 1.75rem;
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid var(--line);
  border-radius: 14px;
  backdrop-filter: blur(10px);
  animation: rise 0.65s var(--ease) both;
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 1.35rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--line);
}

.eyebrow {
  margin: 0 0 0.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--jade);
}

.panel-title {
  margin: 0;
  font-family: var(--font-brand);
  font-size: clamp(1.85rem, 4vw, 2.25rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.05;
  font-optical-sizing: auto;
}

.panel-meta {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--ink-soft);
  white-space: nowrap;
}

.dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--jade);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin: 1.15rem 0 0.9rem;
}

.filter {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid transparent;
  background: transparent;
  color: var(--ink-soft);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.42rem 0.7rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s var(--ease), color 0.2s var(--ease);
}

.filter:hover {
  background: rgba(255, 255, 255, 0.75);
}

.filter.active {
  background: var(--ink);
  color: #f5f8fa;
}

.count {
  font-size: 0.78rem;
  font-weight: 700;
  opacity: 0.72;
}

.filter.active .count {
  opacity: 0.9;
}

.note-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.4rem;
  padding: 2.25rem 1rem;
  color: var(--ink-soft);
}

.state h2 {
  margin: 0;
  font-family: var(--font-brand);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--ink);
}

.state p {
  margin: 0;
}

.state.empty {
  padding: 1.75rem 0.5rem 0.5rem;
}

.spinner {
  width: 26px;
  height: 26px;
  border: 3px solid rgba(22, 24, 26, 0.12);
  border-top-color: var(--jade);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 0.4rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 560px) {
  .panel {
    width: calc(100% - 1.25rem);
    margin-top: 1rem;
    padding: 1.15rem 1rem 1.35rem;
  }

  .panel-head {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
