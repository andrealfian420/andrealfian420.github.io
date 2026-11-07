<template>
  <!-- Both icons are rendered; CSS picks one from the `.dark` class that
       color-mode sets before first paint, so prerendered HTML never shows the wrong icon. -->
  <button @click="toggleTheme" class="theme-btn" :aria-label="t('theme_toggle')">
    <svg
      class="icon icon-sun"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>

    <svg
      class="icon icon-moon"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
      ></path>
    </svg>
  </button>
</template>

<script setup>
const { t } = useI18n();
const colorMode = useColorMode();

// Read the resolved mode, not the preference: with preference 'system' on a
// dark OS, toggling off the preference would set 'dark' and change nothing.
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<style scoped>
.icon-sun {
  display: none;
}

/* Whole selector inside :global(): Vue drops anything after a bare
   `:global(.dark)`, which would compile to `.dark { display: none }`. */
:global(.dark .theme-btn .icon-sun) {
  display: block;
}

:global(.dark .theme-btn .icon-moon) {
  display: none;
}

.theme-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.125rem;
  height: 2.125rem;
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  color: var(--color-ink-muted);
  cursor: pointer;
  transition:
    color var(--dur-fast) var(--ease-out),
    background-color var(--dur-fast) var(--ease-out);
}

.theme-btn:hover {
  color: var(--color-ink);
  background-color: var(--color-paper-3);
}

.icon {
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
}
</style>
