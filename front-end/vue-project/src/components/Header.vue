<template>
      <nav class="menu-bar">
        <ul>
          <li @click="navigate('/')">Home</li>
          <li @click="navigate('/action')">Action</li>
        </ul>
        <div class="user-actions">
          <button v-if="!isLoggedIn" @click="signIn" class="btn">Sign In</button>
          <button v-if="isLoggedIn" @click="signOut" class="btn">Sign Out</button>
        </div>
      </nav>
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
    font-weight: bold;
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
    background-color: white;
    color: #149BFC;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
  }

  .btn {
    padding: 10px 15px;
    border: none;
    cursor: pointer;
  }
  
  .btn-primary {
    margin-top: 10px;
    background-color: #3791be;
    color: white;
  }
  .menu-bar li.active,
  .menu-bar li:hover {
    color: #ffcc00; /* Change to the desired hover/active color */
    font-weight: bold; /* Make the text bold */
    cursor: pointer;
  }
  
  .user-actions button.btn-active,
  .user-actions button:hover {
    background-color: #ffcc00; /* Change to the desired hover/active background color */
    color: #333; /* Change to the desired hover/active text color */
  }
  
  .btn-primary:hover{
    background-color: rgb(31, 116, 155);
    color: #333
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
        console.log('Adding a file');
      },
    },
  };
  </script>
  