<script setup>
import { computed, useAttrs } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "single",
  },
  latitude: {
    type: Number,
    default: null,
  },
  longitude: {
    type: Number,
    default: null,
  },
  latitude2: {
    type: Number,
    default: null,
  },
  longitude2: {
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

const hasPrimaryCoordinates = computed(
  () => Number.isFinite(props.latitude) && Number.isFinite(props.longitude),
);

const hasSecondaryCoordinates = computed(
  () => Number.isFinite(props.latitude2) && Number.isFinite(props.longitude2),
);

const normalizedVariant = computed(() =>
  props.variant === "connection" ? "connection" : "single",
);

const canRenderSingleMap = computed(
  () => normalizedVariant.value === "single" && hasPrimaryCoordinates.value,
);

const canRenderConnection = computed(
  () =>
    normalizedVariant.value === "connection" &&
    hasPrimaryCoordinates.value &&
    hasSecondaryCoordinates.value,
);

const embedSrc = computed(() => {
  if (!canRenderSingleMap.value) {
    return "";
  }

  // Single pin view (no API key needed).
  return `https://maps.google.com/maps?q=${props.latitude},${props.longitude}&z=${props.zoom}&output=embed`;
});

const connectionEmbedSrc = computed(() => {
  if (!canRenderConnection.value) {
    return "";
  }

  const centerLat = (props.latitude + props.latitude2) / 2;
  const centerLng = (props.longitude + props.longitude2) / 2;

  // Use map center params (ll) so Google doesn't add an extra auto marker.
  return `https://maps.google.com/maps?ll=${centerLat},${centerLng}&z=${props.zoom}&output=embed`;
});

const toMercatorY = (latitude) => {
  const rad = (latitude * Math.PI) / 180;
  return Math.log(Math.tan(Math.PI / 4 + rad / 2));
};

const connectionGeometry = computed(() => {
  if (!canRenderConnection.value) {
    return null;
  }

  const p1 = {
    x: props.longitude,
    y: toMercatorY(props.latitude),
  };
  const p2 = {
    x: props.longitude2,
    y: toMercatorY(props.latitude2),
  };

  const minX = Math.min(p1.x, p2.x);
  const maxX = Math.max(p1.x, p2.x);
  const minY = Math.min(p1.y, p2.y);
  const maxY = Math.max(p1.y, p2.y);

  const spanX = Math.max(maxX - minX, 0.0001);
  const spanY = Math.max(maxY - minY, 0.0001);
  const usable = 0.64;
  const offset = (1 - usable) / 2;

  const toPercent = (point) => ({
    left: (offset + ((point.x - minX) / spanX) * usable) * 100,
    top: (offset + ((point.y - minY) / spanY) * usable) * 100,
  });

  const marker1 = toPercent(p1);
  const marker2 = toPercent(p2);

  return {
    marker1,
    marker2,
  };
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
      v-if="canRenderSingleMap"
      class="map-frame"
      :src="embedSrc"
      title="Google Maps location"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />

    <template v-else-if="canRenderConnection && connectionGeometry">
      <iframe
        class="map-frame"
        :src="connectionEmbedSrc"
        title="Google Maps connection"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />

      <svg
        class="connection-layer"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          :x1="connectionGeometry.marker1.left"
          :y1="connectionGeometry.marker1.top"
          :x2="connectionGeometry.marker2.left"
          :y2="connectionGeometry.marker2.top"
          class="connection-line"
        />
      </svg>

      <div
        class="connection-pin"
        :style="{
          left: `${connectionGeometry.marker1.left}%`,
          top: `${connectionGeometry.marker1.top}%`,
        }"
        aria-hidden="true"
      >
        <span class="connection-pin-dot" />
      </div>

      <div
        class="connection-pin"
        :style="{
          left: `${connectionGeometry.marker2.left}%`,
          top: `${connectionGeometry.marker2.top}%`,
        }"
        aria-hidden="true"
      >
        <span class="connection-pin-dot" />
      </div>
    </template>

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

.connection-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.connection-line {
  stroke: #0ea5e9;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-dasharray: 4 2;
  opacity: 0.95;
}

.connection-pin {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
  border-radius: 999px;
  background: rgba(239, 68, 68, 0.18);
  display: grid;
  place-items: center;
  box-shadow: 0 0 0 7px rgba(239, 68, 68, 0.09);
}

.connection-pin-dot {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: #ef4444;
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
