<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/note';

const noteStore = useNoteStore();

const handleSubmit = () => {
    noteStore.addNote(title.value);
    title.value = "";
}

const title = ref("");
</script>

<template>
    <div class="create-note-wrapper">
        <form class="note-form" @submit.prevent="handleSubmit">
            <div class="input-group">
                <input 
                    type="text" 
                    class="note-title" 
                    placeholder="✏️ Escribe tu nueva nota aquí..."
                    v-model="title"
                    required
                >
                <button type="submit" class="create-btn" :disabled="!title.trim()">
                    <span class="btn-icon">+</span>
                    <span class="btn-text">Agregar</span>
                </button>
            </div>
        </form>
    </div>
</template>

<style>
.create-note-wrapper {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
}

.note-form {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
}

.note-form:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.input-group {
    display: flex;
    gap: 15px;
    align-items: center;
}

.note-title {
    flex: 1;
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid transparent;
    border-radius: 12px;
    padding: 15px 20px;
    font-size: 1.1rem;
    font-weight: 500;
    color: #333;
    transition: all 0.3s ease;
    outline: none;
}

.note-title:focus {
    border-color: #667eea;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.note-title::placeholder {
    color: #888;
    font-weight: 400;
}

.create-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 15px 20px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 120px;
    justify-content: center;
}

.create-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.create-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

.btn-icon {
    font-size: 1.4rem;
    font-weight: 300;
}

.btn-text {
    font-size: 0.9rem;
}

@media (max-width: 600px) {
    .input-group {
        flex-direction: column;
        gap: 12px;
    }
    
    .note-title {
        width: 100%;
    }
    
    .create-btn {
        width: 100%;
        min-width: auto;
    }
}
</style>