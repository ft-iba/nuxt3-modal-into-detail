<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useModalDialogStore } from '~/composables/useModalDialog';

const modalDialogStore = useModalDialogStore();
const { closeModalDialog } = modalDialogStore;
const node = ref<HTMLDialogElement | null>(null);

// computed で isModalDialogOpen をラップする
const isModalDialogOpen = computed(() => modalDialogStore.isModalDialogOpen);

onMounted(() => {
  watch(isModalDialogOpen, (newValue) => {
    if (!node.value) return;
    if (newValue) {
      node.value.showModal();
    } else {
      node.value.close();
    }
  });
});

onBeforeUnmount(() => {
  if (node.value && node.value.open) {
    node.value.close();
  }
});
</script>

<template>
  <dialog
    ref="node"
    @close="closeModalDialog"
    class="modalDialog"
    :data-active="isModalDialogOpen"
    >
      <button
        @click="closeModalDialog"
        class="modalDialog__close"
        type="button"
      >
      <span><svg class="lg:group-hover:-translate-y-[65px] lg:group-hover:opacity-0 transition-all duration-200" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="inherit" stroke-width="inherit" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
      <span>Modal Dialogを閉じる</span>
    </button>
      <slot />
  </dialog>
</template>

<style scoped>
.modalDialog {
  overflow: visible;
  transition: opacity 0.3s, scale 0.3s;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 100%;
}

.modalDialog:not([data-active="true"]) {
  opacity: 0;
  scale: 0.99;
}

.modalDialog::backdrop {
  background-color: rgba(#000, 0.4);
  backdrop-filter: blur(2px);
  transition: opacity 0.3s;
}

.modalDialog:not([data-active="true"])::backdrop {
  opacity: 0;
}


.modalDialog__close {
  display: flex;
  gap: 0.3em;
  font-size: 80%;
  padding: 0.3em;
}
</style>