<script setup>
import MapPlaceholder from "../../atoms/MapPlaceholder.vue";
import ImagePlaceholder from "../../atoms/ImagePlaceholder.vue";
import SourcesList from "../../atoms/SourcesList.vue";
import EmergenceTemple from "../../../assets/img/EmergenceSriTemple.jpg";
import EmergenceManMo from "../../../assets/img/EmergenceManMo.jpg";

const sources = [
  {
    label: "Sri Mariamman Temple (NLB)",
    href: "https://www.nlb.gov.sg/main/article-detail?cmsuuid=f4cc6f9a-ba52-4a91-bc85-e7232c2e572b",
  },
  {
    label: "Sri Mariamman in Chinatown",
    href: "https://chinatown.sg/visit/sri-mariamman-temple/",
  },
  {
    label: "Sri Mariamman Preservation Notes",
    href: "https://www.inheritage.foundation/blog/heritage/sri-mariamman-temple-singapore",
  },
  {
    label: "Man Mo Temple History",
    href: "https://www.man-mo-temple.hk/history/",
  },
  {
    label: "Man Mo Temple Then and Now",
    href: "https://www.j3consultantshongkong.com/j3c-blog/then-and-now-in-hong-kong-the-iconic-man-mo-temple",
  },
  {
    label: "Man Mo Temple (Gov website)",
    href: "https://www.gohk.gov.hk/en/spots/spot_detail.php?spot=Man+Mo+Temple%2C+Sheung+Wan",
  },
];
</script>

<template>
  <section
    id="sri_mariamman"
    class="space-y-6 rounded-2xl border border-[var(--border)] bg-emerald-500/10 p-6 md:p-8"
  >
    <header class="space-y-3">
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-4xl font-light text-red-900">7</span>
        <h2 class="text-3xl leading-tight text-[var(--text-h)]">
          Sri Mariamman (Singapore) - Man Mo Temple (Hong Kong)
        </h2>
      </div>
      <h1 class="pb-5">Mixed-Cultural Streetscape</h1>
      <p
        class="inline-flex rounded-full bg-stone-100 px-3 py-1 text-md text-stone-700"
      >
        1840s - 1940s
      </p>
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        After seeing the “entry” and “exit” of different communities coming to
        both Singapore and Hong Kong, we can already notice a shift: the city
        starts to feel less like a collection of separate enclaves and more like
        a “community of communities”. This overlap of groups did not just
        produce coexistence; it eventually led to the idea of “emergence”, where
        mixed‑cultural streetscapes begin to form in both cities. Two clear
        examples that I want to highlight are Sri Mariamman Temple in Singapore
        and the Man Mo Temple area in Hong Kong.
      </p>
      <br />
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        In Singapore, <b>Sri Mariamman Temple</b>, built in 1827, stands at the
        heart of this emerging mixed‑cultural streetscape in Little India. Hindu
        ritual life around the temple increasingly overlaps with Chinese‑linked
        commerce and later Malay‑linked presence in the surrounding lanes, so
        that the narrow streets themselves become shared spaces where
        processions, incense, and street stalls pull together Hindu, Chinese,
        and Malay‑linked worlds. This is not just Hindu life in isolation, but a
        Hindu‑linked node embedded in a broader, mixed‑cultural urban fabric
        that people simply lived through, rather than treated as “heritage”.
      </p>
      <br />
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        In Hong Kong, a similar kind of mixed‑cultural streetscape emerges
        around <b>Man Mo Temple</b> in Sheung Wan. From the 1840s onward, the
        temple anchors a dense network of Chinese merchants, herbalists, and
        small shrines, so that the streets around it feel layered with Buddhist,
        Taoist, and Confucian practices mixed into everyday commerce. As people
        walk through this area, they move through a space that already carries
        the traces of multiple religious and cultural traditions, making the
        street itself the main site where this new “mixed‑cultural” landscape
        comes into being—before it is later turned into a curated heritage
        story.
      </p>
    </header>

    <div class="grid gap-5 md:grid-cols-2">
      <MapPlaceholder
        class="w-full"
        title="Sri Mariamman Temple"
        subtitle="Singapore"
        :latitude="1.2829280370091092"
        :longitude="103.84513546671168"
      />
      <MapPlaceholder
        class="w-full"
        title="Man Mo Temple"
        subtitle="Hong Kong"
        :latitude="22.284312452820128"
        :longitude="114.15039101271877"
      />
    </div>

    <div class="grid gap-5 md:grid-cols-2">
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        💡 Around Sri Mariamman, you can see Hindu temples (Masjid Jamae) and
        Chinese banks mix in the same streets as well.
      </article>
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        💡 Around Man Mo Temple, Chinese halls, Buddhist shrines, and herbal
        shops crowd the same lanes.
      </article>
    </div>
    <div class="grid gap-5 md:grid-cols-2">
      <div class="space-y-2">
        <ImagePlaceholder
          :src="EmergenceTemple"
          alt="Temple"
          class="w-full rounded-xl object-cover"
        />
      </div>
      <div class="my-auto mx-auto text-xl">
        <p>
          Sri Mariamman Temple streetscape, early 20th century – Hindu temple
          embedded among Chinese shops and signage.
        </p>
      </div>
      <div class="my-auto mx-auto text-xl">
        <p>
          Sheung Wan streetscape near Man Mo Temple, early 20th century –
          Chinese temples and shops crowd the same lanes.
        </p>
      </div>

      <div class="space-y-2">
        <ImagePlaceholder
          :src="EmergenceManMo"
          alt="Tung Wha Hospital"
          class="aspect-square w-full rounded-xl object-cover"
        />
      </div>
    </div>
    <div>
      Together, Sri Mariamman in Singapore and Man Mo Temple in Hong Kong show
      how the “emergence” of mixed‑cultural streetscapes in the 19th and early
      20th centuries created a new kind of urban space. In both cities, Hindu,
      Chinese, Buddhist, and other traditions began to share the same streets,
      so that the lane itself became a shared ritual and commercial ground. This
      early mixing of communities laid the groundwork for the streetscapes we
      see today, even though their meaning would later shift from lived
      experience to heritage memory.
    </div>
    <SourcesList :links="sources"></SourcesList>
  </section>
</template>
