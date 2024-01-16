<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
import Home from './views/Home.vue'
import History from './views/History.vue'
import Male from './views/Male.vue'
import Female from './views/Female.vue'
import Contact from './views/Contact.vue'
import OpeningHours from './components/OpeningHours.vue'
import ContactInfo from './components/ContactInfo.vue'
import { RiFacebookBoxFill } from "oh-vue-icons/icons";

export default {
  components: {
    Home,
    History,
    Male,
    Female,
    Contact,
    OpeningHours,
    ContactInfo
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
        <OpeningHours />
        <br />
        <p>Ring gärna till butiken under öppettid, för snabbast svar.</p>
        <br />
      </div>
      <div class="contact-us">
        <router-link to="/contact" class="contact-link">
          <h3>Kontakta oss</h3>
        </router-link>
        <ContactInfo />
      </div>
      <div class="social-media">
        <h3>Sociala medier</h3>
        <div class="social-media-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="white" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z"/></svg>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="white" d="M603.575 510.854c0-54.044-44.172-98.02-98.463-98.02c-54.285 0-98.455 43.977-98.455 98.02c0 54.058 44.17 98.026 98.455 98.026c54.291 0 98.463-43.968 98.463-98.026M749.855.602H250.142C112.465.602.456 112.124.456 249.199v69.266h367.413c38.769-27.496 86.118-43.739 137.243-43.739c51.124 0 98.48 16.243 137.251 43.739H999.54v-69.266C999.54 112.123 887.531.602 749.855.602m101.12 236.435c0 15.191-12.48 27.622-27.743 27.622h-85.72c-15.261 0-27.743-12.431-27.743-27.622v-85.352c0-15.19 12.481-27.622 27.743-27.622h85.72c15.262 0 27.743 12.43 27.743 27.622zM742.287 510.854c0 130.215-106.402 236.133-237.176 236.133c-130.778 0-237.17-105.918-237.17-236.133c0-35.848 8.11-69.845 22.532-100.318H.456v340.263c0 137.085 112.009 248.597 249.686 248.597h499.714c137.676 0 249.685-111.513 249.685-248.597V410.536H719.755c14.422 30.473 22.532 64.47 22.532 100.318"/></svg>
        </a>
        </div>
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
  font-size: 16px;
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

.social-media-icons {
    width: 25%;
    height: 10%;
    display: flex;
    flex-wrap: wrap;
  }

.social-media-icons a {
    width: 100%;
    height: 100%;
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

  .footer h1, h2, h3, strong{
    font-weight: bold;
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

  .social-media-icons a svg {
    width: 50%;
    height: 100%;
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
