<template>
  <v-modal :show="show" @close="emit('close')">
    <form class="form" @submit="onSubmit">
      <div class="inputs">
        <v-form-input
          v-for="(input, i) in inputs"
          :key="i"
          :type="input.type"
          :error="input.error"
          :placeholder="input.placeholder"
          :value="input.value"
          @input="emit('updateInput', { index: i, value: $event })"
        />
      </div>
      <button class="padding" type="submit">Создать</button>
    </form>
  </v-modal>
</template>

<script setup>
  import VModal from "@/components/UI/VModal.vue";
  import VFormInput from "@/components/UI/Form/VFormInput.vue";

  const emit = defineEmits({
    updateInput: null,
    close: null,
    submit: null,
  });

  const props = defineProps({
    inputs: {
      type: Array,
      required: true,
    },

    show: {
      type: Boolean,
      required: true,
    },
  });

  function onSubmit(e) {
    e.preventDefault();
    emit("submit");
  }
</script>

<style scoped>
  .form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
</style>
