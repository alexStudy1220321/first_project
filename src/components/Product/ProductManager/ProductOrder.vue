<template>
  <div class="w-full">
    <v-form
      :inputs="inputs"
      :show="show"
      @close="show = !show"
      @submit="onSubmit"
      @updateInput="inputs[$event.index].value = $event.value"
    />

    <button @click="show = true" class="w-full padding text-center">
      Отправить заказ
    </button>
  </div>
</template>

<script setup>
  import { reactive, ref } from "vue";
  import { useField, useForm } from "vee-validate";

  import VForm from "@/components/UI/Form/VForm.vue";

  const emit = defineEmits({
    orderSend: null,
  });

  const show = ref(false);

  const { handleSubmit, resetForm } = useForm();

  const { value: nameField, errorMessage: nameFieldError } = useField(
    "name",
    function (value) {
      if (value === "") {
        return "Данное поле обязательно к заполнению";
      }

      if (value.search(/^([^\s]+)\s([^\s]+)((\s([^\s]+)$)|$)/) === -1) {
        return "Количество слов должно быть равно 2 или 3";
      }

      return true;
    },
    {
      initialValue: "",
    }
  );
  const { value: emailField, errorMessage: emailFieldError } = useField(
    "email",
    function (value) {
      if (value === "") {
        return "Данное поле обязательно к заполнению";
      }

      if (
        value.search(
          /^[a-zA-Zа-яёА-ЯЁ0-9.]+@([a-zA-Zа-яёА-ЯЁ0-9]+\.|)[a-zA-Zа-яёА-ЯЁ0-9]+\.[a-zA-Zа-яёА-ЯЁ]+$/
        ) === -1
      ) {
        return "Поле должно иметь формат name@[subdomain.](SDL).(TLD)";
      }

      return true;
    },
    {
      initialValue: "",
    }
  );

  const { value: countryField, errorMessage: countryFieldError } = useField(
    "category",
    function (value) {
      if (value === "") {
        return "Данное поле обязательно к заполнению";
      }

      if (value.length < 3) {
        return "Введите больше 3 символов";
      }

      return true;
    },
    {
      initialValue: "",
    }
  );

  const { value: locationField, errorMessage: locationFieldError } = useField(
    "imageLink",
    function (value) {
      if (value === "") {
        return "Данное поле обязательно к заполнению";
      }

      if (value.length < 3) {
        return "Введите больше 3 символов";
      }

      return true;
    },
    {
      initialValue: "",
    }
  );

  const inputs = reactive([
    {
      placeholder: "Введите ФИ или ФИО (через пробел)",
      type: "text",
      error: nameFieldError,
      value: nameField,
    },
    {
      placeholder: "Введите почту",
      type: "text",
      error: emailFieldError,
      value: emailField,
    },
    {
      placeholder: "Введите страну",
      type: "text",
      error: countryFieldError,
      value: countryField,
    },
    {
      placeholder: "Введите адрес",
      type: "text",
      error: locationFieldError,
      value: locationField,
    },
  ]);

  const onSubmit = handleSubmit((values) => {
    show.value = false;
    emit("orderSend", values);
    resetForm();
  });
</script>

<style scoped></style>
