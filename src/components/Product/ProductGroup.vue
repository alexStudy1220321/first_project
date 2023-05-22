<template>
  <section class="product-group">
    <input
      class="search-input"
      type="text"
      placeholder="Введите цену или название"
      v-model="filterValue"
    />

    <h2
      v-if="filterValue !== '' && filteredProducts.length === 0"
      class="title"
    >
      Таких товаров нет
    </h2>

    <product-list
      v-else-if="filteredProducts.length > 0"
      :products="filteredProducts"
    />

    <h2 v-else class="title">Загрузка...</h2>
  </section>
</template>

<script setup>
  import { onBeforeMount, ref, computed } from "vue";
  import { getProducts } from "@/helpers/api";

  import ProductList from "@/components/Product/ProductList.vue";

  const products = ref([]);
  const filterValue = ref("");
  const filteredProducts = computed(() => {
    if (filterValue.value === "") {
      return products.value;
    } else {
      return products.value.filter((product) => {
        if (
          isNaN(product.price) === false &&
          String(product.price).includes(filterValue.value)
        ) {
          return true;
        } else if (product.title.toLowerCase().includes(filterValue.value)) {
          return true;
        }

        return false;
      });
    }
  });

  onBeforeMount(async () => {
    products.value = await getProducts();
  });
</script>

<style scoped>
  .product-group {
    display: flex;
    flex-direction: column;
    width: 550px;
    gap: 24px;
  }

  .title {
    text-align: center;
  }

  .search-input {
    text-align: center;
    width: 100%;
    padding: 4px;
  }
</style>
