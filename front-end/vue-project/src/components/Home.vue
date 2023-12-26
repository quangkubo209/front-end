<template>
  <div class="app">
    <!-- Menu Bar -->
    <nav class="menu-bar">
      <ul>
        <li @click="navigate('/home')">Home</li>
        <li @click="navigate('/action')">Action</li>
      </ul>
      <div class="user-actions">
        <button v-if="!isLoggedIn" @click="signIn" class="btn">Sign In</button>
        <button v-if="isLoggedIn" @click="signOut" class="btn">Sign Out</button>
      </div>
    </nav>

    <!-- Body Content -->
    <div class="content">
      <h1>Google ads api project hjkljsdjfljsklfgjsdkljgkljjslkfjklsdjfkllsjdklfsdjklfjdsjfdsdljflsdkfjsdojsjfljsdoifjdskjkl</h1>
      <button @click="addFile" class="btn btn-primary">Add File</button>
    </div>
  </div>
</template>

<style scoped>

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}

.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh; /* Set a minimum height to cover the entire viewport */
}

.menu-bar {
  width: 100%;
  background-color: #3791be;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-bar ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.menu-bar li {
  text-decoration: solid;
  margin-right: 20px;
  cursor: pointer;
}

.user-actions button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}

.content {
  width: 100%;
  background-color: white;
  margin-top: 10px;
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
  margin-top: 10px;
  background-color: #007bff;
  color: white;
}

</style>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    navigate(page) {
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
      console.log('Adding a file');
    },
  },
};
</script>
