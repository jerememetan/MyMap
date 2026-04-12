<script setup>
import ImagePlaceholder from "../../atoms/ImagePlaceholder.vue";
import MapPlaceholder from "../../atoms/MapPlaceholder.vue";
import SourcesList from "../../atoms/SourcesList.vue";
import ChinaTown from "../../../assets/img/HeritageChinaTown.jpg";
import ChinaTownShopHouse from "../../../assets/img/HeritageShopHousesChinaTown.jpg";
import SheungWan from "../../../assets/img/SheungWanHeritageTrail.jpg";
const sources = [
  {
    label: "Chinatown Heritage Centre Official Site",
    href: "https://chinatown.sg/visit/chinatown-heritage-centre/",
  },
  {
    label: "Chinatown Heritage Centre Exhibition Experience",
    href: "https://www.chinatownheritagecentre.com.sg/exhibition-experience",
  },
  {
    label: "Sheung Wan Route (Official)",
    href: "https://hikingtrailhk.appspot.com/en/w/central_and_western_heritage_trail_the_sheung_wan_route",
  },
  {
    label: "Heritage Preservation in Hong Kong (Community Movements)",
    href: "https://ari.nus.edu.sg/wp-content/uploads/2018/10/wps17_2601.pdf",
  },
];
</script>

<template>
  <section
    id="heritage_lanes"
    class="space-y-6 rounded-2xl border border-[var(--border)] bg-emerald-500/10 p-6 md:p-8"
  >
    <header class="space-y-3">
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-4xl font-light text-red-900">8</span>
        <h2 class="text-3xl leading-tight text-[var(--text-h)]">
          Chinatown Heritage Centre lanes (Singapore) – Sheung Wan heritage
          trail (Hong Kong)
        </h2>
      </div>
      <h1 class="pb-5">Preservation of Migrant Streetscapes</h1>
      <p
        class="inline-flex rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700"
      >
        1990s-today
      </p>
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        Having seen how mixed-cultural streetscapes first emerged in the 19th
        century, we now arrive at their final transformation: preservation as
        heritage. The same migrant lanes that were once raw, lived-in spaces are
        now curated, restored, and interpreted as "heritage" for visitors. This
        is heritage memory at work—the old city re-emerges in the present, not
        as everyday life, but as a carefully told story of migrant struggle and
        survival.
      </p>
      <br />
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        In Singapore, the <b>Chinatown Heritage Centre</b> turns original
        19th-century migrant lanes into a living museum. Restored shophouses,
        recreated cramped rooms, and exhibits stage the story of early Chinese
        migrants' lives, so walking these lanes feels like stepping into
        preserved memory. What were once working-class streets are now a curated
        narrative, complete with signage and guided tours that frame the migrant
        past for modern visitors.
      </p>
      <br />
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        In Hong Kong, the <b>Sheung Wan heritage trail</b> does the same for old
        migrant streets around Man Mo Temple. Government markers, heritage
        plaques, and walking routes turn dense shophouses and temple lanes into
        a "story of old Hong Kong." Tour groups now trace the same paths once
        walked by 19th-century merchants and laborers, so the migrant
        streetscape re-emerges as curated heritage rather than lived experience.
      </p>
    </header>

    <div class="grid gap-5 md:grid-cols-2">
      <MapPlaceholder
        class="w-full"
        title="Chinatown Heritage Center"
        subtitle="Singapore"
        :latitude="1.283765773866305"
        :longitude="103.84430015577847"
      />
      <MapPlaceholder
        class="w-full"
        title="Sheung Wan heritage trail"
        subtitle="Hong Kong"
        :latitude="22.277822719882945"
        :longitude="114.176531623395"
      />
    </div>

    <div class="grid gap-5 md:grid-cols-2">
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        💡 Chinatown Heritage Centre preserves original migrant shophouses as a
        living museum
      </article>
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        💡 Sheung Wan heritage trail marks old streets as "19th-century Hong
        Kong" for visitors.
      </article>
    </div>

    <div class="grid gap-5 md:grid-cols-2">
      <div class="space-y-2">
        <ImagePlaceholder
          :src="ChinaTown"
          alt="China Town Heritage Trail"
          class="h-[250px] w-full rounded-xl object-cover"
        />
      </div>
      <div class="space-y-2 flex my-auto">
        <p>
          Chinatown Heritage Centre exhibit recreating 19th-century migrant life
          from original photos.
        </p>
      </div>
      <div class="space-y-2 flex my-auto">
        <p>
          Restored Chinatown shophouses preserved as historical record of the
          migrant past.
        </p>
      </div>
      <div class="space-y-2">
        <ImagePlaceholder
          :src="ChinaTownShopHouse"
          alt="Chinatown Shophouses"
          class="h-[250px] w-full rounded-xl object-cover"
        />
      </div>

      <div class="space-y-2">
        <ImagePlaceholder
          :src="SheungWan"
          alt="XXX"
          class="h-[250px] w-full rounded-xl object-cover"
        />
      </div>
      <div class="space-y-2 flex my-auto">
        <p>
          Sheung Wan streets preserved along the heritage trail—old migrant
          lanes now marked for tourists.
        </p>
      </div>
    </div>
    <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
      Together, these preserved migrant streetscapes complete our journey from
      entry, exit, emergence, to heritage memory. The 19th-century city that
      migrants built has not disappeared; it re-emerges today as a curated
      story—restored lanes, interpretive signage, and tourist paths that
      transform raw history into meaningful heritage for the cities we know
      today.
    </p>
    <SourcesList :links="sources"></SourcesList>
  </section>
</template>
