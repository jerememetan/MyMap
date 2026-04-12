<script setup>
import ImagePlaceholder from "../../atoms/ImagePlaceholder.vue";
import MapPlaceholder from "../../atoms/MapPlaceholder.vue";
import SourcesList from "../../atoms/SourcesList.vue";
import ChinaTownOld from "../../../assets/img/ChinatownOld.jpg";
import TaiPingShanOld from "../../../assets/img/TaiPingShanOld.jpg";

const sources = [
  {
    label: "ChinaTown",
    href: "https://chinatown.sg/history-of-chinatown/",
  },
  {
    label: "Taiping Rebellion",
    href: "https://www.britannica.com/event/Taiping-Rebellion",
  },
  {
    label: "Tai Ping Shan",
    href: "https://www.hongkongextras.com/_taipingshan_medica_heritage_trail.html",
  },
];
</script>

<template>
  <section
    id="chinatown"
    class="space-y-6 rounded-2xl border border-[var(--border)] p-6 md:p-8"
  >
    <header class="space-y-3">
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-4xl font-light text-red-900">1</span>
        <h2 class="text-3xl leading-tight text-[var(--text-h)]">
          Chinatown (Singapore) - Tai Ping Shan (Hong Kong)
        </h2>
      </div>
      <h1 class="pb-5">Arrival and Displacement</h1>
      <p
        class="inline-flex rounded-full bg-stone-100 px-3 py-1 text-md text-stone-700"
      >
        1850s–1860s
      </p>
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        The two places I have linked are Chinatown in Singapore and Tai Ping
        Shan in Hong Kong. These two districts served as refuge destinations in
        the past, where millions of Chinese people fled to seek safety and
        relative peace during the chaos of the Taiping Rebellion (also known as
        the Taiping Civil War).
      </p>
      <br />
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        Between the 1850s and 1864, large parts of southern China—including the
        Yangtze Valley and the Pearl River region—turned into a zone of war and
        famine. The rebellion began as a movement led by Hong Xiuquan, a Hakka
        Christian visionary who claimed to be the “Heavenly King” and challenged
        the Qing dynasty by capturing Nanjing and drawing millions of peasants
        into prolonged violence, warfare, and large‑scale massacres. Due to its
        massive scale and Hong’s influence, the Taiping Rebellion became one of
        the largest upheavals of the 19th century, with estimates of around 20
        million deaths spread across 17 provinces.
      </p>
      <br />
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        As the Taiping Rebellion devastated the Pearl River Delta and
        surrounding regions, many displaced villagers and traders sought refuge
        in treaty ports protected by European powers. <br /><br />
        Hong Kong, annexed by Britain in 1842, became one of the first safe
        havens: the Tai Ping Shan district in Sheung Wan absorbed waves of
        Chinese migrants fleeing war, banditry, and famine, turning it into a
        dense, overcrowded Chinese quarter anchored by temples and clan‑style
        associations. <br /><br />
        At the same time, Singapore’s Chinatown emerged as a parallel
        destination for Fujianese and Cantonese migrants escaping the same
        chaos; its crowded lanes and clan‑linked compounds mirrored the
        refugee‑settlement logic of Tai Ping Shan. This period of upheaval and
        migration marked a turning point for Singapore: what had once been a
        predominantly Malay‑dominated island began to see a significant and
        sustained increase in its Chinese population, laying the groundwork for
        the ethnic composition that would shape the city in the decades to
        come.<br /><br />
        In this way, Chinatown in Singapore and Tai Ping Shan in Hong Kong
        functioned as twin “entry cities” across the South China Sea—both shaped
        by the same trauma in southern China and both laying the foundation for
        later phases of exile, memory, and mixed‑cultural city life.
      </p>
    </header>
    <div class="grid gap-5 md:grid-cols-2">
      <MapPlaceholder
        class="w-full"
        title="Chinatown"
        subtitle="Singapore"
        :latitude="1.283967395975784"
        :longitude="103.84374250126699"
      />
      <MapPlaceholder
        class="w-full"
        title="Tai Ping Shan"
        subtitle="Hong Kong"
        :latitude="22.28502197449521"
        :longitude="114.14821268291142"
      />
    </div>

    <div class="grid gap-5 md:grid-cols-2">
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        <b>Chinatown</b> - This became the birthplace of Singapore’s growing
        Chinese settlement in the 1850s, driven by the mass migration of Chinese
        migrants into the city.
      </article>

      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        <b>Tai Ping Shan</b> - This became a refugee Chinese quarter in Hong
        Kong for displaced Chinese migrants during the 1850s, seeking safety and
        stability under British colonial rule.
      </article>
    </div>
    <div class="grid gap-5 md:grid-cols-2">
      <div class="space-y-2">
        <ImagePlaceholder
          :src="ChinaTownOld"
          alt="Old Chinatown"
          class="h-[250px] w-full rounded-xl object-cover"
        />
        <p>
          Chinatown in Singapore, with a growing Fujian and Catonese communities
        </p>
      </div>
      <div class="space-y-2">
        <ImagePlaceholder
          :src="TaiPingShanOld"
          alt="Old Tai Ping Shan"
          class="h-[250px] w-full rounded-xl object-cover"
        />
        <p>Tai Ping Shan in Hong Kong, also known as Chinese quarter</p>
      </div>
    </div>
    <SourcesList :links="sources" />
  </section>
</template>
