<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  sections: {
    type: Array,
    default: () => [],
  },
  topOffset: {
    type: Number,
    default: 100,
  },
});

const activeSectionId = ref(props.sections[0]?.id ?? "");
const scrollProgress = ref(0);

const activeIndex = computed(() =>
  props.sections.findIndex((section) => section.id === activeSectionId.value),
);

const progressHeight = computed(() => {
  if (props.sections.length <= 1 || activeIndex.value < 0) {
    return "0%";
  }

  return `${(activeIndex.value / (props.sections.length - 1)) * 100}%`;
});

const handleScroll = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;
  const scrollableHeight = Math.max(documentHeight - windowHeight, 1);
  scrollProgress.value = Math.min((scrollTop / scrollableHeight) * 100, 100);

  let currentActive = props.sections[0]?.id ?? "";

  props.sections.forEach((section) => {
    const element = document.getElementById(section.id);
    if (!element) return;

    const threshold = props.topOffset + 24;
    if (element.getBoundingClientRect().top <= threshold) {
      currentActive = section.id;
    }
  });

  activeSectionId.value = currentActive;
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - props.topOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <aside
    class="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
    aria-label="Page timeline"
  >
    <div class="relative">
      <div class="absolute left-[7px] top-0 h-full w-0.5 bg-stone-300" />
      <div
        class="absolute left-[7px] top-0 w-0.5 bg-gradient-to-b from-red-900 via-red-700 to-red-500 transition-[height] duration-300 ease-out"
        :style="{ height: progressHeight }"
      />

      <div class="relative grid gap-8 py-2">
        <button
          v-for="(section, index) in sections"
          :key="section.id"
          class="flex cursor-pointer items-center gap-2.5 border-0 bg-transparent p-0"
          type="button"
          @click="scrollToSection(section.id)"
        >
          <span
            class="h-3.5 w-3.5 rounded-full border-2 border-slate-300 bg-white transition-all duration-200"
            :class="[
              section.id === activeSectionId || index < activeIndex
                ? 'border-red-900 bg-red-900'
                : '',
              section.id === activeSectionId
                ? 'scale-110 shadow-[0_0_0_6px_rgba(127,29,29,0.18)]'
                : '',
            ]"
          />

          <span
            class="grid h-[26px] w-[26px] place-items-center rounded-full bg-stone-100 text-xs font-semibold text-stone-400 transition-all duration-200"
            :class="[
              index < activeIndex ? 'bg-red-100 text-red-900' : '',
              section.id === activeSectionId
                ? 'scale-105 bg-red-900 text-white'
                : '',
            ]"
          >
            {{ section.number }}
          </span>
          {{sections[index].title}}
        </button>
      </div>
    </div>
  </aside>
</template>
