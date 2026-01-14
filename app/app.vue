<template>
  <div>
    <NuxtLoadingIndicator color="#2563eb" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Alfian Andre Ramadhan - Personal Portfolio Website',
  meta: [
    {
      name: 'description',
      content:
        'Welcome to the portfolio of Alfian Andre Ramadhan, a passionate web developer specializing in modern web technologies and innovative solutions.',
    },
    {
      name: 'keywords',
      content:
        'Alfian Andre Ramadhan, web developer, portfolio, JavaScript, Vue.js, Nuxt.js, Tailwind CSS, frontend development, backend development, full-stack developer',
    },
  ],
  htmlAttrs: {
    class: 'scroll-smooth',
  },
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
});
</script>
