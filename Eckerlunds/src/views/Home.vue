<template>
  <div class="home">
    <div class="default_page">
      <div class="carousel">
        <img
          :src="carouselImages[currentImageIndex]"
          :alt="`Image ${currentImageIndex + 1}`"
          class="fade"
        />
      </div>
      <div class="card">
        <img src="@/assets/logo.png" class="logo" alt="ECKERLUNDS kläder logo" />
        <h1>Välkommen till ECKERLUNDS kläder</h1>
        <h2>Modehuset på Österlen</h2>
      </div>
    </div>
    <div class="content">
      <h1>Aktuellt</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselImages: [
        'src/assets/frontpage/1.jpg',
        'src/assets/frontpage/2.jpg',
        'src/assets/frontpage/3.jpg',
        'src/assets/frontpage/4.jpg',
        'src/assets/frontpage/5.jpg',
        'src/assets/frontpage/6.jpg'
      ],
      currentImageIndex: 0
    }
  },
  mounted() {
    setInterval(this.nextImage, 5000)
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.home {
  width: 100%;
}

.default_page {
  margin-top: 5%;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Added for z-index to work */
}

.carousel {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 1;
  transition: 1s ease-in-out;
}

.card {
  width: 50%;
  height: 60%;
  padding: 2%;
  border-radius: 15px;
  color: rgb(0, 0, 0);
  background: rgba(255, 255, 255, 0.4);
  position: absolute;
  z-index: 1; /* Place card on top of carousel */
  text-align: center;
}

.logo {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.content {
  color: #e8be8c;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 60px;
}
</style>
