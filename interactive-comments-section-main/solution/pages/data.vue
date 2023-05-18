<script setup>
const route = useRoute();

const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
);
</script>
<template>
  <section>
    <ul>
      <li v-for="comment in data.comments">{{ comment }}</li>
    </ul>
    <!-- <pre>
      {{ data }}
    </pre> -->
  </section>
</template>

