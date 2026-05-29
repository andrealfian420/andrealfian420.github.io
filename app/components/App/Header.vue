<template>
  <header class="site-header">
    <div class="header-inner">
      <NuxtLink :to="`/${locale === 'en' ? '' : locale}`" class="wordmark">
        &lt;Andre /&gt;
      </NuxtLink>

      <nav class="site-nav hidden md:flex">
        <a href="#about" class="nav-link">{{ t('nav_about') }}</a>
        <a href="#stack" class="nav-link">{{ t('nav_stack') }}</a>
        <a href="#projects" class="nav-link">{{ t('nav_portfolio') }}</a>
      </nav>

      <div class="header-end">
        <UILangSwitcher />
        <UIThemeToggle />
        <a
          href="mailto:andrealfian.work@gmail.com"
          class="contact-cta hidden md:inline-flex"
        >
          {{ t('btn_contact') }} →
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
const { locale, t } = useI18n();
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid var(--color-rule);
  background-color: color-mix(in oklch, var(--color-paper) 88%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.header-inner {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 var(--space-6);
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
}

.wordmark {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-ink);
  text-decoration: none;
  letter-spacing: 0.01em;
  flex-shrink: 0;
  transition: color var(--dur-fast) var(--ease-out);
}

.wordmark:hover {
  color: var(--color-accent);
}

.site-nav {
  align-items: center;
  gap: var(--space-8);
}

.nav-link {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-ink-muted);
  text-decoration: none;
  transition: color var(--dur-fast) var(--ease-out);
}

.nav-link:hover {
  color: var(--color-ink);
}

.header-end {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.contact-cta {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-ink-muted);
  text-decoration: none;
  padding: 0.375rem var(--space-4);
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-md);
  white-space: nowrap;
  align-items: center;
  transition:
    color var(--dur-fast) var(--ease-out),
    border-color var(--dur-fast) var(--ease-out);
}

.contact-cta:hover {
  color: var(--color-ink);
  border-color: var(--color-ink-muted);
}
</style>
