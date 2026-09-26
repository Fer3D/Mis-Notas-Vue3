import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore(
  "notes",
  () => {
    const notes = ref([]);
    const loading = ref(false);
    const error = ref(false);

    const createId = () => {
      return Date.now().toString(36) + Math.random().toString(36).slice(2);
    };

    const getNotes = async () => {
      loading.value = true;
      error.value = false;
      await Promise.resolve();
      loading.value = false;
    };

    const addNote = async (title) => {
      const trimmed = title.trim();
      if (!trimmed) return;

      notes.value = [
        {
          id: createId(),
          title: trimmed,
          marked: false,
        },
        ...notes.value,
      ];
      error.value = false;
    };

    const editNote = async (note) => {
      const index = notes.value.findIndex((n) => n.id === note.id);
      if (index === -1) return;

      notes.value[index] = {
        ...notes.value[index],
        title: note.title,
        marked: note.marked,
      };
      error.value = false;
    };

    const deleteNote = async (id) => {
      notes.value = notes.value.filter((n) => n.id !== id);
      error.value = false;
    };

    return {
      notes,
      loading,
      error,
      getNotes,
      addNote,
      editNote,
      deleteNote,
    };
  },
  {
    persist: {
      pick: ["notes"],
    },
  }
);
