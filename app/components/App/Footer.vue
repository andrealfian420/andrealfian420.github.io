<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <p class="footer-copy">&copy; {{ year }} Alfian Andre Ramadhan.</p>
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
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--color-rule);
  padding: var(--space-8) 0;
}

.footer-inner {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  flex-wrap: wrap;
}

.footer-copy {
  font-size: var(--text-sm);
  color: var(--color-ink-subtle);
  margin: 0;
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
