<template>
    <div class="file-upload">
        <div class="file-upload__area">
            <div>
                <label for="file" class="file-upload-label">Select file</label>
                <input type="file" name="" id="file" accept=".xlsx" />
            </div>
            <button class="button-upload" @click="uploadFile">Upload file</button>
            <div class="flex-container">
                <h5 v-if="showDownloadButton === true">Invalid file, please download and check it</h5>
                <button v-if="showDownloadButton === true" @click="downloadErrorFile" class="button-download">Download</button>
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    name: "FileUpload",
    data() {
        return {
            lengthError: 0,
            showDownloadButton: false,
        };
    },
    methods: {
        uploadFile() {
            const response = {
                "lengthError": 5,
                "name": "File name <= 250 , file extension phải là xlsx ",
                "precondition": "chỉ có 2 enum là enable và disable",
            };

            this.lengthError = response.lengthError;

            this.checkError();
        },
        downloadErrorFile() {
            const errorData = this.generateErrorFileContent();
            const ws = XLSX.json_to_sheet([errorData]);

            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Error Report');

            const blob = XLSX.write(wb, {bookType: 'xlsx', type: 'blob'});

            const a = document.createElement('a');
            const blobURL = URL.createObjectURL(blob);
            a.href = blobURL;
            a.download = 'errorFile.xlsx';

            document.body.appendChild(a);
            a.click();

            document.body.removeChild(a);
            URL.revokeObjectURL(blobURL);
        },
        checkError() {
            if (this.lengthError > 0) {
                // Hiển thị nút download
                this.showDownloadButton = true;
            } else {
                // Ẩn nút download
                this.showDownloadButton = false;
            }
        },
        generateErrorFileContent() {
            const errorData = {
                "lengthError": 5,
                "name": "File name <= 250 , file extension phải là xlsx ",
                "precondition": "chỉ có 2 enum là enable và disable",
            };

            return {
                "Total Errors: ": errorData.lengthError,
                ...errorData,
            };
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

.button-download{
    cursor: pointer;
}
.flex-container {
  display: flex;
  align-items: center; /* Căn giữa theo chiều dọc */
}

.flex-container h5{
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
    display: inline-blocl;
    padding: 5px;
    cursor: pointer;
    margin-top: 10px;
}

.button-upload:hover {
    background-color: #096999;
}
</style>

