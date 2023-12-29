<template>
  <nav class="menu-bar">
    <ul>
      <li :class="{ 'active': activeTab === '/' }" @click="navigate('/')">Home</li>
      <li :class="{ 'active': activeTab === '/action' }" @click="navigate('/action')">Action</li>
    </ul>
    <div class="user-actions">
      <button v-if="!isLoggedIn" @click="signIn" class="btn">Sign In</button>
      <button v-if="isLoggedIn" @click="signOut" class="btn">Sign Out</button>
    </div>
  </nav>
</template>

<style scoped>


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
  text-decoration: none; /* Changed to 'none' */
  margin-right: 20px;
  cursor: pointer;
  transition: color 0.3s; /* Added transition for smooth color change */
}

.menu-bar li.active,
.menu-bar li:hover {
  color: #ffcc00;
  font-weight: bold;
  cursor: pointer;
}

.user-actions button {
  background-color: white;
  color: #149BFC;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; /* Added transition for smooth color change */
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

.btn-primary:hover {
  background-color: rgb(31, 116, 155);
  color: #333;
}


.menu-bar li.active {
  color: #ffcc00;
  font-weight: bold;
}
</style>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      activeTab: '/',
    };
  },
  methods: {
    navigate(page) {
      this.$router.push(page);
      console.log(`Navigating to ${page}`);
      this.activeTab = page;
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
