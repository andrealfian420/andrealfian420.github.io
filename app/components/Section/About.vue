<template>
  <section id="about" class="hero-section">
    <div class="hero-inner">
      <p class="hero-label">{{ t('hero_greeting') }}</p>
      <hr class="hero-rule" aria-hidden="true" />

      <h1 class="hero-headline">
        {{ t('hero_title_1') }}<br />
        <span class="hero-muted">{{ t('hero_concept') }}</span>
        {{ t('hero_to') }}
        <span class="hero-accent">{{ t('hero_production') }}</span
        >.
      </h1>

      <p class="hero-body">
        {{ t('hero_desc_1') }}
        <strong class="hero-strong">(Laravel/Node)</strong>
        {{ t('hero_desc_2') }}
        <strong class="hero-strong">(Vue/Inertia)</strong>.
      </p>

      <div class="hero-ctas">
        <a href="#projects" class="cta-primary">{{ t('btn_view_work') }} →</a>
        <a href="mailto:andrealfian.work@gmail.com" class="cta-secondary">{{
          t('btn_lets_connect')
        }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
</script>

<style scoped>
.hero-section {
  padding: var(--space-24) var(--space-6) var(--space-20);
  border-bottom: 1px solid var(--color-rule);
}

.hero-inner {
  max-width: 72rem;
  margin: 0 auto;
}

.hero-label {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-ink-muted);
  margin: 0 0 var(--space-4);
  letter-spacing: 0.01em;
}

.hero-rule {
  border: none;
  border-top: 1px solid var(--color-rule);
  margin: 0 0 var(--space-8);
  width: 100%;
}

.hero-headline {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: 700;
  line-height: 1.07;
  letter-spacing: -0.03em;
  color: var(--color-ink);
  margin: 0 0 var(--space-8);
  overflow-wrap: anywhere;
  min-width: 0;
  max-width: 20ch;
}

.hero-muted {
  color: var(--color-ink-subtle);
}

.hero-accent {
  color: var(--color-accent);
}

.hero-body {
  font-size: var(--text-xl);
  color: var(--color-ink-muted);
  line-height: 1.6;
  max-width: 52ch;
  margin: 0 0 var(--space-10);
}

.hero-strong {
  font-weight: 600;
  color: var(--color-ink);
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-6);
  align-items: center;
}

.cta-primary {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-accent);
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: opacity var(--dur-fast) var(--ease-out);
}

.cta-primary:hover {
  opacity: 0.72;
}

.cta-secondary {
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-ink-muted);
  text-decoration: none;
  transition: color var(--dur-fast) var(--ease-out);
}

.cta-secondary:hover {
  color: var(--color-ink);
}

@media (max-width: 640px) {
  .hero-section {
    padding: var(--space-16) var(--space-6) var(--space-16);
  }

  .hero-headline {
    max-width: none;
  }
}
</style>
