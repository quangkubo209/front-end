<template>
  <div class="action-page">
    <h1>Action Page</h1>
    <ul class="action-list">
      <li v-for="(item, index) in actionList" :key="index" class="action-item">
        <div class="file-info">
          <div class="file-name">{{ item.fileName }}</div>
          <div class="status-info">
            <div>Status Check File: {{ item.statusCheckFile }}</div>
            <div>Status Check System: {{ item.statusCheckSystem }}</div>
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
  { fileName: 'File name 1', statusCheckFile: 'OK', statusCheckSystem: 'OK' },
  { fileName: 'File name 2', statusCheckFile: 'OK', statusCheckSystem: 'Error' },
  { fileName: 'File name 3', statusCheckFile: 'Error', statusCheckSystem: 'OK' },
  // Add more items as needed
];

const viewDetail = (item) => {
  // Redirect to another page (replace with your actual route)
  // For example, redirect to /detail/:itemId
  const itemId = actionList.indexOf(item);
  router.push(`/detail/${itemId}`);
};
</script>

<style scoped>
.action-page {
  margin: 20px;
}

.action-list {
  list-style-type: none;
  padding: 0;
}

.action-item {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
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
  background-color: #007bff;
  color: white;
  border-radius: 3px;
}
</style>
