<template>
  <q-page class="index-page">
    <BookingForm />
  </q-page>
</template>

<script setup>
import BookingForm from "src/components/BookingForm.vue";
</script>

<style scoped>
.index-page {
  min-height: 100vh;
  padding: 2rem;
  background-color: #f5f5f5;
}
</style>
