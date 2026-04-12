<script setup>
import { computed, ref, useAttrs, watch } from "vue";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  fallbackSrc: {
    type: String,
    default: '',
  },
});

const attrs = useAttrs();
const didError = ref(false);

const passthroughAttrs = computed(() => {
  const cloned = { ...attrs };
  delete cloned.class;
  delete cloned.style;
  return cloned;
});

const resolvedFallbackSrc = computed(() => props.fallbackSrc || ERROR_IMG_SRC);

const handleError = () => {
  didError.value = true;
};

watch(
  () => props.src,
  () => {
    didError.value = false;
  },
);
</script>


<template>
  <div
    v-if="didError"
    class="inline-block align-middle bg-gray-100 "
    :class="attrs.class"
    :style="attrs.style"
  >
    <div class="flex items-center justify-center w-full h-full ">
      <img
        :src="resolvedFallbackSrc"
        alt="Error loading image"
        :data-original-url="src"
        v-bind="passthroughAttrs"
      />
    </div>
  </div>

  <img
    v-else
    :src="src"
    :alt="alt"
    v-bind="passthroughAttrs"
    :class="attrs.class"
    :style="attrs.style"
    @error="handleError"
  />
</template>


