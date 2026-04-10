<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

const props = defineProps({
  apiKey: {
    type: String,
    default: "",
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  latitude2: {
    type: Number,
    required: true,
  },
  longitude2: {
    type: Number,
    required: true,
  },
  zoom: {
    type: Number,
    default: 13,
  },
  lineColor: {
    type: String,
    default: "#0ea5e9",
  },
  lineWeight: {
    type: Number,
    default: 4,
  },
  minHeight: {
    type: [String, Number],
    default: 280,
  },
});

const mapEl = ref(null);
const mapError = ref("");

let map = null;
let markerA = null;
let markerB = null;
let line = null;

const hasKey = computed(() => props.apiKey.trim().length > 0);

const resolvedMinHeight = computed(() => {
  if (typeof props.minHeight === "number") {
    return `${props.minHeight}px`;
  }

  return props.minHeight;
});

const key = "__gmaps_loader_promise__";

const loadGoogleMaps = (apiKey) => {
  if (window.google?.maps) {
    return Promise.resolve(window.google.maps);
  }

  if (window[key]) {
    return window[key];
  }

  window[key] = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.google?.maps) {
        resolve(window.google.maps);
      } else {
        reject(
          new Error("Google Maps API loaded, but maps namespace is missing."),
        );
      }
    };

    script.onerror = () => {
      reject(new Error("Failed to load Google Maps JavaScript API."));
    };

    document.head.appendChild(script);
  });

  return window[key];
};

const updateMapObjects = () => {
  if (!map || !window.google?.maps || !markerA || !markerB || !line) {
    return;
  }

  const p1 = { lat: props.latitude, lng: props.longitude };
  const p2 = { lat: props.latitude2, lng: props.longitude2 };

  markerA.setPosition(p1);
  markerB.setPosition(p2);

  line.setPath([p1, p2]);

  const bounds = new window.google.maps.LatLngBounds();
  bounds.extend(p1);
  bounds.extend(p2);
  map.fitBounds(bounds, 64);
};

const setupMap = async () => {
  if (!hasKey.value) {
    mapError.value =
      "Missing Google Maps API key. Set VITE_GOOGLE_MAPS_API_KEY.";
    return;
  }

  try {
    mapError.value = "";
    const maps = await loadGoogleMaps(props.apiKey);

    if (!mapEl.value) {
      return;
    }

    map = new maps.Map(mapEl.value, {
      center: { lat: props.latitude, lng: props.longitude },
      zoom: props.zoom,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });

    markerA = new maps.Marker({
      map,
      position: { lat: props.latitude, lng: props.longitude },
    });

    markerB = new maps.Marker({
      map,
      position: { lat: props.latitude2, lng: props.longitude2 },
    });

    line = new maps.Polyline({
      map,
      path: [
        { lat: props.latitude, lng: props.longitude },
        { lat: props.latitude2, lng: props.longitude2 },
      ],
      geodesic: true,
      strokeColor: props.lineColor,
      strokeOpacity: 0.95,
      strokeWeight: props.lineWeight,
    });

    updateMapObjects();
  } catch (error) {
    mapError.value =
      error instanceof Error ? error.message : "Map failed to initialize.";
  }
};

watch(
  () => [
    props.latitude,
    props.longitude,
    props.latitude2,
    props.longitude2,
    props.lineColor,
    props.lineWeight,
  ],
  () => {
    if (!map || !line) {
      return;
    }

    line.setOptions({
      strokeColor: props.lineColor,
      strokeWeight: props.lineWeight,
    });

    updateMapObjects();
  },
);

onMounted(() => {
  setupMap();
});

onBeforeUnmount(() => {
  if (line) {
    line.setMap(null);
  }
  if (markerA) {
    markerA.setMap(null);
  }
  if (markerB) {
    markerB.setMap(null);
  }

  line = null;
  markerA = null;
  markerB = null;
  map = null;
});
</script>

<template>
  <section
    class="relative w-full overflow-hidden rounded-[14px] border border-[var(--border)] bg-slate-200"
    :style="{ minHeight: resolvedMinHeight }"
  >
    <div ref="mapEl" class="absolute inset-0" />

    <div
      v-if="mapError"
      class="absolute bottom-3 left-3 right-3 rounded-[10px] bg-slate-900/85 px-3 py-2 text-[13px] text-slate-50"
    >
      {{ mapError }}
    </div>
  </section>
</template>
