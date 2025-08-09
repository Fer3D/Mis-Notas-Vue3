<script setup>
import { useNoteStore } from '../stores/note';
import { ref } from 'vue';

const props = defineProps({
    note: Object
});

const noteStore = useNoteStore();
const isEditing = ref(false);

function updateNote() {
    noteStore.editNote(props.note);
}

function deleteNote() {
    if (confirm('¿Estás seguro de que quieres eliminar esta nota?')) {
        noteStore.deleteNote(props.note.id);
    }
}
</script>

<template>
    <article class="note-card" :class="{ completed: note.marked }">
        <div class="note-content">
            <input
                type="text"
                class="card-title"
                v-model="note.title"
                @blur="updateNote"
                @keyup.enter="updateNote"
                placeholder="Escribe algo..."
            >
            <div class="note-actions">
                <label class="checkbox-wrapper">
                    <input type="checkbox" v-model="note.marked" @change="updateNote">
                    <span class="checkmark">✓</span>
                </label>
                <button class="delete-btn" @click="deleteNote" title="Eliminar nota">
                    <span class="delete-icon">🗑️</span>
                </button>
            </div>
        </div>
    </article>
</template>

<style>
.note-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.note-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: left;
    opacity: 0;
}

.note-card:hover::before {
    transform: scaleX(1);
    opacity: 0;
}

.note-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
}

.note-card.completed {
    background: rgba(240, 240, 240, 0.9);
}

.note-card.completed::before {
    background: #28a745;
    transform: scaleX(1);
    opacity: 1;
}

.note-content {
    display: flex;
    align-items: center;
    gap: 15px;
}

.card-title {
    flex: 1;
    background: transparent;
    border: none;
    font-size: 1.1rem;
    font-weight: 500;
    color: #333;
    padding: 8px 0;
    outline: none;
    transition: all 0.3s ease;
}

.card-title:focus {
    color: #667eea;
}

.card-title::placeholder {
    color: #999;
    font-style: italic;
}

.completed .card-title {
    text-decoration: line-through;
    color: #888;
    font-weight: 300;
}

.note-actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.checkbox-wrapper {
    position: relative;
    cursor: pointer;
    user-select: none;
}

.checkbox-wrapper input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
    background: white;
    border: 2px solid #ddd;
    border-radius: 6px;
    transition: all 0.3s ease;
    font-size: 14px;
    color: white;
}

.checkbox-wrapper:hover .checkmark {
    border-color: #667eea;
}

.checkbox-wrapper input:checked ~ .checkmark {
    background: #28a745;
    border-color: #28a745;
}

.checkbox-wrapper input:checked ~ .checkmark::after {
    opacity: 1;
}

.delete-btn {
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    color: white;
    border: none;
    border-radius: 8px;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
}

.delete-btn:hover {
    transform: scale(1.1);
    background: linear-gradient(135deg, #ee5a24, #c44569);
    box-shadow: 0 4px 15px rgba(238, 90, 36, 0.4);
}

.delete-btn:active {
    transform: scale(0.95);
}

.delete-icon {
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
}

@media (max-width: 600px) {
    .note-card {
        padding: 15px;
    }
    
    .note-content {
        gap: 10px;
    }
    
    .card-title {
        font-size: 1rem;
    }
}
</style>