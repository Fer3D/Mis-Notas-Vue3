<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';


</script>

<template>
    <HeaderComponent />

    <main class="home">
        <section class="hero">
            <div class="hero-content">
                <h1 class="hero-title">¡Bienvenido a MisNotas! 📝</h1>
                <p class="hero-subtitle">
                    Organiza tus ideas, tareas y pensamientos de manera simple y elegante
                </p>
                <div class="hero-actions">
                    <router-link to="/notes" class="cta-button">
                        <span class="btn-icon">🚀</span>
                        <span>Comenzar ahora</span>
                    </router-link>
                </div>
            </div>
            <div class="hero-illustration">
                <div class="floating-note note-1">
                    <div class="note-content">
                        <div class="note-header"></div>
                        <div class="note-lines"></div>
                        <div class="note-lines"></div>
                    </div>
                </div>
                <div class="floating-note note-2">
                    <div class="note-content">
                        <div class="note-header"></div>
                        <div class="note-lines"></div>
                    </div>
                </div>
                <div class="floating-note note-3">
                    <div class="note-content">
                        <div class="note-header"></div>
                        <div class="note-lines"></div>
                        <div class="note-lines"></div>
                        <div class="note-lines"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="features">
            <div class="features-container">
                <h2 class="features-title">¿Por qué usar MisNotas?</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">⚡</div>
                        <h3>Rápido y Simple</h3>
                        <p>Crea y edita notas al instante sin complicaciones</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🎨</div>
                        <h3>Diseño Moderno</h3>
                        <p>Interfaz elegante y fácil de usar</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">✅</div>
                        <h3>Organización</h3>
                        <p>Marca tus tareas como completadas</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style>
.home {
    min-height: calc(100vh - 80px);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px;
    min-height: 60vh;
}

.hero-content {
    flex: 1;
    max-width: 500px;
    animation: fadeInUp 0.8s ease-out;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    color: white;
    margin: 0 0 20px 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 40px 0;
    line-height: 1.6;
    font-weight: 300;
}

.hero-actions {
    display: flex;
    gap: 20px;
}

.cta-button {
    background: rgba(255, 255, 255, 0.95);
    color: #333;
    text-decoration: none;
    padding: 15px 30px;
    border-radius: 50px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    background: white;
}

.btn-icon {
    font-size: 1.2rem;
}

.hero-illustration {
    flex: 1;
    position: relative;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.floating-note {
    position: absolute;
    width: 120px;
    height: 140px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 8px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    padding: 15px;
    animation: float 6s ease-in-out infinite;
}

.note-1 {
    top: 50px;
    left: 50px;
    animation-delay: 0s;
}

.note-2 {
    top: 100px;
    right: 80px;
    animation-delay: 2s;
}

.note-3 {
    bottom: 80px;
    left: 120px;
    animation-delay: 4s;
}

.note-header {
    height: 8px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 4px;
    margin-bottom: 10px;
}

.note-lines {
    height: 4px;
    background: #e0e0e0;
    border-radius: 2px;
    margin-bottom: 6px;
}

.note-lines:nth-child(2) {
    width: 80%;
}

.note-lines:nth-child(3) {
    width: 90%;
}

.note-lines:last-child {
    width: 60%;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(2deg);
    }
}

.features {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 80px 20px;
}

.features-container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}

.features-title {
    font-size: 2.5rem;
    color: white;
    margin: 0 0 60px 0;
    font-weight: 700;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.feature-card {
    background: rgba(255, 255, 255, 0.95);
    padding: 40px 30px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 20px;
}

.feature-card h3 {
    font-size: 1.5rem;
    color: #333;
    margin: 0 0 15px 0;
    font-weight: 600;
}

.feature-card p {
    color: #666;
    line-height: 1.6;
    margin: 0;
}

@media (max-width: 768px) {
    .hero {
        flex-direction: column;
        text-align: center;
        padding: 40px 20px;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.1rem;
    }
    
    .hero-illustration {
        height: 300px;
        margin-top: 40px;
    }
    
    .floating-note {
        width: 100px;
        height: 120px;
    }
    
    .features-title {
        font-size: 2rem;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
}
</style>