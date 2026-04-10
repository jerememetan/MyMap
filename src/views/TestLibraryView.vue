<script setup>
import ImagePlaceholder from "../components/atoms/media/ImagePlaceholder.vue";
import InteractiveMapLine from "../components/atoms/media/InteractiveMapLine.vue";
import MapPlaceholder from "../components/atoms/media/MapPlaceholder.vue";

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? "";
</script>

<template>
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
  </section>
</template>
