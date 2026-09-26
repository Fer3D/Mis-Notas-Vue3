<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/note';

const noteStore = useNoteStore();
const title = ref('');
const inputRef = ref(null);

const handleSubmit = () => {
  const value = title.value.trim();
  if (!value) return;
  noteStore.addNote(value);
  title.value = '';
  inputRef.value?.focus();
};

defineExpose({
  focusInput: () => inputRef.value?.focus(),
});
</script>

<template>
  <form class="compose" @submit.prevent="handleSubmit">
    <label class="compose-label" for="note-title">Nueva nota</label>
    <div class="compose-row">
      <input
        id="note-title"
        ref="inputRef"
        v-model="title"
        type="text"
        class="compose-input"
        placeholder="¿Qué quieres recordar?"
        maxlength="200"
        autocomplete="off"
      />
      <button type="submit" class="compose-btn" :disabled="!title.trim()">
        Añadir
      </button>
    </div>
  </form>
</template>

<style scoped>
.compose {
  width: 100%;
}

.compose-label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--ink-soft);
}

.compose-row {
  display: flex;
  gap: 0.55rem;
  align-items: stretch;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 0.35rem;
  transition: border-color 0.2s var(--ease), box-shadow 0.2s var(--ease);
}

.compose-row:focus-within {
  border-color: rgba(13, 101, 88, 0.45);
  box-shadow: 0 0 0 3px var(--jade-glow);
}

.compose-input {
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  padding: 0.65rem 0.8rem;
  outline: none;
  color: var(--ink);
  font-size: 1.05rem;
}

.compose-input::placeholder {
  color: rgba(74, 83, 90, 0.55);
}

.compose-btn {
  border: none;
  background: var(--jade);
  color: #f4fbf8;
  font-weight: 700;
  padding: 0 1.15rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s var(--ease), opacity 0.2s var(--ease);
}

.compose-btn:hover:not(:disabled) {
  background: var(--jade-deep);
}

.compose-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

@media (max-width: 560px) {
  .compose-row {
    flex-direction: column;
  }

  .compose-btn {
    padding: 0.7rem 1rem;
  }
}
</style>
