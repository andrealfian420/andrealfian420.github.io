<template>
  <div class="gallery">
    <button
      type="button"
      class="gallery-main"
      :aria-label="t('gallery_open', { caption: caption(0) })"
      @click="open(0)"
    >
      <NuxtImg
        :src="src(0)"
        :alt="caption(0)"
        width="1920"
        height="1080"
        sizes="xs:100vw md:768px"
        loading="lazy"
        class="gallery-img"
      />
    </button>

    <ul class="filmstrip">
      <li v-for="(shot, i) in work.shots" :key="shot">
        <button
          type="button"
          class="thumb"
          :aria-label="t('gallery_open', { caption: caption(i) })"
          @click="open(i)"
        >
          <NuxtImg
            :src="src(i)"
            alt=""
            width="192"
            height="108"
            loading="lazy"
            class="gallery-img"
          />
        </button>
      </li>
    </ul>

    <!-- Every slide is server-rendered (no v-if) so `nuxt generate` finds the
         /_ipx/ URLs and writes them; lazy images in a closed dialog are not
         fetched until it opens. -->
    <dialog
      ref="dialog"
      class="lightbox"
      :aria-label="t('gallery_label', { title: work.title })"
      @keydown.left.prevent="go(-1)"
      @keydown.right.prevent="go(1)"
      @close="restoreFocus"
    >
      <div class="lightbox-bar">
        <p class="lightbox-count figures">
          {{ index + 1 }} / {{ work.shots.length }}
        </p>
        <button
          type="button"
          class="lightbox-btn"
          :aria-label="t('gallery_close')"
          @click="dialog.close()"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M3 3l10 10M13 3L3 13" stroke-linecap="square" />
          </svg>
        </button>
      </div>

      <div ref="track" class="lightbox-track" @scroll.passive="syncIndex">
        <figure v-for="(shot, i) in work.shots" :key="shot" class="lightbox-slide">
          <NuxtImg
            :src="src(i)"
            :alt="caption(i)"
            width="1600"
            height="900"
            densities="x1"
            loading="lazy"
            class="lightbox-img"
          />
        </figure>
      </div>

      <div class="lightbox-foot">
        <button
          type="button"
          class="lightbox-btn lightbox-btn--prev"
          :aria-label="t('gallery_prev')"
          :disabled="index === 0"
          @click="go(-1)"
        >
          <UIArrow />
        </button>
        <p class="lightbox-caption" aria-live="polite">{{ caption(index) }}</p>
        <button
          type="button"
          class="lightbox-btn"
          :aria-label="t('gallery_next')"
          :disabled="index === last"
          @click="go(1)"
        >
          <UIArrow />
        </button>
      </div>
    </dialog>
  </div>
</template>

<script setup>
const props = defineProps({ work: { type: Object, required: true } });
const { t } = useI18n();

const dialog = ref(null);
const track = ref(null);
const index = ref(0);
const last = computed(() => props.work.shots.length - 1);
let opener = null;

const src = (i) => shotSrc(props.work.slug, props.work.shots[i]);
const caption = (i) => t(`projects.${props.work.slug}.shots.${props.work.shots[i]}`);

// Slides swap instantly (DESIGN.md: nothing slides); swipe uses native scroll-snap.
const show = (i) => {
  index.value = i;
  track.value.scrollTo({ left: i * track.value.clientWidth, behavior: 'instant' });
};

const open = (i) => {
  opener = document.activeElement;
  dialog.value.showModal();
  show(i);
};

const go = (step) => show(Math.min(last.value, Math.max(0, index.value + step)));

const syncIndex = () => {
  index.value = Math.round(track.value.scrollLeft / track.value.clientWidth);
};

const restoreFocus = () => opener?.focus();
</script>

<style scoped>
.gallery {
  margin-top: var(--space-8);
}

.gallery-main,
.thumb {
  display: block;
  width: 100%;
  padding: 0;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid var(--color-rule);
  background-color: var(--color-paper-2);
  cursor: zoom-in;
  transition: border-color var(--dur-fast) var(--ease-out);
}

.gallery-main {
  border-radius: var(--radius);
}

.gallery-main:hover,
.thumb:hover {
  border-color: var(--color-rule-strong);
}

.gallery-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

/* Six fixed slots so thumbnails keep one size whether a work has 3 or 6. */
.filmstrip {
  list-style: none;
  margin: var(--space-3) 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(6, minmax(4.5rem, 1fr));
  gap: var(--space-2);
  overflow-x: auto;
  scrollbar-width: none;
}

.thumb {
  border-radius: var(--radius-sm);
}

/* Full-screen, flat: solid Paper, hairlines, no backdrop blur or shadow. */
.lightbox {
  width: 100vw;
  height: 100dvh;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: var(--color-paper);
  color: var(--color-ink);
}

.lightbox[open] {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
}

.lightbox::backdrop {
  background-color: var(--color-paper);
}

.lightbox-bar,
.lightbox-foot {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-3) var(--page-pad);
}

.lightbox-bar {
  justify-content: space-between;
  border-bottom: 1px solid var(--color-rule);
}

.lightbox-foot {
  border-top: 1px solid var(--color-rule);
}

.lightbox-count {
  margin: 0;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-ink-subtle);
}

.lightbox-track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
}

.lightbox-track::-webkit-scrollbar {
  display: none;
}

/* Flex with a definite height so the image's max-height: 100% resolves
   and it fits between the bars instead of overflowing under them. */
.lightbox-slide {
  flex: 0 0 100%;
  min-width: 0;
  height: 100%;
  margin: 0;
  padding: var(--space-6) var(--page-pad);
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
}

.lightbox-img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border: 1px solid var(--color-rule);
  border-radius: var(--radius);
}

.lightbox-caption {
  flex: 1;
  margin: 0;
  text-align: center;
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-ink);
  text-wrap: balance;
}

.lightbox-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  padding: 0;
  border: 0;
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--color-ink);
  font-size: 1.125rem;
  cursor: pointer;
  transition: background-color var(--dur-fast) var(--ease-out);
}

.lightbox-btn svg {
  width: 1em;
  height: 1em;
}

.lightbox-btn:hover:not(:disabled) {
  background-color: var(--color-paper-2);
}

.lightbox-btn:disabled {
  color: var(--color-rule-strong);
  cursor: default;
}

.lightbox-btn--prev :deep(.arrow) {
  transform: scaleX(-1);
}

/* Page behind the open lightbox must not scroll. */
:global(html:has(dialog.lightbox[open])) {
  overflow: hidden;
}
</style>
