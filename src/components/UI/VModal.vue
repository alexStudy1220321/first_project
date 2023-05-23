<template>
  <div v-if="show" @click="emit('close')" class="modal__background">
    <div @click.stop class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  const emit = defineEmits({
    close: null,
  });

  const props = defineProps({
    show: {
      type: Boolean,
      required: true,
    },
  });
</script>

<style scoped>
  .modal__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--vt-c-divider-dark-1);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 50%;
    background-color: var(--vt-c-black-soft);
    padding: 12px;
    border-radius: 8px;
  }
</style>
