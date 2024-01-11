<!-- Footer.vue -->
<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-info">
        <div class="logo">
          <router-link to="/">
            <img
              src="@/assets/logo.png"
              class="logo"
              alt="ECKERLUNDS kläder logo"
            />
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

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
p {
  margin: 0;
  font-size: 12px;
}

.contact-link:hover {
  color: #ffd700; /* Change color on hover */
}
.footer {
  background-color: #7f4909;
  color: #fff;
  padding-left: 5%;
  padding-right: 5%;
  text-align: start;
}

.footer-content {
  display: flex;
  justify-content: space-around;
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
.logo {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>
