<template>
  <div class="relative">
    <button
      @click="isLangOpen = !isLangOpen"
      class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800 transition-all focus:outline-none cursor-pointer"
    >
      <div
        class="relative w-6 h-4 rounded-sm shadow-sm overflow-hidden ring-1 ring-black/10 dark:ring-white/10"
      >
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
        class="w-4 h-4 text-gray-500 transition-transform duration-200"
        :class="isLangOpen ? 'rotate-180' : ''"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <div
      v-if="isLangOpen"
      class="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 py-2 z-50 transform origin-top-right transition-all cursor-pointer"
    >
      <button
        @click="changeLang('en')"
        class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors text-left group cursor-pointer"
      >
        <div
          class="relative w-6 h-4 rounded-sm shadow-sm overflow-hidden ring-1 ring-black/10 dark:ring-white/10 group-hover:shadow-md transition-shadow"
        >
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
          class="w-4 h-4 ml-auto text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
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
        class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors text-left group cursor-pointer"
      >
        <div
          class="relative w-6 h-4 rounded-sm shadow-sm overflow-hidden ring-1 ring-black/10 dark:ring-white/10 group-hover:shadow-md transition-shadow"
        >
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
          class="w-4 h-4 ml-auto text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
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
