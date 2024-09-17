<script setup lang="ts">
const modalDialogStore = useModalDialogStore();
const { openModalDialog } = modalDialogStore;
</script>

<template>
  <button
    @click="openModalDialog"
    type="button"
  >モーダルを開く</button>
</template>
