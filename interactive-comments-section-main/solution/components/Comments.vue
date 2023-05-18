<template>
  <ul class="max-w-[720px]">
    <li v-for="comment in data.comments" class="mb-5 last-of-type:mb-0">
      <Comment :comment="comment" />
      <ul v-for="reply in comment.replies" class="ml-10 pt-5 pl-10 border-l-2 first-of-type:pt-0 first-of-type:mt-5">
        <li class="mb-5 last-of-type:mb-0">
          <Comment :comment="reply" :currentUsername="data.currentUser.username" />
        </li>
      </ul>
    </li>
    <CommentCreate :currUser="data.currentUser" />
  </ul>
  
</template>

<script setup>
const props = defineProps({
  data: Object,
});
</script>