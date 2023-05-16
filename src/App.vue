<template>
  <section class="products">
    <product-list v-if="products.length > 0" :products="products" />
    <h2 v-else>Загрузка...</h2>
  </section>
</template>

<script setup>
  import ProductList from "@/components/Product/ProductList.vue";
  import { onBeforeMount, ref } from "vue";
  import { getProducts } from "@/helpers/api";

  const products = ref([]);

  onBeforeMount(async () => {
    products.value = await getProducts();
  });
</script>

<style scoped>
  .products {
    padding: 24px;
  }
</style>
