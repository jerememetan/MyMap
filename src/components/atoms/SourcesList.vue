<script setup>
defineProps({
  title: {
    type: String,
    default: "- Sources -",
  },
  links: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="space-y-2">
    <h2>{{ title }}</h2>
    <ul class="space-y-1">
      <li v-for="link in links" :key="`${link.label}-${link.href}`">
        <a
          :href="link.href"
          class="text-md text-yellow-400 hover:text-yellow-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </div>
</template>
