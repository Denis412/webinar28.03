<template>
  <div class="form-field__wrapper">
    <span class="form-field__label ellipsis">{{ label }}</span>

    <q-input outlined v-bind="$attrs" v-model="$model" />
  </div>
</template>

<script setup>
import { computed } from "vue";

defineOptions({
  name: "FormInput",
  inheritAttrs: false,
});

const $props = defineProps({
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const $emit = defineEmits(["update:modelValue"]);

const $model = computed({
  get() {
    return $props.modelValue;
  },
  set(value) {
    $emit("update:modelValue", value);
  },
});
</script>

<style scoped lang="scss">
.form-field__wrapper {
  & :deep(.q-textarea) {
    .q-field__control {
      min-height: 115px;
    }
  }

  :deep(input),
  :deep(textarea) {
    font-family: "Roboto Regular";
    &::placeholder {
      height: auto !important;
      color: var(--placeholder-color);
    }
  }
}
</style>
