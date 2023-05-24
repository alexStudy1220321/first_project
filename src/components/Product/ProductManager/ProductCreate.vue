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
      Создать товар
    </button>
  </div>
</template>

<script setup>
  import { reactive, ref } from "vue";
  import { useField, useForm } from "vee-validate";

  import VForm from "@/components/UI/Form/VForm.vue";

  const emit = defineEmits({
    create: null,
  });

  const show = ref(false);

  const { handleSubmit, resetForm } = useForm();

  const { value: nameField, errorMessage: nameFieldError } = useField(
    "name",
    function (value) {
      if (value === undefined) {
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
  const { value: priceField, errorMessage: priceFieldError } = useField(
    "price",
    function (value) {
      if (value === undefined) {
        return "Данное поле обязательно к заполнению";
      }

      if (isNaN(value)) {
        return "Поле должно быть числом";
      }

      if (Number(value) < 0) {
        return "Число должно быть больше нуля";
      }

      return true;
    },
    {
      initialValue: "0",
    }
  );

  const { value: categoryField, errorMessage: categoryFieldError } = useField(
    "category",
    function (value) {
      if (value === undefined) {
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

  const { value: imageLinkField, errorMessage: imageLinkFieldError } = useField(
    "imageLink",
    function (value) {
      if (value !== undefined) {
        if (value.search(/https?:\/\//) === -1) {
          return "Ссылка должна содержать http(s)://";
        }
      }

      return true;
    },
    {
      initialValue: "",
    }
  );

  const inputs = reactive([
    {
      placeholder: "Введите название",
      type: "text",
      error: nameFieldError,
      value: nameField,
    },
    {
      placeholder: "Введите цену",
      type: "number",
      error: priceFieldError,
      value: priceField,
    },
    {
      placeholder: "Введите категорию",
      type: "text",
      error: categoryFieldError,
      value: categoryField,
    },
    {
      placeholder: "Введите ссылку на картинку",
      type: "text",
      error: imageLinkFieldError,
      value: imageLinkField,
    },
  ]);

  const onSubmit = handleSubmit((values) => {
    show.value = false;
    emit("create", values);
    resetForm();
  });
</script>

<style scoped></style>
