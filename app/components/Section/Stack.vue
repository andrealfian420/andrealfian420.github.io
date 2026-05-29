<template>
  <section id="stack" class="stack-section">
    <div class="stack-inner">
      <header class="section-header">
        <h2 class="section-title">{{ t('stack_title') }}</h2>
        <p class="section-desc">{{ t('stack_desc') }}</p>
      </header>
      <hr class="section-rule" aria-hidden="true" />

      <div class="stack-grid">
        <div class="stack-col">
          <h3 class="stack-col-title">{{ t('stack_laravel_title') }}</h3>
          <p class="stack-col-desc">{{ t('stack_laravel_desc') }}</p>
          <div class="tech-tags">
            <span class="tech-tag">PHP</span>
            <span class="tech-tag">Laravel Framework</span>
            <span class="tech-tag">Inertia.js</span>
            <span class="tech-tag">jQuery</span>
            <span class="tech-tag">MySQL</span>
            <span class="tech-tag">PostgreSQL</span>
          </div>
        </div>

        <div class="stack-divider" aria-hidden="true"></div>

        <div class="stack-col">
          <h3 class="stack-col-title">{{ t('stack_js_title') }}</h3>
          <p class="stack-col-desc">{{ t('stack_js_desc') }}</p>
          <div class="tech-tags">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">React</span>
            <span class="tech-tag">Next.js</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">Redis</span>
            <span class="tech-tag">Express</span>
            <span class="tech-tag">MySQL</span>
            <span class="tech-tag">PostgreSQL</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
</script>

<style scoped>
.stack-section {
  padding: var(--space-20) var(--space-6);
  border-bottom: 1px solid var(--color-rule);
  background-color: var(--color-paper-2);
}

.stack-inner {
  max-width: 72rem;
  margin: 0 auto;
}

.section-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-bottom: var(--space-5);
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--color-ink);
  margin: 0;
}

.section-desc {
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
  margin: 0;
  max-width: 42ch;
  text-align: right;
}

.section-rule {
  border: none;
  border-top: 1px solid var(--color-rule);
  margin: 0 0 var(--space-12);
}

.stack-grid {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: var(--space-12);
}

.stack-divider {
  background-color: var(--color-rule);
}

.stack-col-title {
  font-family: var(--font-display);
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--color-ink);
  margin: 0 0 var(--space-3);
  letter-spacing: -0.01em;
}

.stack-col-desc {
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
  line-height: 1.6;
  margin: 0 0 var(--space-6);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.tech-tag {
  font-size: var(--text-xs);
  font-weight: 500;
  font-family: var(--font-mono);
  color: var(--color-ink-muted);
  background-color: var(--color-paper-3);
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-sm);
  padding: 0.25rem 0.625rem;
  letter-spacing: 0.01em;
}

@media (max-width: 640px) {
  .stack-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .stack-divider {
    display: none;
  }

  .section-desc {
    text-align: left;
  }
}
</style>
