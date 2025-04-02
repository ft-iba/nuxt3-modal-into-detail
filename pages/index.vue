<script setup lang="ts">
import { ref } from 'vue';
import ArticleDetail from "~/components/article/ArticleDetail.vue";
import ModalDialog from "~/components/ModalDialog.vue";
const modalDialogStore = useModalDialogStore();
const { openModalDialog } = modalDialogStore;

const runtimeConfig = useRuntimeConfig();

const targetId = ref<string>('');

const onButtonClick = (id: string) => {
  if (id !== targetId.value) {
    console.log('作品詳細idを変更');
    targetId.value = id;
  } else {
    openModalDialog();
  }
}
</script>

<template>
  <section>
    <p>Commit Hash: {{ runtimeConfig.public.commitHash }}</p>
    <p>モーダルの中に作品詳細を表示</p>
    <ul>
      <li>
        <button
          @click="onButtonClick('0')"
          type="button"
        >作品id 0 を表示</button>
      </li>
      <li>
        <button
          @click="onButtonClick('1')"
          type="button"
        >作品id 1 を表示</button>
      </li>
    </ul>

    <p>作品詳細ページに遷移</p>
    <ul>
      <li>
        <NuxtLink to="/article?artwork_id=0">
          <span>作品id 0 詳細ページ</span>
          <span><svg class="lg:group-hover:-translate-y-[65px] lg:group-hover:opacity-0 transition-all duration-200" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg" style=""><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="inherit" stroke-width="inherit" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/article?artwork_id=1">
          <span>作品id 1 詳細ページ</span>
          <span><svg class="lg:group-hover:-translate-y-[65px] lg:group-hover:opacity-0 transition-all duration-200" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg" style=""><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="inherit" stroke-width="inherit" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
        </NuxtLink>
      </li>
    </ul>

    <ModalDialog>
      <ArticleDetail
        v-if="targetId"
        :id="targetId"
        :autoplay="'0'"
        :type="'modal'"
        @fetched:child="openModalDialog"
      />
    </ModalDialog>
  </section>
</template>

<style scoped>
p {
  margin-top: 1em;
  margin-bottom: 0.4em;
}

a {
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
}
</style>
