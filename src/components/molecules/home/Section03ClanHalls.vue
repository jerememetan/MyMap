<script setup>
import MapPlaceholder from "../../atoms/MapPlaceholder.vue";
import ThianHockKengTemple from "../../../assets/img/ThianHockKengTemple.jpg";
import TungWahHospital from "../../../assets/img/TungWahHospital.jpg";
import ImagePlaceholder from "../../atoms/ImagePlaceholder.vue";
import SourcesList from "../../atoms/SourcesList.vue";

const sources = [
  {
    label: "Thian Hock Keng Legacy",
    href: "https://thianhockkeng.com.sg/site/about/",
  },
  {
    label: "Thian Hock Keng (NLB)",
    href: "https://www.nlb.gov.sg/main/article-detail?cmsuuid=91fb75a2-78de-479b-802d-916245c9be52",
  },
  {
    label: "Tung Wah Hospital Official Website",
    href: "https://www.tungwah.org.hk/en/about/milestones/",
  },
];
</script>

<template>
  <section
    id="clan_halls"
    class="space-y-6 rounded-2xl border border-[var(--border)] bg-white/5 p-6 md:p-8"
  >
    <header class="space-y-3">
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-4xl font-light text-red-900">3</span>
        <h2 class="text-3xl leading-tight text-[var(--text-h)]">
          Hokkien Huay Kuan (Singapore) - Tung Wah Hospital (Hong Kong)
        </h2>
      </div>
      <h1 class="pb-5">Gateway to New Lifes</h1>
      <p
        class="inline-flex rounded-full bg-stone-100 px-3 py-1 text-md text-stone-700"
      >
        1860s–1880s
      </p>
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        Temples like Thian Hock Keng and Kwong Fook Tsz gave migrants their
        first spiritual home. Now, lets enter the theme of "exit" during the
        1860s–1880s, where clan halls helped them leave their old village life
        behind. These places found them jobs, housing, and new friends from the
        same dialect group. This is where I want to draw your attention to the
        Hokkien Huay Kuan in Singapore and the Tung Wah Hospital in Hong Kong
        that demonstrate this concept.
      </p>
      <br />
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        <b>Hokkien Huay Kuan at Thian Hock Keng (Singapore)</b> — Founded in
        1840 within Thian Hock Keng Temple, this Hokkien clan association helped
        Fujianese migrants settle into city life. It arranged jobs in shops and
        warehouses, found rental rooms, connected new arrivals with
        dialect-group networks, and issued marriage certificates. For village
        farmers, it was the practical bridge to urban Singapore.
      </p>
      <br />
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        <b>Tung Wah Hospital (Hong Kong)</b> — Opened in 1872 in Sheung Wan,
        this Chinese-run hospital also served as a migrant aid center. It
        provided medical checks for new arrivals, quarantine for the sick,
        repatriation assistance, and connections to work opportunities. Like
        Hokkien Huay Kuan, it helped rural migrants become organized city
        dwellers under British colonial rule.
      </p>
    </header>
    <div class="grid gap-5 md:grid-cols-2">
      <MapPlaceholder
        class="w-full"
        title="Hokkien Huay Kuan"
        subtitle="Singapore"
        :latitude="1.280880284708475"
        :longitude="103.84805544999485"
      />
      <MapPlaceholder
        class="w-full"
        title="Tung Wah Hospital"
        subtitle="Hong Kong"
        :latitude="22.285812967402695"
        :longitude="114.14655903350256"
      />
    </div>

    <div class="grid gap-5 md:grid-cols-2">
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        💡 The Huay Kuan started within Thian Hock Keng Temple itself
        originally.
      </article>
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        💡Tung Wah Hospital was funded entirely by Hong Kong's Chinese merchants
      </article>
    </div>
    <div class="grid gap-5 md:grid-cols-2">
      <div class="space-y-2">
        <ImagePlaceholder
          :src="ThianHockKengTemple"
          alt="Temple"
          class="h-[450px] w-full rounded-xl object-cover"
        />
        <p>Huay Kuan started here originally in Thian Hock Keng Temple</p>
      </div>
      <div class="space-y-2">
        <ImagePlaceholder
          :src="TungWahHospital"
          alt="Tung Wha Hospital"
          class="h-[450px] w-full rounded-xl object-cover"
        />
        <p>Tung Wah Hospital, 1872</p>
      </div>
    </div>
    <div>
      Both Hokkien Huay Kuan and Tung Wah Hospital were the practical "exit
      points" that turned rural Chinese migrants from China into city dwellers.
      They provided the jobs, housing, medical care, and social networks needed
      to leave village life behind and build new urban identities. This marked
      the shift from spiritual arrival to permanent settlement in Singapore and
      Hong Kong's Chinese quarters, away from China.
    </div>
    <SourcesList :links="sources"></SourcesList>
  </section>
</template>
