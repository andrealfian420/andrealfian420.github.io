<template>
  <header
    class="sticky top-0 z-50 colors border-b bg-white/80 backdrop-blur-md border-gray-200 dark:bg-slate-900/90 dark:border-slate-800"
  >
    <div class="flex items-center justify-between h-16 px-6 mx-auto max-w-5xl">
      <NuxtLink
        to="#"
        class="text-xl font-bold tracking-tight  text-gray-900 hover:text-blue-600 dark:text-slate-100 dark:hover:text-blue-400"
      >
        Alfian Andre Ramadhan
      </NuxtLink>

      <nav class="hidden space-x-8 text-sm font-medium md:flex">
        <a
          href="#about"
          class=" text-gray-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >About</a
        >
        <a
          href="#stack"
          class=" text-gray-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >Tech Stack</a
        >
        <a
          href="#projects"
          class=" text-gray-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >Portfolio</a
        >
      </nav>

      <div class="flex items-center gap-4">
        <button
          @click="toggleTheme"
          class="p-2.5 text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-slate-400 dark:hover:bg-slate-800 dark:focus:ring-slate-700 cursor-pointer"
        >
          <svg
            v-if="colorMode.value === 'dark'"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>

          <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
        </button>

        <a
          href="mailto:andrealfian.work@gmail.com"
          class="hidden px-4 py-2 text-sm font-medium text-white  rounded bg-gray-900 hover:bg-gray-700 md:inline-flex dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white/90"
        >
          Contact Me
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>
