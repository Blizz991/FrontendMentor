<script setup>
const route = useRoute();

const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
);
</script>
<template>
  <section>
    <h1>The raw data from data.json</h1>
    <pre>
      {{ data }}
    </pre>
  </section>
</template>

