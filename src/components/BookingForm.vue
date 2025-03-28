<template>
  <div class="booking-form">
    <h2 class="form-title">Бронирование коворкинга</h2>
    <p class="form-subtitle">Заполните форму, и мы скоро с вами свяжемся</p>

    <form @submit.prevent="handleSubmit">
      <FormSelect
        v-model="formData.tariff"
        label="Тариф"
        :rules="[required]"
        placeholder="Выберите тариф"
        :options="tariffOptions"
      >
        <template #optionContent="{ opt, selected }">
          <div class="booking-form__tariff-option">
            <q-icon v-if="selected" name="check" size="24px" />
            <div>
              <span class="block">{{ opt.label }}</span>
              <span class="block tariff-price">
                {{ opt.price }}₽/{{ opt.label.toLowerCase() }}
              </span>
            </div>
          </div>
        </template>
      </FormSelect>

      <FormSelect
        v-model="formData.zone"
        label="Зона"
        :rules="[required]"
        placeholder="Выберите зону"
        :options="zoneOptions"
      />

      <div class="form-row">
        <FormDateTimePicker
          v-model="formData.date"
          label="Дата визита"
          :rules="[required]"
          type="date"
          placeholder="--/--/--"
          class="form-col"
        />
        <FormDateTimePicker
          v-model="formData.time"
          label="Время"
          :rules="[required]"
          type="time"
          placeholder="00:00"
          class="form-col"
        />
      </div>

      <div class="form-divider"></div>

      <div class="form-row">
        <FormInput
          v-model="formData.firstName"
          label="Имя"
          :rules="[required]"
          placeholder="Введите имя"
          class="form-col"
        />
        <FormInput
          v-model="formData.lastName"
          label="Фамилия"
          :rules="[required]"
          placeholder="Введите имя"
          class="form-col"
        />
      </div>

      <FormInput
        v-model="formData.email"
        label="E-mail"
        :rules="[required]"
        type="email"
        placeholder="example@email.com"
      />

      <FormInput
        v-model="formData.phone"
        label="Телефон"
        :rules="[required]"
        type="tel"
        placeholder="+7 (___) ___-__-__"
        :mask="'+7 (###) ###-##-##'"
      />

      <FormInput
        v-model="formData.comment"
        label="Комментарий"
        :rules="[required]"
        type="textarea"
        autogrow
        placeholder="Укажите возможные пожелания"
      />

      <div class="form-actions">
        <app-button type="secondary"> Отменить </app-button>
        <app-button> Следующий этап </app-button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FormInput from "./FormInput.vue";
import FormSelect from "./FormSelect.vue";
import FormDateTimePicker from "./FormDateTimePicker.vue";
import AppButton from "./AppButton.vue";

import { required, phone } from "./rules";

const formData = ref({
  tariff: "",
  zone: "",
  date: "",
  time: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  comment: "",
});

const tariffOptions = [
  { value: "day", label: "День", price: 800 },
  { value: "month", label: "Неделя", price: 2400 },
  { value: "year", label: "Месяц", price: 6500 },
];

const zoneOptions = [
  { value: "open", label: "Открытая зона" },
  { value: "quiet", label: "Тихая зона" },
  { value: "meeting", label: "Переговорная" },
];

const handleSubmit = () => {
  console.log("Form submitted:", formData.value);
};

const handleCancel = () => {
  formData.value = {
    tariff: "",
    zone: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  };
};
</script>

<style scoped>
.booking-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

  & form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

.booking-form__tariff-option {
  display: flex;
  align-items: center;
  gap: 8px;
}

.form-divider {
  height: 0;
  border-top: 1px solid #cac4d0;
}

.form-title {
  font-size: 1.5rem;
  font-weight: 400;
}

.form-subtitle {
  color: #666;
  margin-bottom: 2rem;
}

.form-row {
  display: flex;
  width: 100%;
  gap: 1rem;

  & > * {
    width: 100%;
  }
}

.form-col {
  flex: 1;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.btn-cancel,
.btn-submit {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cancel {
  background: transparent;
  border: none;
  color: #666;
}

.btn-submit {
  background: #5d4e9c;
  border: none;
  color: white;
}

.btn-cancel:hover {
  color: #333;
}

.btn-submit:hover {
  background: #4a3d7d;
}

.tariff-price {
  color: #49454f;
}
</style>
