<template>
  <div class="product-manager">
    <VRequest :show="loading" :message="requestgMessage" />

    <input
      class="w-full padding text-center"
      type="text"
      placeholder="Введите цену или название товара"
      @input="emit('update:filterValue', $event.target.value)"
    />

    <product-create @create="emit('productCreate', $event)" />

    <product-order @order-send="sendOrderHandler" />
  </div>
</template>

<script setup>
  import { ref } from "vue";

  import ProductCreate from "@/components/Product/ProductManager/ProductCreate.vue";
  import ProductOrder from "@/components/Product/ProductManager/ProductOrder.vue";
  import VRequest from "@/components/UI/VRequest.vue";

  import { sendOrder } from "@/helpers/api";

  const emit = defineEmits({
    "update:filterValue": null,
    productCreate: null,
  });

  const loading = ref(false);
  const requestgMessage = ref("");

  async function sendOrderHandler() {
    let ms = 2000;
    loading.value = true;
    requestgMessage.value = "Отправляем запрос...";

    try {
      await sendOrder();
      requestgMessage.value = "Запрос успешно обработан";
    } catch (e) {
      console.error(e);
      ms = 3000;
      requestgMessage.value = `Ошибка в загрузке данных ${e}`;
    } finally {
      setTimeout(() => {
        loading.value = false;
      }, ms);
    }
  }
</script>

<style scoped>
  .product-manager {
    display: flex;
    flex-direction: column;

    gap: 12px;
  }
</style>
