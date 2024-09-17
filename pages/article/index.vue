<script setup lang="ts">
import { onMounted } from 'vue';
import ArticleDetail from '~/components/article/ArticleDetail.vue';

const route = useRoute();

const autoplay = ref<'0' | '1'>('0');
const id = ref<string | null>(null);

const onFetched = () => {
  console.log('onFetched');
}

onMounted(() => {
  console.log(route.query);
  const routeAutoPlay = route.query.autoplay as string | undefined;
  const routeId = route.query.artwork_id as string | undefined;
  autoplay.value = routeAutoPlay === '1' ? '1' : '0'; // パラメータに autoplay=1 で自動再生
  if (routeId) {
    id.value = routeId;
    console.log(id.value);
  }
  // if (import.meta.client) {
  // }
});
</script>

<template>
  <section>
    <p>作品詳細ページ</p>
    <button
      @click="$router.go(-1)"
      class="historyBack"
    >
      <span><svg class="lg:group-hover:-translate-y-[65px] lg:group-hover:opacity-0 transition-all duration-200" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="inherit" stroke-width="inherit" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
      <span>History Back</span>
    </button>
    <ArticleDetail
      v-if="id"
      :autoplay="autoplay"
      :id="id"
      :type="'page'"
      @fetched:child="onFetched"
    />
  </section>
</template>

<style scoped>
.historyBack {
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 80%;
  padding: 0.3em;
}
</style>
