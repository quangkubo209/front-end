<!-- Dialog.vue -->

<template>
  <div v-if="dialogVisible" class="dialog-overlay" @click="closeDialog">
    <div class="dialog-box">
      <h2>Detail</h2>
      <p>{{ detail }}</p>
      <button @click="closeDialog" class="btn btn-close">Close</button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const { detail, dialogVisible } = defineProps('detail', 'dialogVisible');

const closeDialog = () => {
  dialogVisible.value = false;
};
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-box {
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.btn-close {
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #ccc;
  border: none;
  cursor: pointer;
}
</style>
