<template>
  <li>
    <form class="bg-white p-6 rounded-xl flex flex-wrap gap-4 relative w-full">
      <img class="rounded-full h-10 mr-4" :src="currUser.image.png" alt="User avatar" />
      <textarea
        class="rounded-md py-2 px-6
        resize-none flex-1 border-solid border
        border-light-gray
        hover:outline-black hover:outline hover:outline-1
        focus:outline-black focus:outline focus:outline-1"
        name="newComment"
        id="newComment"
        cols="10"
        rows="3"
        placeholder="Add a comment...">
      </textarea>
      <button class="bg-moderate-blue self-start rounded-lg text-white py-3 px-8 hover:opacity-50">SEND</button>
    </form>
  </li>
</template>

<script setup>
const props = defineProps({
  currUser: Object
});
</script>