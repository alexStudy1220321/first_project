<template>
  <div class="w-full">
    <h4>{{ title }}</h4>
    <input
      class="w-full padding"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="emit('input', $event.target.value)"
    />
  </div>
</template>

<script setup>
  import { computed } from "vue";

  const emit = defineEmits({
    input: null,
  });

  const props = defineProps({
    value: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      default: "text",
    },

    placeholder: {
      type: String,
      default: "",
    },

    error: {
      type: String,
    },
  });

  const title = computed(() => {
    if (props.error === undefined && props.value !== "") {
      return "Поле заполнено корректно";
    }

    if (props.error) {
      return props.error;
    }

    return props.placeholder;
  });
</script>

<style scoped></style>
