<template>
  <footer
    class="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-12"
  >
    <div
      class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"
    >
      <div class="text-center md:text-left">
        <p class="text-sm text-gray-500 dark:text-slate-500 mt-2">
          &copy; {{ year }} Alfian Andre Ramadhan.
        </p>
      </div>
      <div class="flex space-x-6">
        <a
          href="https://linkedin.com/in/alfianandre"
          target="_blank"
          class="text-gray-400 dark:text-slate-500 hover:text-gray-900 dark:hover:text-slate-300"
          >LinkedIn</a
        >
        <a
          href="https://github.com/andrealfian420"
          target="_blank"
          class="text-gray-400 dark:text-slate-500 hover:text-gray-900 dark:hover:text-slate-300"
          >GitHub</a
        >
        <a
          href="mailto:andrealfian.work@gmail.com"
          class="text-gray-400 dark:text-slate-500 hover:text-gray-900 dark:hover:text-slate-300"
          >Email</a
        >
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
