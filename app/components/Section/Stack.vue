<template>
  <section
    id="stack"
    class="py-24 px-6 border-b border-gray-200 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/50"
  >
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <h2
          class="text-3xl font-bold text-gray-900 dark:text-slate-100 tracking-tight"
        >
          Selected Technologies
        </h2>
        <p class="text-gray-500 dark:text-slate-400 mt-3 text-lg">
          Best-in-class tools for performance, security, and scalability.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:border-red-200 dark:hover:border-red-900/50"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-slate-100">
              Laravel Ecosystem
            </h3>
          </div>
          <p class="text-gray-600 dark:text-slate-400 mb-8 leading-relaxed">
            Specializing in building secure and maintainable enterprise-scale
            applications (Monolith).
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              class="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded-md text-sm font-medium"
              >PHP 8.2</span
            >
            <span
              class="px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-md text-sm font-medium"
              >Laravel 11</span
            >
            <span
              class="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-md text-sm font-medium"
              >Inertia.js</span
            >
            <span
              class="px-3 py-1 bg-magenta-50 dark:bg-pink-900/20 text-magenta-700 dark:text-pink-300 rounded-md text-sm font-medium"
              >Jquery</span
            >
            <span
              class="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md text-sm font-medium"
              >MySQL</span
            >
            <span
              class="px-3 py-1 bg-blue-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-md text-sm font-medium"
              >PostgreSQL</span
            >
          </div>
        </div>

        <div
          class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:border-green-200 dark:hover:border-green-900/50"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-slate-100">
              JS & Universal Apps
            </h3>
          </div>
          <p class="text-gray-600 dark:text-slate-400 mb-8 leading-relaxed">
            Building modern interactive interfaces (SPA) and cross-platform
            applications for Web & Mobile.
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              class="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-md text-sm font-medium"
              >Vue.js 3</span
            >
            <span
              class="px-3 py-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 rounded-md text-sm font-medium"
              >Node.js</span
            >
            <span
              class="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded-md text-sm font-medium"
              >Express</span
            >
            <span
              class="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md text-sm font-medium"
              >MySQL</span
            >
            <span
              class="px-3 py-1 bg-blue-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-md text-sm font-medium"
              >PostgreSQL</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
