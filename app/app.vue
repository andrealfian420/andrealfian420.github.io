<template>
  <div>
    <NuxtLoadingIndicator color="#2563eb" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const { t } = useI18n();
const i18nHead = useLocaleHead();

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap';

useHead(() => ({
  htmlAttrs: {
    ...i18nHead.value.htmlAttrs,
    class: 'scroll-smooth',
  },
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: FONTS_URL },
    ...(i18nHead.value.link || []),
  ],
  meta: [...(i18nHead.value.meta || [])],
}));

useSeoMeta({
  title: () => t('meta_title'),
  description: () => t('meta_desc'),
  ogTitle: () => t('meta_title'),
  ogDescription: () => t('meta_desc'),
  ogType: 'website',
  // Crawlers need an absolute URL; regenerate og.jpg (1200x630) if the hero changes.
  ogImage: 'https://andrealfian420.github.io/og.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: () => t('meta_title'),
  twitterCard: 'summary_large_image',
});
</script>
