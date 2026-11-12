<template>
  <section id="experience" class="exp">
    <div class="page-frame">
      <header class="section-header">
        <h2 class="section-title">{{ t('experience_title') }}</h2>
        <p class="section-desc">{{ t('experience_desc') }}</p>
      </header>

      <ol class="exp-list">
        <li v-for="job in jobs" :key="job.key" class="exp-item">
          <p class="exp-period figures">
            {{ t(`experience.${job.key}.period`) }}
          </p>
          <div class="exp-body">
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
        <li class="exp-item">
          <p class="exp-period exp-period--label">
            {{ t('experience_education_label') }}
          </p>
          <p class="exp-body exp-education">{{ t('experience_education') }}</p>
        </li>
      </ol>
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
.exp {
  padding: var(--space-20) 0;
  border-top: 1px solid var(--color-rule);
}

.exp-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.exp-item {
  display: grid;
  grid-template-columns: var(--rail-w) minmax(0, 1fr);
  column-gap: var(--space-8);
  padding: var(--space-8) 0;
  border-top: 1px solid var(--color-rule);
}

.exp-item:first-child {
  border-top: none;
  padding-top: 0;
}

.exp-period {
  margin: 0;
  padding-top: 0.2rem;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-accent);
}

.exp-period--label {
  color: var(--color-ink-subtle);
}

.exp-body {
  max-width: 48rem;
}

.exp-company {
  margin: 0;
  font-size: var(--text-xl);
  font-weight: 700;
  letter-spacing: -0.015em;
  color: var(--color-ink);
}

.exp-role {
  margin: var(--space-1) 0 0;
  font-size: var(--text-sm);
  color: var(--color-ink-subtle);
}

.exp-points {
  list-style: none;
  margin: var(--space-4) 0 0;
  padding: 0;
}

.exp-points li {
  position: relative;
  padding: var(--space-1) 0 var(--space-1) var(--space-5);
  font-size: var(--text-base);
  line-height: 1.55;
  color: var(--color-ink-muted);
}

.exp-points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.95em;
  width: 0.5rem;
  height: 1px;
  background-color: var(--color-ink-subtle);
}

.exp-education {
  margin: 0;
  font-size: var(--text-base);
  color: var(--color-ink);
}

@media (max-width: 767px) {
  .exp-item {
    grid-template-columns: minmax(0, 1fr);
    row-gap: var(--space-2);
  }
}
</style>
