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
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
        >
          <div class="project-image">
            <NuxtImg
              :src="project.img"
              :alt="project.title + ' screenshot'"
              class="project-img"
            />
          </div>
          <div class="project-body">
            <div class="project-tags">
              <span
                v-for="(stack, stackIndex) in project.stack"
                :key="stackIndex"
                class="project-tag"
                :class="getTagClass(stack)"
              >
                {{ stack }}
              </span>
            </div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.desc }}</p>
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
const { t } = useI18n();

const getTagClass = (name) => {
  const n = name.toLowerCase();
  if (n.includes('laravel') || n.includes('php')) return 'tag--backend';
  if (n.includes('vue') || n.includes('nuxt') || n.includes('node'))
    return 'tag--frontend';
  if (n.includes('bootstrap') || n.includes('tailwind')) return 'tag--css';
  if (n.includes('mysql') || n.includes('postgresql') || n.includes('jquery'))
    return 'tag--data';
  if (n.includes('firebase')) return 'tag--service';
  return '';
};

const projects = computed(() => [
  {
    title: 'Sinauyuk!',
    desc: t('project_sinau_desc'),
    img: '/img/sinau.webp',
    stack: ['Laravel', 'Vue 2', 'Bootstrap 5'],
    url: 'https://sinauyuk.id',
  },
  {
    title: 'Festivia',
    desc: t('project_festivia_desc'),
    img: '/img/festivia.webp',
    stack: ['Laravel', 'Bootstrap 5', 'jQuery'],
    url: 'https://festivia.id',
  },
  {
    title: 'Isicam',
    desc: t('project_isicam_desc'),
    img: '/img/isicam.webp',
    stack: ['Laravel', 'Bootstrap 5', 'jQuery'],
    url: 'https://isicam.id',
  },
  {
    title: 'Epic Estate',
    desc: t('project_epic_desc'),
    img: '/img/epic.webp',
    stack: ['Laravel', 'Bootstrap 5', 'jQuery', 'Firebase'],
    url: 'https://epicestate.web.id',
  },
]);
</script>

<style scoped>
.projects-section {
  padding: var(--space-20) var(--space-6) var(--space-24);
}

.projects-inner {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(0, 1fr));
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.project-card {
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: var(--color-paper);
  will-change: transform;
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

.project-desc {
  font-size: var(--text-sm);
  color: var(--color-ink-muted);
  line-height: 1.6;
  margin: 0 0 var(--space-5);
  flex: 1;
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

@media (max-width: 640px) {
  .section-desc {
    text-align: left;
  }
}
</style>
