<template>
  <div class="action-page">
    <h1>Action Page</h1>
    <ul class="action-list">
      <li v-for="(item, index) in actionList" :key="index" class="action-item">
        <div class="file-info">
          <div class="file-name">{{ item.fileName }}</div>
          <div class="status-info">
            <label for="" style="margin-right: 5px;">Status:</label>
            <div
              :class="{ 'error-status': item.statusCheckSystem.toLowerCase() === 'error', 'ok-status': item.statusCheckSystem.toLowerCase() === 'success' }">
               {{ item.statusCheckSystem }}
            </div>
          </div>
        </div>
        <div class="action-button">
          <template v-if="item.statusCheckSystem === 'Error'">
            <button @click="viewDetail(item)" class="btn btn-primary">View Detail</button>
          </template>

        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const actionList = [
  { fileName: 'File name 1', statusCheckFile: 'SUCCESS', statusCheckSystem: 'SUCCESS' },
  { fileName: 'File name 2', statusCheckFile: 'SUCCESS', statusCheckSystem: 'Error' },
  { fileName: 'File name 3', statusCheckFile: 'Error', statusCheckSystem: 'SUCCESS' },
  { fileName: 'File name 3', statusCheckFile: 'Error', statusCheckSystem: 'SUCCESS' },
  { fileName: 'File name 3', statusCheckFile: 'Error', statusCheckSystem: 'Error' },
  // Add more items as needed
];

const viewDetail = (item) => {
  const itemId = actionList.indexOf(item);
  router.push(`/detail/${itemId}`);
};
</script>

<style scoped>

.error-status {
  color: red;  /* Màu đỏ cho trạng thái 'error' */
}

.ok-status {
  color: green;  /* Màu xanh cho trạng thái 'ok' */
}
.action-page {
  height: 100vh;
}

h1 {
  margin-left: 20px;
}

ul {
  margin-bottom: 20px;
}

.action-list {
  list-style-type: none;
  padding: 0;
}

.action-item {
  margin: 20px;
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
