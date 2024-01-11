<template>
  <div class="home">
    <div class="default_page" :style="backgroundStyle">
      <div class="card">
        <!-- Logo linked to the home page -->
        <router-link to="/">
          <img
            src="@/assets/logo.png"
            class="logo"
            alt="ECKERLUNDS kläder logo"
          />
        </router-link>

        <!-- Router view for dynamic content -->
        <router-view />

        <!-- Welcome message and additional information -->
        <h1>{{ msg }}</h1>
        <h2>Modehuset på Österlen</h2>
      </div>
    </div>
    <div class="content"></div>
    <h1>Aktuellt</h1>
  </div>
</template>

<script>
export default {
  name: 'landing_page',
  data() {
    return {
      msg: 'Välkommen till ECKERLUNDS kläder',
      backgrounds: [
        require('@/assets/frontpage/1.jpg'),
        require('@/assets/frontpage/2.jpg'),
        require('@/assets/frontpage/3.jpg'),
        require('@/assets/frontpage/4.jpg'),
        require('@/assets/frontpage/5.jpg'),
        require('@/assets/frontpage/6.jpg')
      ],
      currentBackgroundIndex: 0,
      intervalId: null
    };
  },
  computed: {
    currentBackground() {
      return this.backgrounds[this.currentBackgroundIndex];
    },
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.currentBackground})`,
        backgroundSize: 'cover', // or 'contain' based on your preference
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      };
    }
  },
  mounted() {
    // Change background every 5 seconds
    this.intervalId = setInterval(this.changeBackground, 5000);
  },
  beforeDestroy() {
    // Clear interval to prevent memory leaks
    clearInterval(this.intervalId);
  },
  methods: {
    changeBackground() {
      // Increment the background index, loop back to the first image if at the end
      this.currentBackgroundIndex =
        (this.currentBackgroundIndex + 1) % this.backgrounds.length;
    }
  }
};
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
  padding-top: 5%;
  padding-bottom: 5%;
  width: 100vw;
  height: 80vh;
  transition: background-image 0.5s ease; /* Optional: Add a smooth transition effect */
}
.card {
  width: 50%;
  height: 60%;
  margin-top: 5%;
  margin-bottom: auto;
  margin-right: auto;
  margin-left: auto;
  padding: 2%;
  border-radius: 15px;
  color: black;
  background: rgba(255, 255, 255, 0.5);
}
.logo {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
.content {
  color: #e8be8c;
}

/* Optional: Add styles for the link */
.router-link-active {
  /* Add styles for the active link state if needed */
}
</style>
