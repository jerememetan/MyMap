<script setup>
import { computed, useAttrs } from "vue";

const props = defineProps({
  latitude: {
    type: Number,
    default: null,
  },
  longitude: {
    type: Number,
    default: null,
  },
  zoom: {
    type: Number,
    default: 14,
  },
  title: {
    type: String,
    default: "Map preview",
  },
  subtitle: {
    type: String,
    default: "No map data loaded yet",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  minHeight: {
    type: [String, Number],
    default: 240,
  },
});

const attrs = useAttrs();

const passthroughAttrs = computed(() => {
  const cloned = { ...attrs };
  delete cloned.class;
  delete cloned.style;
  return cloned;
});

const resolvedMinHeight = computed(() => {
  if (typeof props.minHeight === "number") {
    return `${props.minHeight}px`;
  }

  return props.minHeight;
});

const hasCoordinates = computed(
  () => Number.isFinite(props.latitude) && Number.isFinite(props.longitude),
);

const embedSrc = computed(() => {
  if (!hasCoordinates.value) {
    return "";
  }

  // Single pin view (no API key needed).
  return `https://maps.google.com/maps?q=${props.latitude},${props.longitude}&z=${props.zoom}&output=embed`;
});

const containerBackground =
  "radial-gradient(circle at 20% 10%, rgba(56, 189, 248, 0.12), transparent 45%), radial-gradient(circle at 85% 75%, rgba(16, 185, 129, 0.12), transparent 40%), linear-gradient(160deg, #f8fafc 0%, #eef2ff 100%)";

const gridBackground = {
  backgroundImage:
    "linear-gradient(to right, rgba(148, 163, 184, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.25) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};
</script>

<template>
  <section
    class="relative grid place-items-center overflow-hidden rounded-[14px] border border-[var(--border)] p-5 text-slate-900"
    :class="[{ 'animate-pulse': loading }, attrs.class]"
    :style="[{ minHeight: resolvedMinHeight, background: containerBackground }, attrs.style]"
    v-bind="passthroughAttrs"
  >
    <iframe
      v-if="hasCoordinates"
      class="absolute inset-0 h-full w-full border-0"
      :src="embedSrc"
      title="Google Maps location"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />

    <template v-else>
      <div class="absolute inset-0 opacity-45" :style="gridBackground" aria-hidden="true" />

      <div
        class="relative grid h-[52px] w-[52px] place-items-center rounded-full bg-red-500/20 shadow-[0_0_0_10px_rgba(239,68,68,0.09)]"
        aria-hidden="true"
      >
        <span class="h-[14px] w-[14px] rounded-full bg-red-500" />
      </div>
    </template>

    <div
      v-if="title != null && subtitle != null"
      class="pointer-events-none absolute left-4 top-4 grid max-w-[min(72%,320px)] gap-0.5 rounded-[10px] border border-slate-400/35 bg-white/80 px-[10px] py-2 text-left backdrop-blur-[2px]"
    >
      <p class="m-0 font-semibold text-slate-900">{{ title }}</p>
      <p class="m-0 text-xs text-slate-600">{{ subtitle }}</p>
      <slot />
    </div>
  </section>
</template>
