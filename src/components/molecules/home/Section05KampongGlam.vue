<script setup>
import MapPlaceholder from "../../atoms/MapPlaceholder.vue";
import SourcesList from "../../atoms/SourcesList.vue";
import ImagePlaceholder from "../../atoms/ImagePlaceholder.vue";
import KowloonMosque from "../../../assets/img/KowloonMosque.jpg";
import SultanMosque from "../../../assets/img/SultanMosque.jpg";
const sources = [
  {
    label: "Sultan Mosque (NLB)",
    href: "https://www.nlb.gov.sg/main/article-detail?cmsuuid=12ffc367-4687-4c85-beb6-b5779a42983f",
  },
  {
    label: "Sultan Mosque Wikipedia",
    href: "https://en.wikipedia.org/wiki/Sultan_Mosque",
  },
  {
    label: "Kampong Glam's Malay Heritage and Community",
    href: "https://www.everydaytourcompany.com/exploring-kampong-glam-the-heart-of-singapores-malay-heritage/",
  },
  {
    label: "Kowloon Mosque",
    href: "https://gwulo.com/kowloon-mosque",
  },
  {
    label: "Kowloon Mosque and Islamic Centre",
    href: "https://islamicheritage.co.za/kowloon-masjid-and-islamic-centre/",
  },
];
</script>

<template>
  <section
    id="kampong_glam"
    class="space-y-6 rounded-2xl border border-[var(--border)] bg-white/5 p-6 md:p-8"
  >
    <header class="space-y-3">
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-4xl font-light text-red-900">5</span>
        <h2 class="text-3xl leading-tight text-[var(--text-h)]">
          Kampong Glam (Singapore) - Kowloon Mosque area (Hong Kong)
        </h2>
      </div>
      <h1 class="pb-5">Malay Muslim presence</h1>
      <p
        class="inline-flex rounded-full bg-stone-100 px-3 py-1 text-md text-stone-700"
      >
        1860s–1940s
      </p>
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        As Chinese communities spread through Singapore and Hong Kong from the
        1860s onward, Malay‑linked and South Asian Muslims also settled into
        both of these cities, living side‑by‑side with a Chinese‑major hẹn
        population. Mosques and Muslim quarters became their main way of
        “exiting” that Chinese‑dominant frame and stepping into a minority
        religious‑cultural space of their own. In both places, a central mosque
        acts as the anchor for the Malay‑Muslim community.
      </p>
      <br />
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        In Singapore, <b>Kampong Glam</b> is the clearest example: anchored by
        Masjid Sultan and surrounded by Malay‑run shops and homes, it feels like
        its own world, even though it sits in the middle of a Chinese‑majority
        city. The Sultan Mosque holds the community together, giving
        Malay‑Muslim life a clear center.
      </p>
      <br />
      <p class="text-[15px] leading-relaxed text-[var(--text)] pt-3">
        In Hong Kong, the same idea plays out around <b>Kowloon Mosque</b>,
        built in 1896. When Malay‑linked and South Asian Muslims gather there
        for prayers or festivals, they briefly step out of the Chinese‑majority
        city and into a space where language, dress, and ritual mark them as a
        distinct community—turning the mosque into a concrete “exit point” where
        they reaffirm who they are.
      </p>
    </header>

    <div class="grid gap-5 md:grid-cols-2">
      <MapPlaceholder
        class="w-full"
        title="Kampong Glam"
        subtitle="Singapore"
        :latitude="1.3020384779010505"
        :longitude="103.85959568964856"
      />
      <MapPlaceholder
        class="w-full"
        title="Kowloon Mosque"
        subtitle="Hong Kong"
        :latitude="22.29910948955547"
        :longitude="114.17162711038877"
      />
    </div>

    <div class="grid gap-5 md:grid-cols-2">
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        Kampong Glam, also known as the "Muslim Quarter", centralized around the
        Sultan Mosque.
      </article>
      <article
        class="rounded-xl border border-dashed border-stone-300 p-4 text-md text-white"
      >
        Kowloon Mosque, built in 1896, anchored Muslim troops and the local
        Malay‑linked community.
      </article>
    </div>
    <div class="grid gap-5 md:grid-cols-2 mb-13">
      <div class="space-y-2">
        <ImagePlaceholder
          
          :src="SultanMosque"
          alt="Sultan Mosque"
          class="h-full w-full rounded-xl object-cover"
        />
        <p>Sultan Mosque</p>
      </div>
      <div class="space-y-2">
        <ImagePlaceholder
          :src="KowloonMosque"
          alt="Kowloon Mosque"
          class="h-full w-full rounded-xl object-cover"
        />
        <p>Kowloon Mosque</p>
      </div>
    </div>
    <div>
      Taken together, Kampong Glam and the Kowloon Mosque area show how
      Malay‑linked Muslims used mosques and Muslim quarters as “exit points”
      from the Chinese‑majority city around them. Even as they lived and worked
      inside that world, these spaces allowed them to step into a minority
      religious‑cultural frame—making the idea of “exit” not an escape, but a
      way of holding on to who they are.
    </div>
    <SourcesList :links="sources"></SourcesList>
  </section>
</template>
