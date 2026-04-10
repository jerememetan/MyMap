<script setup>
import ImagePlaceholder from "../components/atoms/media/ImagePlaceholder.vue";
</script>

<template>
  <section class="library">
    <header>
      <h1>Component Test Library</h1>
      <p>Drop each new atomic component here to validate behavior and usage.</p>
    </header>

    <article class="card">
      <h2>ImagePlaceholder</h2>
      <ImagePlaceholder
        src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600"
        alt="Landscape demo"
        class="demo-image"
      />

      <p>Broken source fallback:</p>
      <ImagePlaceholder
        src="https://example.com/this-image-does-not-exist.jpg"
        alt="Fallback demo"
        class="demo-image"
      />
    </article>
  </section>
</template>

<style scoped>
.library {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 24px;
}

.card {
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px;
  display: grid;
  gap: 12px;
  text-align: left;
}

.demo-image {
  width: 100%;
  max-width: 360px;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid var(--border);
}
</style>
