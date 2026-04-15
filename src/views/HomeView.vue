<script setup>
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
  { id: "chinatown", number: 1, title: "Arrival and Displacement", timeline: "1840s–1860s" },
  { id: "thian_hock_keng", number: 2, title: "First religious anchors", timeline: "1840s–1860s" },
  { id: "clan_halls", number: 3, title: "Gateway to New Lifes", timeline: "1860s–1900" },
  { id: "hakka_enclaves", number: 4, title: "Hakka Refugees and traders", timeline: "1860s–1900" },
  { id: "kampong_glam", number: 5, title: "Malay‑Muslim presence", timeline: "1860s–1900" },
  { id: "little_india", number: 6, title: "South Asian minorities", timeline: "1860s–1900" },
  { id: "sri_mariamman", number: 7, title: "Mixed‑cultural streetscapes", timeline: "1900s–Today" },
  { id: "heritage_lanes", number: 8, title: "Preservation of migrant streetscapes", timeline: "1900s–Today" },
];
</script>

<template>
  <main>
    <div class="w-full pb-8 lg:flex">
      <Timeline :sections="timelineSections" :top-offset="310" class="lg:w-57" />

      <div class="flex-1 space-y-16">
        <section
          v-scroll-animate
          class="grid min-h-[70vh] items-center gap-8 rounded-2xl border border-[var(--border)]"
        >
          <div>
            <p class="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold tracking-wide text-red-900">
              Written By: Jereme Tan
            </p>
            <h1 class="text-2xl font-semibold tracking-tight text-[var(--text-h)]">
              Cities of Paradox - A deep dive in culture
            </h1>
            <p class="text-[var(--text-h)] text-lg">Hi Prof Jack!</p>
            <br />
            <p class="text-base leading-relaxed mx-auto flex justify-center">
              I’m really excited to share with you my research on this
              topic—I’ve put together a website that explores the historical and
              cultural links between Singapore and Hong Kong. Rather than just
              focusing on ten places, I ended up tracing 16 paired sites across
              the two cities and showing how they’re connected through
              migration, trade, religion, and memory, especially around the
              Taiping Rebellion and the 19th‑century Chinese diaspora.
            </p>
            <br />
            <p>
              The site is structured as a long‑scroll journey, grouping the
              pairs into three phases—Entry, Exit, and Emergence—to trace how
              people arrived, settled into new roles and communities, and helped
              build today’s mixed‑cultural cities and heritage landscapes. I
              hope you enjoy this, as much as I enjoyed creating this website
              from scratch!
            </p>
          </div>
        </section>

        <div v-scroll-animate><Section01ArrivalDisplacement /></div>
        <div v-scroll-animate><Section02ReligiousAnchors /></div>
        <div v-scroll-animate><Section03ClanHalls /></div>
        <div v-scroll-animate><Section04HakkaEnclaves /></div>
        <div v-scroll-animate><Section05KampongGlam /></div>
        <div v-scroll-animate><Section06LittleIndia /></div>
        <div v-scroll-animate><Section07SriMariamman /></div>
        <div v-scroll-animate><Section08HeritageLanes /></div>
      </div>
    </div>

    <section
      v-scroll-animate
      class="relative overflow-hidden rounded-3xl border border-amber-100/40 bg-linear-to-br from-amber-50/10 via-red-50/5 to-teal-100/10 px-6 py-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:px-10"
    >
      <div class="pointer-events-none absolute -top-16 -left-10 h-40 w-40 rounded-full bg-amber-200/20 blur-3xl"></div>
      <div class="pointer-events-none absolute -right-12 -bottom-20 h-56 w-56 rounded-full bg-emerald-300/15 blur-3xl"></div>

      <div class="relative mx-auto max-w-3xl space-y-1">
        <p class="inline-flex rounded-full border border-amber-100/40 bg-amber-100/10 px-4 py-3 text-xs font-semibold tracking-[0.25em] text-amber-100">
          THE END !
        </p>

        <p class="mx-auto text-(--text) md:text-lg">
          Thank you so much for reading, Prof Jack. I truly appreciate your
          time, and I hope you enjoyed this project as much as I enjoyed
          creating it, from the research all the way to building this website.
        </p>

        <p class="text-sm uppercase tracking-[0.2em] text-(--text)/80">
          Made by: Tan Jing Min, Jereme
        </p>
      </div>
    </section>
  </main>
</template>
