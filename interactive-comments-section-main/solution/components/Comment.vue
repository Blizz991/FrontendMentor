<template>
  <article class="bg-white p-6 rounded-xl flex flex-wrap relative">
    <CommentScore :score="comment.score" />
    <section class="flex flex-1 flex-wrap">
      <CommentInfo :isCurrUser="isCurrUser" :user="comment.user" :createdAt="comment.createdAt" />
      <!-- Bit countintuitive to send the current user down, maybe usecase for helper functions or similar? -->
      <CommentActions :isCurrUser="isCurrUser" />
      <CommentContent :content="comment.content" />
    </section>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  comment: Object,
  currentUsername: Object
});

const isCurrUser = computed(() => {  
  return props.comment.user.username == props.currentUsername
});
</script>