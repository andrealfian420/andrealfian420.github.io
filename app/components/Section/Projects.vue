<template>
  <section id="projects" class="projects-section">
    <div class="projects-inner">
      <header class="section-header">
        <h2 class="section-title">{{ t('projects_title') }}</h2>
        <p class="section-desc">{{ t('projects_desc') }}</p>
      </header>
      <hr class="section-rule" aria-hidden="true" />

      <div class="projects-grid">
        <article
          v-for="project in projects"
          :key="project.slug"
          class="project-card"
        >
          <div class="project-image">
            <NuxtImg
              :src="project.img"
              :alt="project.title + ' screenshot'"
              width="640"
              height="360"
              loading="lazy"
              class="project-img"
            />
          </div>
          <div class="project-body">
            <div class="project-tags">
              <span
                v-for="stack in project.stack"
                :key="stack"
                class="project-tag"
                :class="getTagClass(stack)"
              >
                {{ stack }}
              </span>
            </div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p v-if="project.featured" class="project-meta">
              {{ t(`projects.${project.slug}.meta`) }}
            </p>
            <p class="project-desc">
              {{ t(`projects.${project.slug}.desc`) }}
            </p>
            <details v-if="project.featured" class="project-details">
              <summary>
                {{
                  t('projects_key_work', {
                    count: tm(`projects.${project.slug}.features`).length,
                  })
                }}
              </summary>
              <ul class="project-features">
                <li
                  v-for="(feature, i) in tm(
                    `projects.${project.slug}.features`,
                  )"
                  :key="i"
                >
                  {{ rt(feature) }}
                </li>
              </ul>
            </details>
            <a
              :href="project.url"
              target="_blank"
              rel="noopener"
              class="project-link"
            >
              {{ t('btn_visit') }} →
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t, tm, rt } = useI18n();

const getTagClass = (name) => {
  const n = name.toLowerCase();
  if (n.includes('laravel') || n.includes('php') || n.includes('codeigniter'))
    return 'tag--backend';
  if (
    ['vue', 'nuxt', 'node', 'next', 'express', 'inertia', 'typescript'].some(
      (k) => n.includes(k),
    )
  )
    return 'tag--frontend';
  if (n.includes('bootstrap') || n.includes('tailwind')) return 'tag--css';
  if (
    ['mysql', 'postgresql', 'jquery', 'prisma', 'redis'].some((k) =>
      n.includes(k),
    )
  )
    return 'tag--data';
  if (
    ['firebase', 'xendit', 'midtrans', 'cloudflare'].some((k) => n.includes(k))
  )
    return 'tag--service';
  return '';
};

// Text (meta, desc, features) lives in i18n under `projects.<slug>`.
// Featured projects have meta + features; others only desc.
const projects = [
  {
    slug: 'forte',
    title: 'Forte',
    img: '/img/forte.webp',
    stack: ['Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Redis'],
    url: 'https://goforte.id',
    featured: true,
  },
  {
    slug: 'medexpo',
    title: 'Med Expo',
    img: '/img/medexpo.webp',
    stack: ['Laravel', 'Vue 3', 'Inertia.js', 'Tailwind', 'Xendit'],
    url: 'https://medexpo.totalit.co.id',
    featured: true,
  },
  {
    slug: 'inahrsregistry',
    title: 'InaHRS Registry',
    img: '/img/inahrsregistry.webp',
    stack: ['Laravel', 'Inertia.js', 'Vue 3', 'Tailwind', 'Xendit'],
    url: 'https://inahrsregistry.totalit.co.id',
    featured: true,
  },
  {
    slug: 'isicam',
    title: 'ISICAM',
    img: '/img/isicam.webp',
    stack: ['Laravel', 'Bootstrap 5', 'jQuery', 'Xendit', 'Cloudflare Stream'],
    url: 'https://isicam.id',
    featured: true,
  },
  {
    slug: 'wahanahonda',
    title: 'Wahana Honda',
    img: '/img/wahanahonda.webp',
    stack: ['CodeIgniter 4', 'PHP', 'Bootstrap', 'jQuery'],
    url: 'https://www.wahanahonda.com',
    featured: true,
  },
  {
    slug: 'inahrs',
    title: 'InaHRS',
    img: '/img/inahrs.webp',
    stack: ['Laravel', 'Vue 2', 'Vuetify', 'Highcharts'],
    url: 'https://inahrs.or.id',
    featured: true,
  },
  {
    slug: 'festivia',
    title: 'Festivia',
    img: '/img/festivia.webp',
    stack: ['Laravel', 'jQuery', 'Bootstrap', 'Xendit', 'Midtrans'],
    url: 'https://festivia.id',
    featured: true,
  },
  {
    slug: 'sinau',
    title: 'Sinauyuk!',
    img: '/img/sinau.webp',
    stack: ['Laravel', 'Vue 2', 'Vuetify', 'Bootstrap 5', 'Midtrans'],
    url: 'https://sinauyuk.id',
    featured: true,
  },
  {
    slug: 'eria',
    title: 'ERIA RKC-MPD',
    img: '/img/eria.webp',
    stack: ['Laravel', 'Inertia.js', 'Vue 3', 'Tailwind', 'Tiptap'],
    url: 'https://rkcmpd-eria.org',
    featured: true,
  },
  {
    slug: 'epic',
    title: 'Epic Estate',
    img: '/img/epic.webp',
    stack: ['Laravel', 'Bootstrap 5', 'jQuery', 'Firebase'],
    url: 'https://epicestate.web.id',
  },
];
</script>

<style scoped>
.projects-section {
  padding: var(--space-20) var(--space-6) var(--space-24);
}

.projects-inner {
  max-width: 72rem;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

/* Closed cards share row height; once "Key work" is open, stop stretching
   so the open card doesn't leave a tall empty neighbour. */
.projects-grid:has(details[open]) {
  align-items: start;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.project-card {
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: var(--color-paper);
  transition:
    border-color var(--dur-normal) var(--ease-out),
    transform var(--dur-normal) var(--ease-out);
}

.project-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-3px);
}

.project-image {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: var(--color-paper-3);
  flex-shrink: 0;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  opacity: 0.9;
  transition:
    opacity var(--dur-slow) var(--ease-out),
    transform var(--dur-slow) var(--ease-out);
}

.project-card:hover .project-img {
  opacity: 1;
  transform: scale(1.03);
}

.project-body {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin-bottom: var(--space-3);
}

.project-tag {
  font-size: 10px;
  font-weight: 500;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-ink-subtle);
  background-color: var(--color-paper-3);
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-sm);
  padding: 0.2rem 0.5rem;
}

.tag--backend {
  color: var(--color-tech-backend);
  background-color: var(--color-tech-backend-bg);
  border-color: color-mix(in oklch, var(--color-tech-backend) 20%, transparent);
}

.tag--frontend {
  color: var(--color-tech-frontend);
  background-color: var(--color-tech-frontend-bg);
  border-color: color-mix(
    in oklch,
    var(--color-tech-frontend) 20%,
    transparent
  );
}

.tag--css {
  color: var(--color-tech-css);
  background-color: var(--color-tech-css-bg);
  border-color: color-mix(in oklch, var(--color-tech-css) 20%, transparent);
}

.tag--data {
  color: var(--color-tech-data);
  background-color: var(--color-tech-data-bg);
  border-color: color-mix(in oklch, var(--color-tech-data) 20%, transparent);
}

.tag--service {
  color: var(--color-tech-service);
  background-color: var(--color-tech-service-bg);
  border-color: color-mix(in oklch, var(--color-tech-service) 20%, transparent);
}

.project-title {
  font-family: var(--font-display);
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--color-ink);
  margin: 0 0 var(--space-2);
  letter-spacing: -0.01em;
}

.project-meta {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-accent);
  margin: 0 0 var(--space-3);
  letter-spacing: 0.01em;
}

.project-desc {
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
  line-height: 1.6;
  margin: 0 0 var(--space-5);
}

.project-details {
  margin: 0 0 var(--space-5);
}

.project-details summary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-ink);
  cursor: pointer;
  list-style: none;
  user-select: none;
}

.project-details summary::-webkit-details-marker {
  display: none;
}

.project-details summary::before {
  content: '';
  width: 0.4rem;
  height: 0.4rem;
  border-right: 1.5px solid var(--color-accent);
  border-bottom: 1.5px solid var(--color-accent);
  transform: rotate(-45deg);
  transition: transform var(--dur-fast) var(--ease-out);
}

.project-details[open] summary::before {
  transform: rotate(45deg);
}

.project-details summary:hover {
  color: var(--color-accent);
}

.project-features {
  list-style: none;
  padding: 0;
  margin: var(--space-3) 0 0;
  display: grid;
  gap: var(--space-2);
}

.project-features li {
  position: relative;
  padding-left: var(--space-4);
  font-size: var(--text-sm);
  line-height: 1.55;
  color: var(--color-ink-muted);
}

.project-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 6px;
  height: 1px;
  background-color: var(--color-accent);
}

.project-link {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-accent);
  text-decoration: none;
  margin-top: auto;
  align-self: flex-start;
  transition: opacity var(--dur-fast) var(--ease-out);
}

.project-link:hover {
  opacity: 0.72;
}
</style>
