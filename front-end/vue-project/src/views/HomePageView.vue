<!-- DefaultLayout.vue -->
<template>
  <div>
    <Header @navigate="navigate" />
    <router-view></router-view>
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
