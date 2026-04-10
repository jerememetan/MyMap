<script setup>
import ImagePlaceholder from "../components/atoms/ImagePlaceholder.vue";
import InteractiveMapLine from "../components/atoms/InteractiveMapLine.vue";
import MapPlaceholder from "../components/atoms/MapPlaceholder.vue";
import Timeline from "../components/atoms/Timeline.vue";

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? "";

const timelineSections = [
  {
    id: "timeline-demo-1",
    number: 1,
    title: "Origins",
    timeline: "1820s-1840s",
  },
  {
    id: "timeline-demo-2",
    number: 2,
    title: "Migration",
    timeline: "1850s-1870s",
  },
  {
    id: "timeline-demo-3",
    number: 3,
    title: "Settlement",
    timeline: "1880s-1900s",
  },
  {
    id: "timeline-demo-4",
    number: 4,
    title: "Exchange",
    timeline: "1900s-1920s",
  },
  {
    id: "timeline-demo-5",
    number: 5,
    title: "Legacy",
    timeline: "1930s-1950s",
  },
];
</script>

<template>
  <Timeline :sections="timelineSections" />

  <section class="library-page">
    <header>
      <h1>Component Test Library</h1>
      <p>Drop each new atomic component here to validate behavior and usage.</p>
    </header>

    <article class="library-card">
      <h2>ImagePlaceholder</h2>
      <ImagePlaceholder
        src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600"
        alt="Landscape demo"
        class="library-demo-image"
      />

      <p>Broken source fallback:</p>
      <ImagePlaceholder
        src="https://example.com/this-image-does-not-exist.jpg"
        alt="Fallback demo"
        class="library-demo-image"
      />
    </article>

    <article class="library-card">
      <h2>MapPlaceholder</h2>
      <p>Google Maps embed with coordinate pin (Kuala Lumpur):</p>
      <MapPlaceholder
        class="library-demo-map"
        :latitude="1.3007326"
        :longitude="103.8486256"
        title="Funan"
        subtitle="Shopping Mall"
      />

      <p>Google Maps embed with no title and subtitle:</p>
      <MapPlaceholder
        class="library-demo-map"
        :loading="true"
        :latitude="35.6762"
        :longitude="139.6503"
        :title="null"
        :subtitle="null"
      >
        <small class="library-demo-map-caption"
          >Try replacing this with legend/filter controls.</small
        >
      </MapPlaceholder>
    </article>

    <article class="library-card">
      <h2>InteractiveMapLine (Google Maps JS API)</h2>
      <p>
        True interactive map with two markers connected by a straight polyline.
      </p>
      <InteractiveMapLine
        class="library-demo-map"
        :api-key="googleMapsApiKey"
        :latitude="3.1579"
        :longitude="101.7123"
        :latitude2="3.1394"
        :longitude2="101.699"
        :zoom="13"
      />
    </article>

    <article class="library-card">
      <h2>Timeline</h2>
      <p>Scroll-reactive progress timeline for the main page sections.</p>

      <section id="timeline-demo-1" class="timeline-demo-section">
        <h3>1. Origins</h3>
        <p>Foundational context and first reference point.</p>
      </section>

      <section id="timeline-demo-2" class="timeline-demo-section">
        <h3>2. Migration</h3>
        <p>Movement between nodes and early network formation.</p>
      </section>

      <section id="timeline-demo-3" class="timeline-demo-section">
        <h3>3. Settlement</h3>
        <p>Where communities established stable anchors.</p>
      </section>

      <section id="timeline-demo-4" class="timeline-demo-section">
        <h3>4. Exchange</h3>
        <p>Cross-cultural interactions that shaped local identity.</p>
      </section>

      <section id="timeline-demo-5" class="timeline-demo-section">
        <h3>5. Legacy</h3>
        <p>Modern-day traces and continuity into current urban fabric.</p>
      </section>
    </article>
  </section>
</template>
