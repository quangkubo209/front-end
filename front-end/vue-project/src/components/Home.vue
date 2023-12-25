<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>
<style>
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #cfdde0;
  }

  header {
    background-color: rgb(48, 150, 197);
    color: #fff;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: space-between;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  nav ul li {
    margin: 0 15px;
  }

  nav a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }

  .auth-buttons {
    margin-top: 10px;
  }

  .auth-buttons button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #abbeb7;
    color: #fff;
    cursor: pointer;
    border: none;
  }

  .action-buttons {
    margin-top: 20px;
  }

  .action-buttons button {
    padding: 10px;
    background-color: #28a745;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  main {
    margin: 20px;
    padding: 10px;
    background-color: white;
  }
</style>


<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Action</a></li>
        </ul>
      </nav>
      <div class="auth-buttons">
        <button v-if="!loggedIn" @click="signIn">Sign In</button>
        <button v-if="!loggedIn" @click="signUp">Sign Up</button>
        <button v-if="loggedIn" @click="signOut">Sign Out</button>
      </div>
    </header>
    <main>
      <div class="action-buttons" >
        <button @click="addFile">Add File</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false
    };
  },
  methods: {
    signIn() {
      // Implement sign in logic
      this.loggedIn = true;
    },
    signUp() {
      // Implement sign up logic
      this.loggedIn = true;
    },
    signOut() {
      // Implement sign out logic
      this.loggedIn = false;
    },
    addFile() {
      // Implement add file logic
      console.log('Add File clicked');
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
