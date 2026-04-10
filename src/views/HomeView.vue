<script setup>
import ImagePlaceholder from "../components/atoms/ImagePlaceholder.vue";
import MapPlaceholder from "../components/atoms/MapPlaceholder.vue";
import Timeline from "../components/atoms/Timeline.vue";

const sections = [
  {
    id: "chinatown",
    number: 1,
    title: "Chinatown ↔ Tai Ping Shan",
    timeline: "1850s-1880s",
    singapore: "Chinatown, Singapore",
    hongkong: "Tai Ping Shan, Hong Kong",
    summary:
      "Both districts became early Chinese migrant anchors shaped by displacement and port-city opportunity.",
    sgImage:
      "https://images.unsplash.com/photo-1524921904563-3084fd87e550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    hkImage:
      "https://images.unsplash.com/photo-1771923059197-23e9e779fef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    lat1: 1.2834,
    lng1: 103.8449,
    lat2: 22.2849,
    lng2: 114.1501,
  },
  {
    id: "temples",
    number: 2,
    title: "Thian Hock Keng ↔ Tai Ping Shan Temples",
    timeline: "1840s-1860s",
    singapore: "Thian Hock Keng, Singapore",
    hongkong: "Temple Cluster, Hong Kong",
    summary:
      "Temples acted as spiritual and social infrastructure for migrants rebuilding life in unfamiliar colonial spaces.",
    sgImage:
      "https://images.unsplash.com/photo-1674573112312-9eef29fc6fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    hkImage:
      "https://images.unsplash.com/photo-1707441571932-f47680a1185c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    lat1: 1.2815,
    lng1: 103.8474,
    lat2: 22.2856,
    lng2: 114.1529,
  },
  {
    id: "muslim",
    number: 3,
    title: "Kampong Glam ↔ Kowloon Mosque",
    timeline: "1820s-1890s",
    singapore: "Kampong Glam, Singapore",
    hongkong: "Kowloon Mosque, Hong Kong",
    summary:
      "Muslim communities in both cities reveal a broader multiethnic story beyond Chinese-majority narratives.",
    sgImage:
      "https://images.unsplash.com/photo-1665340826044-0fed6c09d5b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    hkImage:
      "https://images.unsplash.com/photo-1761581327206-9949bf698247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    lat1: 1.3027,
    lng1: 103.8595,
    lat2: 22.3038,
    lng2: 114.1722,
  },
  {
    id: "heritage",
    number: 4,
    title: "Heritage Preservation Today",
    timeline: "Present",
    singapore: "Chinatown Heritage Lanes",
    hongkong: "Sheung Wan Heritage Trail",
    summary:
      "Preserved streets and institutions keep migrant memory visible in both cities' contemporary identity.",
    sgImage:
      "https://images.unsplash.com/photo-1524921904563-3084fd87e550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    hkImage:
      "https://images.unsplash.com/photo-1767818375694-f11e66cf5bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    lat1: 1.2831,
    lng1: 103.8442,
    lat2: 22.2854,
    lng2: 114.1483,
  },
];

const timelineSections = sections.map((section) => ({
  id: section.id,
  number: section.number,
  title: section.title,
  timeline: section.timeline,
}));
</script>

<template>
  <main>
    <Timeline :sections="timelineSections" :top-offset="110" />

    <div class="mx-auto w-full max-w-6xl space-y-16 pb-20 pt-8">
      <section
        class="grid min-h-[70vh] items-center gap-8 rounded-2xl border border-[var(--border)] bg-white/70 p-8 lg:grid-cols-[1.1fr_1fr]"
      >
        <div class="space-y-6">
          <p
            class="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold tracking-wide text-red-900"
          >
            COR2646 Cities of Paradox
          </p>
          <h1
            class="text-4xl font-semibold tracking-tight text-[var(--text-h)] md:text-6xl"
          >
            Singapore ↔ Hong Kong
          </h1>
          <p
            class="max-w-2xl text-base leading-relaxed text-[var(--text)] md:text-lg"
          >
            A simplified comparative map story of migration routes, urban
            enclaves, and shared heritage after the Taiping era.
          </p>
        </div>

        <MapPlaceholder
          :latitude="1.3007326"
          :longitude="103.8486256"
          title="Start here"
          subtitle="Scroll to explore linked places"
          class="w-full"
          :min-height="340"
        />
      </section>

      <section
        v-for="section in sections"
        :id="section.id"
        :key="section.id"
        class="space-y-6 rounded-2xl border border-[var(--border)] bg-white/80 p-6 md:p-8"
      >
        <header class="space-y-3">
          <div class="flex flex-wrap items-center gap-3">
            <span class="text-4xl font-light text-red-900">{{
              section.number
            }}</span>
            <h2 class="text-3xl leading-tight text-[var(--text-h)]">
              {{ section.title }}
            </h2>
          </div>
          <p
            class="inline-flex rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700"
          >
            {{ section.timeline }}
          </p>
          <p class="max-w-4xl text-[15px] leading-relaxed text-[var(--text)]">
            {{ section.summary }}
          </p>
        </header>

        <MapPlaceholder
          class="w-full"
          :latitude="section.lat1"
          :longitude="section.lng1"
          :zoom="11"
          :min-height="280"
          :title="section.singapore"
          :subtitle="section.hongkong"
        />

        <div class="grid gap-5 md:grid-cols-2">
          <article class="space-y-2">
            <p class="text-sm font-medium text-stone-500">
              {{ section.singapore }}
            </p>
            <ImagePlaceholder
              :src="section.sgImage"
              :alt="`${section.singapore} image`"
              class="h-64 w-full rounded-xl border border-[var(--border)] object-cover"
            />
          </article>

          <article class="space-y-2">
            <p class="text-sm font-medium text-stone-500">
              {{ section.hongkong }}
            </p>
            <ImagePlaceholder
              :src="section.hkImage"
              :alt="`${section.hongkong} image`"
              class="h-64 w-full rounded-xl border border-[var(--border)] object-cover"
            />
          </article>
        </div>
      </section>
    </div>
  </main>
</template>
