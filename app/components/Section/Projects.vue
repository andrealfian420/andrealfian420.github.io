<template>
  <section id="works" class="works">
    <div class="page-frame">
      <header class="section-header">
        <h2 class="section-title">{{ t('projects_title') }}</h2>
      </header>

      <div v-for="group in groups" :key="group.key" class="year-group">
        <div class="rail">
          <p class="year figures">
            {{ group.key === 'other' ? t('year_other') : group.key }}
          </p>
        </div>

        <div class="entries">
          <article
            v-for="work in group.works"
            :id="`work-${work.slug}`"
            :key="work.slug"
            class="entry"
          >
            <header class="entry-head">
              <h3 class="entry-title">{{ work.title }}</h3>
              <p class="entry-meta figures">
                <span>{{ t(`projects.${work.slug}.sector`) }}</span>
                <template v-if="meta(work)">
                  <span v-for="part in meta(work)" :key="part">{{ part }}</span>
                </template>
              </p>
            </header>

            <p v-if="te(`projects.${work.slug}.note`)" class="entry-note">
              {{ t(`projects.${work.slug}.note`) }}
            </p>
            <p class="entry-desc">{{ t(`projects.${work.slug}.desc`) }}</p>

            <UIShotGallery v-if="work.shots" :work="work" />
            <figure v-else class="entry-shot">
              <NuxtImg
                :src="work.img"
                :alt="`${work.title} screenshot`"
                width="1920"
                height="1080"
                sizes="xs:100vw md:768px"
                loading="lazy"
                class="entry-img"
              />
            </figure>

            <template v-if="features(work).length">
              <h4 class="entry-label">{{ t('shipped') }}</h4>
              <ul class="shipped">
                <li v-for="(feature, j) in features(work)" :key="j">
                  {{ feature }}
                </li>
              </ul>
            </template>

            <p class="built-with">
              <span class="entry-label">{{ t('built_with') }}</span>
              <span>{{ stack(work) }}</span>
            </p>

            <a
              :href="work.url"
              target="_blank"
              rel="noopener"
              class="link-quiet entry-visit"
            >
              {{ workHost(work.url) }} <UIArrow />
            </a>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t, te, tm, rt } = useI18n();

// "role · period · team" from i18n; EPIC has none.
const meta = (work) =>
  te(`projects.${work.slug}.meta`)
    ? t(`projects.${work.slug}.meta`).split(' · ')
    : null;

// tm() returns the key string when a work has no features (EPIC).
const features = (work) => {
  const list = tm(`projects.${work.slug}.features`);
  return Array.isArray(list) ? list.map((f) => rt(f)) : [];
};

const stack = (work) => Object.values(work.section).flat().join(' · ');

// Newest first, grouped by the year each work started; undated works last.
const startYear = (work) => meta(work)?.[1].match(/\d{4}/)[0] ?? 'other';

const groups = computed(() => {
  const byYear = new Map();
  for (const work of works) {
    const year = startYear(work);
    if (!byYear.has(year)) byYear.set(year, []);
    byYear.get(year).push(work);
  }
  return [...byYear.entries()]
    .sort(([a], [b]) => (a === 'other' ? 1 : b === 'other' ? -1 : b - a))
    .map(([key, list]) => ({ key, works: list }));
});
</script>

<style scoped>
.works {
  padding: var(--space-12) 0 var(--space-24);
  border-top: 1px solid var(--color-rule);
}

.year-group {
  display: grid;
  grid-template-columns: var(--rail-w) minmax(0, 1fr);
  column-gap: var(--space-8);
}

.year-group + .year-group {
  border-top: 1px solid var(--color-rule);
  padding-top: var(--space-12);
}

/* Signature: the year stays pinned while its releases scroll past. */
.year {
  position: sticky;
  top: calc(var(--header-h) + var(--space-6));
  margin: 0;
  font-size: var(--text-entry);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-accent);
}

.entries {
  min-width: 0;
}

.entry {
  max-width: 48rem;
  padding-bottom: var(--space-16);
}

.entry + .entry {
  border-top: 1px solid var(--color-rule);
  padding-top: var(--space-12);
}

.entry-title {
  margin: 0;
  font-size: var(--text-entry);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: var(--color-ink);
}

.entry-meta {
  margin: var(--space-2) 0 0;
  display: flex;
  flex-wrap: wrap;
  font-size: var(--text-sm);
  color: var(--color-ink-subtle);
}

.entry-meta span + span::before {
  content: '·';
  margin: 0 var(--space-2);
}

.entry-note {
  margin: var(--space-6) 0 0;
  font-size: var(--text-xl);
  font-weight: 500;
  line-height: 1.45;
  letter-spacing: -0.01em;
  color: var(--color-ink);
  max-width: 44ch;
  text-wrap: pretty;
}

.entry-desc {
  margin: var(--space-4) 0 0;
  font-size: var(--text-base);
  line-height: 1.65;
  color: var(--color-ink-muted);
  max-width: 64ch;
  text-wrap: pretty;
}

.entry-shot {
  margin: var(--space-8) 0 0;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid var(--color-rule);
  border-radius: var(--radius);
  background-color: var(--color-paper-2);
}

.entry-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.entry-label {
  margin: var(--space-8) 0 0;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-ink);
}

.shipped {
  list-style: none;
  margin: var(--space-3) 0 0;
  padding: 0;
}

.shipped li {
  position: relative;
  padding: var(--space-1) 0 var(--space-1) var(--space-5);
  font-size: var(--text-base);
  line-height: 1.55;
  color: var(--color-ink-muted);
}

.shipped li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.95em;
  width: 0.5rem;
  height: 1px;
  background-color: var(--color-ink-subtle);
}

.built-with {
  margin: var(--space-6) 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1) var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
}

.built-with .entry-label {
  margin: 0;
}

.entry-visit {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-6);
  font-size: var(--text-sm);
}

@media (max-width: 767px) {
  .year-group {
    grid-template-columns: minmax(0, 1fr);
  }

  .year {
    position: static;
    margin-bottom: var(--space-6);
  }
}
</style>
