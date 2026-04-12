<script setup>
import { onBeforeUnmount, onMounted } from "vue";
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
    title: "Gateway to New Lifes",
    timeline: "1860s–1900",
  },
  {
    id: "hakka_enclaves",
    number: 4,
    title: "Hakka Refugees and traders",
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
    title: "South Asian minorities",
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

let revealObserver;

onMounted(() => {
  const revealItems = document.querySelectorAll(".reveal-on-scroll");
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  revealItems.forEach((item, index) => {
    if (!item.style.getPropertyValue("--reveal-delay")) {
      item.style.setProperty(
        "--reveal-delay",
        `${Math.min(index * 70, 420)}ms`,
      );
    }
    revealObserver.observe(item);
  });
});

onBeforeUnmount(() => {
  revealObserver?.disconnect();
});
</script>

<template>
  <main>
    <div class="w-full pb-8 lg:flex">
      <Timeline
        :sections="timelineSections"
        :top-offset="310"
        class="lg:w-57"
      />

      <div class="flex-1 space-y-16">
        <section
          class="reveal-on-scroll grid min-h-[70vh] items-center gap-8 rounded-2xl border border-[var(--border)]"
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
        <Section01ArrivalDisplacement class="reveal-on-scroll" />
        <Section02ReligiousAnchors class="reveal-on-scroll" />
        <Section03ClanHalls class="reveal-on-scroll" />
        <Section04HakkaEnclaves class="reveal-on-scroll" />
        <Section05KampongGlam class="reveal-on-scroll" />
        <Section06LittleIndia class="reveal-on-scroll" />
        <Section07SriMariamman class="reveal-on-scroll" />
        <Section08HeritageLanes class="reveal-on-scroll" />
      </div>
    </div>
    <section
      class="reveal-on-scroll relative overflow-hidden rounded-3xl border border-amber-100/40 bg-linear-to-br from-amber-50/10 via-red-50/5 to-teal-100/10 px-6 py-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:px-10"
    >
      <div
        class="pointer-events-none absolute -top-16 -left-10 h-40 w-40 rounded-full bg-amber-200/20 blur-3xl"
      ></div>
      <div
        class="pointer-events-none absolute -right-12 -bottom-20 h-56 w-56 rounded-full bg-emerald-300/15 blur-3xl"
      ></div>

      <div class="relative mx-auto max-w-3xl space-y-1">
        <p
          class="inline-flex rounded-full border border-amber-100/40 bg-amber-100/10 px-4 py-3 text-xs font-semibold tracking-[0.25em] text-amber-100"
        >
          FINAL NOTE
        </p>

        <h2
          class="text-4xl font-semibold tracking-[0.08em] text-(--text-h) md:text-6xl"
        >
          THE END
        </h2>

        <p
          class="mx-auto max-w-2xl text-base leading-relaxed text-(--text) md:text-lg"
        >
          Thank you so much for reading, Prof. I really appreciate your time,
          and I hope this project made the cultural links between Singapore and
          Hong Kong feel vivid, human, and memorable.
        </p>

        <p class="text-sm uppercase tracking-[0.2em] text-(--text)/80">
          Made by: Jereme Tan
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.reveal-on-scroll {
  --reveal-delay: 0ms;
  opacity: 0;
  transform: translateY(28px) scale(0.985);
  filter: blur(8px);
  transition:
    opacity 650ms ease,
    transform 650ms cubic-bezier(0.2, 0.65, 0.2, 1),
    filter 650ms ease;
  transition-delay: var(--reveal-delay);
  will-change: opacity, transform, filter;
}

.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal-on-scroll,
  .reveal-on-scroll.is-visible {
    opacity: 1;
    transform: none;
    filter: none;
    transition: none;
  }
}
</style>
