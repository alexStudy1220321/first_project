<template>
  <v-modal :show="show">
    <h1>{{ message }}</h1>
  </v-modal>
</template>

<script setup>
  import VModal from "./VModal.vue";

  const props = defineProps({
    show: {
      type: Boolean,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  });
</script>

<style scoped></style>
