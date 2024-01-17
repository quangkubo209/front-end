<template>
  <div class="file-upload">
    <div class="file-upload__area">
      <div>
        <label for="file" class="file-upload-label">Select file</label>
        <input type="file" name="" id="file" accept=".xlsx" ref="fileInput" />
      </div>
      <button class="button-upload" @click="uploadFile">Upload file</button>
      <div class="flex-container">
        <h4 v-if="showDownloadButton === true">Invalid file, please download and check it</h4>
        <p v-else class="success-message">"File has been validated successfully. Mutation processing is handling!!!</p>        <button v-if="showDownloadButton === true" @click="downloadErrorFile" class="button-download">Download</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import * as XLSX from 'xlsx';

export default {
  name: "FileUpload",
  data() {
    return {
      lengthError: 0,
      showDownloadButton: false,
    };
  },
  methods: {
    async uploadFile() {
      const formData = new FormData();
      const fileInput = this.$refs.fileInput;

      formData.append("file", fileInput.files[0]);
      formData.append("name", "file name");
      try {
        const response = await axios.post('http://localhost:8080/api/userlist/validate/excel', formData);
        console.log("response.data: ", response.data);
        this.handleValidationResponse(response.data);
      } catch (error) {
        console.error('Error while uploading file:', error);
      }
    },

    handleValidationResponse(response) {
      this.statusError = response.statusError;
      if(response.statusError === true){
        this.errors = response.errors;
      }
      console.log(this.statusError);
      this.checkError();
      this.generateErrorFileContent();

    },
    generateErrorFileContent() {
        const errorData = {
          "lengthError": this.errors.length,
          error: this.errors.join(',')
        };
  
        return {
          "Total Errors: ": errorData.lengthError,
          "Error details": errorData.error,
        };
      },
    checkError() {
        if (this.statusError === true) {
          this.showDownloadButton = true;
          this.generateErrorFileContent();
          cons
        } else {
          this.showDownloadButton = false;
        }
      },

  downloadErrorFile() {
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

        const errorData = this.generateErrorFileContent();
        const worksheet = XLSX.utils.json_to_sheet([errorData]);
  
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Error Report');
  
        const blobBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([blobBuffer], {type: fileType})

        const a = document.createElement('a');
        const blobURL = URL.createObjectURL(blob);
        a.href = blobURL;
        a.download = 'errorFile.xlsx';
  
        document.body.appendChild(a);
        a.click();
  
        document.body.removeChild(a);
        URL.revokeObjectURL(blobURL);
      },

  },
};
</script>

<style scoped>
 .file-upload {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  
  .button-download {
    cursor: pointer;
  }
  
  .flex-container {
    display: flex;
    align-items: center; /* Căn giữa theo chiều dọc */
  }
  
  .flex-container h4 {
    color: red;
    margin-right: 10px;
  }
  
  .file-upload-label {
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .file-upload .file-upload__area {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 600px;
    max-width: 66.66%;
    min-height: 200px;
    border: 2px dashed #92b2e2;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .button-upload {
    border: none;
    border-radius: 2px;
    color: white;
    background-color: #3791be;
    display: inline-block;
    padding: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .button-upload:hover {
    background-color: #096999;
  }
  .success-message {
  color: rgb(102, 184, 102);
  font-weight: bold;
  margin-top: 10px;
}
</style>
