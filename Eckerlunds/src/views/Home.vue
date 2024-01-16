<template>
  <div class="home">
    <div
      class="default_page"
      :class="{
        'bg-image-1': currentImageIndex === 0,
        'bg-image-2': currentImageIndex === 1,
        'bg-image-3': currentImageIndex === 2,
        'bg-image-4': currentImageIndex === 3,
        'bg-image-5': currentImageIndex === 4,
        'bg-image-6': currentImageIndex === 5
      }"
    >
      <div class="card">
        <img src="@/assets/logo.png" class="logo" alt="ECKERLUNDS kläder logo" />
        <h1>Välkommen till ECKERLUNDS kläder</h1>
        <h2>Modehuset på Österlen</h2>
        <br />
        <OpeningHours />
        <br />
      </div>
    </div>
    <div class="content">
      <h1>Aktuellt</h1>
      <div class="items-container">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import OpeningHours from '@/components/OpeningHours.vue'

export default {
  components: {
    OpeningHours
  },
  data() {
    return {
      currentImageIndex: 0
    }
  },
  mounted() {
    setInterval(this.nextImage, 5000)
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % 6
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  color: black;
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
  min-height: 100vh;
  height: auto;
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

.card {
  width: 50%;
  height: auto;
  padding: 2%;
  border-radius: 15px;
  color: rgb(0, 0, 0);
  background: rgba(255, 255, 255, 0.4);
  position: absolute;
  z-index: 1; /* Place card on top of carousel */
  text-align: center;
}

.card h1 {
  margin-top: 4%;
}

.logo {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.content {
  text-align: center;
}

.items-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.item {
  width: 25%;
  max-width: 300px;
  height: 400px;
  margin: 4%;
  padding: 0;
  background-color: antiquewhite;
}

/* Additional styles for the h1 tag */
.content h1 {
  margin-top: 10%;
}

/* Background Images */
.default_page.bg-image-1 {
  background: url('@/assets/frontpage/1.jpg') center center/cover no-repeat;
}
.default_page.bg-image-2 {
  background: url('@/assets/frontpage/2.jpg') center center/cover no-repeat;
}
.default_page.bg-image-3 {
  background: url('@/assets/frontpage/3.jpg') center center/cover no-repeat;
}
.default_page.bg-image-4 {
  background: url('@/assets/frontpage/4.jpg') center center/cover no-repeat;
}
.default_page.bg-image-5 {
  background: url('@/assets/frontpage/5.jpg') center center/cover no-repeat;
}
.default_page.bg-image-6 {
  background: url('@/assets/frontpage/6.jpg') center center/cover no-repeat;
}
</style>
