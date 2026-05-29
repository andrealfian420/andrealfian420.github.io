<template>
  <div class="relative">
    <button
      @click="isLangOpen = !isLangOpen"
      class="lang-btn"
      :aria-expanded="isLangOpen"
      aria-haspopup="listbox"
    >
      <div class="flag-wrap">
        <svg
          v-if="locale === 'en'"
          viewBox="0 0 60 30"
          class="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <clipPath id="s"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
          </clipPath>
          <g clip-path="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
            <path
              d="M0,0 L60,30 M60,0 L0,30"
              clip-path="url(#t)"
              stroke="#C8102E"
              stroke-width="4"
            />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
          </g>
        </svg>
        <svg
          v-else
          viewBox="0 0 3 2"
          class="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="3" height="2" fill="#FFFFFF" />
          <rect width="3" height="1" fill="#DC1F2F" />
        </svg>
      </div>

      <svg
        class="chevron"
        :class="{ 'rotate-180': isLangOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <div v-if="isLangOpen" class="lang-dropdown" role="listbox">
      <button
        @click="changeLang('en')"
        class="lang-option"
        role="option"
        :aria-selected="locale === 'en'"
      >
        <div class="flag-wrap">
          <svg
            viewBox="0 0 60 30"
            class="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <clipPath id="s2"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
            <clipPath id="t2">
              <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
            </clipPath>
            <g clip-path="url(#s2)">
              <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
              <path
                d="M0,0 L60,30 M60,0 L0,30"
                stroke="#fff"
                stroke-width="6"
              />
              <path
                d="M0,0 L60,30 M60,0 L0,30"
                clip-path="url(#t2)"
                stroke="#C8102E"
                stroke-width="4"
              />
              <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
              <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
            </g>
          </svg>
        </div>
        <span>English</span>
        <svg
          v-if="locale === 'en'"
          class="check-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>

      <button
        @click="changeLang('id')"
        class="lang-option"
        role="option"
        :aria-selected="locale === 'id'"
      >
        <div class="flag-wrap">
          <svg
            viewBox="0 0 3 2"
            class="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="3" height="2" fill="#FFFFFF" />
            <rect width="3" height="1" fill="#DC1F2F" />
          </svg>
        </div>
        <span>Indonesia</span>
        <svg
          v-if="locale === 'id'"
          class="check-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
    </div>

    <div
      v-if="isLangOpen"
      @click="isLangOpen = false"
      class="fixed inset-0 z-40 bg-transparent cursor-default"
    ></div>
  </div>
</template>

<script setup>
const { locale, setLocale, t } = useI18n();
const isLangOpen = ref(false);

const changeLang = (newLocale) => {
  setLocale(newLocale);
  isLangOpen.value = false;
};
</script>

<style scoped>
.lang-btn {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-ink-muted);
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition:
    color var(--dur-fast) var(--ease-out),
    background-color var(--dur-fast) var(--ease-out);
}

.lang-btn:hover {
  color: var(--color-ink);
  background-color: var(--color-paper-3);
}

.flag-wrap {
  width: 1.375rem;
  height: 0.9375rem;
  border-radius: 2px;
  overflow: hidden;
  flex-shrink: 0;
  outline: 1px solid color-mix(in oklch, var(--color-ink) 12%, transparent);
}

.chevron {
  width: 0.875rem;
  height: 0.875rem;
  color: var(--color-ink-subtle);
  transition: transform var(--dur-fast) var(--ease-out);
}

.lang-dropdown {
  position: absolute;
  right: 0;
  top: calc(100% + 6px);
  z-index: 50;
  min-width: 9rem;
  background-color: var(--color-paper);
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-md);
  padding: var(--space-1) 0;
  box-shadow: 0 4px 16px color-mix(in oklch, var(--color-ink) 8%, transparent);
}

.lang-option {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem var(--space-4);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-ink-muted);
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  transition:
    color var(--dur-fast) var(--ease-out),
    background-color var(--dur-fast) var(--ease-out);
}

.lang-option:hover {
  color: var(--color-ink);
  background-color: var(--color-paper-2);
}

.check-icon {
  width: 0.875rem;
  height: 0.875rem;
  margin-left: auto;
  color: var(--color-accent);
  flex-shrink: 0;
}
</style>
