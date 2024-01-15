<template>
  <div class="content">
    <div class="carousel">
      <div class="carousel-inner">
        <div class="brands">
          <img src="@/assets/brands/male/barbour-logo.png" alt="" />
          <img src="@/assets/brands/male/boomerang-logo.png" alt="" />
          <img src="@/assets/brands/male/diesel-logo.png" alt="" />
          <img src="@/assets/brands/male/lacoste-logo.png" alt="" />
          <img src="@/assets/brands/male/lee-logo.png" alt="" />
          <img src="@/assets/brands/male/stenströms-logo.png" alt="" />
          <img src="@/assets/brands/male/superdry-ogo.png" alt="" />
        </div>
        <div class="brands">
          <img src="@/assets/brands/male/barbour-logo.png" alt="" />
          <img src="@/assets/brands/male/boomerang-logo.png" alt="" />
          <img src="@/assets/brands/male/diesel-logo.png" alt="" />
          <img src="@/assets/brands/male/lacoste-logo.png" alt="" />
          <img src="@/assets/brands/male/lee-logo.png" alt="" />
          <img src="@/assets/brands/male/stenströms-logo.png" alt="" />
          <img src="@/assets/brands/male/superdry-ogo.png" alt="" />
        </div>
      </div>

      <div class="carousel-inner reverse">
        <div class="brands">
          <img src="@/assets/brands/male/lee-logo.png" alt="" />
          <img src="@/assets/brands/male/stenströms-logo.png" alt="" />
          <img src="@/assets/brands/male/superdry-ogo.png" alt="" />
          <img src="@/assets/brands/male/barbour-logo.png" alt="" />
          <img src="@/assets/brands/male/boomerang-logo.png" alt="" />
          <img src="@/assets/brands/male/diesel-logo.png" alt="" />
          <img src="@/assets/brands/male/lacoste-logo.png" alt="" />
        </div>
        <div class="brands">
          <img src="@/assets/brands/male/lee-logo.png" alt="" />
          <img src="@/assets/brands/male/stenströms-logo.png" alt="" />
          <img src="@/assets/brands/male/superdry-ogo.png" alt="" />
          <img src="@/assets/brands/male/barbour-logo.png" alt="" />
          <img src="@/assets/brands/male/boomerang-logo.png" alt="" />
          <img src="@/assets/brands/male/diesel-logo.png" alt="" />
          <img src="@/assets/brands/male/lacoste-logo.png" alt="" />
        </div>
      </div>

      <div class="carousel-inner">
        <div class="brands">
          <img src="@/assets/brands/male/diesel-logo.png" alt="" />
          <img src="@/assets/brands/male/lacoste-logo.png" alt="" />
          <img src="@/assets/brands/male/superdry-ogo.png" alt="" />
          <img src="@/assets/brands/male/lee-logo.png" alt="" />
          <img src="@/assets/brands/male/stenströms-logo.png" alt="" />
          <img src="@/assets/brands/male/barbour-logo.png" alt="" />
          <img src="@/assets/brands/male/boomerang-logo.png" alt="" />
        </div>
        <div class="brands">
          <img src="@/assets/brands/male/diesel-logo.png" alt="" />
          <img src="@/assets/brands/male/lacoste-logo.png" alt="" />
          <img src="@/assets/brands/male/superdry-ogo.png" alt="" />
          <img src="@/assets/brands/male/barbour-logo.png" alt="" />
          <img src="@/assets/brands/male/lee-logo.png" alt="" />
          <img src="@/assets/brands/male/stenströms-logo.png" alt="" />
          <img src="@/assets/brands/male/boomerang-logo.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  color: #e8be8c;
  padding: 0;
  margin: 100px 0 60px 0;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
}

.carousel {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
}

.carousel-inner {
  margin: 0;
  width: max-content;
  display: flex;
  flex-wrap: nowrap;
  gap: 3em;
  animation: slide 85s linear infinite;
}

.carousel-inner.reverse {
  animation-direction: reverse;
  height: 100px;
}

.brands {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3em;
}

.brands img {
  width: 100px;
}

@keyframes slide {
  from {
    background-position: 0;
  }

  to {
    transform: translate(calc(-50% - 1.5em));
  }
}
</style>
