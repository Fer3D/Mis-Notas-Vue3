<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
</script>

<template>
  <div class="landing">
    <HeaderComponent />

    <main class="hero">
      <div class="hero-copy">
        <p class="brand-hero">MisNotas</p>
        <h1 class="headline">Espacio limpio para ideas que no quieres perder.</h1>
        <p class="lede">Escribe, marca y sigue.</p>
        <div class="cta-row">
          <router-link to="/notes" class="cta">Entrar a mis notas</router-link>
        </div>
      </div>

      <div class="hero-plane" aria-hidden="true">
        <div class="sheet sheet-a">
          <span class="rule"></span>
          <span class="rule short"></span>
          <span class="rule mid"></span>
          <div class="sheet-foot">
            <svg class="ink-line" viewBox="0 0 160 28" fill="none">
              <path
                d="M4 18 C28 8, 52 22, 78 14 C102 7, 128 16, 152 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                pathLength="100"
              />
            </svg>
            <span class="check"></span>
          </div>
        </div>
        <div class="sheet sheet-b">
          <span class="rule"></span>
          <span class="rule mid"></span>
          <span class="rule short"></span>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.landing {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.hero {
  flex: 1;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: end;
  gap: 2rem;
  min-height: calc(100vh - 68px);
  padding: clamp(2rem, 6vw, 5rem) clamp(1.25rem, 5vw, 4.5rem) clamp(2.5rem, 6vw, 4rem);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 70% 55% at 78% 62%, rgba(13, 101, 88, 0.16), transparent 70%),
    linear-gradient(120deg, transparent 40%, rgba(255, 255, 255, 0.32) 100%);
  pointer-events: none;
}

.hero-copy {
  position: relative;
  z-index: 2;
  max-width: 34rem;
  animation: rise 0.85s var(--ease) both;
}

.brand-hero {
  margin: 0 0 1rem;
  font-family: var(--font-brand);
  font-weight: 600;
  font-size: clamp(3.2rem, 8.5vw, 5.8rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
  font-optical-sizing: auto;
  color: var(--ink);
}

.headline {
  margin: 0 0 0.75rem;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: clamp(1.2rem, 2.3vw, 1.55rem);
  line-height: 1.35;
  color: var(--ink-soft);
  max-width: 24ch;
}

.lede {
  margin: 0 0 1.85rem;
  font-size: 1.05rem;
  color: var(--ink-soft);
  opacity: 0.9;
}

.cta-row {
  display: flex;
  gap: 0.75rem;
}

.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.4rem;
  background: var(--jade);
  color: #f4fbf8;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: -0.01em;
  border-radius: 8px;
  transition: background 0.25s var(--ease), transform 0.25s var(--ease);
}

.cta:hover {
  background: var(--jade-deep);
  transform: translateY(-2px);
}

.hero-plane {
  position: relative;
  z-index: 1;
  min-height: min(52vh, 420px);
  animation: rise 1s var(--ease) 0.12s both;
}

.sheet {
  position: absolute;
  width: min(72%, 320px);
  aspect-ratio: 3 / 3.6;
  background: linear-gradient(160deg, #f8fbfc 0%, #e9f1f4 100%);
  border: 1px solid rgba(22, 24, 26, 0.08);
  box-shadow: 0 16px 36px rgba(20, 40, 50, 0.11);
  padding: 1.55rem 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  overflow: hidden;
}

.sheet-a {
  right: 8%;
  bottom: 12%;
  transform: rotate(-1.5deg);
  animation: sheetIn 1s var(--ease) 0.2s both;
}

.sheet-b {
  right: 28%;
  bottom: 28%;
  width: min(55%, 240px);
  opacity: 0.72;
  transform: rotate(4deg);
  animation: sheetIn 1.1s var(--ease) 0.35s both;
  z-index: 0;
}

.rule {
  display: block;
  height: 3px;
  width: 100%;
  background: rgba(22, 24, 26, 0.12);
  border-radius: 2px;
}

.rule.short {
  width: 48%;
}

.rule.mid {
  width: 72%;
}

.check {
  width: 1.3rem;
  height: 1.3rem;
  border: 2px solid var(--jade);
  background: var(--jade-glow);
  flex-shrink: 0;
}

.sheet-foot {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
}

.ink-line {
  width: 70%;
  max-width: 8.5rem;
  color: var(--jade);
  opacity: 0.8;
}

.ink-line path {
  stroke-dasharray: 100;
  animation: inkDraw 1.1s var(--ease) 0.7s both;
}

@media (max-width: 860px) {
  .hero {
    grid-template-columns: 1fr;
    align-items: start;
    min-height: auto;
    padding-bottom: 3rem;
  }

  .hero-plane {
    min-height: 280px;
    margin-top: 1rem;
  }

  .sheet-a {
    right: 6%;
    bottom: 8%;
  }

  .sheet-b {
    right: 36%;
    bottom: 22%;
  }
}
</style>
