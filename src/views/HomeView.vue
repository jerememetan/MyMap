<script setup>
import MapPlaceholder from "../components/atoms/MapPlaceholder.vue";
import Timeline from "../components/atoms/Timeline.vue";
import Section01ArrivalDisplacement from "../components/molecules/home/Section01ArrivalDisplacement.vue";
import Section02ReligiousAnchors from "../components/molecules/home/Section02ReligiousAnchors.vue";
import Section03ClanHalls from "../components/molecules/home/Section03ClanHalls.vue";
import Section04HakkaEnclaves from "../components/molecules/home/Section04HakkaEnclaves.vue";
import Section05KampongGlam from "../components/molecules/home/Section05KampongGlam.vue";
import Section06LittleIndia from "../components/molecules/home/Section06LittleIndia.vue";
import Section07SriMariamman from "../components/molecules/home/Section07SriMariamman.vue";
import Section08HeritageLanes from "../components/molecules/home/Section08HeritageLanes.vue";

const timelineSections = [
  {
    id: "chinatown",
    number: 1,
    title: "Arrival and Displacement",
    timeline: "1840s–1860s",
  },
  {
    id: "thian_hock_keng",
    number: 2,
    title: "First religious anchors",
    timeline: "1840s–1860s",
  },
  {
    id: "clan_halls",
    number: 3,
    title: "Memory, death, and return",
    timeline: "1860s–1900",
  },
  {
    id: "hakka_enclaves",
    number: 4,
    title: "Refugees and traders",
    timeline: "1860s–1900",
  },
  {
    id: "kampong_glam",
    number: 5,
    title: "Malay‑Muslim presence",
    timeline: "1860s–1900",
  },
  {
    id: "little_india",
    number: 6,
    title: "South Asian minorities in colonial institutions",
    timeline: "1860s–1900",
  },
  {
    id: "sri_mariamman",
    number: 7,
    title: "Mixed‑cultural streetscapes",
    timeline: "1900s–Today",
  },
  {
    id: "heritage_lanes",
    number: 8,
    title: "Preservation of migrant streetscapes",
    timeline: "1900s–Today",
  },
];
</script>

<template>
  <main>
    <Timeline :sections="timelineSections" :top-offset="110" />

    <div class="mx-auto w-full max-w-6xl space-y-16 pb-20 pt-8">
      <section
        class="grid min-h-[70vh] items-center gap-8 rounded-2xl border border-[var(--border)]"
      >
        <div>
          <p
            class="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold tracking-wide text-red-900"
          >
            Written By: Jereme Tan
          </p>
          <h1
            class="text-2xl font-semibold tracking-tight text-[var(--text-h)]"
          >
            Cities of Paradox - A deep dive in culture and ethnic shifts
          </h1>
          <p class="text-base text-lg"> Hi Prof Jack!</p>
          <p class="text-base leading-relaxed mx-auto flex justify-center">
I’m really excited to share with you my research on this topic—I’ve put together a website that explores the historical and cultural links between Singapore and Hong Kong. Rather than just focusing on ten places, I ended up tracing 16 paired sites across the two cities and showing how they’re connected through migration, trade, religion, and memory, especially around the Taiping Rebellion and the 19th‑century Chinese diaspora.

The site is structured as a long‑scroll journey, grouping the pairs into three phases—Entry, Exit, and Emergence—to trace how people arrived, settled into new roles and communities, and helped build today’s mixed‑cultural cities and heritage landscapes. I’d love to hear your thoughts whenever you have time to take a look!
          </p>
        </div>
      </section>

      <Section01ArrivalDisplacement />
      <Section02ReligiousAnchors />
      <Section03ClanHalls />
      <Section04HakkaEnclaves />
      <Section05KampongGlam />
      <Section06LittleIndia />
      <Section07SriMariamman />
      <Section08HeritageLanes />
    </div>
    <div>
        The end
        <br>
        <br>
        Thanks for reading prof! I hope this was as interesting as I hope to be.
    </div>
  </main>
</template>
