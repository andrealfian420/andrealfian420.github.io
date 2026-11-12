<template>
  <header class="site-header">
    <div class="header-inner page-frame">
      <NuxtLink :to="localePath('/')" class="wordmark">
        &lt;Andre /&gt;
      </NuxtLink>

      <nav class="site-nav">
        <a href="#works" class="nav-link">{{ t('nav_portfolio') }}</a>
        <a href="#experience" class="nav-link">{{ t('nav_experience') }}</a>
        <a href="#stack" class="nav-link">{{ t('nav_stack') }}</a>
      </nav>

      <div class="header-end">
        <UILangSwitcher />
        <UIThemeToggle />
        <a href="mailto:andrealfian.work@gmail.com" class="contact-cta">
          <span class="cta-long">{{ t('btn_contact') }}</span>
          <span class="cta-short">Email</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid var(--color-rule);
  background-color: var(--color-paper);
}

.header-inner {
  height: var(--header-h);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: var(--space-6);
}

.wordmark {
  justify-self: start;
  font-size: var(--text-base);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--color-ink);
  text-decoration: none;
  white-space: nowrap;
  transition: color var(--dur-fast) var(--ease-out);
}

.wordmark:hover {
  color: var(--color-accent);
}

.site-nav {
  display: flex;
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
  justify-self: end;
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

/* A quiet text link: the hero's orange button stays the only primary. */
.contact-cta {
  margin-left: var(--space-4);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-ink);
  text-decoration: underline;
  text-decoration-color: var(--color-rule-strong);
  white-space: nowrap;
}

.contact-cta:hover {
  color: var(--color-accent);
}

/* Mobile: no nav, so the sticky header carries contact as a compact orange
   button, reachable from anywhere on the page. */
@media (max-width: 767px) {
  .header-inner {
    grid-template-columns: auto 1fr;
    gap: var(--space-3);
  }

  .site-nav {
    display: none;
  }

  .contact-cta {
    margin-left: var(--space-2);
    padding: 0.45rem 0.85rem;
    border-radius: var(--radius-sm);
    background-color: var(--color-accent);
    color: var(--color-on-accent);
    text-decoration: none;
    transition: background-color var(--dur-fast) var(--ease-out);
  }

  .contact-cta:hover {
    background-color: var(--color-accent-hover);
    color: var(--color-on-accent);
  }
}

.cta-short {
  display: none;
}

/* Smallest phones: the full label no longer fits beside the switchers. */
@media (max-width: 379px) {
  .cta-long {
    display: none;
  }

  .cta-short {
    display: inline;
  }
}
</style>
