<template>
  <div class="flex flex-1 items-center">
    <img class="rounded-full h-8 mr-4" :src="user.image.png" alt="User avatar" />
    <h2 class="font-medium text-dark-blue mr-2">{{ user.username }}</h2>
    <!-- TODO: Only show if user is YOU -->
    <span v-if="isCurrUser"
      class="bg-moderate-blue text-sm font-medium text-white leading-4 rounded-sm py-0.5 px-1 mr-2">you</span>
    <span class="ml-2 text-grayish-blue">{{ createdAt }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  isCurrUser: Boolean,
  user: Object,
  createdAt: String
});
</script>