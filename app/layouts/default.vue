<template>
  <div
    class="min-h-screen font-inter bg-gray-50 text-gray-700 selection:bg-blue-100 selection:text-blue-900 dark:bg-slate-900 dark:text-slate-300 dark:selection:bg-blue-900 dark:selection:text-blue-100"
  >
    <slot />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>
