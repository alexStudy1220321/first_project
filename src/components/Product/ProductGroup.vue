<template>
  <section class="product-group">
    <product-manager
      @product-create="addProduct"
      v-model:filterValue="filterValue"
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
  import ProductManager from "@/components/Product/ProductManager/TheProductManager.vue";

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

  function addProduct(values) {
    products.value.unshift({
      id: Math.floor(Math.random() * 10000000000000),
      title: values.name,
      price: values.price,
      description: "",
      category: values.category,
      image: values.image,
      rating: {
        rate: 5,
        count: 100,
      },
    });
  }

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
</style>
