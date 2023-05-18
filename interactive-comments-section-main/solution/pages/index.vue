<script setup>
//The following code returns the data correct, but also wraps it in an array
//Which leads to having to specify data[0] to get the single object, which seems silly.
// const { data } = await useAsyncData('home', () =>
//   queryContent('/').find()
// );

//As such I went with this, but I would assume there's a better way to get the content
//How ever, this gets us the full json object directly.
const { data } = await useAsyncData('content-/data', () =>
  queryContent().where({ _path: '/data' }).findOne()
);

</script>
<template>
  <Comments />
</template>