<!-- Layout.vue -->
<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from '@/layouts/Navbar.vue';
import Footer from '@/layouts/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
.content {
  margin-top: 0; /* Adjust the margin-top value based on your navbar height */
}
</style>
