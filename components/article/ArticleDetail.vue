<script setup lang="ts">
import { ref, watch } from 'vue';
import ArticleDetailBody from '~/components/article/ArticleDetailBody.vue'
import ArticleDetailHead from '~/components/article/ArticleDetailHead.vue'
import type {
  ArticleDetailType,
  ApiBrowsingArtworkData
} from "~/types/";

interface Props {
  id: string;
  autoplay: '0' | '1';
  type: ArticleDetailType;
}

const props = defineProps<Props>();

const data = ref<ApiBrowsingArtworkData>();
const errorMessage = ref<string | null>(null);

const emit = defineEmits<{
  (e: 'fetched:child'): void
}>();

const fetchData = async(id: string): Promise<void> => {
  console.log('fetchData', id);
  // TODO: API から取得
  // const endPoint = `/api/browsing/artwork/${id}`;
  // const options = {
  //   "method": 'POST',
  //   "headers": {
  //     "Authorization": `todo-id-token`,
  //     "x-api-key": `todo-api-key`,
  //     "Content-Type": "application/json"
  //   }
  // };
  const endPoint = `/json/api/browsing/artwork.json`;
  const options = {};
  try {
    const response = await fetch(endPoint, options);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const json = await response.json();
    console.log({ json });
    // data.value = structuredClone(json.data);
    data.value = structuredClone(json.data[Number(id)]);
    emit('fetched:child');
  } catch (error: unknown) {
    if (error instanceof Error) {
      errorMessage.value = error.message || 'データの取得中にエラーが発生しました';
    }
  }
};

watch(() => props.id, (newId, oldId) => {
  console.log('watch', newId, oldId);
  if (newId !== oldId) {
    console.log('作品idが変更されたのでdataをfetch');
    fetchData(newId);
  }
}, { immediate: true });
</script>

<template>
  <div class="articleDetail">
    <p>[作品詳細] components articleDetail</p>
    <template v-if="props.type === 'page'">
    </template>

    <template v-if="errorMessage">
      <p>{{ errorMessage }}</p>
    </template>
    <template v-else-if="data">
      <p>{{ data.artwork_id }}</p>
      <ArticleDetailHead :data="data" />
      <ArticleDetailBody :data="data" />
    </template>
    <template v-else>
      <p>読み込み中...</p>
    </template>
    <div class="articleDetail__status">
      type: {{ props.type }} autoplay: {{ props.autoplay === '1' }}
    </div>
  </div>
</template>

<style scoped>
.articleDetail {
  background-color: #eee;
  width: 50vw;
}
</style>
