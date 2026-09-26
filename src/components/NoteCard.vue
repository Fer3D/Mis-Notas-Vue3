<script setup>
import { useNoteStore } from '../stores/note';

const props = defineProps({
  note: Object,
});

const noteStore = useNoteStore();

function toggleMarked(event) {
  noteStore.editNote({
    ...props.note,
    marked: event.target.checked,
  });
}

function updateNote() {
  noteStore.editNote({
    id: props.note.id,
    title: props.note.title,
    marked: props.note.marked,
  });
}

function deleteNote() {
  if (confirm('¿Eliminar esta nota?')) {
    noteStore.deleteNote(props.note.id);
  }
}
</script>

<template>
  <article class="note" :class="{ done: note.marked }">
    <label class="mark">
      <input
        type="checkbox"
        :checked="note.marked"
        @change="toggleMarked"
      />
      <span class="box" aria-hidden="true"></span>
      <span class="sr-only">Marcar como hecha</span>
    </label>

    <input
      type="text"
      class="title"
      v-model="note.title"
      @blur="updateNote"
      @keyup.enter="($event.target.blur())"
      placeholder="Sin título"
      maxlength="200"
    />

    <button type="button" class="remove" @click="deleteNote" aria-label="Eliminar nota">
      Eliminar
    </button>
  </article>
</template>

<style scoped>
.note {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem 0.95rem;
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  transition: background 0.2s var(--ease), border-color 0.2s var(--ease), transform 0.2s var(--ease);
  animation: rise 0.45s var(--ease) both;
}

.note:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(15, 107, 92, 0.22);
}

.note.done {
  background: rgba(255, 255, 255, 0.42);
}

.mark {
  position: relative;
  display: inline-flex;
  cursor: pointer;
}

.mark input {
  position: absolute;
  opacity: 0;
  inset: 0;
  margin: 0;
  cursor: pointer;
}

.box {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid rgba(20, 20, 20, 0.28);
  border-radius: 4px;
  display: block;
  transition: border-color 0.2s var(--ease), background 0.2s var(--ease);
}

.mark:hover .box {
  border-color: var(--jade);
}

.mark input:checked + .box {
  background: var(--jade);
  border-color: var(--jade);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M3.5 8.2L6.4 11l6-7' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: 12px;
  background-repeat: no-repeat;
  background-position: center;
}

.title {
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--ink);
  padding: 0.2rem 0;
}

.title:focus {
  color: var(--jade-deep);
}

.done .title {
  text-decoration: line-through;
  color: rgba(58, 66, 72, 0.55);
  font-weight: 400;
}

.remove {
  border: none;
  background: transparent;
  color: rgba(58, 66, 72, 0.55);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.35rem 0.45rem;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 0.2s var(--ease), color 0.2s var(--ease), background 0.2s var(--ease);
}

.note:hover .remove,
.note:focus-within .remove {
  opacity: 1;
}

.remove:hover {
  color: var(--danger);
  background: rgba(180, 35, 24, 0.08);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 560px) {
  .remove {
    opacity: 1;
  }
}
</style>
