<script setup>
import MapPlaceholder from "../../atoms/MapPlaceholder.vue";
import ImagePlaceholder from "../../atoms/ImagePlaceholder.vue";
import HakkaGrave from "../../../assets/img/HakkaGrave.jpg";
import HakkaSanYiChi from "../../../assets/img/HakkaSanYiChi.jpg";
import TaiHang from "../../../assets/img/TaiHang.jpg";
import SourcesList from "../../atoms/SourcesList.vue";
const sources = [
  {
    label: "Hakka Clan History in Singapore",
    href: "https://remembersingapore.org/2013/04/09/old-holland-road-and-hakka-clan/",
  },
  {
    label: "Feng Yong Tai History",
    href: "https://genealogysocietysingapore.com/visit-to-feng-yong-thai-ancestral-hall/",
  },
  {
    label: "Tai Hang History in Hong Kong",
    href: "https://firedragon1949.org.hk/en/tai-hang-history/",
  },
  {
    label: "Tai Hang's Lost Villages",
    href: "https://firedragon1949.org.hk/en/tai-hang-history/",
  },
];
</script>

<template>
  <section
    id="hakka_enclaves"
    class="space-y-6 rounded-2xl border border-[var(--border)] p-6 md:p-8"
  >
    <header class="space-y-3">
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-4xl font-light text-red-900">4</span>
        <h2 class="text-3xl leading-tight text-[var(--text-h)]">
          Sanyi Ci Temple/ Fung Yun Thai Cemetery (Singapore) - Tai Hang Hakka
          Village (Hong Kong)
        </h2>
      </div>
      <h1 class="pb-5">Hakka Refugees and Traders</h1>
      <p
        class="inline-flex rounded-full bg-stone-100 px-3 py-1 text-md text-stone-700"
      >
        1860s–1880s
      </p>
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        I've mentioned how the Taiping Rebellion drove migration to both
        cities, and this also heavily impacted the Hakkas. As Taiping refugees
        during the 1850s–1880s, Hakkas formed their own distinct ethnic enclaves
        while preserving their unique language, food, and traditions.
      </p>
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        <b>Fung Yun Thai Cemetery (Singapore)</b> — Hakkas first arrived in
        Singapore during the 1850s Taiping chaos, settling near Old Holland
        Road. By 1888, they bought land here for their Sanyi Ci Temple and
        cemetery—their first permanent Hakka enclave. This rural outpost became
        home for Hakka farmers growing pepper and gambier before entering city
        life.
      </p>
      <br />
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        <b>Tai Hang Hakka Village (Hong Kong)</b> — Hakkas reached Hong Kong
        Island's Tai Hang during the same 1850s refugee wave from Guangdong.
        They formed tight-knit farming communities as part of the "Alliance of
        Ten Villages" for protection. Tai Hang became their first foothold,
        preserving Hakka dialect and traditions amid local rivalries.
      </p>
    </header>

    <div class="grid gap-5 md:grid-cols-2">
      <MapPlaceholder
        class="w-full"
        title="Sanyi Ci Temple"
        subtitle="Singapore"
        :latitude="1.328112511822082"
        :longitude="103.78946110266192"
      />
      <MapPlaceholder
        class="w-full"
        title="Fung Yun Thai Cemetery"
        subtitle="Singapore"
        :latitude="1.3269319140010325"
        :longitude="103.78734892866146"
      />
    </div>
    <div class="grid gap-5 md:grid-cols-2">
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        💡 Sanyi Ci Temple, now also known as Fong Yun Thai association in the
        present
      </article>
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        💡 The original cemetery was located at Holland Plain, but was exhumed
        in the 1980s
      </article>
    </div>
    <div class="grid gap-5">
      <MapPlaceholder
        class="w-full"
        title="Tai Hang Village"
        subtitle="Hong Kong"
        :latitude="22.278897214363038"
        :longitude="114.19173204608622"
      />
    </div>

    <div class="grid gap-5">
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        💡 Preserved Hakka houses + Fire Dragon Heritage Centre still stand
        today.
      </article>
    </div>
    <div class="grid gap-5 md:grid-cols-2">
      <div class="space-y-2">
        <ImagePlaceholder
          :src="HakkaSanYiChi"
          alt="Hakka SanYi Chi Temple"
          class="h-[250px] w-full rounded-xl object-cover"
        />
      </div>
      <div class="space-y-2 flex my-auto">
        <p>Original SanYi Chi Temple that was built in the 19th century</p>
      </div>
      <div class="space-y-2 flex my-auto">
        <p>
          Image of the Fung Yun Thai Cemetery before it was exhumed, located at
          Holland Plain
        </p>
      </div>
      <div class="space-y-2">
        <ImagePlaceholder
          :src="HakkaGrave"
          alt="Hakka Grave"
          class="h-[250px] w-full rounded-xl object-cover"
        />
      </div>

      <div class="space-y-2">
        <ImagePlaceholder
          :src="TaiHang"
          alt="Temple"
          class="h-[250px] w-full rounded-xl object-cover"
        />
      </div>
      <div class="space-y-2 flex my-auto">
        <p>
          Image of the Tai Hang Hakka settlement and village area in 1945. Many
          of the original village structures have been lost to redevelopment,
          though the neighborhood still exists today.
        </p>
      </div>
    </div>
    <SourcesList :links="sources"></SourcesList>
  </section>
</template>
