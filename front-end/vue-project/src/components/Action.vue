<!-- YourMainComponent.vue -->

<template>
  <div class="action-page">
    <h1>Action Page</h1>
    <ul class="action-list">
      <li v-for="(item, index) in actionList" :key="index" class="action-item">
        <div class="file-info">
          <div class="file-name">{{ item.fileName }}</div>
          <div class="status-info">
            <label for="" style="margin-right: 5px;">Status error: </label>
            <div
              :class="{ 'error-status': item.status.toLowerCase() === 'true', 'ok-status': item.status.toLowerCase() === 'false' }"
            >
              {{ item.status }}
            </div>
          </div>
        </div>
        <div class="action-button">
          <template v-if="item.status === 'true'">
            <button @click="openDialog(item)" class="btn btn-primary">View Detail</button>
          </template>
        </div>
      </li>
    </ul>

    <Dialog :dialogVisible="dialogVisible" :detail="selectedItem.detail" @closeDialog="closeDialog" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Dialog from "./Dialog.vue"

const actionList = ref([]);
const dialogVisible = ref(false);
const selectedItem = ref({});

const openDialog = (item) => {
  selectedItem.value = item;
  dialogVisible.value = true;
};

const closeDialog = () => {
  dialogVisible.value = false;
};

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/action/actions');
    console.log('response: ', response.data);
    actionList.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

</script>

<style scoped>

.error-status {
  color: red; 
}

.ok-status {
  color: green;  
}

.action-page {
  height: 100vh;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

.action-list {
  list-style-type: none;
  padding: 0;
}

.action-item {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #aa2a2a;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}

.file-info {
  flex: 1;
}

.file-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.status-info {
  font-size: 0.9em;
  display: flex;
}

.action-button {
  margin-left: 15px;
}

.btn {
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background-color: #149BFC;
  color: white;
  border-radius: 3px;
}

.btn-primary:hover {
  background-color: rgb(42, 120, 172);
  font-weight: bold;
}
</style>
