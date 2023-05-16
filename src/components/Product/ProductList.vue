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
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
</style>
