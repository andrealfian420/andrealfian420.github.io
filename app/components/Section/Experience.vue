<template>
  <section id="experience" class="exp-section">
    <div class="exp-inner">
      <header class="section-header">
        <h2 class="section-title">{{ t('experience_title') }}</h2>
        <p class="section-desc">{{ t('experience_desc') }}</p>
      </header>
      <hr class="section-rule" aria-hidden="true" />

      <ol class="exp-list">
        <li v-for="job in jobs" :key="job.key" class="exp-item">
          <p class="exp-period">{{ t(`experience.${job.key}.period`) }}</p>
          <div>
            <h3 class="exp-company">{{ job.company }}</h3>
            <p
              v-for="(role, i) in tm(`experience.${job.key}.roles`)"
              :key="i"
              class="exp-role"
            >
              {{ rt(role) }}
            </p>
            <ul class="exp-points">
              <li
                v-for="(point, i) in tm(`experience.${job.key}.points`)"
                :key="i"
              >
                {{ rt(point) }}
              </li>
            </ul>
          </div>
        </li>
      </ol>

      <p class="exp-education">
        <span class="exp-education-label">{{ t('experience_education_label') }}</span>
        {{ t('experience_education') }}
      </p>
    </div>
  </section>
</template>

<script setup>
const { t, tm, rt } = useI18n();

// Periods, roles and points live in i18n under `experience.<key>`.
const jobs = [
  { key: 'totalit', company: 'Total Solusi Teknologi' },
  { key: 'umrotix', company: 'Umrotix' },
];
</script>

<style scoped>
.exp-section {
  padding: var(--space-20) var(--space-6);
  border-bottom: 1px solid var(--color-rule);
  background-color: var(--color-paper-2);
}

.exp-inner {
  max-width: 72rem;
  margin: 0 auto;
}

.exp-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: var(--space-10);
}

.exp-item {
  display: grid;
  grid-template-columns: 12rem minmax(0, 1fr);
  gap: var(--space-8);
}

.exp-period {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
  letter-spacing: 0.01em;
  margin: 0;
  padding-top: 0.3rem;
}

.exp-company {
  font-family: var(--font-display);
  font-size: 1.0625rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--color-ink);
  margin: 0 0 var(--space-1);
}

.exp-role {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-accent);
  letter-spacing: 0.01em;
  margin: 0 0 var(--space-1);
}

.exp-points {
  list-style: none;
  padding: 0;
  margin: var(--space-4) 0 0;
  display: grid;
  gap: var(--space-2);
  max-width: 68ch;
}

.exp-points li {
  position: relative;
  padding-left: var(--space-4);
  font-size: var(--text-sm);
  line-height: 1.6;
  color: var(--color-ink-muted);
}

.exp-points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65em;
  width: 6px;
  height: 1px;
  background-color: var(--color-accent);
}

.exp-education {
  margin: var(--space-12) 0 0;
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-rule);
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}

.exp-education-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-ink);
  margin-right: var(--space-3);
}

@media (max-width: 640px) {
  .exp-item {
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }
}
</style>
