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
            <span v-for="tag in phpTags" :key="tag" class="tech-tag">{{ tag }}</span>
          </div>
        </div>

        <div class="stack-divider" aria-hidden="true"></div>

        <div class="stack-col">
          <h3 class="stack-col-title">{{ t('stack_js_title') }}</h3>
          <p class="stack-col-desc">{{ t('stack_js_desc') }}</p>
          <div class="tech-tags">
            <span v-for="tag in jsTags" :key="tag" class="tech-tag">{{ tag }}</span>
          </div>
        </div>
      </div>

      <div class="stack-infra">
        <h3 class="stack-col-title">{{ t('stack_infra_title') }}</h3>
        <div class="tech-tags">
          <span v-for="tag in infraTags" :key="tag" class="tech-tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();

const phpTags = ['PHP', 'Laravel', 'CodeIgniter', 'Inertia.js', 'jQuery', 'Bootstrap', 'MySQL', 'PostgreSQL'];
const jsTags = ['TypeScript', 'Next.js', 'React', 'Vue.js', 'Nuxt', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'Redis'];
const infraTags = ['Docker', 'Bitbucket Pipelines', 'GitHub Actions', 'BullMQ', 'PM2', 'Xendit', 'Midtrans', 'Cloudflare Stream'];
</script>

<style scoped>
.stack-section {
  padding: var(--space-20) var(--space-6);
  background-color: var(--color-paper-2);
}

.stack-infra {
  margin-top: var(--space-12);
  padding-top: var(--space-8);
  border-top: 1px solid var(--color-rule);
}

.stack-inner {
  max-width: 72rem;
  margin: 0 auto;
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
}
</style>
