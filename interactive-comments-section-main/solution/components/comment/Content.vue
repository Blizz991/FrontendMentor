<template>
  <p class="w-full text-grayish-blue mt-2">
    <!-- Could convert this to something clickable that scrolls to the parent comment -->
    <!-- Another implementation could be to show a preview of the comment it's replying to -->
    <span v-if="replyingTo != ''" class="text-moderate-blue font-medium">@{{ replyingTo }}</span>
    {{ content }}
  </p>
</template>

<script setup>
const props = defineProps({
  content: String,
  replyingTo: {
    type: String,
    default: ""
  }
});
</script>