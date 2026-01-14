<template>
  <header
    class="sticky top-0 z-50 colors border-b bg-white/80 backdrop-blur-md border-gray-200 dark:bg-slate-900/90 dark:border-slate-800"
  >
    <div class="flex items-center justify-between h-16 px-6 mx-auto max-w-5xl">
      <NuxtLink
        :to="`/${locale === 'en' ? '' : locale}`"
        class="text-xl font-bold tracking-tight text-gray-900 hover:text-blue-600 dark:text-slate-100 dark:hover:text-blue-400"
      >
        Alfian Andre Ramadhan
      </NuxtLink>

      <nav class="hidden space-x-8 text-sm font-medium md:flex">
        <a
          href="#about"
          class="text-gray-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
        >
          {{ t('nav_about') }}
        </a>
        <a
          href="#stack"
          class="text-gray-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >{{ t('nav_stack') }}</a
        >
        <a
          href="#projects"
          class="text-gray-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >{{ t('nav_portfolio') }}</a
        >
      </nav>

      <div class="flex items-center md:gap-3">
        <UILangSwitcher />
        <UIThemeToggle />

        <a
          href="mailto:andrealfian.work@gmail.com"
          class="hidden px-4 py-2 text-sm font-medium text-white rounded bg-gray-900 hover:bg-gray-700 md:inline-flex dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white/90"
        >
          {{ t('btn_contact') }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
const { locale, t } = useI18n();
</script>
