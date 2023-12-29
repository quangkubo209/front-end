<!-- <template>
  <div class="content">
    <h1>Google ads api project</h1>
    <div class="add-display">
      <button @click="addFile" class="btn btn-primary">New File</button>
      <input type="file" ref="fileInput" style="display: none" @change="handleFileChange" accept=".xlsx" />
      <h3 v-if="!fileChose" class="file-info">No file chosen</h3>
      <div class="display-file" v-else>
        <h4 class="file-info">
        File chosen: {{ selectedFileName }}
      </h4>
      <img src="C:\Users\QuangNN\Downloads\delete-svgrepo-com.svg" alt="Delete" class="trash-icon" @click="deleteFile" />
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<style scoped>

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: rgba(241, 233, 233, 0.8); 
}

.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}

.add-display {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.display-file{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.trash-icon{
  height:40px;
  width:40px;
}

.trash-icon:hover {
  cursor: pointer;

}
.file-info {
  margin: 10px 0; 
  
}

.content {
  width: 100%;
  height: 100vh;
  background-color: rgba(241, 233, 233, 0.8); 
  padding: 20px;
  border: 1px solid #ccc;
  flex-grow: 1;
}

.btn {
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

.btn-primary {
  border-radius: 3px;
  background-color: #149BFC;
  color: white;
  width: fit-content;
}

.btn-primary:hover {
  background-color: rgb(42, 120, 172);
  font-weight: bold;
}

</style>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      fileChose: false,
      selectedFileName: '',
    };
  },
  methods: {
    navigate(page) {
      this.$router.push(page);
      console.log(`Navigating to ${page}`);
    },
    signIn() {
      this.isLoggedIn = true;
      console.log('User signed in');
    },
    signOut() {
      this.isLoggedIn = false;
      console.log('User signed out');
    },
    addFile() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileChose = true;
        this.selectedFileName = file.name;
        console.log('File selected:', file.name);
      }
    },
deleteFile() {
  if (confirm("Are you sure you want to delete the file?")) {
    this.fileChose = false;
    this.selectedFileName = '';

    const fileList = [fileChose]; 

    const fileIndex = fileList.findIndex(file => file.name === this.selectedFileName);
    if (fileIndex !== -1) {
      fileList.splice(fileIndex, 1);
      console.log('File deleted');
    } else {
      console.error('File not found in the list');
    }
  }
}

  },
};
</script> -->



<template>
  <div>
    <FileUpload />
  </div>
</template>

<script>
import FileUpload from "@/components/FileUpload.vue";

export default {
  name: "App",
  components: {
    FileUpload,
  },
};
</script>