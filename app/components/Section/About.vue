<template>
  <section id="about" class="hero">
    <div class="page-frame">
      <h1 class="name">Alfian Andre<br />Ramadhan</h1>
      <p class="role">{{ t('hero_role') }}</p>

      <p class="hook">{{ t('hero_hook') }}</p>

      <div class="actions">
        <a href="mailto:andrealfian.work@gmail.com" class="btn-primary">
          {{ t('btn_email') }} <UIArrow />
        </a>
        <a
          href="https://linkedin.com/in/alfianandre"
          target="_blank"
          rel="noopener"
          class="link-quiet"
          >LinkedIn</a
        >
        <a
          href="https://github.com/andrealfian420"
          target="_blank"
          rel="noopener"
          class="link-quiet"
          >GitHub</a
        >
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
</script>

<style scoped>
.hero {
  padding: clamp(3rem, 9vh, 6rem) 0 clamp(2.5rem, 7vh, 4.5rem);
}

.name {
  margin: 0;
  font-size: var(--text-display);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: var(--color-ink);
}

.role {
  margin: var(--space-5) 0 0;
  font-size: var(--text-lg);
  font-weight: 500;
  color: var(--color-ink-muted);
}

.hook {
  margin: var(--space-10) 0 0;
  font-size: var(--text-lead);
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.015em;
  color: var(--color-ink);
  max-width: 32ch;
  text-wrap: balance;
}


.actions {
  margin-top: var(--space-10);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4) var(--space-6);
}

</style>
