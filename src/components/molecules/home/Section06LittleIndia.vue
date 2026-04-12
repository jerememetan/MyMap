<script setup>
import MapPlaceholder from "../../atoms/MapPlaceholder.vue";
import ImagePlaceholder from "../../atoms/ImagePlaceholder.vue";
import LittleIndia from "../../../assets/img/LittleIndia.jpeg";
import PoliceStation from "../../../assets/img/CentralPoliceStation.jpg";
import SourcesList from "../../atoms/SourcesList.vue";

const sources = [
    {
    label: "Little India History (NLB)",
    href: "https://www.nlb.gov.sg/main/article-detail?cmsuuid=5daa9fec-5726-4b74-af78-fed5ee468bdb",
  },
  {
    label: "Little India heritage Evolution",
    href: "https://www.indianheritage.gov.sg/en/about-us/discover-little-india",
  },
  {
    label: "Central Police Station Compound",
    href: "https://www.devb.gov.hk/en/issues_in_focus/conserving_central/the_central_police_station_compound/index.html",
  },
    {
    label: "Old Central Police Station Report and Documentation",
    href: "https://www.heritage.gov.hk/filemanager/heritage/en/content_3/CMP.pdf",
  },
]
</script>

<template>
  <section
    id="little_india"
    class="space-y-6 rounded-2xl border border-[var(--border)] bg-white/5 p-6 md:p-8"
  >
    <header class="space-y-3">
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-4xl font-light text-red-900">6</span>
        <h2 class="text-3xl leading-tight text-[var(--text-h)]">
          Little India (Singapore) – Indian‑linked Roles in Hong Kong
        </h2>
      </div>
      <h1 class="pb-5">South Asian minorities</h1>
      <p
        class="inline-flex rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700"
      >
        1870s–1940s
      </p>
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        Indians and Sikhs came to Singapore and Hong Kong as merchants, as
        convict labour, and as soldiers, police, and clerks serving the British.
        Yet instead of disappearing into a generic Chinese‑dominated labour
        pool, they “exited” that frame by carving out distinct colonial‑style
        roles in trade, policing, and finance. This exit is not about leaving
        the city, but about occupying specialised niches inside it—working in
        the same colonial system, yet separate from the Chinese‑majority world
        around them.
      </p>
      <br />
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        In Singapore, <b>Little India</b> along Serangoon Road became the heart
        of that South Asian presence. Shops, temples, and money‑changers
        clustered in this area, tied to Indian merchants and clerks who served
        both local communities and the colonial economy. Walking down Serangoon
        Road, you feel an Indian‑linked world embedded in the city, where
        commerce and religion reinforce a separate identity even as people live
        side‑by‑side with Chinese residents.
      </p>
      <br />
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        In Hong Kong, this “exit” shows up most clearly in
        <b>Sikh‑linked police patrols</b> through Central and Kowloon. From the
        1860s onward, Sikh officers formed a visible minority force patrolling
        key sectors of the city, often marked by turban and uniform. Their
        presence on the beat—watching, protecting, and enforcing rules—turned
        the police patrol into a concrete “exit point” where South Asian
        minorities occupied a distinct colonial‑institution role within a
        Chinese‑majority city.
      </p>
    </header>

    <div class="grid gap-5 md:grid-cols-2">
      <MapPlaceholder
        class="w-full"
        title="Little India"
        subtitle="Singapore"
        :latitude="1.3068254099979864"
        :longitude="103.84911042299436"
      />
      <MapPlaceholder
        class="w-full"
        title="Sikh Police patrol"
        subtitle="Hong Kong"
        :latitude="22.281357206942012"
        :longitude="114.15396935223006"
      />
    </div>

    <div class="grid gap-5 md:grid-cols-2">
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        Little India, the birth of the Indian community in Singapore from the
        early 1800s.
      </article>
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        Tai Kwun, formerly the Central Police Station, where many Sikh and
        Indian policemen were based.
      </article>
    </div>

    <div class="grid gap-5 md:grid-cols-2">
      <div class="space-y-2">
        <ImagePlaceholder
          :src="LittleIndia"
          alt="Little India"
          class="h-[250px] w-full rounded-xl object-cover"
        />
        <p>Little India, Singapore</p>
      </div>
      <div class="space-y-2">
        <ImagePlaceholder
          :src="PoliceStation"
          alt="Central Police Station - Hong Kong"
          class="h-[250px] w-full rounded-xl object-cover"
        />
        <p>Central Police Station - Police Force</p>
      </div>
    </div>
    <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
      Together, Little India in Singapore and the Sikh‑linked police presence at
      places like Tai Kwun in Hong Kong show how South Asian minorities “exited”
      the Chinese‑dominated city not by leaving it, but by carving out distinct
      roles inside it. Whether through Serangoon Road’s Indian‑linked commerce
      or Sikh‑linked patrols through Central and Kowloon, these spaces became
      concrete “exit points” where people could step into a different
      framework—working within the same colonial system, yet holding a separate
      identity from the Chinese‑majority world around them.
    </p>
    <SourcesList :links="sources"></SourcesList>
  </section>
</template>
