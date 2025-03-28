<template>
  <div class="form-field__wrapper">
    <span class="form-field__label ellipsis">{{ label }}</span>

    <q-input
      v-model="$model"
      :mask="type === 'date' ? 'date' : 'time'"
      :rules="rules"
      :placeholder="placeholder"
      outlined
    >
      <template v-slot:append>
        <q-icon
          :name="type === 'date' ? 'event' : 'access_time'"
          class="cursor-pointer"
        >
          <q-popup-proxy
            v-model="_showPicker"
            :offset="[50, 10]"
            transition-show="scale"
            transition-hide="scale"
          >
            <component
              :is="type === 'date' ? QDate : QTime"
              v-model="$model"
              :mask="type === 'date' ? 'YYYY/MM/DD' : 'HH:mm'"
              :format24h="type === 'time'"
              :class="type === 'date' ? 'form-date-picker' : 'form-time-picker'"
            >
              <div class="row justify-end">
                <app-button
                  label="Отменить"
                  type="flat"
                  @click="_showPicker = false"
                />
                <app-button
                  label="Сохранить"
                  type="flat"
                  @click="onSaveDateOrTime"
                />
              </div>
            </component>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script setup>
import { QDate, QTime } from "quasar";
import { ref } from "vue";

import AppButton from "./AppButton.vue";

defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "date",
  },
  rules: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const $model = defineModel({ type: String, required: true });
const _showPicker = ref(false);

function onSaveDateOrTime() {
  _showPicker.value = false;
}
</script>

<style scoped lang="scss">
.form-field {
  margin-bottom: 1rem;
}

.form-date-picker,
.form-time-picker {
  border-radius: 28px;
}

:global(.q-menu:has(.form-date-picker)),
:global(.q-menu:has(.form-time-picker)) {
  border-radius: 28px;
}

.form-date-picker {
  background-color: #ece6f0;

  :deep(.q-date__header) {
    background-color: #ece6f0;
    color: #49454f;
    padding: 16px 12px 16px 24px;
  }

  :deep(.q-date__view) {
    padding: 16px 12px 16px 16px;
  }

  :deep(.q-date__actions) {
    padding-right: 12px;
  }
}

.form-time-picker {
  background-color: #ece6f0;
  width: 100%;

  :deep(.q-time__header) {
    background-color: #ece6f0;
    color: #49454f;
    padding-top: 24px;
    padding-inline: 36px;

    .q-time__header-label {
      font-size: 80px;
    }

    .q-time__link {
      padding-inline: 16px;
      border-radius: 8px;
      color: #1d1b20;
      background-color: #f7f2fa;
      opacity: 1;
    }

    .q-time__link--active {
      color: #4f378a;
      background-color: #eaddff;
    }
  }

  :deep(.q-time__container-child) {
    color: #1d1b20;
    opacity: 1;
    background: #f7f2fa;
  }
}
</style>
