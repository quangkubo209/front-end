<template>
  <div class="action-page">
    <h1>Action Page</h1>
    <ul class="action-list">
      <li v-for="(item, index) in actionList" :key="index" class="action-item">
        <div class="file-info">
          <div class="file-name">{{ item.fileName }}</div>
          <div class="status-info">
            <label style="margin-right: 5px;">Status error: </label>
            <div
              :class="{ 'error-status': item.status.toLowerCase() === 'true', 'ok-status': item.status.toLowerCase() === 'false' }"
            >
              {{ item.status }}
            </div>
          </div>
          <div  >
              <span class="created-font">Created At: {{ formatDate(item.createdAt) }}</span>
            </div>


        </div>
        <div class="action-button" v-if="item.status === 'true'">
          <button @click="openDialog(item)" class="btn btn-primary">View Detail</button>
        </div>
      </li>
    </ul>

  <div v-if="dialogVisible == 1" class="dialog-overlay">
    <div class="dialog-box">
      <div class="dialog-header">
        <h2>View Detail Errors</h2>
        <button @click="closeDialog" class="btn btn-exit">×</button>
      </div>
      <div class="dialog-content">
        <p>{{ selectedItem.detail }}</p>
      </div>
    </div>
  </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const actionList = ref([]);
const dialogVisible = ref(0);
const selectedItem = ref({});

const openDialog = (item) => {
  selectedItem.value = item;
  dialogVisible.value = 1;
};

const closeDialog = () => {
  dialogVisible.value = 0;
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

onMounted(async () => {
  try {
    // const response = await axios.get('http://localhost:8080/api/action/actions');
    // console.log('response: ', response.data);
    // actionList.value = response.data;
    actionList.value = [
      { id: 1, fileName: "userlistInfo1", status: "true", detail: "nothing to say", createdAt: "2024-01-17T14:30:45.123Z" },
      { id: 2, fileName: "userlistInfo1", status: "false", createdAt: "2024-01-18T12:45:30.567Z" },
      { id: 3, fileName: "userlistInfo1", status: "true", detail: "Error from ruletype field", createdAt: "2024-01-19T08:15:20.999Z" },
    ];
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
.status-display {
  font-size: 0.9em;
  display: flex;
  flex-direction: row;
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

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(152, 142, 142, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-box {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 30%;
  /* Adjust the width as needed */
  height: 40%;
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}


.btn-exit {
  background: none;
  border: none;
  font-size: 25px;
  cursor: pointer;
}

.dialog-content {
  margin-top: 10px;
  color: #aa2a2a;
}
.created-font{
  font-size: small;
  color: brown;
  font-weight: 600;
}
</style>
