<template>
  <nav class="navbar">
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Hem</router-link>
        <router-link to="/history" class="navbar-item">Historia</router-link>
        <router-link to="/male" class="navbar-item">För Honom</router-link>
        <router-link to="/female" class="navbar-item">För Henne</router-link>
        <router-link to="/contact" class="navbar-item">Kontakt</router-link>
        <!-- Add more navigation links as needed -->
      </div>
      <div class="navbar-end">
        <!-- Add additional elements for the right side of the navbar -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style scoped>
/* Add your custom styles here */
body {
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
}

.navbar {
  position: fixed;
  top: 0;
  left: 0; /* Ensure it starts from the left edge */
  width: 100%;
  background-color: #7f4909;
  padding: 1rem;
  color: white;
  z-index: 1000;
}

.navbar-start {
  /* Optional: Add styles for the navbar-start */
}

.navbar-item {
  color: white;
  margin-right: 15px; /* Add space between navbar items */
  text-decoration: none; /* Remove underline from links */
  transition: color 0.3s ease; /* Add smooth color transition on hover */

  /* Optional: Add more styling for a better visual experience */
}

.navbar-item:hover {
  color: #ffd700; /* Change color on hover */
}

/* Add more styles as needed */
</style>
