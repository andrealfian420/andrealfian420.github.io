<template>
  <section id="stack" class="stack">
    <div class="page-frame">
      <header class="section-header">
        <h2 class="section-title">{{ t('stack_title') }}</h2>
        <p class="section-desc">{{ t('stack_desc') }}</p>
      </header>

      <div v-for="group in groups" :key="group.title" class="stack-row">
        <h3 class="stack-title">{{ t(group.title) }}</h3>
        <div class="stack-body">
          <p v-if="group.desc" class="stack-desc">{{ t(group.desc) }}</p>
          <ul class="stack-items">
            <li v-for="tag in group.tags" :key="tag">{{ tag }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();

const groups = [
  {
    title: 'stack_laravel_title',
    desc: 'stack_laravel_desc',
    tags: ['PHP', 'Laravel', 'CodeIgniter', 'Inertia.js', 'jQuery', 'Bootstrap', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'stack_js_title',
    desc: 'stack_js_desc',
    tags: ['TypeScript', 'Next.js', 'React', 'Vue.js', 'Nuxt', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'Redis'],
  },
  {
    title: 'stack_infra_title',
    desc: 'stack_infra_desc',
    tags: ['Docker', 'Bitbucket Pipelines', 'GitHub Actions', 'BullMQ', 'PM2', 'Xendit', 'Midtrans', 'Cloudflare Stream'],
  },
];
</script>

<style scoped>
.stack {
  padding: var(--space-20) 0 var(--space-24);
  border-top: 1px solid var(--color-rule);
}

.stack-row {
  display: grid;
  grid-template-columns: var(--rail-w) minmax(0, 1fr);
  column-gap: var(--space-8);
  padding: var(--space-8) 0;
  border-top: 1px solid var(--color-rule);
}

.stack-row:first-of-type {
  border-top: none;
  padding-top: 0;
}

.stack-title {
  margin: 0;
  padding-top: 0.2rem;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-ink);
}

.stack-body {
  max-width: 48rem;
}

.stack-desc {
  margin: 0 0 var(--space-4);
  font-size: var(--text-base);
  color: var(--color-ink-muted);
}

.stack-items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.stack-items li {
  padding: 0.3rem 0.7rem;
  border: 1px solid var(--color-rule-strong);
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-ink);
}

@media (max-width: 767px) {
  .stack-row {
    grid-template-columns: minmax(0, 1fr);
    row-gap: var(--space-3);
  }
}
</style>
