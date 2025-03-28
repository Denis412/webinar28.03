<template>
  <div class="form-field__wrapper">
    <span class="form-field__label ellipsis">{{ label }}</span>

    <q-select outlined v-bind="$attrs" v-model="$model">
      <template #option="{ opt, selected, toggleOption }">
        <q-item
          class="form-select__option"
          :class="{ 'form-select__option--selected': selected }"
          clickable
          @click="toggleOption(opt)"
        >
          <slot name="optionContent" :opt="opt" :selected="selected">
            {{ opt.label }}
          </slot>
        </q-item>
      </template>
    </q-select>

    <span class="form-select__placeholder" :class="_placeholderClass">
      {{ placeholder }}
    </span>
  </div>
</template>

<script setup>
import { computed } from "vue";
defineOptions({
  name: "FormSelect",
  inheritAttrs: false,
});

const $props = defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const $model = defineModel("modelValue");

const _placeholderClass = computed(() => {
  return $props.placeholder && !$model.value
    ? "form-select__placeholder--active"
    : "";
});
</script>

<style scoped lang="scss">
.form-field__wrapper {
  &:has(.q-field__bottom) .form-select__placeholder {
    top: calc(50% - 20px);
    transform: none;
  }
}

.form-select__placeholder {
  user-select: none;
  display: none;
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 12px;
  color: var(--placeholder-color);
  transform: translateY(-50%);
}

.form-select__placeholder--active {
  display: inline-block;
}

.form-select__option {
  align-items: center;
  background-color: #f3edf7;
}

.form-select__option--selected {
  background-color: #e8def8;
}
</style>
