<script setup>
import MapPlaceholder from "../../atoms/MapPlaceholder.vue";
</script>

<template>
  <section
    id="chinatown"
    class="space-y-6 rounded-2xl border border-[var(--border)] bg-white/80 p-6 md:p-8"
  >
    <header class="space-y-3">
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-4xl font-light text-red-900">1</span>
        <h2 class="text-3xl leading-tight text-[var(--text-h)]">
          Arrival and Displacement
        </h2>
      </div>
      <p
        class="inline-flex rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700"
      >
        1840s–1860s
      </p>
      <p class="text-[15px] leading-relaxed text-[var(--text)]">
        Write your key narrative for this section here.
      </p>
    </header>

    <MapPlaceholder
      class="w-full"
      :min-height="280"
      title="Map Placeholder"
      subtitle="Add coordinates when ready"
    />

    <div class="grid gap-5 md:grid-cols-2">
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-sm text-stone-500"
      >
        Singapore content block
      </article>
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-sm text-stone-500"
      >
        Hong Kong content block
      </article>
    </div>
  </section>
</template>
