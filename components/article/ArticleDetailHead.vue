<script setup lang="ts">
import { onMounted } from 'vue';
import type { ApiBrowsingArtworkData } from "~/types/";

interface Props {
  data: ApiBrowsingArtworkData;
}

const props = defineProps<Props>();

onMounted(() => {
  console.log('onMounted ArticleDetailHead');
});
</script>

<template>
  <div class="articleDetailHead">
    <p class="articleDetailHead__id">{{ props.data.artwork_id }}</p>
    <p class="articleDetailHead__word">
      <span class="articleDetailHead__wordJp">{{ props.data.word_jp_1 }}</span>
      <span class="articleDetailHead__wordEn">{{ props.data.word_en_1 }}</span>
    </p>
  </div>
</template>

<style scoped>
.articleDetailHead {
  background-color: #ccc;
  padding: 2em;
}
.articleDetailHead__word {
  display: flex;
  flex-direction: column;
}

.articleDetailHead__wordEn {
  font-size: 70%;
}
</style>
