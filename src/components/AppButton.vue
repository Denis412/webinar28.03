<template>
  <q-btn flat no-caps class="app-button" :class="_rootClasses">
    <slot></slot>
  </q-btn>
</template>

<script setup>
import { computed } from "vue";

const $props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
});

const _rootClasses = computed(() => {
  return {
    "btn-primary": $props.type === "primary",
    "btn-secondary": $props.type === "secondary",
    "btn-flat": $props.type === "flat",
  };
});
</script>

<style scoped lang="scss">
.app-button {
  font-weight: bold;
  border-radius: 100px;
  padding: 10px 24px;
}

.btn-primary {
  color: #fff;
  background-color: var(--q-color-primary);
}

.btn-secondary {
  background-color: transparent;
  border: 1px solid var(--q-color-primary);
  color: var(--q-color-primary);
}

.btn-flat {
  background-color: transparent;
  border: none;
  color: var(--q-color-primary);
  padding: 10px 12px;
}
</style>
