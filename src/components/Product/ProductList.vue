<template>
  <ul class="product-list">
    <product-item
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></product-item>
  </ul>
</template>

<script setup>
  import ProductItem from "@/components/Product/ProductItem.vue";

  const props = defineProps({
    products: {
      type: Array,
      required: true,
    },
  });
</script>

<style scoped>
  .product-list {
    padding: 12px;
    background-color: var(--color-background-mute);

    overflow-y: scroll;

    max-height: 680px;

    display: flex;
    flex-direction: column;
    gap: 24px;
  }
</style>
