<template>
  <footer class="site-footer">
    <section class="contact page-frame" aria-labelledby="contact-title">
      <div class="contact-body">
        <h2 id="contact-title" class="contact-title">
          {{ t('contact_title') }}
        </h2>
        <p class="contact-desc">{{ t('contact_desc') }}</p>
        <div class="contact-actions">
          <a href="mailto:andrealfian.work@gmail.com" class="btn-primary">
            {{ t('btn_email') }} <UIArrow />
          </a>
          <a href="mailto:andrealfian.work@gmail.com" class="link-quiet">
            andrealfian.work@gmail.com
          </a>
        </div>
      </div>
    </section>

    <div class="page-frame">
      <div class="footer-base">
      <p class="footer-copy">&copy; {{ year }} Alfian Andre Ramadhan</p>
      <div class="footer-links">
        <a
          href="https://linkedin.com/in/alfianandre"
          target="_blank"
          rel="noopener"
          class="footer-link"
          >LinkedIn</a
        >
        <a
          href="https://github.com/andrealfian420"
          target="_blank"
          rel="noopener"
          class="footer-link"
          >GitHub</a
        >
        <a href="mailto:andrealfian.work@gmail.com" class="footer-link"
          >Email</a
        >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { t } = useI18n();
const year = new Date().getFullYear();
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--color-rule);
}

.contact {
  padding-top: var(--space-24);
  padding-bottom: var(--space-24);
}

.contact-title {
  margin: 0;
  font-size: var(--text-title);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--color-ink);
  max-width: 22ch;
  text-wrap: balance;
}

.contact-desc {
  margin: var(--space-5) 0 0;
  font-size: var(--text-lg);
  color: var(--color-ink-muted);
  max-width: 52ch;
}

.contact-actions {
  margin-top: var(--space-8);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4) var(--space-6);
}

.footer-base {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  flex-wrap: wrap;
  padding-top: var(--space-6);
  padding-bottom: var(--space-8);
  border-top: 1px solid var(--color-rule);
}

.footer-copy {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-ink-subtle);
}

.footer-links {
  display: flex;
  gap: var(--space-6);
}

.footer-link {
  font-size: var(--text-sm);
  color: var(--color-ink-subtle);
  text-decoration: none;
  transition: color var(--dur-fast) var(--ease-out);
}

.footer-link:hover {
  color: var(--color-ink);
}

</style>
