import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useModalDialogStore = defineStore(
  'modalDialog',
  () => {
    // state
    const isModalDialogOpen = ref<boolean>(false);

    // actions
    const openModalDialog = () => {
      console.log('openModalDialog');
      isModalDialogOpen.value = true;
    };

    const closeModalDialog = () => {
      console.log('closeModalDialog');
      isModalDialogOpen.value = false;
    };

    return {
      isModalDialogOpen,
      openModalDialog,
      closeModalDialog,
    };
});
