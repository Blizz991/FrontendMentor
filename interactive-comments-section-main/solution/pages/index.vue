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
  <section>
    <h2>This is the default page content</h2>
    <h3>Hello test {{ data.currentUser.username }}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non dolorem officiis debitis, nihil optio inventore
      expedita ullam nemo cumque temporibus quidem ut voluptates nam! Totam tenetur fugiat reprehenderit nostrum!</p>
      <pre>
        {{ data }}
      </pre>
  </section>
</template>