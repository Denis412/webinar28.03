export function required(value) {
  return !!value || "Обязательное поле";
}

export function phone(value) {
  return /^[0-9]{10}$/.test(value) || "Неверный номер телефона";
}
