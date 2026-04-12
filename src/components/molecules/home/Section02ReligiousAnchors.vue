<script setup>
import MapPlaceholder from "../../atoms/MapPlaceholder.vue";
import KwongFookTsz from "../../../assets/img/KwongFookTsz.jpg";
import ThianHockKengTemple from "../../../assets/img/ThianHockKengTemple.jpg";
import ImagePlaceholder from "../../atoms/ImagePlaceholder.vue";
import SourcesList from "../../atoms/SourcesList.vue";

const sources = [
  {
    label: "Thian Hock Keng Legacy",
    href: "https://thianhockkeng.com.sg/site/our-legacy-history/",
  },
  {
    label: "Thian Hock Keng (NLB)",
    href: "https://www.nlb.gov.sg/main/article-detail?cmsuuid=91fb75a2-78de-479b-802d-916245c9be52",
  },
  {
    label: "Kwong Fook Tsz",
    href: "https://www.amo.gov.hk/en/heritage-trails/cw-trails/sheungwan/section-b/b25/index.html",
  },
];
</script>

<template>
  <section
    id="thian_hock_keng"
    class="space-y-6 rounded-2xl border border-[var(--border)] p-6 md:p-8"
  >
    <header class="space-y-3">
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-4xl font-light text-red-900">2</span>
        <h2 class="text-3xl leading-tight text-[var(--text-h)]">
          Thian Hock Keng Temple (Singapore) - Kwong Fook Tsz (Hong Kong)
        </h2>
      </div>
      <h1 class="pb-5">First religious anchors</h1>
      <p
        class="inline-flex rounded-full bg-stone-100 px-3 py-1 text-md text-stone-700"
      >
        1840s–1890s
      </p>
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        Continuing with the theme of “entry,” I have chosen two places that
        highlight the religious anchors of early Singapore and early Hong Kong.
        The Hokkien community that migrated to Singapore in the 1840s grew and
        flourished with the construction of Thian Hock Keng Temple, while Kwong
        Fook Tsz in Hong Kong brought together Chinese folk religion and
        Buddhist memorial culture.
      </p>
      <br />
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        <b>Thian Hock Keng Temple (Singapore)</b> — Built between 1839 and 1842
        by Singapore's Hokkien (Fujianese) community, this temple is dedicated
        to Mazu, the goddess of the sea who protects sailors and fishermen. It
        served as the first major religious landmark for Chinese migrants
        arriving by junk from Fujian and Guangdong, marking their safe arrival
        after perilous sea voyages. Newly arrived Hokkien men would gather here
        for worship, clan meetings, and mutual support, making it both a
        spiritual anchor and a social hub that helped them transition from
        maritime sojourners to settled urban dwellers.
      </p>
      <br />
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        <b>Kwong Fook Tsz (Hong Kong)</b> — Completed in 1895 in the Tai Ping
        Shan district, this temple combines Chinese folk religion with Buddhist
        memorial practices, particularly dedicated to Ksitigarbha (the Earth
        Store Bodhisattva) who guides lost souls. It functioned as more than a
        place of worship: it housed ancestral tablets for Chinese workers who
        died far from home, provided refuge and medical aid to the poor, and
        served as a charitable institution funded by Hong Kong's Chinese
        merchant elite. For displaced migrants in Sheung Wan, it offered
        spiritual comfort and practical support during their early years in the
        city.
      </p>
    </header>
    <div class="grid gap-5 md:grid-cols-2">
      <MapPlaceholder
        class="w-full"
        title="Thian Hock Keng Temple"
        subtitle="Singapore"
        :latitude="1.2812178787093473"
        :longitude="103.84761393846388"
      />
      <MapPlaceholder
        class="w-full"
        title="Kwong Fook Tsz"
        subtitle="Hong Kong"
        :latitude="22.285197269851405"
        :longitude="114.14777467532258"
      />
    </div>

    <div class="grid gap-5 md:grid-cols-2">
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        💡 Built on Tan Tock Seng's donated land, serving the Chinese migrant
        community.
      </article>
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        💡 Houses thousands of soul tablets for of "homeless dead" migrants,
        making it Hong Kong's oldest surviving "temple for the homeless dead".
      </article>
    </div>
    <div class="grid gap-5 md:grid-cols-2">
      <div class="space-y-2">
        <ImagePlaceholder
          :src="ThianHockKengTemple"
          alt="Old Chinatown"
          class="h-[450px] w-full rounded-xl object-cover"
        />
        <p>Thian Hock Keng Temple</p>
      </div>
      <div class="space-y-2">
        <ImagePlaceholder
          :src="KwongFookTsz"
          alt="Old Tai Ping Shan"
          class="h-[450px] w-full rounded-xl object-cover"
        />
        <p>Kwong Fook Tsz Temple</p>
      </div>
    </div>
    <div>
      Together, Thian Hock Keng and Kwong Fook Tsz served as the first religious
      anchors that helped Chinese migrants establish spiritual footing in their
      new colonial cities. Thian Hock Keng marked the safe end of perilous sea
      journeys for Hokkien arrivals in Singapore, while Kwong Fook Tsz offered
      comfort and refuge to displaced workers in Hong Kong's crowded Chinese
      quarter. Both temples transformed transient sojourners into rooted urban
      communities, providing not just worship but also the social networks and
      emotional stability needed to survive—and eventually thrive—in foreign
      lands far from their ancestral villages.
    </div>
    <SourcesList :links="sources"></SourcesList>
  </section>
</template>
