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
          class="group bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/30 flex flex-col h-full"
        >
          <div
            class="bg-gray-100 dark:bg-slate-700 h-52 overflow-hidden relative shrink-0"
          >
            <NuxtImg
              src="/img/sinau.webp"
              alt="Sinauyuk Project"
              class="w-full h-full object-cover group-hover:scale-105 opacity-90 group-hover:opacity-100 transform-gpu !transition-all !duration-500 ease-in-out"
            />
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <div class="mb-4 flex gap-2">
              <span
                class="text-[10px] uppercase tracking-wider font-bold bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-2 py-1 rounded"
                >Laravel</span
              >
              <span
                class="text-[10px] uppercase tracking-wider font-bold bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 px-2 py-1 rounded"
                >Vue 2</span
              >
              <span
                class="text-[10px] uppercase tracking-wider font-bold bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 px-2 py-1 rounded"
                >Bootstrap 5</span
              >
            </div>
            <h3
              class="text-lg font-bold text-gray-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400"
            >
              Sinauyuk!
            </h3>
            <p
              class="text-gray-600 dark:text-slate-400 text-sm mb-6 leading-relaxed"
            >
              {{ t('project_sinau_desc') }}
            </p>
            <a
              href="https://sinauyuk.id"
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

        <div
          class="group bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/30 flex flex-col h-full"
        >
          <div
            class="bg-gray-100 dark:bg-slate-700 h-52 overflow-hidden relative shrink-0"
          >
            <NuxtImg
              src="/img/festivia.webp"
              alt="Festivia Project"
              class="w-full h-full object-cover group-hover:scale-105 opacity-90 group-hover:opacity-100 transform-gpu !transition-all !duration-500 ease-in-out"
            />
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <div class="mb-4 flex gap-2">
              <span
                class="text-[10px] uppercase tracking-wider font-bold bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-2 py-1 rounded"
                >Laravel</span
              >
              <span
                class="text-[10px] uppercase tracking-wider font-bold bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 px-2 py-1 rounded"
                >Bootstrap 5</span
              >
              <span
                class="text-[10px] uppercase tracking-wider font-bold bg-magenta-50 dark:bg-pink-900/20 text-magenta-600 dark:text-pink-300 px-2 py-1 rounded"
                >Jquery</span
              >
            </div>
            <h3
              class="text-lg font-bold text-gray-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400"
            >
              Festivia
            </h3>
            <p
              class="text-gray-600 dark:text-slate-400 text-sm mb-6 leading-relaxed"
            >
              {{ t('project_festivia_desc') }}
            </p>
            <a
              href="https://festivia.id"
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

        <div
          class="group bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/30 flex flex-col h-full"
        >
          <div
            class="bg-gray-100 dark:bg-slate-700 h-52 overflow-hidden relative shrink-0"
          >
            <NuxtImg
              src="/img/isicam.webp"
              alt="Isicam Project"
              class="w-full h-full object-cover group-hover:scale-105 opacity-90 group-hover:opacity-100 transform-gpu !transition-all !duration-500 ease-in-out"
            />
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <div class="mb-4 flex flex-wrap gap-2">
              <span
                class="text-[10px] uppercase tracking-wider font-bold bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-2 py-1 rounded"
                >Laravel</span
              >
              <span
                class="text-[10px] uppercase tracking-wider font-bold bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 px-2 py-1 rounded"
                >Bootstrap 5</span
              >
              <span
                class="text-[10px] uppercase tracking-wider font-bold bg-magenta-50 dark:bg-pink-900/20 text-magenta-600 dark:text-pink-300 px-2 py-1 rounded"
                >Jquery</span
              >
            </div>
            <h3
              class="text-lg font-bold text-gray-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400"
            >
              Isicam
            </h3>
            <p
              class="text-gray-600 dark:text-slate-400 text-sm mb-6 leading-relaxed"
            >
              {{ t('project_isicam_desc') }}
            </p>
            <a
              href="https://isicam.id"
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

        <div
          class="group bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/30 flex flex-col h-full"
        >
          <div
            class="bg-gray-100 dark:bg-slate-700 h-52 overflow-hidden relative shrink-0"
          >
            <NuxtImg
              src="/img/epic.webp"
              alt="Epic Estate Project"
              class="w-full h-full object-cover group-hover:scale-105 opacity-90 group-hover:opacity-100 transform-gpu !transition-all !duration-500 ease-in-out"
            />
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <div class="mb-4 flex flex-wrap gap-2">
              <span
                class="text-[10px] uppercase tracking-wider font-bold bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-2 py-1 rounded"
                >Laravel</span
              >
              <span
                class="text-[10px] uppercase tracking-wider font-bold bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 px-2 py-1 rounded"
                >Bootstrap 5</span
              >
              <span
                class="text-[10px] uppercase tracking-wider font-bold bg-magenta-50 dark:bg-pink-900/20 text-magenta-600 dark:text-pink-300 px-2 py-1 rounded"
                >Jquery</span
              >
              <span
                class="text-[10px] uppercase tracking-wider font-bold bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-300 px-2 py-1 rounded"
                >Firebase Cloud Messaging</span
              >
            </div>
            <h3
              class="text-lg font-bold text-gray-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400"
            >
              Epic Estate
            </h3>
            <p
              class="text-gray-600 dark:text-slate-400 text-sm mb-6 leading-relaxed"
            >
              {{ t('project_epic_desc') }}
            </p>
            <a
              href="https://epicestate.web.id"
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
</script>
