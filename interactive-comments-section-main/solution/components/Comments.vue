<template>
  <ul class="max-w-[720px] ">
    <li v-for="comment in data.comments" class="mb-5 last-of-type:mb-0">
      <Comment :comment="comment" />
      <ul v-for="reply in comment.replies" class="mt-5 ml-10 pl-10 border-l-2">
        <li class="mb-5 last-of-type:mb-0">
          <Comment :comment="reply" :currentUsername="data.currentUser.username" />
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  data: Object,
});
</script>