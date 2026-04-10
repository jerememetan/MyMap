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
</script>

<template>
  <section
    class="map-placeholder"
    :class="[{ 'is-loading': loading }, attrs.class]"
    :style="[{ minHeight: resolvedMinHeight }, attrs.style]"
    v-bind="passthroughAttrs"
  >
    <iframe
      v-if="hasCoordinates"
      class="map-frame"
      :src="embedSrc"
      title="Google Maps location"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />

    <template v-else>
      <div class="map-grid" aria-hidden="true" />

      <div class="map-pin" aria-hidden="true">
        <span class="map-pin-dot" />
      </div>
    </template>
    <div v-if="title != null && subtitle != null" class="map-copy">
      <p class="map-title">{{ title }}</p>
      <p class="map-subtitle">{{ subtitle }}</p>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.map-placeholder {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid var(--border);
  background:
    radial-gradient(
      circle at 20% 10%,
      rgba(56, 189, 248, 0.12),
      transparent 45%
    ),
    radial-gradient(
      circle at 85% 75%,
      rgba(16, 185, 129, 0.12),
      transparent 40%
    ),
    linear-gradient(160deg, #f8fafc 0%, #eef2ff 100%);
  color: #111827;
  display: grid;
  place-items: center;
  padding: 20px;
}

.map-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.map-placeholder.is-loading {
  animation: mapPulse 1.5s ease-in-out infinite;
}

.map-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(148, 163, 184, 0.25) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(148, 163, 184, 0.25) 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.45;
}

.map-pin {
  position: relative;
  width: 52px;
  height: 52px;
  border-radius: 999px;
  background: rgba(239, 68, 68, 0.18);
  display: grid;
  place-items: center;
  box-shadow: 0 0 0 10px rgba(239, 68, 68, 0.09);
}

.map-pin-dot {
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: #ef4444;
}

.map-copy {
  position: absolute;
  left: 16px;
  max-width: min(72%, 320px);
  top: 16px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  padding: 8px 10px;
  text-align: left;
  display: grid;
  gap: 2px;
  pointer-events: none;
}

.map-title {
  margin: 0;
  font-weight: 600;
  color: #0f172a;
}

.map-subtitle {
  margin: 0;
  font-size: 12px;
  color: #475569;
}

@keyframes mapPulse {
  0% {
    opacity: 0.92;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.92;
  }
}
</style>
