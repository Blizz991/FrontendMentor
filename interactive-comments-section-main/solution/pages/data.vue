<script setup>
const route = useRoute();

const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
);
</script>
<template>
  <section class="p-8">
    <h1>The raw data from data.json</h1>
    <pre class="overflow-x-auto">
      {{ data }}
    </pre>
  </section>
</template>

