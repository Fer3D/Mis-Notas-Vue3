<script setup>
import CreateNote from '../components/CreateNote.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import NoteCard from '../components/NoteCard.vue';
import { useNoteStore } from '../stores/note';
import { onMounted } from 'vue';

const noteStore = useNoteStore();

onMounted(async () => {
    window.scrollTo({ top: 0 });
    await noteStore.getNotes();
})
</script>

<template>
    <HeaderComponent />

    <section id="notes-page">
        <div class="page-header">
            <h2 class="page-title">📝 Mis Notas</h2>
            <p class="page-subtitle">Organiza tus ideas y tareas</p>
        </div>

        <div v-if="noteStore.loading" class="loading-state">
            <div class="spinner"></div>
            <p>Cargando notas...</p>
        </div>

        <div v-else-if="noteStore.error" class="error-state">
            <div class="error-icon">⚠️</div>
            <h3>Oops! Algo salió mal</h3>
            <p>No pudimos cargar tus notas. Intenta de nuevo.</p>
            <button class="retry-btn" @click="noteStore.getNotes()">Reintentar</button>
        </div>

        <div v-else class="notes-container">
            <div v-if="!noteStore.notes.length">
                <div style="margin-bottom: 40px;">
                    <CreateNote />
                </div>
                <div class="empty-state">
                    <div class="empty-icon">📄</div>
                    <h3>No tienes notas aún</h3>
                    <p>¡Crea tu primera nota arriba!</p>
                </div>
            </div>
            <div v-else>
                <CreateNote />
                <div class="notes-grid">
                    <NoteCard
                        v-for="note in noteStore.notes"
                        :key="note.id"
                        :note="note"
                        class="note-item"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style>
#notes-page {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
}

.page-header {
    text-align: center;
    margin-bottom: 40px;
    animation: fadeInUp 0.8s ease-out;
}

.page-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.page-subtitle {
    color: rgba(255,255,255,0.9);
    font-size: 1.1rem;
    margin: 10px 0 0 0;
    font-weight: 300;
}

.notes-container {
    animation: fadeInUp 0.8s ease-out 0.2s both;
}

.loading-state, .error-state, .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    text-align: center;
    background: rgba(255,255,255,0.95);
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.3);
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #e3e3e3;
    border-top: 4px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.error-icon, .empty-icon {
    font-size: 4rem;
    margin-bottom: 20px;
}

.retry-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 20px;
}

.retry-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.notes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
    margin-top: 30px;
    justify-content: center;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}

.note-item {
    animation: slideIn 0.5s ease-out;
}

@media (max-width: 768px) {
    #notes-page {
        padding: 15px;
    }

    .page-title {
        font-size: 2rem;
    }

    .notes-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }
}
</style>