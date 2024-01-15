<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
import Home from './views/Home.vue'
import History from './views/History.vue'
import Male from './views/Male.vue'
import Female from './views/Female.vue'
import Contact from './views/Contact.vue'

export default {
  components: {
    Home,
    History,
    Male,
    Female,
    Contact
  }
}
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Hem</router-link>
          <router-link to="/history" class="navbar-item">Historia</router-link>
          <router-link to="/male" class="navbar-item">För Honom</router-link>
          <router-link to="/female" class="navbar-item">För Henne</router-link>
          <router-link to="/contact" class="navbar-item">Kontakt</router-link>
        </div>
        <div class="navbar-end"></div>
      </div>
    </nav>
  </header>

  <RouterView />

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-info">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/logo.png" class="logo" alt="ECKERLUNDS kläder logo" />
          </router-link>
        </div>
        <br />
        <p><strong>Öppettider</strong></p>
        <p>vardagar 09:00-18:00</p>
        <p>lördagar 09:00-14:00</p>
        <p>(lördagar Juni - Augusti 09:00-13:00)</p>
        <br />
        <p>Ring gärna till butiken under öppettid, för snabbast svar.</p>
        <br />
        <p>Malmövägen 1<br />273 35 Tomelilla<br />Sverige</p>
      </div>
      <div class="contact-us">
        <router-link to="/contact" class="contact-link">
          <h3>Kontakta oss</h3>
        </router-link>
        <p><strong>Kontakt</strong></p>
        <p>Tel: 0417 - 10321</p>
        <p>E-post: info@eckerlunds.se</p>
      </div>
      <div class="social-media">
        <h3>Sociala medier</h3>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.logo {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
.navbar {
  position: fixed;
  top: -2rem;
  left: 0; /* Ensure it starts from the left edge */
  width: 100%;
  background-color: #7f4909;
  padding: 1rem;
  color: white;
  z-index: 1000;
}

.navbar-item {
  color: white;
  margin-right: 15px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar-item:hover {
  color: #ffd700;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

.footer {
  background-color: #7f4909;
  color: #fff;
  padding-left: 5%;
  padding-right: 5%;
  text-align: start;
  width: 100vw;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-info,
.contact-us,
.social-media {
  width: 25%;
  max-width: 300px;
  margin: 10px;
  padding: 0;
}

.contact-link {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  header {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    font-size: 1rem;
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  .footer {
    background-color: #7f4909;
    color: #fff;
    padding-left: 5%;
    padding-right: 5%;
    text-align: start;
    width: 100vw;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
  }

  .footer-info,
  .contact-us,
  .social-media {
    width: 25%;
    max-width: 300px;
    margin: 10px;
    padding: 0;
  }

  .contact-link {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
  }
}
</style>
