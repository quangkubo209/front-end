<!-- DefaultLayout.vue -->
<template>
  <div>
    <Header class="header" @navigate="navigate" />
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
  methods: {
    navigate(page) {
      this.$router.push(page);
    },
  },
};
</script>

<style>
.header{
  height: 8vh;
}
.body{
  background-color: rgba(241, 233, 233, 0.8); 
  height: 100%;
  margin-top: 10px;
  border-radius: 5px;
}
</style>
