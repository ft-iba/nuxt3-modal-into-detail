<script setup lang="ts">
import { onMounted } from 'vue';
import type { ApiBrowsingArtworkData } from "~/types/";

interface Props {
  data: ApiBrowsingArtworkData;
}

const props = defineProps<Props>();

const onClickInspiration = () => {
  console.log('onClickInspiration', props.data.artwork_id);
}

onMounted(() => {
  console.log('onMounted ArticleDetailBody');
});
</script>

<template>
  <div class="articleDetailBody">
    <p class="articleDetailBody__inspiration">
      <button
        @click="onClickInspiration"
        class="articleDetailBody__inspirationButton"
      >
        <svg class="lg:group-hover:-translate-y-[65px] lg:group-hover:opacity-0 transition-all duration-200" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg" style=""><path d="M16.1111 3C19.6333 3 22 6.3525 22 9.48C22 15.8138 12.1778 21 12 21C11.8222 21 2 15.8138 2 9.48C2 6.3525 4.36667 3 7.88889 3C9.91111 3 11.2333 4.02375 12 4.92375C12.7667 4.02375 14.0889 3 16.1111 3Z" stroke="inherit" stroke-width="inherit" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </button>
    </p>
    <p class="articleDetailBody__place">
      <span class="articleDetailBody__placeName">{{ props.data.spot_info.place_name }}</span>
    </p>
    <p class="articleDetailBody__take_date">{{ props.data.take_date }}</p>
  </div>
</template>

<style scoped>
.articleDetailBody {
  background-color: #aaa;
  padding: 2em;
}
</style>
