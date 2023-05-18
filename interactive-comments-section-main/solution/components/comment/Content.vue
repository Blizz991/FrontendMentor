<template>
  <p class="w-full text-grayish-blue mt-2">
    <!-- Show span if this is a reply to another comment -->
    <!-- <span>@REPLYINGTO</span> -->
    {{ content }}
  </p>
</template>

<script setup>
const props = defineProps({
  content: String,
});
</script>