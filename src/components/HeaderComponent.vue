<script setup></script>

<template>
    <header class="header">
        <div class="header-content">
            <h1 class="title">📋 MisNotas</h1>
            <nav>
                <ul class="nav-list">
                    <li>
                        <router-link to="/" class="link">🏠 Inicio</router-link>
                    </li>
                    <li>
                        <router-link to="/notes" class="link">📝 Notas</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style>
.header {
    background: linear-gradient(135deg, #2c3e50, #34495e);
    color: white;
    padding: 20px 0;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(10px);
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 700;
    color: #f5f5f5;
    letter-spacing: 1px;
    text-shadow: none;
}

.nav-list {
    display: flex;
    gap: 30px;
    align-items: center;
}

.link {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
}

.link:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}

.link.router-link-active {
    color: white;
    background: linear-gradient(135deg, #667eea, #764ba2);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        gap: 15px;
        padding: 0 15px;
    }

    .title {
        font-size: 1.5rem;
    }

    .nav-list {
        gap: 20px;
    }
}
</style>