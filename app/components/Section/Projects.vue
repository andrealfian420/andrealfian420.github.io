<template>
  <section id="projects" class="py-24 px-6 bg-white dark:bg-slate-900">
    <div class="max-w-5xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16">
        <div class="max-w-3xl">
          <h2
            class="text-3xl font-bold text-gray-900 dark:text-slate-100 tracking-tight"
          >
            {{ t('projects_title') }}
          </h2>
          <p class="text-gray-500 dark:text-slate-400 mt-3 text-lg">
            {{ t('projects_desc') }}
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="group bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/30 flex flex-col h-full"
        >
          <div
            class="bg-gray-100 dark:bg-slate-700 h-52 overflow-hidden relative shrink-0"
          >
            <NuxtImg
              :src="project.img"
              :alt="project.title + ' Project'"
              class="w-full h-full object-cover group-hover:scale-105 opacity-90 group-hover:opacity-100 transform-gpu !transition-all !duration-500 ease-in-out"
            />
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <div class="mb-4 flex flex-wrap gap-2">
              <span
                v-for="(stack, stackIndex) in project.stack"
                :key="stackIndex"
                :class="`${getStackClasses(stack)}`"
              >
                {{ stack }}
              </span>
            </div>
            <h3
              class="text-lg font-bold text-gray-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400"
            >
              {{ project.title }}
            </h3>
            <p
              class="text-gray-600 dark:text-slate-400 text-sm mb-6 leading-relaxed"
            >
              {{ project.desc }}
            </p>
            <a
              :href="project.url"
              target="_blank"
              class="mt-auto text-sm font-semibold text-gray-900 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
              >{{ t('btn_visit') }}
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path></svg
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();

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
    stack: ['Laravel', 'Bootstrap 5', 'Jquery'],
    url: 'https://festivia.id',
  },
  {
    title: 'Isicam',
    desc: t('project_isicam_desc'),
    img: '/img/isicam.webp',
    stack: ['Laravel', 'Bootstrap 5', 'Jquery'],
    url: 'https://isicam.id',
  },
  {
    title: 'Epic Estate',
    desc: t('project_epic_desc'),
    img: '/img/epic.webp',
    stack: ['Laravel', 'Bootstrap 5', 'Jquery', 'Firebase Cloud Messaging'],
    url: 'https://epicestate.web.id',
  },
]);

const getStackClasses = (stackName) => {
  const name = stackName.toLowerCase();

  const baseClasses =
    'text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded ';

  switch (true) {
    case name.includes('laravel'):
      return `${baseClasses} bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300`;

    case name.includes('vue'):
    case name.includes('nuxt'):
    case name.includes('node'):
      return `${baseClasses} bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-300`;

    case name.includes('bootstrap'):
    case name.includes('tailwind'):
    case name.includes('php'):
      return `${baseClasses} bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300`;

    case name.includes('react'):
    case name.includes('mysql'):
    case name.includes('jquery'):
      return `${baseClasses} bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300`;

    case name.includes('firebase'):
      return `${baseClasses} bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-300`;

    default:
      return `${baseClasses} bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300`;
  }
};
</script>
