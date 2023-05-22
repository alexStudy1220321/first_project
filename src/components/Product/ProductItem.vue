<template>
  <li class="product-item">
    <section class="image">
      <img :src="product.image" :alt="product.title" class="item" />
    </section>

    <section class="description">
      <span>{{ product.title }}</span>
      <span class="category">{{ product.category }}</span>
      <span>{{ product.price }}</span>
      <span>{{ product.rating.rate }} | {{ product.rating.count }}</span>
    </section>
  </li>
</template>

<script setup>
  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
</script>

<style scoped>
  .product-item {
    display: flex;
    justify-content: space-between;
  }

  .image {
    width: 90px;
    height: 90px;
  }

  .image > .item {
    max-height: 90px;
    max-width: 90px;
    border-radius: 5px;
  }

  .description {
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .description > .category {
    text-transform: uppercase;
    text-decoration: underline;
  }
</style>
